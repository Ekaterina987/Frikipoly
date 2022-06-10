/* VARIABLE QUE GUARDA SI SE ESTÁ MOVIENDO HACIA ATRÁS PARA NO PERMITIR QUE OCURRAN CIERTOS EVENTOS */
var atras = false;

/* ANIMACIONES MOVIMIENTO FICHAS HACIA ATRÁS */
function moverAtras(tirada, posAntes, ficha, posicion, casillaInicial, casilla){
    atras = true;
    /* SE CREA LA PROMESA QUE SERÁ LANZADA CADA VEZ QUE SE MUEVA LA FICHA */
    var promesa = function(ficha, distancia, direccion)
    {
        return new Promise(function(resolve)
        {
            var max = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) * distancia;
            const style = getComputedStyle(ficha);
            var posx = 0;
            var posy = 0;
            if(style.transform!=="none"){
                var matrix = new WebKitCSSMatrix(style.transform);
                posx = matrix.m41;
                posy = matrix.m42;
            }
            switch (direccion){
                case "izquierda":
                    animacionFichaIzquierda(ficha, distancia, posx, posy);
                    break;
                case "derecha":
                    animacionFichaDerecha(ficha, distancia, posx, posy);
                    break;
                case "arriba":
                    animacionFichaArriba(ficha, distancia, posx, posy);
                    break;
                case "abajo":
                    animacionFichaAbajo(ficha, distancia, posx, posy);
                    break;
            }

            setTimeout(function(){
                resolve();
            }, (max*4));
        });
    }
    /* SE CALCULA LA POSICIÓN INICIAL DE LA FICHA Y LA FINAL Y EN BASE A ESTO SE GENERAN LAS ANIMACIONES CORRESPONDIENTES */
    if(posAntes >= 0 && posAntes < 10 ){
        if(posicion < posAntes && posicion >= 0){
            promesa(ficha, tirada, "derecha")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion >= 30 && posicion < 40){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 40 - posicion;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion >= 20 && posicion <30){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 30 - posicion;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion >= 10 && posicion < 20){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 20 - posicion;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>promesa(ficha, cuartaTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion >= posAntes){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = 10 - posicion;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>promesa(ficha, cuartaTirada, "abajo"))
                .then(()=>promesa(ficha, quintaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }else if(posAntes>=10 && posAntes< 20){
        if(posicion < posAntes && posicion >= 10){
            promesa(ficha, tirada, "abajo")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < posAntes && posicion >= 0){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10 - posicion;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 40 && posicion >= 30){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 40 - posicion;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>promesa(ficha, terceraTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <30 && posicion >= 20){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 30 - posicion;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>promesa(ficha, terceraTirada, "arriba"))
                .then(()=>promesa(ficha, cuartaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 20){
            let primeraTirada = posAntes - 10;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = 20 - posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>promesa(ficha, cuartaTirada, "izquierda"))
                .then(()=>promesa(ficha, quintaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }else if(posAntes>=20 && posAntes<30){
        if(posicion < posAntes && posicion >= 20){
            promesa(ficha, tirada, "izquierda")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 20 && posicion >= 10){
            let primeraTirada = posAntes - 20;
            let segundaTirada = 20 - posicion;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 10){
            let primeraTirada = posAntes - 20;
            let segundaTirada = 10;
            let terceraTirada = 10 - posicion;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 40 && posicion >= 30){
            let primeraTirada = posAntes - 20;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 40 - posicion;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>promesa(ficha, cuartaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 30 && posicion >= 20){
            let primeraTirada = posAntes - 20;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = 30 - posicion;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>promesa(ficha, cuartaTirada, "arriba"))
                .then(()=>promesa(ficha, quintaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }else if(posAntes>=31){
        if(posicion < 40 && posicion >= 30){
            promesa(ficha, tirada, "arriba")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 30 && posicion >= 20){
            let primeraTirada = posAntes - 30;
            let segundaTirada = 30 - posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 20 && posicion >= 10){
            let primeraTirada = posAntes - 30;
            let segundaTirada = 10;
            let terceraTirada = 20 - posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion < 10){
            let primeraTirada = posAntes - 30;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10 - posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>promesa(ficha, cuartaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion > posAntes){
            let primeraTirada = posAntes - 30;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada =10;
            let quintaTirada = 10 - posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>promesa(ficha, cuartaTirada, "derecha"))
                .then(()=>promesa(ficha, quintaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }
}