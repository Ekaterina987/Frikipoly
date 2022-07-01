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

/* VARIABLE EN LA QUE SE GUARDA EL OBJETO CASILLA EN EL QUE SE DESEA REALIZAR ACCIONES */
var casi;

/* VARIABLE EN LA QUE SE GUARDA EL PROPIETARIO DE LA CASILLA SI TUVIESE */
var propietario;

/* FUNCIONES */

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

/* FUNCIÓN PARA ACTUALIZAR POR PANTALLA EL DINERO DEL JUGADOR */
function actualizarDinero(jugador){
    const dinero = document.getElementById("sdinero" + jugador.id);
    dinero.innerHTML = jugador.dinero;
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

/* FUNCIÓN QUE ESTABLECE LOS VALORES INICIALES */
async function start(){
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


/* ARRAYS DE LOS JUGADORES */
var jugadoresEnPie = [];
var jugadores = [];

/* CONTADOR DE TIEMPO PARA EL MODO CONTRARRELOJ */
var contTiempo = 7200;
/* JUEGO */
document.addEventListener("DOMContentLoaded", async ()=>{
    await getModo();

    /* SE INICIA EL JUEGO */
    start();
});