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