/* SE HABILITA LA SELECCIÓN DE UNA CASILLA PARA SU VENTA O LA VENTA DE SUS CASAS/HOTELES */
function habilitarClickCasillas(){
    /* PARA CADA UNA DE LAS PROPIEDADES */
    turno.propiedades.forEach(propiedad=>{
        const casPropiedad = document.getElementById(propiedad.id);
        /* SE COMPRUEBA SU TIPO */
        if(propiedad.tipo==="propiedad"){
            /* SI LA PROPIEDAD NO TIENE CASAS Y EL JUGADOR NO TIENE CASAS EN LAS PROPIEDADES SE PUEDE VENDER LA CASILLA */
            if(propiedad.casas===0 && turno.calcularMayorCasas(propiedad.grupo) === 0 && !turno.comprobarCasas()){
                casPropiedad.classList.add("pinchable");
                casPropiedad.addEventListener("click", habilitarVentaCasillas);
                /* SI LA PROPIEDAD TIENE CASAS SE PUEDEN VENDER ESTAS*/
            }else if (turno.calcularMayorCasas(propiedad.grupo) !== 0 && turno.calcularMayorCasas(propiedad.grupo) === (propiedad.casas + propiedad.hoteles)){
                casPropiedad.classList.add("pinchable");
                casPropiedad.addEventListener("click", habilitarVentaCasas);
            }
        }else{
            /* SI EL JUGADOR NO TIENE CASAS EN OTRAS PROPIEDADES SE PUEDE VENDER LA CASILLA */
            if(!turno.comprobarCasas()) {
                casPropiedad.addEventListener("click", habilitarVentaCasillas);
                casPropiedad.classList.add("pinchable");
            }
        }
    })
}
function habilitarVentaPropiedadAJugador(){
    const btnVenta = document.getElementById("btnVentaJug");
    btnVenta.disabled = true;
    if(turno.propiedades.length > 0){
        if(turno.gruposCasillas.length> 0) {
            turno.gruposCasillas.forEach(grupo => {
                if (turno.calcularMayorCasas(grupo) === 0) {
                    btnVenta.disabled = false;
                }
            });
        }
        turno.propiedades.forEach(propiedad=>{
            if(propiedad.tipo === "propiedad" && propiedad.grupo.propietario === null){
                btnVenta.disabled = false;
            }else{
                btnVenta.disabled = false;
            }

        });
    }
}
/* SE HABILITA LA SELECCIÓN DE UNA CASILLA PARA SU VENTA O LA VENTA DE SUS CASAS/HOTELES */
async function habilitarClickVentaJugador(){
    const btnCompCasas = document.getElementById("btnComprarCasas");
    const btnVentaJug = document.getElementById("btnVentaJug");
    const flecha = document.getElementById("btn-flecha");
    /* PARA CADA UNA DE LAS PROPIEDADES */
    turno.propiedades.forEach(propiedad=>{
        const casPropiedad = document.getElementById(propiedad.id);
        /* SE COMPRUEBA SU TIPO */
        if(propiedad.tipo==="propiedad"){
            casPropiedad.removeEventListener("click", comprarCasa);
            /* SI LA PROPIEDAD NO TIENE CASAS Y EL JUGADOR NO TIENE CASAS EN LAS PROPIEDADES SE PUEDE VENDER LA CASILLA */
            if(propiedad.casas===0 && turno.calcularMayorCasas(propiedad.grupo) === 0){
                casPropiedad.classList.add("pinchable");
                casPropiedad.classList.add("seleccionable");
                casPropiedad.addEventListener("click", venderProp);
            }
        }else{
            casPropiedad.addEventListener("click", venderProp);
            casPropiedad.classList.add("pinchable");
            casPropiedad.classList.add("seleccionable");
        }
    });
    btnVentaJug.classList.add("mover-izquierda");
    btnVentaJug.classList.add("transparente");
    btnCompCasas.classList.add("mover-izquierda");
    btnCompCasas.classList.add("invisible");
    flecha.classList.remove("transparente");
    flecha.classList.remove("mover-izquierda");
}
async function venderProp(){
    casi = tablero[this.id - 1];
    this.classList.remove("seleccionable");
    this.classList.add("seleccionado");
    try{
        await popUpSeleccion();
        try{
            await selCantidad();
        }catch (e){
            cancelarVenta();
        }

    }catch (e){
        cancelarVenta();
    }
}
function cancelarVenta(){
    turno.propiedades.forEach(propiedad=>{
        const casPropiedad = document.getElementById(propiedad.id);
        casPropiedad.classList.remove("pinchable");
        casPropiedad.classList.remove("seleccionable");
        casPropiedad.classList.remove("seleccionado");
        casPropiedad.removeEventListener("click", venderProp);
    });
}
async function selCantidad(){
    let cantidad;
    try{
        await popUpCantidad();
        const inputCantidad = document.getElementById("cantidad");
        /*123*/
        cantidad = parseInt(inputCantidad.value);
        try{
            await popUpConfirm("¿" + comprador.nombre + " quieres comprar " + casi.nombre + " por " + cantidad + " Galeones?");
            comprador.dinero-=cantidad;
            actualizarDinero(comprador);
            const dinero = document.getElementById("sdinero-comprador");
            dinero.innerHTML = comprador.dinero;
            turno.dinero+=cantidad;
            actualizarDinero(turno);
            const dinero1 = document.getElementById("sdinero");
            dinero1.innerHTML = turno.dinero;

            /* SI EL JUGADOR POSEÍA EL GRUPO DE CASILLAS ENTONCES SE ELIMINA DE SU POSESIÓN */
            if(turno.tieneGrupo(casi.grupo)){
                turno.quitarGrupo(casi.grupo);
            }
            /* SE QUITA LA PROPIEDAD DEL JUGADOR */
            turno.quitarPropiedad(casi);

            casi.propietario = comprador;
            comprador.propiedades.push(casi);

            casi.grupo.getPropietario();

            const casiTablero = document.getElementById(casi.id);

            casiTablero.classList.remove("casillaJugador" + turno.id);
            casiTablero.classList.remove("seleccionado");
            casiTablero.classList.remove("pinchable");
            casiTablero.removeEventListener("click", venderProp);
            casiTablero.classList.add("casillaJugador" + comprador.id);
            accionesTurno();

            const mensaje = document.getElementById("mensaje");

            await ocultar(mensaje);
            mensaje.innerHTML = turno.nombre + " ha vendido " + casi.nombre + " a " + comprador.nombre;
            mostrar(mensaje);

        }catch (e){
            cancelarVenta();
        }
    }catch (e){
        cancelarVenta();
    }
}
function ocultar(elemento) {
    return new Promise((resolve) => {
        elemento.classList.add("transparente");
        setTimeout(function(){
            resolve();
        }, 1000);
    });
}
function mostrar(elemento) {
    elemento.classList.remove("transparente");
}

/* SE HABILITA EL BOTÓN PARA VENDER CASAS O PROPIEDADES */
function habilitar(propiedad, jugador){
    /* SE COMPRUEBA EL TIPO DE CASILLA */
    if(propiedad.tipo==="propiedad"){
        /* SI ES LA PROPIEDAD QUE MÁS CASAS TIENE SE HABILITA VENDER CASAS EN LA PROPIEDAD */
        if(jugador.calcularMayorCasas(propiedad.grupo) !== 0 && jugador.calcularMayorCasas(propiedad.grupo) === (propiedad.casas + propiedad.hoteles)){
            const casiHtml = document.getElementById(propiedad.id);
            casiHtml.addEventListener("click", habilitarVentaCasas);
            casiHtml.classList.add("pinchable");
            /* SI NO HAY CASAS EN EL GRUPO DE CASILLAS ENTONCES SE PUEDE VENDER LA CASILLA */
        }else if(jugador.calcularMayorCasas(propiedad.grupo) === 0){
            const casiHtml = document.getElementById(propiedad.id);
            casiHtml.addEventListener("click", habilitarVentaCasillas);
            casiHtml.classList.add("pinchable");
        }
    }else{
        /* SI EL JUGADOR NO TIENE CASAS EN OTRAS PROPIEDADES SE PUEDE VENDER LA CASILLA*/
        if(!jugador.comprobarCasas()){
            const casiHtml = document.getElementById(propiedad.id);
            casiHtml.addEventListener("click", habilitarVentaCasillas);
            casiHtml.classList.add("pinchable");
        }
    }
}
/* FUNCIÓN PARA VENDER UNA CASILLA */
async function ventaCasilla(){
    /* SE PIDE CONFIRMACIÓN DE LA VENTA DE LA CASILLA */
    async function asyncVenta() {
        try {
            await popUpConfirm("¿Quieres vender " + casi.nombre + " por " + (casi.precio/2) +  " Galeones?");
            await venderPropiedad();
        } catch (error) {
        }
    }
    await asyncVenta();
    /* FUNCIÓN QUE VENDE LA PROPIEDAD */
    async function venderPropiedad(){
        /* SE QUITA EL PROPIETARIO A LA CASILLA */
        casi.propietario = null;
        /* SE COMRPUEBA SI SE HA SALDADO LA DEUDA */
        if(turno.deuda>(casi.precio/2)){
            /* SI NO SE HA SALDADO LA DEUDA SE COMRPUEBA SI LA DEUDA ERA CON OTRO JUGADOR, EN CASO AFIRMATIVO SE LE SUMA EL PRECIO DE LA CASILLA DIVIDIDO POR 2 */
            if(propietario!=null){
                propietario.dinero+=(casi.precio/2);
            }
            /* SE RESTA A LA DEUDA EL VALOR DE LA CASILLA DIVIDIDO POR DOS */
            turno.deuda-=(casi.precio/2);
        }else{
            /* SI SE HA SALDADO LA DEUDA EL JUGADOR SE QUEDA CON LA DIFERENCIA DEL PRECIO DE LA CASILLA DIVIDIDO POR DOS Y LA DEUDA QUE TENÍA */
            let dif = (casi.precio/2)-turno.deuda;
            turno.dinero+=dif;
            /* SE COMRPUEBA SI LA DEUDA ERA CON OTRO JUGADOR, EN CASO AFIRMATIVO SE LE SUMA EL VALOR DE LA DEUDA */
            if(propietario!=null) {
                propietario.dinero += turno.deuda;
            }
            /* SE ESTABLECE LA DEUDA A 0 */
            turno.deuda=0;
            /* SE DESHABILITA LA VENTA DE CASILLAS */
            turno.propiedades.forEach(propiedad=>{
                let casiHtml = document.getElementById(propiedad.id);
                casiHtml.classList.remove("pinchable");
                casiHtml.removeEventListener("click", habilitarVentaCasillas);
            });
            /* SE HABILITA LA POSIBILIDAD DE FINALIZAR EL TURNO */
            const btnFin = document.getElementById("btnFinTurno");
            btnFin.disabled = false;
        }
        /* SI EL JUGADOR POSEÍA EL GRUPO DE CASILLAS ENTONCES SE ELIMINA DE SU POSESIÓN */
        if(turno.tieneGrupo(casi.grupo)){
            turno.quitarGrupo(casi.grupo);
        }
        /* SE QUITA LA PROPIEDAD DEL JUGADOR */
        turno.quitarPropiedad(casi);
        /* SE OCULTA EL BOTÓN DE VENDER CASILLA*/
        const btnVenta = document.getElementById("btnVenta" + turno.id);
        btnVenta.classList.add("invisible");
        btnVenta.removeEventListener("click", ventaCasilla);
        /* SE DESHABILITA LA POSIBILIDAD DE VENDER LA CASILLA */
        const casillaHtml = document.getElementById(casi.id);
        casillaHtml.classList.remove("pinchable");
        casillaHtml.classList.remove("casillaJugador" + turno.id);
        casillaHtml.removeEventListener("click", habilitarVentaCasillas);

        /* MENSAJE INFORMATIVO SOBRE LA VENTA*/
        let mensaje = document.getElementById("mensaje");
        await ocultar(mensaje);
        mensaje.innerHTML = turno.nombre + " ha vendido " + casi.nombre;
        mostrar(mensaje);

        casi = null;
        /* SE ACTUALIZA POR PANTALLA EL DINERO DE LOS JUGADORES Y LA DEUDA */
        if(propietario!=null) {
            actualizarDinero(propietario);
        }
        actualizarDinero(turno);
        actualizarDeuda(turno);
    }
}
/* FUNCIÓN PARA VENDER CASAS U HOTELES */
async function ventaCasa(){
    let texto = "";
    /* SEGÚN SEA CASA U HOTEL SE MOSTRARÁ UN MENSAJE CONCRETO */
    if(casi.hoteles===0){
        texto = "¿Quieres vender una casa en " + casi.nombre + " por " + (casi.precioCasa/2) +  " Galeones?";
    }else{
        texto = "¿Quieres vender un hotel en " + casi.nombre + " por " + (casi.precioCasa/2) +  " Galeones?";
    }
    /* CONFIRMACIÓN DE VENTA */
    async function asyncVentaCasa() {
        try {
            await popUpConfirm(texto);
            await venderCasa();
        } catch (error) {
        }
    }
    await asyncVentaCasa();
    /* VENTA DE LA CASA/HOTEL */
    async function venderCasa(){
        /* SE GUARDA EN UNA VARIABLE SI SE HA FINALIZADO LA VENTA */
        let finVenta = false;
        /* SE COMPRUEBA SI SE HA SALDADO LA DEUDA */
        if(turno.deuda>(casi.precioCasa/2)){
            /* SI LA DEUDA ERA CON UN JUGADOR SE LE SUMA EL PRECIO DE LA CASA DIVIDIDO POR DOS*/
            if(propietario!=null){
                propietario.dinero+=(casi.precioCasa/2);
            }
            /* SE RESTA AL JUGADOR EL PRECIO DE LA CASA DIVIDIDO POR DOS*/
            turno.deuda-=(casi.precioCasa/2);
        }else{
            /* SI SE HA SALDADO LA DEUDA SE FINALIZA LA VENTA*/
            finVenta=true;
            /* SE SUMA AL JUGADOR LA DIFERENCIA DEL PRECIO DE LA CASA DIVIDIDO POR DOS Y LA DEUDA*/
            let dif = (casi.precioCasa/2)-turno.deuda;
            turno.dinero+=dif;
            /* SI LA DEUDA ERA CON UN JUGADOR SE LE SUMA EL VALOR DE LA DEUDA */
            if(propietario!=null){
                propietario.dinero+=turno.deuda;
            }
            /* SE ESTABLECE LA DEUDA A 0*/
            turno.deuda=0;
            /* SE DESHABILITA LA VENTA DE CASAS EN LAS PROPIEDADES DEL JUGADOR */
            turno.propiedades.forEach(propiedad=>{
                let casiHtml = document.getElementById(propiedad.id);
                casiHtml.classList.remove("pinchable");
                casiHtml.removeEventListener("click", habilitarVentaCasas);
            });
            /* SE PERMITE FINALIZAR EL TURNO */
            const btnFin = document.getElementById("btnFinTurno");
            btnFin.disabled = false;
        }

        const btnVenta = document.getElementById("btnVentaCasas" + turno.id);
        /* SE OCULTA LA CASA/HOTEL VENDIDOS Y SE RESTA DE LA PROPIEDAD*/
        ocultarCasa("div-" + casi.id + "-" + casi.casas);
        let casa = true;
        if(casi.hoteles === 1){
            for(let h = 1; h <= 4; h++){
                mostrarCasa("div-" + casi.id + "-" + h);
            }
            casi.hoteles--;
            btnVenta.innerHTML = "Vender casa";
            casa = false;
        }else{
            casi.casas--;
        }
        /* SE OCULTA EL BOTÓN DE VENTA DE CASAS */
        btnVenta.classList.add("invisible");
        btnVenta.removeEventListener("click", ventaCasa);
        /* SE DESHABILITA LA POSIBILIDAD DE VENDER CASAS EN LA CASILLA */
        const casillaHtml = document.getElementById(casi.id);
        casillaHtml.classList.remove("pinchable");
        casillaHtml.removeEventListener("click", habilitarVentaCasas);
        /* SI NO SE HA TERMINADO LA VENTA Y EL JUGADOR AUN TIENE CASAS EN EL GRUPO SE HABILITA LA VENTA DE CASAS EN LAS CASILLAS CORRESPONDIENTES */
        if(!finVenta && turno.calcularMayorCasas(casi.grupo)!==0){
            casi.grupo.casillas.forEach(cas=>{
                habilitar(cas, turno);
            })
            /* SI NO SE HA TERMINADO LA VENTA Y EL JUGADOR AUN TIENE CASAS FUERA DEL GRUPO SE HABILITA LA VENTA DE CASAS EN LAS CASILLAS CORRESPONDIENTES */
        }else if(!finVenta && !turno.comprobarCasas()){
            turno.propiedades.forEach(cas=>{
                habilitar(cas, turno);
            })
        }
        /* MENSAJE INFORMATIVO SOBRE LA VENTA DE LA CASA/HOTEL */
        let mensaje = document.getElementById("mensaje");
        await ocultar(mensaje);
        if(casa){
            mensaje.innerHTML = turno.nombre + " ha vendido una casa en " + casi.nombre;
        }else{
            mensaje.innerHTML = turno.nombre + " ha vendido un hotel en " + casi.nombre;
        }
        mostrar(mensaje);
        casi = null;
        /* SE ACTUALIZA EL DINERO DE LOS JUGADORES Y LA DEUDA POR PANTALLA */
        if(propietario!=null) {
            actualizarDinero(propietario);
        }
        actualizarDinero(turno);
        actualizarDeuda(turno);
    }
}
/* FUNCIÓN QUE HABILITA LA VENTA DE CASAS EN LA CASILLA */
function habilitarVentaCasas(){
    const btnVenta = document.getElementById("btnVentaCasas" + turno.id);
    casi = tablero[this.id - 1];
    btnVenta.classList.remove("invisible");
    if(casi.hoteles===0){
        btnVenta.addEventListener("click", ventaCasa);
    }else{
        btnVenta.addEventListener("click", ventaCasa);
        btnVenta.innerHTML = "Vender hotel";
    }

}
/* FUNCIÓN QUE HABILITA LA VENTA DE LA CASILLA */
function habilitarVentaCasillas(){
    const btnVenta = document.getElementById("btnVenta" + turno.id);
    casi = tablero[this.id - 1];
    btnVenta.classList.remove("invisible");
    btnVenta.addEventListener("click", ventaCasilla);

}

/* FUNCIÓN QUE ACTUALIZA POR PANTALLA LA DEUDA DEL JUGADOR */
function actualizarDeuda(jugador){
    const txtDeuda = document.getElementById("txt-deuda" + jugador.id);
    txtDeuda.innerHTML = "Deuda: " + jugador.deuda + " Galeones";
}
/* FUNCIÓN QUE MUESTRA EN EL TABLERO LA CASA COMPRADA */
function ocultarCasa(id){
    const casa = document.getElementById(id);
    casa.classList.add("oculto");
}