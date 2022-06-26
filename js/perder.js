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