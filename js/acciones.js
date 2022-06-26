function accionesTurno() {
    turnoComprar();
    habilitarVentaPropiedadAJugador();
    const btnAccion = document.getElementById("btnAcciones" + turno.id);
    btnAccion.disabled = true;
    if(turno.propiedades.length !== 0){
        if(turno.gruposCasillas.length !== 0){
            turno.gruposCasillas.forEach(grupo=>{
                if(turno.calcularMayorCasas(grupo) === 0){
                    btnAccion.disabled = false;
                }
                grupo.casillas.forEach(casilla=>{
                    if(casilla.tipo === "propiedad"){
                        if(turno.dinero > casilla.precioCasa && casilla.hoteles !== 1){
                            btnAccion.disabled = false;
                        }
                    }

                });
            });
        }
        turno.propiedades.forEach(propiedad=>{
            if(propiedad.tipo === "propiedad"){
                if(propiedad.grupo.propietario === null){
                    btnAccion.disabled = false;
                }
            } else{
                btnAccion.disabled = false;
            }
        });

    }
}
function volver() {
    const btnCompCasas = document.getElementById("btnComprarCasas");
    const btnVentaJug = document.getElementById("btnVentaJug");
    const flecha = document.getElementById("btn-flecha");
    btnVentaJug.classList.remove("mover-izquierda");
    btnVentaJug.classList.remove("transparente");
    btnCompCasas.classList.remove("mover-izquierda");
    btnCompCasas.classList.remove("invisible");
    flecha.classList.add("transparente");
    flecha.classList.add("mover-izquierda");

    turno.propiedades.forEach(cas=> {
        const casillaGrupo = document.getElementById(cas.id);
        casillaGrupo.classList.remove("pinchable");
        casillaGrupo.classList.remove("seleccionable");
        casillaGrupo.removeEventListener("click", comprarCasa);
        casillaGrupo.removeEventListener("click", venderProp);
    });
}
function cerrar() {
    volver();

    const acciones = document.getElementById("acciones");
    acciones.classList.add("oculto");
    const btnFin = document.getElementById("btnFinTurno");
    btnFin.disabled = false;
    const tnombre = document.getElementById("titulo-nombre");
    tnombre.classList.remove("titulo-nombre" + turno.id);
    const sdinero = document.getElementById("sdinero");
    tnombre.innerHTML = "";
    sdinero.innerHTML = "";

    const btnCompCasas = document.getElementById("btnComprarCasas");
    btnCompCasas.disabled = true;

    const btnVenta = document.getElementById("btnVentaJug");
    btnVenta.disabled = true;

    accionesTurno();

}
function modoAcciones() {
    const acciones = document.getElementById("acciones");
    acciones.classList.remove("oculto");
    const btnFin = document.getElementById("btnFinTurno");
    btnFin.disabled = true;
    const tnombre = document.getElementById("titulo-nombre");
    tnombre.classList.add("titulo-nombre" + turno.id);
    const sdinero = document.getElementById("sdinero");
    tnombre.innerHTML = turno.nombre;
    sdinero.innerHTML = turno.dinero;

}
