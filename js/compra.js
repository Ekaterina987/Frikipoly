/* FUNCIÓN QUE SE EJECUTA AL COMPRAR UNA PROPIEDAD */
async function comprar(){
    /* CONFIRMA LA COMPRA DE LA CASILLA */
    async function asyncConfirmacion() {
        try {
            await popUpConfirm("¿Quieres comprar " + casiFinal.nombre + "?");
            await compPropiedad();
        } catch (error) {
        }
    }
    await asyncConfirmacion();
    async function compPropiedad(){
        /* SE COMPRA LA PROPIEDAD, ESTA SE AÑADE A LAS PROPIEDADES DEL JUGADOR, Y SE ACTUALIZAN LOS GRUPOS DE PROPIEDADES
        * PARA ESTABLECER QUÉ JUGADORES POSEEN UN GRUPO COMPLETO */
        casiFinal.comprar(turno);
        turno.propiedades.push(casiFinal);
        casiFinal.grupo.getPropietario();

        /* SE MUESTRA VISUALMENTE EL PROPIETARIO DE LA CASILLA */
        const casilla = document.getElementById(casiFinal.id);
        casilla.classList.add("casillaJugador" + turno.id);

        /* SE ACTUALIZA LA CANTIDAD DE DINERO DEL JUGADOR QUE SE MUESTRA POR PANTALLA */
        actualizarDinero(turno);

        /* SE DESHABILITA LA OPCIÓN DE COMPRAR LA PROPIEDAD */
        const btnComprar = document.getElementById("btnComprar" + turno.id);
        btnComprar.disabled = true;

        /* SE MUESTRA UN MENSAJE INFORMATIVO */
        const mensaje = document.getElementById("mensaje");
        ocultar(mensaje);
        mensaje.innerHTML= turno.nombre + " ha comprado la casilla " + casiFinal.nombre;
        mostrar(mensaje);
        /* SE DESHABILITA LA OPCIÓN DE COMPRAR LA CASILLA */
        btnComprar.removeEventListener("click", comprar);
        /* SE DESHABILITA LA OPCIÓN DE COMPRAR UNA CASA EN OTRA CASILLA */
        const btnCompCasas = document.getElementById("btnComprarCasas" + turno.id);
        btnCompCasas.removeEventListener("click",comprarCasa);
        btnCompCasas.disabled = true;
        /* SE HABILITA LA OPCIÓN DE COMPRAR CASAS EN OTRAS CASILLAS SI SE PUEDE */
        turno.gruposCasillas.forEach(grupo=>{
            grupo.casillas.forEach(cas=>{
                habilitarComp(cas, turno);
            })
        });
        habilitarVentaPropiedadAJugador();

    }
}
/* FUNCIÓN QUE HABILITA EL BOTÓN DE COMPRAR CASAS Y HOTELES */
function habilitarCompCasas(){
    casi = tablero[this.id - 1];
    /* SE ELIMINAN LOS EVENT LISTENERS DEL BOTÓN DE COMPRAR CASAS ANTES DE PROCEDER */
    const btnCompCasas = document.getElementById("btnComprarCasas" + turno.id);
    btnCompCasas.removeEventListener("click", comprarCasa);
    /* SI CUMPLE LOS REQUISITOS PARA COMPRAR UNA CASA O UN HOTEL SE AÑADEN LOS EVENTOS CORRESPONDIENTES */
    if (turno.dinero>casi.precioCasa && casi.hoteles===0 && turno.calcularMenorCasas(casi.grupo) === (casi.casas + casi.hoteles)){
        btnCompCasas.disabled = false;
        if(casi.casas===4){
            btnCompCasas.innerHTML = "Comprar hotel";
        }
        btnCompCasas.addEventListener("click",comprarCasa);
    }
}
/* FUNCIÓN QUE COMPRUEBA LOS REQUISITOS DE LA CASILLA PARA HABILITAR LA COMPRA DE CASAS U HOTELES */
function habilitarComp(propiedad, jugador){
    if(propiedad.tipo==="propiedad"){
        if(jugador.calcularMenorCasas(propiedad.grupo) !== 5 && jugador.calcularMenorCasas(propiedad.grupo) === (propiedad.casas + propiedad.hoteles) && jugador.dinero>=propiedad.precioCasa){
            const casiHtml = document.getElementById(propiedad.id);
            casiHtml.addEventListener("click", habilitarCompCasas);
            casiHtml.classList.add("pinchable");
        }else{
            const casiHtml = document.getElementById(propiedad.id);
            casiHtml.removeEventListener("click", habilitarCompCasas);
            casiHtml.classList.remove("pinchable");
        }
    }
}
/* FUNCIÓN QUE SE EJECUTA AL PULSAR EL BOTÓN COMPRAR CASA */
async function comprarCasa(){
    var texto = "";
    /* COMPRUEBA SI ES UNA CASA O UN HOTEL */
    if(casi.casas<4){
        texto = "¿Quieres comprar una casa en " + casi.nombre + "?";
    }else{
        texto = "¿Quieres comprar un hotel en " + casi.nombre + "?";
    }
    /* CONFIRMACIÓN DE LA COMPRA DE LA CASA */
    async function asyncCasa() {
        try {
            await popUpConfirm(texto);
            await compCasa();
        } catch (error) {
        }
    }
    await asyncCasa();
    /* COMPRA DE LA CASA */
    async function compCasa(){
        /* SE RESTA EL PRECIO DE LA CASA AL JUGADOR */
        turno.dinero -= casi.precioCasa;
        /* SE MUESTRA UN MENSAJE INFORMATIVO DEPENDIENDO DE SI ES CASA U HOTEL Y SE MUESTRAN LOS ICONOS DE CASAS Y/O HOTELES */
        const mensaje = document.getElementById("mensaje");
        await ocultar(mensaje);
        if(casi.casas<4){
            casi.casas++;
            mensaje.innerHTML = turno.nombre + " ha comprado una casa en " + casi.nombre;
            let idCas = casi.casas;
            mostrarCasa("div-" + casi.id + "-" + idCas);
        }else{
            casi.hoteles++;
            mensaje.innerHTML = turno.nombre + " ha comprado un hotel en " + casi.nombre;
            let idHot = casi.hoteles;
            mostrarHotel("div-" + casi.id + "-" + idHot);
            ocultarCasas("div-" + casi.id);
        }
        mostrar(mensaje);

        /* SE ACTUALIZA EL DINERO DEL JUGADOR POR PANTALLA */
        actualizarDinero(turno);
        /* SE DESHABILITA LA OPCIÓN DE COMPRAR CASAS EN LA CASILLA */
        const casilla = document.getElementById(casi.id);
        casilla.classList.remove("pinchable");
        casilla.removeEventListener("click", habilitarCompCasas);
        /* SE REESTABLECE EL TEXTO DEL BOTÓN DE COMPRAR CASAS Y SE DESHABILITA */
        const btnCompCasas = document.getElementById("btnComprarCasas" + turno.id);
        btnCompCasas.innerHTML = "Comprar casa";
        btnCompCasas.disabled = true;
        btnCompCasas.removeEventListener("click", comprarCasa);
        /* SE QUITA EL ESTILO DEL CURSOR EN LAS CASILLAS DEL MISMO GRUPO */
        casi.grupo.casillas.forEach(cas=>{
            const casilla = document.getElementById(cas.id);
            casilla.classList.remove("pinchable");
        });
        /* SE HABILITA O NO LA COMPRA DE CASAS EN LAS CASILLAS DEL GRUPO */
        casi.grupo.casillas.forEach(cas=>{
            habilitarComp(cas, turno);
        });
        /* EN CASO DE QUE SE PUDIESE COMPRAR UNA PROPIEDAD A LA VEZ QUE COMPRAR CASAS SE COMPRUEBA SI SE SIGUE PUDIENDO COMPRAR ESA PROPIEDAD, Y EN
        * CASO DE QUE NO SE DESHABILITA LA OPCIÓN */
        if(tablero[turno.posicion].tipo === "propiedad" || tablero[turno.posicion].tipo === "sala-comun" || tablero[turno.posicion].tipo === "compania"){
            if(turno.dinero<tablero[turno.posicion].precio){
                const btnComprar = document.getElementById("btnComprar" + turno.id);
                btnComprar.disabled = true;
            }
        }
    }

}

/* FUNCIÓN QUE MUESTRA EN EL TABLERO LA CASA COMPRADA */
function mostrarCasa(id){
    const casa = document.getElementById(id);
    casa.classList.remove("hotel");
    casa.classList.add("casita");
    casa.classList.remove("oculto");
}
/* FUNCIÓN QUE MUESTRA EN EL TABLERO EL HOTEL COMPRADO */
function mostrarHotel(id){
    const casa = document.getElementById(id);
    casa.classList.remove("casita");
    casa.classList.add("hotel");
    casa.classList.remove("oculto");
}
/* FUNCION PARA OCULTAR LAS CASAS */
function ocultarCasas(id){
    var contador = 2;
    while (contador<=4){
        const casa = document.getElementById(id +"-"+ contador);
        casa.classList.add("oculto");
        contador++;
    }
}