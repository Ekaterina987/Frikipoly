/* FIN DE PARTIDA */
var finPartida = false;
/* GANADOR */
var ganador;
/* JUGADOR EN EL TURNO ACTUAL */
var turno;
/* TAMAÑO DEL LADO DEL TABLERO */
var ladoTablero;
/* VARIABLE EN LA QUE SE GUARDA EL OBJETO CASILLA EN EL QUE ESTÁ EN JUGADOR AL TERMINAR LA TIRADA */
var casiFinal;

/* VARIABLE QUE GUARDA LA POSICION DEL JUGADOR PARA LA TABLA DE PUNTUACIONES */
var posicionJugador;

/* CUENTA ATRÁS */
var intervalo;

/* SONIDO DADOS */
var sonido;
/* MUSICA DE FONDO */
var musicaFondo;
/* SONIDO FUEGOS ARTIFICIALES */
var fuegos;

/* FUNCIONES */

/* FUNCIÓN QUE SE EJECUTA AL EMPEZAR EL TURNO DE UN JUGADOR, SE LLAMA TRAS TERMINAR EL TURNO DEL JUGADOR ANTERIOR */
async function turnoJugador(){
    /* PRIMERO SE COMPRUEBA SI ESTÁ EN AZKABÁN */
    if(turno.azkaban){
        /* SI LLEVA MENOS DE DOS TURNOS EN AZKABÁN */
        if(turno.turnosAzkaban<2) {
            turno.turnosAzkaban++;
            /* SI EL JUGADOR TIENE TARJETAS DE LIBERTAD SE LE PREGUNTA SI QUIERE SALIR DE AZKABAN USANDO UNA */
            if (turno.tarjetasLibertad > 0) {
                try {
                    await popUpConfirm("¿Quieres usar una tarjeta de libertad para salir de Azkaban?");
                    /* SI EL JUGADOR CONFIRMA QUE QUIERE USAR UNA SE MUESTRA UN MENSAJE INFORMATIVO*/
                    await popUp("Has salido de Azkabán");
                    /* SE HABILITA LA TIRADA DE DADOS */
                    let btnTirar = document.getElementById("btnDados");
                    btnTirar.disabled = false;
                    /* SE DESHABILITA LA POSIBILIDAD DE FINALIZAR EL TURNO */
                    let btnFinalizar = document.getElementById("btnFinTurno");
                    btnFinalizar.disabled = true;
                    /* SE RESTA AL JUGADOR UNA TARJETA DE LIBERTAD, SE LE SACA DE AZKABAN Y SE REESTABLECEN LOS TURNOS QUE ESTÁ EN AZKABAN */
                    turno.tarjetasLibertad--;
                    turno.azkaban = false;
                    turno.turnosAzkaban = 0;
                    /* SI EL JUGADOR NO TIENE MÁS TARJETAS DE LIBERTAD SE OCULTA LA TARJETA */
                    if (turno.tarjetasLibertad === 0) {
                        const contTarj = document.getElementById("cont-tarjetas" + turno.id);
                        const tarjetaLib = document.getElementById("tarjeta-libertad" + turno.id);
                        contTarj.removeChild(tarjetaLib);
                    } else {
                        /* SI TIENE MÁS TARJETAS DE LIBERTAD SE RESTA UNA AL CONTADOR */
                        const canti = document.getElementById("texto-tarjeta-cantidad" + turno.id);
                        if (turno.tarjetasLibertad > 1) {
                            canti.innerHTML = "x" + turno.tarjetasLibertad;
                        } else {
                            canti.innerHTML = "";
                        }
                    }
                } catch (e) {
                    /* SI EL JUGADOR NO QUIERE USAR UNA TARJETA Y SE LO PUEDE PERMITIR PREGUNTA SI QUIERE SALIR DE LA CÁRCEL */
                    if (turno.dinero > 50) {
                        await pagarAzkaban();
                    } else {
                        await quedarseAzkaban();
                    }
                }
                /* SI EL JUGADOR SE LO PUEDE PERMITIR PREGUNTA SI QUIERE SALIR DE LA CÁRCEL */
            } else if (turno.dinero > 50) {
                pagarAzkaban();
            } else {
                await quedarseAzkaban();
            }

        }else{
            /* SI HA CUMPLIDO SU CONDENA SE LE PERMITE TIRAR LOS DADOS */
            async function asyncMensajeSalirAzkaban() {
                await popUp("Has cumplido tu condena y puedes salir de Azkabán");
            }
            await asyncMensajeSalirAzkaban();
            /* SE SACA AL JUGADOR DE AZKABAN Y SE REESTABLECEN LOS TURNOS EN AZKABAN */
            turno.azkaban = false;
            turno.turnosAzkaban = 0;
            /* SE LE PERMITE TIRAR LOS DADOS */
            let btnTirar = document.getElementById("btnDados");
            btnTirar.disabled = false;
            /* SE DESHABILITA LA OPCIÓN DE FINALIZAR EL TURNO */
            let btnFinalizar = document.getElementById("btnFinTurno");
            btnFinalizar.disabled = true;
        }

    }else{
        /* SI NO ESTÁ EN AZKABÁN SE LE PERMITE TIRAR LOS DADOS */
        let btnTirar = document.getElementById("btnDados");
        btnTirar.disabled = false;
        /* SE DESHABILITA LA OPCIÓN DE FINALIZAR EL TURNO */
        let btnFinalizar = document.getElementById("btnFinTurno");
        btnFinalizar.disabled = true;
    }
    /* SI NO PUEDE O QUIERE SALIR ENTONCES SE LE PERMITE FINALIZAR EL TURNO */
    async function quedarseAzkaban(){
        let btnFinalizar = document.getElementById("btnFinTurno");
        btnFinalizar.disabled = false;
        /* SE LANZA UN MENSAJE INFORMATIVO */
        async function asyncMensajeAzkaban() {
            await popUp("No puedes salir de Azkabán");
        }
        await asyncMensajeAzkaban();
        accionesTurno();
    }
    /* FUNCIÓN QUE PIDE CONFIRMACIÓN DE PAGO PARA SALIR DE AZKABAN Y EN CASO AFIRMATIVO SACA AL JUGADOR */
    async function pagarAzkaban() {

        async function asyncAzkaban() {
            try {
                await popUpConfirm("¿Quieres pagar 50 Galeones para salir de Azkabán?");
                salirAzkaban();
            } catch (error) {
                accionesTurno();
            }
        }

        await asyncAzkaban();

        function salirAzkaban() {
            async function asyncSalir() {
                /* MENSAJE INFORMATIVO */
                await popUp("Has salido de Azkabán");
                /* SE RESTA EL DINERO AL JUGADOR Y SE LE SACA DE AZKABAN, SE REESTABLECEN LOS TURNOS EN AZKABAN */
                turno.dinero -= 50;
                turno.azkaban = false;
                turno.turnosAzkaban = 0;
                /* SE ACTUALIZA EL DINERO DEL JUGADOR POR PANTALLA */
                actualizarDinero(turno);
                /* SE LE PERMITE TIRAR LOS DADOS */
                let btnTirar = document.getElementById("btnDados");
                btnTirar.disabled = false;
                /* SE DESHABILITA LA OPCIÓN DE FINALIZAR EL TURNO */
                let btnFinalizar = document.getElementById("btnFinTurno");
                btnFinalizar.disabled = true;
            }
            asyncSalir();
        }
    }
}
/* VARIABLE EN LA QUE SE GUARDA EL OBJETO CASILLA EN EL QUE SE DESEA REALIZAR ACCIONES */
var casi;

/* VARIABLE EN LA QUE SE GUARDA EL PROPIETARIO DE LA CASILLA SI TUVIESE */
var propietario;


/* FUNCIÓN QUE PERMITE REALIZAR ACCIONES EN EL JUEGO */
async function jugadorJuego(inicial, final){
    /* SE HABILITA QUE EL JUGADOR PUEDA FINALIZAR EL TURNO */
    let btnFinalizar = document.getElementById("btnFinTurno");
    btnFinalizar.disabled = false;
    /* CASILLA EN LA QUE CAE EL JUGADOR */
    let casFinal = tablero[final.id - 1];
    /* SI LA POSICIÓN ANTES DE TIRAR ES MAYOR QUE LA POSICIÓN DESPUÉS ES QUE SE HA PASADO POR LA CASILLA DE SALIDA Y SE RECIBE DINERO */
    if(parseInt(inicial.id) >= parseInt(final.id) && !atras){
        async function asyncCasillaSalida() {
            await popUp("Has pasado por la casilla de salida, recibes 200 Galeones");
            turno.dinero+=200;
            actualizarDinero(turno);
        }
        await asyncCasillaSalida();
    }
    atras = false;
    /* SI LA CASILLA FINAL ES EL DEPARTAMENTO DE SEGURIDAD MÁGICA SE VA A AZKABÁN */
    if(casFinal.tipo === "Departamento de Seguridad Mágica"){
        btnFinalizar.disabled = true;
        turno.azkaban = true;
        casiFinal = casFinal;
        /* SE MUEVE LA POSICIÓN A LA 10 */
        turno.posicion = 10;
        /* SE MUESTRA UN MENSAJE Y SE REALIZA EL MOVIMIENTO */
        async function asyncIrAzkaban() {
            await popUp("Vas a Azkabán");
            const ficha = document.getElementById("ficha" + turno.id);
            await asyncMovimientoAzkaban(ficha, casiFinal);
        }
        await asyncIrAzkaban();
        accionesTurno();
        /* EN EL RESTO DE LOS CASOS */
    }else{
        /* SI LA CASILLA ES COMPRABLE */
        if(casFinal.tipo === "propiedad" || casFinal.tipo === "sala-comun" || casFinal.tipo === "compania") {
            if(casFinal.propietario == null && turno.dinero > casFinal.precio){
                /* SI SE PUEDE COMPRAR SE HABILITA EL BOTÓN CORRESPONDIENTE */
                var btnComprar = document.getElementById("btnComprar" + turno.id);
                btnComprar.disabled = false;
                btnComprar.addEventListener("click", comprar);
                casiFinal = casFinal;
            }else if(casFinal.propietario !== null && casFinal.propietario !== turno){
                /* SI PERTENECE A OTRO JUGADOR OBLIGA A PAGARLE UNA TARIFA */
                /* EN CASO DE QUE LA CASILLA SEA UNA COMPAÑÍA LA TARIFA SE CALCULA EN VALOR DE LA TIRADA DE DADOS */
                if(casFinal.tipo === "compania"){
                    casFinal.setTarifa(tirada);
                }else{
                    casFinal.setTarifa();
                }
                /* SE ESTABLECE EL PROPIETARIO DE LA CASILLA Y LA CASILLA */
                propietario = casFinal.propietario;
                casiFinal=casFinal;
                /* SE EJECUTA LA ACCIÓN DE PAGAR EL COBRO, EN CASO DE QUE NO SE LO PUEDA PERMITIR SE ELIMINA EL JUGADOR  */
                await asyncPagar("Debes pagar una tarifa de " + casFinal.tarifa + " Galeones a " + casFinal.propietario.nombre,
                    "No puedes permitirte pagar la tasa, has perdido" ,casFinal.tarifa, turno, casFinal.propietario);
                //casFinal.pagarTarifa(turno);
            }
        }else if(casFinal.tipo === "impuesto1"){
            /* SI LA CASILLA ES DE IMPUESTO OBLIGA A PAGAR UN IMPUESTO, EN CASO DE QUE NO SE LO PUEDA PERMITIR SE ELIMINA EL JUGADOR */
            await asyncPagar("Debes un impuesto de 100 Galeones",
                "No puedes permitirte pagar el impuesto, has perdido", 100, turno, null);

        }else if(casFinal.tipo === "impuesto2"){
            /* SI LA CASILLA ES DE IMPUESTO OBLIGA A PAGAR UN IMPUESTO, EN CASO DE QUE NO SE LO PUEDA PERMITIR SE ELIMINA EL JUGADOR */

            await asyncPagar("Debes un impuesto de 200 Galeones",
                "No puedes permitirte pagar el impuesto, has perdido", 200, turno, null);

        }else if(casFinal.tipo === "pociones"){
            /* SI LA CASILLA ES DE POCIONES SACA UNA TARJETA DE POCIONES */
            await randomTarjeta("pociones");
        }else if(casFinal.tipo === "hechizos"){
            /* SI LA CASILLA ES DE HECHIZOS SACA UNA TARJETA DE HECHIZOS */
            await randomTarjeta("hechizos");
        }
        if(!finPartida){
            /*turnoComprar();
            habilitarVentaPropiedadAJugador();*/
            accionesTurno();
        }
    }
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
/* SE CREA UNA PROMESA QUE SE EJECUTARÁ CUANDO SE MUEVA LA CASILLA A LA POSICIÓN 10 (AZKABÁN) */
var promesaAzkaban = function(ficha, casilla)
{
    return new Promise(function(resolve)
    {
        var distanciaHor = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) *(casilla.columna - 1);
        var distanciaVert = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) *(11 - casilla.fila);
        var distancia = Math.sqrt(Math.pow(distanciaHor, 2) + Math.pow(distanciaVert, 2));
        animacionFichaCarcel(ficha, casilla);

        setTimeout(function(){
            resolve();
        }, (distancia*velocidad));
    });
}
/* FUNCIÓN QUE ESPERA A QUE SE MUEVA LA FICHA PARA DESPUÉS HABILITAR EL BOTÓN DE FINALIZAR EL TURNO */
async function asyncMovimientoAzkaban(ficha, casilla) {
    await promesaAzkaban(ficha, casilla);
    const btnFinalizar = document.getElementById("btnFinTurno");
    btnFinalizar.disabled = false;
}
/* FUNCIÓN QUE SE EJECUTA AL REALIZAR UN PAGO OBLIGATORIO*/
async function asyncPagar(textoPagar, textoPerder, cantidad, jugadorPaga, jugadorRecibe) {
    /* SE MUESTRA UN POPUP INFORMATIVO */
    await popUp(textoPagar);
    /* SE COMPRUEBA SI EL JUGADOR TIENE TARJETAS DE INVISIBILIDAD */
    if(jugadorPaga.tarjetasInvisibilidad>0){
        try{
            /* SE PIDE CONFIRMACIÓN PARA USAR LA TARJETA */
            await popUpConfirm("¿Quieres usar una tarjeta de invisibilidad para evadir el pago?");
            /* SE MUESTRA UN MENSAJE INFORMATIVO */
            await popUp("Has evadido el pago");
            /* SE RESTA UNA TARJETA DE INVISIBILIDAD AL JUGADOR */
            turno.tarjetasInvisibilidad--;
            /* SI YA NO TIENE MÁS TARJETAS ESTA SE OCULTA */
            if(turno.tarjetasInvisibilidad===0){
                const contTarj = document.getElementById("cont-tarjetas" + turno.id);
                const tarjetaInvis = document.getElementById("tarjeta-invisibilidad" + turno.id);
                contTarj.removeChild(tarjetaInvis);
            }else{
                /* SI AÚN TIENE TARJETAS SE RESTA UNA AL CONTADOR */
                const canti = document.getElementById("texto-tarjeta-invisibilidad-cantidad" + turno.id);
                if(turno.tarjetasInvisibilidad>1){
                    canti.innerHTML="x" + turno.tarjetasInvisibilidad;
                }else{
                    canti.innerHTML="";
                }
            }
        }catch (e){
            /* SI NO QUIERE USAR LA TARJETA SE PROCEDE AL PAGO */
            pagar(textoPerder, cantidad);
        }

    }else{
        /* SI NO TIENE TARJETAS SE PROCEDE AL PAGO */
        pagar(textoPerder, cantidad);
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA PAGAR */
    function pagar(texto, cantidad){
        /* SE COMPRUEBA SI EL JUGADOR SE PUEDE PERMITIR EL PAGO */
        if(cantidad >= jugadorPaga.tasarPropiedades()){
            /* SI NO SE LO PUEDE PERMITIR SE MUESTRA UN MENSAJE INFORMANDO DE QUE HA PERDIDO */
            asyncPerder(texto);
        }else{
            /* SI PUEDE PERMITIRSELO SE COMPRUEBA SI PUEDE REALIZAR EL PAGO SIN VENDER NADA*/
            if(jugadorPaga.dinero>cantidad){
                /* SI PUEDE SE LE RESTA LA CANTIDAD AL DINERO, SE ACTUALIZA EL DINERO POR PANTALLA Y EL JUGADOR QUE RECIBE LA CANTIDAD, SI LO HUBIESE, LA RECIBE Y SE ACTUALIZA SU
                * DINERO POR PANTALLA */
                jugadorPaga.dinero-=cantidad;
                actualizarDinero(jugadorPaga);
                if(jugadorRecibe!=null){
                    jugadorRecibe.dinero+=cantidad;
                    actualizarDinero(jugadorRecibe);
                }
                /* SI TIENE QUE VENDER SE LE PERMITE HACERLO*/
            }else{
                /* PAGA CON SU DINERO */
                let pagado = jugadorPaga.dinero;
                jugadorPaga.dinero=0;

                const txtDeuda = document.getElementById("txt-deuda" + jugadorPaga.id);
                txtDeuda.classList.remove("oculto");
                jugadorPaga.deuda = cantidad - pagado;
                /* SI HAY UN JUGADOR QUE RECIBE EL DINERO SE LE SUMA Y SE ACTUALIZA SU DINERO POR PANTALLA */
                if(jugadorRecibe!=null){
                    jugadorRecibe.dinero+=pagado;
                    actualizarDinero(jugadorRecibe);
                }
                /* SE ACTUALIZA POR PANTALLA EL DINERO DEL JUGADOR */
                actualizarDinero(jugadorPaga);
                /* SE MUESTRA LA DEUDA QUE TIENE */
                txtDeuda.innerHTML = "Deuda: " + jugadorPaga.deuda + " Galeones";
                /* SE DESHABILITA LA OPCIÓN DE FINALIZAR EL TURNO Y SE HABILITA LA OPCIÓN DE SELECCIONAR CASILLAS */
                const btnFinalizar = document.getElementById("btnFinTurno");
                btnFinalizar.disabled = true;
                habilitarClickCasillas();
            }

        }

    }
}
/* FUNCIÓN QUE MUESTRA UN MENSAJE INFORMANDO DE QUE UN JUGADOR HA PERDIDO, Y EJECUTA LA FUNCIÓN DE PERDER */
async function asyncPerder(texto){
    await popUp(texto);
    clearInterval(intervalo);
    perder();
}
/* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE PIERDA */
function perder(){
    let indice = jugadoresEnPie.indexOf(turno);
    /* SE GUARDA EL INDICE DEL JUGADOR ANTERIOR */
    let indiceAnterior;
    if(indice === 0){
        indiceAnterior = jugadoresEnPie.length - 1;
    }else{
        indiceAnterior = indice-1;
    }
    let jugadorAnterior = jugadoresEnPie[indiceAnterior];
    /* SE ESTABLECE LA PUNTUACIÓN DEL JUGADOR EN BASE A SU POSICIÓN Y LA TASA DE SUS PROPIEDADES */
    turno.puntuacion = turno.tasarPropiedades() * (1/posicionJugador);
    turno.posicionJugador = posicionJugador;
    /* SE RESTA LA POSICIÓN PARA EL SIGUIENTE JUGADOR */
    posicionJugador--;
    /* SE ELIMINA EL JUGADOR DE LOS JUGADORES EN PIE*/
    jugadoresEnPie.splice(indice, 1);
    /* EN CASO DE QUE TUVIESE UN PAGO PENDIENTE A UN JUGADOR SE LE SUMA EL TOTAL DEL VALOR DE SUS PROPIEDADES Y SE ACTUALIZA SU DINERO POR PANTALLA */
    if(propietario!=null){
        propietario.dinero+=turno.tasarPropiedades();
        actualizarDinero(propietario);
    }
    turno.dinero=0;
    /* SE ACTUALIZA EL DINERO DEL JUGADOR POR PANTALLA */
    actualizarDinero(turno);
    /* SE LIBERAN LAS PROPIEDADES DEL JUGADOR */
    liberarPropiedades(turno);

    /* SE OCULTA LA FICHA DEL JUGADOR */
    const ficha = document.getElementById("ficha" + turno.id);
    ficha.classList.add("oculto");
    /* SE DA EL TURNO AL JUGADOR ANTERIOR, QUE SOLO PODRÁ FINALIZAR EL TURNO */
    turno = jugadorAnterior;
    /* SE COMPRUEBA SI ES EL FINAL Y LO ESTABLECE AL FINAL NORMAL*/
    finalPartida("normal");
}
/* FUNCIÓN QUE SE EJECUTA PARA COMPROBAR SI SE FINALIZA UNA PARTIDA, Y EN CASO AFIRMATIVO SE FINALIZA */
async function finalPartida(tipoFinal){
    /* COMPRUEBA LA CANTIDAD DE JUGADORES O SI EL TIEMPO HA LLEGADO A 0 */
    if(jugadoresEnPie.length === 1 || contTiempo === 0){
        /* SI ES ASÍ ESTABLECE LAS PUNTUACIONES Y POSICIONES DE LOS JUGADORES EN BASE AL TIPO DE FINAL */
        finPartida = true;
        switch (tipoFinal){
            case "normal":
                ganador = jugadoresEnPie[0];
                ganador.posicionJugador = posicionJugador;
                ganador.puntuacion = ganador.tasarPropiedades();
                break;
            case "contrarreloj":
                jugadores.forEach(jugador=>{
                    if(jugador.puntuacion === 0){
                        jugador.puntuacion = jugador.tasarPropiedades();
                    }
                })
                jugadores.sort(comparaPuntuacion);
                ganador = jugadores[0];
                var posi = 1;
                jugadores.forEach(jugador=>{
                    jugador.posicionJugador = posi;
                    posi++;
                })
        }
        /* SE MUESTRA UN MENSAJE INFORMATIVO */
        async function asyncFin(){
            await popUp("El juego ha terminado, ha ganado " + ganador.nombre);
        }
        /* SE MUESTRAN LAS PUNTUACIONES DE LOS JUGADORES */
        async function asyncScoreboard(){
            /*123*/
            fuegos.play();
            const ganar = document.getElementById("ganar");
            const mensaje = document.getElementById("mensaje-ganar");
            const score = document.getElementById("scoreboard");
            mensaje.appendChild(document.createTextNode("¡Felicidades " + ganador.nombre + "!"));
            /* SE ORDENAN LOS JUGADORES EN BASE A SU POSICION Y SE MUESTRA SU POSICIÓN, NOMBRE Y PUNTUACIÓN */
            jugadores.sort(comparaPosicion);
            jugadores.forEach(jugador=>{
                const posicion = document.createElement("p");
                posicion.classList.add("posicion-jugador");
                posicion.appendChild(document.createTextNode(jugador.posicionJugador));
                const jugadorNombre = document.createElement("p");
                jugadorNombre.appendChild(document.createTextNode( jugador.nombre));
                jugadorNombre.classList.add("nombre-jugador");
                const puntuacionJugador = document.createElement("p");
                puntuacionJugador.appendChild(document.createTextNode(jugador.puntuacion));
                puntuacionJugador.classList.add("puntuacion-jugador");
                const divPuntuacion = document.createElement("div");
                divPuntuacion.classList.add("div-puntuacion");
                divPuntuacion.appendChild(posicion)
                divPuntuacion.appendChild(jugadorNombre);
                divPuntuacion.appendChild(puntuacionJugador);
                score.appendChild(divPuntuacion);
            });
            ganar.classList.remove("oculto");
            /* SE DA LA POSIBILIDAD DE VOLVER A LA PANTALLA DE SELECCIÓN DE JUGADORES */
            const btn = document.getElementById("btn-volver");
            btn.addEventListener("click", volverSeleccion);
            function volverSeleccion(){
                window.location.href = "./inicio.html";
            }
            const btn1 = document.getElementById("btn-volver1");
            btn1.addEventListener("click", volverInicio);
            function volverInicio(){
                window.location.href = "./juego.html";
            }
            /* FUNCIÓN PARA ORDENAR SEGÚN LA POSICIÓN */
            function comparaPosicion(a, b) {
                if (a.posicionJugador>b.posicionJugador) {
                    return 1;
                }
                if (a.posicionJugador<b.posicionJugador) {
                    return -1;
                }
                return 0;
            }
        }
        /* FUNCIÓN PARA ORDENAR SEGÚN LA PUNTUACIÓN */
        function comparaPuntuacion(a, b){
            if (a.puntuacion<b.puntuacion) {
                return 1;
            }
            if (a.puntuacion>b.puntuacion) {
                return -1;
            }
            return 0;
        }
        /* SE DESHABILITA LA POSIBILIDAD DE FINALIZAR EL TURNO */
        const btnFin = document.getElementById("btnFinTurno");
        btnFin.disabled = true;
        await asyncFin();

        await asyncScoreboard();
    }
}
/* ANIMACIÓN QUE MUESTRA DE QUIÉN ES EL TURNO MEDIANTE UN SUBRAYADO */
function animIniciar(jugadorTurno) {
    const nombre = document.getElementById("tnombre" + jugadorTurno.id);
    return new Promise((resolve) => {
        setTimeout(function(){
            nombre.classList.add("subrayado-after");
            resolve("¡Éxito!");
        }, 500);
    });
}

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

/* FUNCIÓN PARA ACTUALIZAR POR PANTALLA EL DINERO DEL JUGADOR */
function actualizarDinero(jugador){
    const dinero = document.getElementById("sdinero" + jugador.id);
    dinero.innerHTML = jugador.dinero;
    const dinero1 = document.getElementById("sdinero");
    dinero1.innerHTML = jugador.dinero;
}

/* FUNCIÓN PARA LIBERAR PROPIEDADES DEL JUGADOR */
function liberarPropiedades(jugador){
    jugador.propiedades.forEach(propiedad =>{
        propiedad.propietario = null;
        if(propiedad.tipo === "propiedad"){
            propiedad.casas = 0;
            propiedad.hoteles = 0;
        }
    });
}

/* FUNCIÓN QUE ESTABLECE LOS VALORES INICIALES */
async function start(){
    const btnVolumen = document.getElementById("btn-volumen");
    const iconVol = document.getElementById("icono-volumen");
    btnVolumen.addEventListener("click", silenciar);
    function silenciar(){
        musicaFondo.stop();
        sonido.mute();
        fuegos.mute();
        btnVolumen.removeEventListener("click", silenciar);
        btnVolumen.addEventListener("click", ponerVolumen);
        iconVol.classList.remove("fa-volume-down");
        iconVol.classList.add("fa-volume-mute");
    }
    function ponerVolumen(){
        musicaFondo.play();
        sonido.unmute();
        fuegos.unmute();
        btnVolumen.removeEventListener("click", ponerVolumen);
        btnVolumen.addEventListener("click", silenciar);
        iconVol.classList.add("fa-volume-down");
        iconVol.classList.remove("fa-volume-mute");
    }
    /* SE TOMA EL VALOR DEL LADO DEL TABLERO */
    ladoTablero = getComputedStyle(document.documentElement).getPropertyValue('--lado_tablero');

    /* SE RECOGEN LOS NOMBRES DE LOS JUGADORES ENVIADOS Y SE CREAN OBJETOS DE TIPO JUGADOR PARA METERLOS EN LOS ARRAYS */
    let jugs = localStorage.getItem("jugadores");
    let arrJugs = jugs.split(",");

    for (let k = 0; k < arrJugs.length; k++){
        let jug = new Jugador(k+1,arrJugs[k]);
        if(k===0){
            jug.propiedades.push(p2);
            jug.propiedades.push(p4);
            p2.propietario = jug;
            p4.propietario = jug;
            p2.grupo.getPropietario();
        }

        jugadores.push(jug);
        jugadoresEnPie.push(jug);
        /* SE GENERA EL ÁREA DEL JUGADOR */
        generarJugador(arrJugs[k]);
    }
    /* SE GENERA EL TABLERO */
    genera_tablero(jugadores.length);

    const casilla1 = document.getElementById(p2.id);
    casilla1.classList.add("casillaJugador1");
    const casilla2 = document.getElementById(p4.id);
    casilla2.classList.add("casillaJugador1");

    /* SE ESTABLECE EL PRIMER TURNO PARA EL PRIMER JUGADOR */
    turno = jugadores[0];
    jugadores.forEach(jugador=>{
        const btnAccion = document.getElementById("btnAcciones" + jugador.id);
        btnAccion.addEventListener("click", modoAcciones);
    });
    const btnCompCas = document.getElementById("btnComprarCasas");
    btnCompCas.addEventListener("click", modoCompraCasas);
    const btnVenta = document.getElementById("btnVentaJug");
    btnVenta.addEventListener("click", habilitarClickVentaJugador);

    const btnCerrar = document.getElementById("boton-cerrar");
    const btnFlecha = document.getElementById("btn-flecha");

    btnCerrar.addEventListener("click", cerrar);
    btnFlecha.addEventListener("click", volver);

    /* SE ESTABLECE LA POSICIÓN QUE TENDRÁ EL PRIMER PERDEDOR */
    posicionJugador = jugadores.length;
    /* SE MUESTRA LA ANIMACIÓN DEL SUBRAYADO DEL PRIMER JUGADOR*/
    await animIniciar(turno);
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
/* FUNCION PARA SELECCIONAR MODO DE JUEGO */
async function getModo(){
    const btnSel = document.getElementById("btn-seleccionar");
    const btnNormal = document.getElementById("normal");
    const btnContra = document.getElementById("contrarreloj");
    btnSel.disabled = true;

    /* AL ESCOGER EL MODO DE JUEGO NORMAL SE GUARDA ESTE EN UNA COOKIE Y SE HABILITA LA POSIBILIDAD DE COMENZAR EL JUEGO */
    btnNormal.addEventListener("click", ()=>{
        localStorage.setItem("tipo-juego" , "normal");
        btnContra.classList.remove("seleccionado");
        btnNormal.classList.add("seleccionado");
        btnSel.disabled = false;
    });
    /* AL ESCOGER EL MODO DE JUEGO A CONTRA-RELOJ SE GUARDA ESTE EN UNA COOKIE,
     APARECE UN POP-UP PIDIENDO EL TIEMPO DE JUEGO, SE GUARDA EN UNA COOKIE
     Y SE HABILITA LA POSIBILIDAD DE COMENZAR EL JUEGO */
    const btnAc =document.getElementById("btn-aceptar-tiempo");
    btnAc.addEventListener("click", ()=>{
        localStorage.setItem("horas", document.getElementById("tiempo").value);
        document.getElementById("popup-tiempo").classList.add("oculto");
    });
    btnContra.addEventListener("click", ()=>{
        localStorage.setItem("tipo-juego" , "contrarreloj");
        btnNormal.classList.remove("seleccionado");
        btnContra.classList.add("seleccionado");
        btnSel.disabled = false;
        document.getElementById("popup-tiempo").classList.remove("oculto");

    });
    /* Cambia el audio a ./audio/fuegos.mp3 */
    musicaFondo = new audio("./audio/hedwigs-theme.mp3");
    function seleccionar() {
        return new Promise((resolve) => {
            btnSel.addEventListener("click", ()=>{
                document.getElementById("modo").classList.add("oculto");
                musicaFondo.audio.setAttribute("loop", "true");
                musicaFondo.play();
                resolve();
            }, {once: true});
        });
    }
    sonido = new audio("./audio/dados.mp3");
    sonido.audio.volume = 0.2;
    fuegos = new audio("./audio/fuegos.mp3");
    await seleccionar();
}
function audio(src) {
    this.audio = document.createElement("audio");
    this.audio.src = src;
    this.audio.setAttribute("preload", "auto");
    this.audio.setAttribute("controls", "none");
    this.audio.style.display = "none";
    document.body.appendChild(this.audio);
    this.play = function(){
        this.audio.play();
    }
    this.stop = function(){
        this.audio.pause();
    }
    this.mute = function (){
        this.audio.volume = 0;
    }
    this.unmute = function (){
        this.audio.volume = 0.2;
    }
}
/* ARRAYS DE LOS JUGADORES */
var jugadoresEnPie = [];
var jugadores = [];

/* CONTADOR DE TIEMPO PARA EL MODO CONTRARRELOJ */
var contTiempo = 7200;
/* JUEGO */
document.addEventListener("DOMContentLoaded", async ()=>{
    await getModo();
    /* SE RECOJE EL TIPO DE JUEGO */
    let tipoPartida = localStorage.getItem("tipo-juego");
    /* FUNCIÓN QUE DA COMIENZO A LA CUENTA ATRÁS */

    function comenzarCuenta(){
        intervalo = setInterval(cuentaAtras, 1000);
    }
    /* FUNCIÓN QUE SE EJECUTA CADA SEGUNDO SI HAY CUENTA ATRÁS */
    function cuentaAtras(){
        /* SE CALCULA Y MUESTRA EL TIEMPO RESTANTE POR PANTALLA */
        const parTiempo = document.getElementById("p-tiempo");
        var tiempoTotal = "";
        function calcTiempo(segundos){
            let horas = Math.floor(segundos/3600);
            let minutos = Math.floor(segundos/60)%60;
            let segun = segundos%60;

            tiempoTotal = horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segun.toString().padStart(2, '0');
        }
        /* SE RESTA UN SEGUNDO */
        contTiempo--;
        calcTiempo(contTiempo);
        parTiempo.innerHTML = tiempoTotal;
        /* EN CASO DE QUE EL TIEMPO HAYA LLEGADO A 0 SE TERMINA LA PARTIDA Y SE BORRA EL INTERVALO */
        if(contTiempo===0){
            finalPartida("contrarreloj");
            clearInterval(intervalo);
        }
    }
    /* SI LA PARTIDA ES A CONTRARRELOJ RECOGE EL TIEMPO Y LO CONVIERTE A SEGUNDOS */
    if(tipoPartida==="contrarreloj"){
        let horasStr = localStorage.getItem("horas");
        let horas = parseInt(horasStr.substr(0, 2));
        let minutos = parseInt(horasStr.substr(3, 2));
        contTiempo = (minutos * 60) + (horas * 3600);
        comenzarCuenta();
    }
    /* SE INICIA EL JUEGO */
    start();
});