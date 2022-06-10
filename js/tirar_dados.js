/* VARIABLE QUE GUARDA LA TIRADA */
var tirada;
var contad = 0;
/* FUNCIÓN QUE SE EJECUTA AL TIRAR LOS DADOS */
function tirar(){
    sonido.play();
    const posAntes = turno.posicion;
    /* SE DESHABILITA LA OPCIÓN DE TIRAR DADOS */
    let btnTirar = document.getElementById("btnDados");
    btnTirar.disabled = true;
    /* SE GUARDAN LOS DATOS DE LA CASILLA EN LA QUE ESTABA EL JUGADOR ANTES DE TIRAR */
    let casillaInicial = document.getElementById(turno.posicion + 1);
    let ficha = document.getElementsByClassName("ficha" + turno.id)[0];
    /* SE GENERA UN NÚMERO ALEATORIO ENTRE EL 2 Y EL 12 QUE SERÁ LA TIRADA */
    tirada = Math.floor(Math.random() * 11) + 2;
    /* SE MUESTRA LA TIRADA POR PANTALLA */
    const tiradaDados = document.getElementById("numTirada");
    if(tirada!=null){
        tiradaDados.innerHTML = tirada;
    }
    /* SE ACTUALIZA LA POSICIÓN DEL JUGADOR */
    turno.posicion = (turno.posicion + tirada) % tablero.length;

    /* SE OCULTA LA FICHA EN LA CASILLA INICIAL Y SE MUESTRA EN LA FINAL */
    let casilla = document.getElementById(turno.posicion + 1);
    moverFicha(tirada, posAntes, ficha, turno.posicion, casillaInicial, casilla);


}
/* FUNCIÓN QUE MUEVE UNA FICHA HACIA ADELANTE */
function moverFicha(tirada, posAntes, ficha, posicion, casillaInicial, casilla){
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
        if(posicion > posAntes && posicion <= 10){
            promesa(ficha, tirada, "izquierda")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion > posAntes && posicion <= 20){
            let primeraTirada = 10 - posAntes;
            let segundaTirada = posicion - 10;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion > posAntes && posicion <= 30){
            let primeraTirada = 10 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = posicion - 20;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if((posicion > posAntes && posicion <= 39) || posicion === 0){
            let primeraTirada = 10 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = posicion === 0 ? 10 : posicion - 30;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>promesa(ficha, cuartaTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= posAntes){
            let primeraTirada = 10 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = posicion;
            promesa(ficha, primeraTirada, "izquierda")
                .then(()=>promesa(ficha, segundaTirada, "arriba"))
                .then(()=>promesa(ficha, terceraTirada, "derecha"))
                .then(()=>promesa(ficha, cuartaTirada, "abajo"))
                .then(()=>promesa(ficha, quintaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }else if(posAntes>=10 && posAntes< 20){
        if(posicion > posAntes && posicion <= 20){
            promesa(ficha, tirada, "arriba")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion > posAntes && posicion <= 30){
            let primeraTirada = 20 - posAntes;
            let segundaTirada = posicion - 20;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if((posicion > posAntes && posicion <= 39) || posicion === 0){
            let primeraTirada = 20 - posAntes;
            let segundaTirada = 10;
            let terceraTirada;
            if(posicion !== 0){
                terceraTirada = posicion - 30;
            }else{
                terceraTirada = 10;
            }

            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion > 0 && posicion <= 10){
            let primeraTirada = 20 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = posicion;
            promesa(ficha, primeraTirada, "arriba")
                .then(()=>promesa(ficha, segundaTirada, "derecha"))
                .then(()=>promesa(ficha, terceraTirada, "abajo"))
                .then(()=>promesa(ficha, cuartaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= posAntes){
            let primeraTirada = 20 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = posicion - 10;
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
        if(posicion > posAntes && posicion <= 30){
            promesa(ficha, tirada, "derecha")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if((posicion > posAntes && posicion <= 39) || posicion === 0){
            let primeraTirada = 30 - posAntes;
            let segundaTirada;
            if(posicion!==0){
                segundaTirada = posicion - 30;
            }else{
                segundaTirada = 10;
            }
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= 10){
            let primeraTirada = 30 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = posicion;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= 20){
            let primeraTirada = 30 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = posicion - 10;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>promesa(ficha, cuartaTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= posAntes){
            let primeraTirada = 30 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = 10;
            let quintaTirada = posicion - 20;
            promesa(ficha, primeraTirada, "derecha")
                .then(()=>promesa(ficha, segundaTirada, "abajo"))
                .then(()=>promesa(ficha, terceraTirada, "izquierda"))
                .then(()=>promesa(ficha, cuartaTirada, "arriba"))
                .then(()=>promesa(ficha, quintaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }else if(posAntes>=31){
        if((posicion > posAntes && posicion <= 39) || posicion===0){
            promesa(ficha, tirada, "abajo")
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= 10){
            let primeraTirada = 40 - posAntes;
            let segundaTirada = posicion;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= 20){
            let primeraTirada = 40 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = posicion - 10;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "arriba"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= 30){
            let primeraTirada = 40 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada = posicion - 20;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "arriba"))
                .then(()=>promesa(ficha, cuartaTirada, "derecha"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }else if(posicion <= posAntes){
            let primeraTirada = 40 - posAntes;
            let segundaTirada = 10;
            let terceraTirada = 10;
            let cuartaTirada =10;
            let quintaTirada = posicion - 30;
            promesa(ficha, primeraTirada, "abajo")
                .then(()=>promesa(ficha, segundaTirada, "izquierda"))
                .then(()=>promesa(ficha, terceraTirada, "arriba"))
                .then(()=>promesa(ficha, cuartaTirada, "derecha"))
                .then(()=>promesa(ficha, quintaTirada, "abajo"))
                .then(()=>{
                    /* SE PROCEDE A JUGAR */
                    jugadorJuego(casillaInicial, casilla);
                });
        }
    }
}