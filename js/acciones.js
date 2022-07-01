function modoAcciones() {
    const acciones = document.getElementById("acciones");
    acciones.classList.remove("invisible");
    acciones.classList.remove("transparente");
    const btnCompCasas = document.getElementById("btnComprarCasas");
    const btnVentaJug = document.getElementById("btnVentaJug");
    btnCompCasas.classList.remove("mover-derecha");
    btnCompCasas.classList.remove("transparente");
    btnVentaJug.classList.remove("mover-derecha");
    btnVentaJug.classList.remove("transparente");
    const btnFin = document.getElementById("btnFinTurno");
    btnFin.disabled = true;
    const tnombre = document.getElementById("titulo-nombre");
    tnombre.classList.add("titulo-nombre" + turno.id);
    tnombre.classList.remove("mover-derecha");
    tnombre.classList.remove("transparente");
    const galeones = document.getElementById("galeones");
    galeones.classList.remove("mover-derecha");
    galeones.classList.remove("transparente");
    const sdinero = document.getElementById("sdinero");
    tnombre.innerHTML = turno.nombre;
    sdinero.innerHTML = turno.dinero;
}

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
async function cerrar() {
    volver();

    const acciones = document.getElementById("acciones");
    const btnFin = document.getElementById("btnFinTurno");

    const tnombre = document.getElementById("titulo-nombre");

    const sdinero = document.getElementById("sdinero");

    const btnCompCasas = document.getElementById("btnComprarCasas");

    const btnVenta = document.getElementById("btnVentaJug");

    const galeones = document.getElementById("galeones");
    await ocultarBotones();

    acciones.classList.add("invisible");

    function ocultarBotones(){
        return new Promise(resolve => {
            btnCompCasas.classList.add("mover-derecha");
            btnCompCasas.classList.add("transparente");
            btnVenta.classList.add("mover-derecha");
            btnVenta.classList.add("transparente");

            tnombre.classList.add("mover-derecha");
            tnombre.classList.add("transparente");

            galeones.classList.add("mover-derecha");
            galeones.classList.add("transparente");
            ocultar(acciones);
            setTimeout(()=>{
                resolve();
            }, 1000);
        })
    }
    tnombre.classList.remove("titulo-nombre" + turno.id);
    tnombre.innerHTML = "";
    sdinero.innerHTML = "";
    btnFin.disabled = false;
    btnCompCasas.disabled = true;
    btnVenta.disabled = true;
    accionesTurno();

}

