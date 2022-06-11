/* ANIMACIONES FICHA */
/* Cambia el valor de la velocidad */
var velocidad = 4;
function animacionFichaArriba(ficha,tirada, posx, posy) {
    var start = null;
    var distancia = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) * tirada;
    var myRequest;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        ficha.style.transform = 'translate(' + posx + 'px, ' +
            (posy - Math.min(progress / velocidad,distancia)) + 'px)';
        if (progress < distancia*velocidad) {
            myRequest = window.requestAnimationFrame(step);
        }
    }
    myRequest = window.requestAnimationFrame(step);
}
function animacionFichaDerecha(ficha, tirada, posx , posy) {
    var start = null;
    var distancia = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) * tirada;
    var myRequest;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        ficha.style.transform = 'translate(' + (posx + Math.min(progress / velocidad,distancia))  + 'px, ' +
            posy + 'px)';
        if (progress < distancia*velocidad) {
            myRequest = window.requestAnimationFrame(step);
        }
    }
    myRequest = window.requestAnimationFrame(step);
}
function animacionFichaAbajo(ficha, tirada, posx, posy) {
    var start = null;
    var distancia = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) * tirada;
    var myRequest;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        ficha.style.transform = 'translate(' + posx + 'px, ' + (posy +
            Math.min(progress / velocidad,distancia)) + 'px)';
        if (progress < distancia*velocidad) {
            myRequest = window.requestAnimationFrame(step);
        }
    }
    myRequest = window.requestAnimationFrame(step);
}
function animacionFichaIzquierda(ficha, tirada, posx , posy) {
    var start = null;
    var distancia = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) * tirada;
    var myRequest;
    function step(timestamp) {
        if (!start) start = timestamp;
            var progress = timestamp - start;
            ficha.style.transform = 'translate(' + (posx - Math.min(progress / velocidad,distancia))  + 'px, ' +
                posy + 'px)';
            if (progress < distancia*velocidad) {
                myRequest = window.requestAnimationFrame(step);
            }
    }
    myRequest = window.requestAnimationFrame(step);
}
function animacionFichaCarcel(ficha, casilla){
    const style = getComputedStyle(ficha);
    var posx = 0;
    var posy = 0;
    if(style.transform!=="none"){
        var matrix = new WebKitCSSMatrix(style.transform);
        posx = matrix.m41;
        posy = matrix.m42;
    }
    var start = null;
    var distanciaHor = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) *(casilla.columna - 1);
    var distanciaVert = (parseInt(ladoTablero.slice(0,ladoTablero.length - 2)) /12) *(11 - casilla.fila);
    var distancia = Math.sqrt(Math.pow(distanciaHor, 2) + Math.pow(distanciaVert, 2));
    var progresHor;
    var progresVert;
    if(distanciaHor=== 0){
        progresHor = 0;
    }else{
        progresHor = distanciaHor/distancia;
    }
    if(distanciaVert === 0){
        progresVert = 0;
    }else{
        progresVert = distanciaVert/distancia;
    }
    var myRequest;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        ficha.style.transform = 'translate(' + (posx - ((progresHor*progress)/velocidad))  + 'px, ' +
            (posy + ((progresVert*progress)/velocidad)) + 'px)';
        if (progress < (distancia*velocidad)) {
            myRequest = window.requestAnimationFrame(step);
        }
    }
    myRequest = window.requestAnimationFrame(step);
}