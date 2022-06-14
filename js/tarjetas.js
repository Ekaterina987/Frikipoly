/* TARJETAS */

/*POCIONES*/
const t1 = new Tarjeta(1, "La venta de tus pociones te produce 50 Galeones", 50, "transaccion");
const t2 = new Tarjeta(2, "Pagas al hospital San Mungo 100 Galeones", -100, "transaccion");
const t3 = new Tarjeta(3, "Cobras una herencia 100 Galeones", 100, "transaccion");
const t4 = new Tarjeta(4, "Recibe 100 Galeones por los intereses de tu plazo fijo en Gringotts", 100, "transaccion");
const t5 = new Tarjeta(5, "Tienes que comprar el libro 'criaturas mágicas y donde encontrarlas', pagas 75 Galeones", -75, "transaccion");
const t6 = new Tarjeta(6, "En tu cumpleaños recibes de cada jugador 10 Galeones", 0, "transaccionJugador");
const t7 = new Tarjeta(7,"Recibes 25 Galeones como intereses de tus ventas por pociones de amor", 25, "transaccion");
const t8 = new Tarjeta(8, "Paga una multa de 10 Galeones o bien saca una carta de hechizos", -10, "transaccion-hechizos");
const t9 = new Tarjeta(9, "Usas un trasladador de forma accidental y retrocedes hasta Privet Drive n° 4", 1, "movimiento-atras-casilla");
const t10 = new Tarjeta(10, "Eres elegido prefecto, recibes 50 Galeones", 50, "transaccion");
const t11 = new Tarjeta(11, "Te tomas una poción y pones una matrícula de honor a Eka y a Tony", 0, "Matricula");


/*POCIONES Y HECHIZOS*/
const t12 = new Tarjeta (12, "Has usado una maldición imperdonable vas a Azkaban sin pasar por la casilla de salida", 10, "movimiento-casilla-azkaban");
const t13 = new Tarjeta (13, "Usa un trasladador y coloquese en la casilla de salida", 0, "movimiento-casilla");


/*HECHIZOS*/
const t14 = new Tarjeta(14, "Gringotts te paga 50 Galeones de interes",50, "transaccion");
const t15 = new Tarjeta(15, "Usas un trasladador de forma accidental y retrocedes tres casillas", 3,"movimiento-atras-cantidad");
const t16 = new Tarjeta(16,"Has ganado un partido de quidditch y cobras 100 Galeones", 100, "transaccion");
const t17 = new Tarjeta(17, "Has sido multado por departamento de regulación y control de criaturas mágicas al exportar un escarbato con 20 Galeones", -20, "transaccion");
const t18 = new Tarjeta(18, "Paga la multa de 15 Galeones por realizar un conjuro obliviate a un profesor para que olvide realizar un examen", -15, "transaccion");
const t19 = new Tarjeta(19, "Quedas libre de Azkaban", 0, "libertad");
const t20 = new Tarjeta (20, "Lanza un hechizo 'reparo' y haz reparaciones en todos tus edificios paga por cada casa 25 Galeones paga por cada hotel 100 Galeones",0 , "pagoEdificios");
const t21 = new Tarjeta (21, "Usas un trasladador y te colocas en la casilla de salida", 0, "movimiento-casilla");
const t22 = new Tarjeta(22, "Usas un trasladador y te colocas en 'Grimmauld Place' si pasas por la casilla de salida cobras 200 Galeones", 11, "movimiento-casilla");
const t23 = new Tarjeta(23, "Pagas por gastos de Hogwarts 150 Galeones", -150, "transaccion");
const t24 = new Tarjeta(24, "Recibes la capa de invisibilidad", 0, "invisibilidad");

/* GRUPOS TARJETAS */
let tarjetasPociones = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13];
let tarjetasHechizos = [ t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23,t24];

var tarjeta;

/* GENERACIÓN TARJETA ALEATORIA */
async function randomTarjeta(tipo){
    /* SE GENERA UNA TARJETA ALEATORIA DEL ARRAY DE TARJETAS */
    let numTarjetaPoc = Math.floor(Math.random() * tarjetasPociones.length);
    let numTarjetaHech = Math.floor(Math.random() * tarjetasHechizos.length);
    /* DEPENDIENDO DEL TIPO SE ESCOGEN DE UN ARRAY U OTRO */
    if(tipo === "pociones"){
        tarjeta = tarjetasPociones[numTarjetaPoc];
    }else{
        tarjeta = tarjetasHechizos[numTarjetaHech];
    }
    /* SE GUARDAN LA POSICIÓN DEL JUGADOR, SU FICHA, LA CASILLA EN LA QUE ESTÁ, EL BOTÓN DE FINALIZAR EL TURNO Y EL POPUP PARA SU MANEJO SEGÚN LA TARJETA */
    const pos = turno.posicion;
    const fich = document.getElementById("ficha" + turno.id);
    const casillaAntes = document.getElementById(turno.posicion + 1);
    const btnFinalizar = document.getElementById("btnFinTurno");

    /* REALIZA UNA ACCIÓN DEPENDIENDO DEL TIPO DE TARJETA*/
    switch (tarjeta.tipo){
        case "transaccion":
            await asyncTransaccion();
            break;
        case "movimiento-casilla":
            await asyncMovimientoCasilla();
            break;
        case "movimiento-cantidad":
            await asyncMovimientoCantidad();
            break;
        case "movimiento-casilla-azkaban":
            await asyncMovimAzkaban();
            break;
        case "movimiento-atras-casilla":
            await asyncMovimientoAtrasCasilla();
            break;
        case "movimiento-atras-cantidad":
            await asyncMovimientoAtrasCantidad();
            break;
        case "transaccionJugador":
            await asyncTransaccionJugador();
            break;
        case "pagoEdificios":
            await asyncPagoEdificios();
            break;
        case "libertad":
            await asyncLibertad();
            break;
        case "invisibilidad":
            await asyncInvisibilidad();
            break;
        case "transaccion-hechizos":
            await asyncTransaccionHechizos();
            break;
        default:
            await defecto();
            break;
    }
    /* POR DEFECTO SOLO SE MUESTRA EL TEXTO DE LA TARJETA */
    async function defecto(){
        await popUp(tarjeta.texto);
    }
    /* SI ES UNA TRANSACCIÓN SE SUMA O RESTA DINERO AL JUGADOR */
    async function asyncTransaccion(){
        if(tarjeta.numero < 0){
            await asyncPagar(tarjeta.texto,"No puedes permitirte pagar el gasto", Math.abs(tarjeta.numero), turno, null);
        }else{
            await popUp(tarjeta.texto);
            turno.dinero+=tarjeta.numero;
            actualizarDinero(turno);
        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA MOVER A UNA CASILLA CONCRETA HACIA ADELANTE */
    async function asyncMovimientoCasilla(){
        await popUp(tarjeta.texto);
        movimCasilla();

        function movimCasilla(){
            btnFinalizar.disabled = true;
            let distancia;
            if(tarjeta.numero>turno.posicion){
                distancia = tarjeta.numero-turno.posicion;
            }else{
                distancia = (40-turno.posicion) + tarjeta.numero;
            }
            casillaDespues = document.getElementById(tarjeta.numero + 1);
            turno.posicion = tarjeta.numero;
            moverFicha(distancia, pos, fich, tarjeta.numero, casillaAntes, casillaDespues);

        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA MOVER UN NUMERO HACIA ADELANTE */
    async function asyncMovimientoCantidad(){
        await popUp(tarjeta.texto);
        movimCantidad();

        function movimCantidad(){
            btnFinalizar.disabled = true;
            casillaDespues = document.getElementById(pos + tarjeta.numero + 1);
            turno.posicion = (turno.posicion + tarjeta.numero) % tablero.length;
            moverFicha(tarjeta.numero, pos, fich, (pos + tarjeta.numero) % 40, casillaAntes,casillaDespues);

        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA MOVER A LA CASILLA DE AZKABAN */
    async function asyncMovimAzkaban(){
        await popUp(tarjeta.texto);

        const ficha = document.getElementById("ficha" + turno.id);
        casiFinal = tablero[turno.posicion];
        turno.azkaban = true;

        btnFinalizar.disabled=true;
        asyncMovimientoAzkaban(ficha, casiFinal);
        turno.posicion = 10;
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA MOVER A UNA CASILLA CONCRETA HACIA ATRÁS */
    async function asyncMovimientoAtrasCasilla(){
        await popUp(tarjeta.texto);
        movimAtrasCas();

        function movimAtrasCas(){
            btnFinalizar.disabled = true;
            let distanciaAtras;
            if(tarjeta.numero<turno.posicion){
                distanciaAtras = turno.posicion - tarjeta.numero;
            }else{
                distanciaAtras = turno.posicion + (40 - tarjeta.numero);
            }
            casillaDespues = document.getElementById(tarjeta.numero + 1);
            turno.posicion = tarjeta.numero;
            moverAtras(distanciaAtras, pos, fich, tarjeta.numero, casillaAntes, casillaDespues);

        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA MOVER UN NUMERO HACIA ATRÁS */
    async function asyncMovimientoAtrasCantidad(){
        await popUp(tarjeta.texto);

        movimAtrasCan();
        function movimAtrasCan(){
            btnFinalizar.disabled = true;
            casillaDespues = document.getElementById(pos - tarjeta.numero + 1);
            if(turno.posicion - tarjeta.numero < 0){
                turno.posicion = 40 - (tarjeta.numero - turno.posicion);
            }else{
                turno.posicion = turno.posicion - tarjeta.numero;
            }
            moverAtras(tarjeta.numero, pos, fich, turno.posicion, casillaAntes,casillaDespues);

        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA RECIBIR DINERO DE UN JUGADOR */
    async function asyncTransaccionJugador(){
        await popUp(tarjeta.texto);
        for (const jugador of jugadoresEnPie) {
            if(jugador!==turno){
                await asyncPagar(jugador.nombre + " debes pagar 10 Galeones a " + turno.nombre,
                    "No puedes permitirte pagar el regalo, has perdido" ,10, jugador, turno);
            }
        }
    }
    /* FUNCIÓN QUE SE EJECUTA EN CASO DE QUE SE DEBA PAGAR UNA CANTIDAD EN BASE A LOS EDIFICIOS CONSTRUIDOS */
    async function asyncPagoEdificios(){
        await popUp(tarjeta.texto);
        var pagar = 0;
        turno.propiedades.forEach(propiedad=>{
            if (propiedad.tipo === "propiedad"){
                if(propiedad.hoteles===0){
                  pagar+=(propiedad.casas*25);
                }
                console.log(propiedad.nombre);
                pagar+=(propiedad.hoteles*100);
            }

        });
        await asyncPagar("El total son " + pagar + " Galeones", "No puedes permitirte este gasto, has perdido", pagar, turno, null);

    }
    /* FUNCIÓN QUE SE EJECUTA SI LA TARJETA ES DE QUEDAR LIBRE DE AZKABAN, CREA UNA TARJETA EN EL ÁREA DEL JUGADOR O AÑADE UNA CANTIDAD A LA TARJETA,
     DICHA TARJETA PODRÁ SER UTILIZADA PARA SALIR DE AZKABAN */
    async function asyncLibertad(){
        await popUp(tarjeta.texto);

        const tarjetaLibertad = document.createElement("div");
        tarjetaLibertad.id="tarjeta-libertad" + turno.id;
        tarjetaLibertad.classList.add("tarjeta-libertad");
        const divInterno = document.createElement("div");
        divInterno.id="div-interno-tarjeta-lib" + turno.id;
        divInterno.classList.add("div-interno-tarjeta");
        const textoTarjeta = document.createElement("p");
        textoTarjeta.id="texto-tarjeta-libertad" + turno.id;
        textoTarjeta.classList.add("texto-tarjeta");
        textoTarjeta.appendChild(document.createTextNode("Libertad"));
        const cantidad = document.createElement("p");
        cantidad.id="texto-tarjeta-cantidad" + turno.id;
        cantidad.classList.add("cantidad-tarjeta");
        const divTarjeta = document.createElement("div");
        divTarjeta.id="div-tarjeta" + turno.id;
        divTarjeta.classList.add("div-tarjeta");
        const  contTexto = document.createElement("div");

        contTexto.id="cont-texto-tarjeta" + turno.id;
        contTexto.classList.add("cont-texto-tarjeta");

        contTexto.appendChild(textoTarjeta);
        contTexto.appendChild(cantidad);
        contTexto.appendChild(divTarjeta);
        divInterno.appendChild(contTexto);
        tarjetaLibertad.appendChild(divInterno);
        if(turno.tarjetasLibertad===0){
            turno.tarjetasLibertad++;
            const contenedor = document.getElementById("cont-tarjetas" + turno.id);
            contenedor.appendChild(tarjetaLibertad);
        }else{
            turno.tarjetasLibertad++;
            const cant = document.getElementById("texto-tarjeta-cantidad" + turno.id);
            cant.innerHTML= "x" + turno.tarjetasLibertad;
        }

    }
    /* FUNCIÓN QUE SE EJECUTA SI LA TARJETA ES DE INVISIBILIDAD, CREA UNA TARJETA EN EL ÁREA DEL JUGADOR O AÑADE UNA CANTIDAD A LA TARJETA,
     DICHA TARJETA PODRÁ SER UTILIZADA PARA EVADIR UN PAGO */
    async function asyncInvisibilidad() {
        await popUp(tarjeta.texto);


        const tarjetaInvisibilidad = document.createElement("div");
        tarjetaInvisibilidad.id="tarjeta-invisibilidad" + turno.id;
        tarjetaInvisibilidad.classList.add("tarjeta-invisibilidad");
        const divInterno = document.createElement("div");
        divInterno.id="div-interno-tarjeta-invi" + turno.id;
        divInterno.classList.add("div-interno-tarjeta");
        const textoTarjeta = document.createElement("p");
        textoTarjeta.id="texto-tarjeta-invisibilidad" + turno.id;
        textoTarjeta.classList.add("texto-tarjeta");
        textoTarjeta.appendChild(document.createTextNode("Invisible"));
        const cantidad = document.createElement("p");
        cantidad.id="texto-tarjeta-invisibilidad-cantidad" + turno.id;
        cantidad.classList.add("cantidad-tarjeta");
        const divTarjeta = document.createElement("div");
        divTarjeta.id="div-tarjeta-invisibilidad" + turno.id;
        divTarjeta.classList.add("div-tarjeta");
        divTarjeta.classList.add("div-tarjeta-invisibilidad");
        const  contTexto = document.createElement("div");

        contTexto.id="cont-texto-tarjeta-invisibilidad" + turno.id;
        contTexto.classList.add("cont-texto-tarjeta");

        contTexto.appendChild(textoTarjeta);
        contTexto.appendChild(cantidad);
        contTexto.appendChild(divTarjeta);
        divInterno.appendChild(contTexto);
        tarjetaInvisibilidad.appendChild(divInterno);
        if(turno.tarjetasInvisibilidad===0){
            turno.tarjetasInvisibilidad++;
            const contenedor = document.getElementById("cont-tarjetas" + turno.id);
            contenedor.appendChild(tarjetaInvisibilidad);
        }else{
            turno.tarjetasInvisibilidad++;
            const cant = document.getElementById("texto-tarjeta-invisibilidad-cantidad" + turno.id);
            cant.innerHTML= "x" + turno.tarjetasInvisibilidad;
        }
    }
    /* FUNCIÓN QUE COMPRUEBA SI EL JUGADOR PREFIERE PAGAR UNA MULTA O SACAR UNA CARTA ALEATORIA DE HECHIZOS */
    async function asyncTransaccionHechizos(){
        const btn = document.getElementById("btn-aceptar1");

        const btnCancelar = document.getElementById("btn-cancelar");

        btn.innerHTML = "Pagar";
        btnCancelar.innerHTML = "Tarjeta";
        try{
            await popUpConfirm(tarjeta.texto);
            btn.innerHTML = "Aceptar";
            btnCancelar.innerHTML = "Cancelar";
            await asyncPagar("Has elegido pagar la multa de 10 Galeones","No puedes permitirte pagar la multa", Math.abs(tarjeta.numero), turno, null);
        }catch (e){
            await randomTarjeta("hechizos");
        }

        btn.innerHTML = "Aceptar";
        btnCancelar.innerHTML = "Cancelar";
    }

}