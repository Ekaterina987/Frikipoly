/* FUNCIÓN QUE SE EJECUTA AL FINALIZAR EL TURNO DE UN JUGADOR */
async function finalizar(){
    const btnAccion = document.getElementById("btnAcciones" + turno.id);
    btnAccion.disabled = true;
    /* SE QUITA EL SUBRAYADO AL JUGADOR */
    const nombre = document.getElementById("tnombre" + turno.id);
    nombre.classList.remove("subrayado-after");
    /* SE DESHABILITA EL BOTÓN DE COMPRAR PROPIEDADES */
    const btnComprar = document.getElementById("btnComprar" + turno.id);
    btnComprar.disabled = true;
    btnComprar.removeEventListener("click", comprar);
    /* SE OCULTA EL MENSAJE DE DEUDA */
    const txtDeuda = document.getElementById("txt-deuda" + turno.id);
    txtDeuda.classList.add("oculto");
    /* SE ESTABLECE EL PROPIETARIO DE LA CASILLA A NULO*/
    propietario = null;

    /* SE DESHABILITA EL BOTÓN DE COMPRAR CASAS */
    /*const btnCompCasas = document.getElementById("btnComprarCasas" + turno.id);
    btnCompCasas.disabled = true;
    btnCompCasas.removeEventListener("click",comprarCasa);*/

    /*1234*/
    /* SE DESHABILITA LA POSIBILIDAD DE PINCHAR EN LAS CASILLAS */
    turno.gruposCasillas.forEach(grupo=>{
        grupo.casillas.forEach(cas=>{
            const casillaHtml = document.getElementById(cas.id);
            casillaHtml.classList.remove("pinchable");
            casillaHtml.removeEventListener("click", comprarCasa);
        })
    });

    /* SE BORRA EL MENSAJE INFORMATIVO */
    let mensaje = document.getElementById("mensaje");
    mensaje.classList.add("transparente");

    let indiceTurno = jugadoresEnPie.indexOf(turno) + 1;

    /*const btnVenta = document.getElementById("btnVentaJug" + turno.id);
    btnVenta.disabled = true;*/
    /* SE ESTABLECE EL TURNO AL SIGUIENTE JUGADOR */
    turno = jugadoresEnPie[indiceTurno % jugadoresEnPie.length];
    /* SE MUESTRA LA ANIMACIÓN DEL SUBRAYADO DEL JUGADOR */
    animIniciar(turno);
    /* SE DA PASO AL TURNO DEL JUGADOR */
    turnoJugador();
}