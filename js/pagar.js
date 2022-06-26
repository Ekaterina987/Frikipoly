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