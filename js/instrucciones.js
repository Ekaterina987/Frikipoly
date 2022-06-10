/* CARRUSEL DE INSTRUCCIONES*/
class Carousel extends HTMLElement {
    constructor() {
        super();
    }
    /* SE CREA EL ELEMENTO CARRUSEL Y SUS PÁGINAS DE INSTRUCCIONES */
    connectedCallback() {
        var contPagina = 1;
        let shadowRoot = this.attachShadow({ mode: "open" });

        /* CONTENEDOR DEL TEXTO Y LAS FLECHAS */
        const contenInterno = document.createElement("div");
        contenInterno.id="contenedor-texto";
        /* FLECHA IZQUIERDA */
        const btnIzq = document.createElement("button");
        btnIzq.classList.add("arrow");
        btnIzq.classList.add("arrow-izquierda");
        btnIzq.id="arrow-izquierda";
        /* ICONO DE LA FLECHA */
        const iconoIzq = document.createElement("i");
        iconoIzq.classList.add("fas");
        iconoIzq.classList.add("fa-angle-left");
        btnIzq.appendChild(iconoIzq);
        /* CONTENEDOR DE LAS DISTINTAS PÁGINAS */
        const contenElem = document.createElement("div");
        contenElem.id="contenedor-elementos";
        /* PÁGINAS CON INSTRUCCIONES */
        const pag1 = crearPagina(["Objetivo","Inicio", "El juego"],
            [
                "El objetivo del juego es convertirse en el jugador más rico a través de la compra, alquiler y venta de propiedades.",
                "Se ponen los nombres de los jugadores en las casillas y se da a añadir, a cada jugador se le asigna una ficha que representa a dicho jugador en sus viajes alrededor del tablero, dicha ficha tendrá el mismo color que el nombre que aparezca en pantalla. A cada jugador se le dan también 1500 Galeones que se verán reflejados en su cuenta.",
                "Después el jugador hará clic en los dados para tirar, y automáticamente su ficha se adelantará los espacios que indican los dados. Cuando ha terminado la jugada le pasa el turno al siguiente jugador. Las fichas quedan en los espacios que han ocupado y siguen adelantando a partir de dicho punto cuando le toca el turno de nuevo a cada jugador. Pueden quedar a la vez dos o más fichas en el mismo espacio."
            ]);
        const pag2 =crearPagina(["Salida", "Compra de una propiedad"],
            [
                "Cada vez que la ficha de un jugador va a parar o pasa sobre el espacio \"SALIDA”, sin tener en cuenta si ha llegado a dicho espacio o pasado por el mismo como resultado de echar los dados o de robar una carta, la banca le paga unos 200 galeones.",
                "Cuando la ficha de un jugador va a parar a una propiedad sin dueño, este jugador tiene la opción de comprar dicha propiedad por el precio que puede ver en la misma casilla. Al comprarla la casilla se rodea del color del jugador acreditándose como dueño."
            ]);
        const pag3=crearPagina(["Llegada a una propiedad con dueño"], [
            "Si la ficha de un jugador llega a una propiedad que tiene dueño, el dueño de dicha casilla le cobra el alquiler estipulado en la lista correspondiente a la misma que aparece al pasar el ratón sobre la casilla.\n" +
            "Nota: Si en el solar hay una o varias casas el alquiler es mayor del que corresponde a un solar sin construcción.\n" +
            "Es sumamente ventajoso poseer las Escrituras de Propiedad de todas las fincas de un grupo completo de determinado color (por ejemplo: Privet Drive n° 4 y Godric's Hollow; o de Las Tres Escobas, Casa de los Gritos y Artículos de bromas de Zonko) dado que te permite construir.\n" +
            "Es mucho más ventajoso ser dueño de casas y hoteles que de solares sin construir porque los alquileres de los primeros son mucho más altos que los de los solares sin construir."
        ]);
        const pag4=crearPagina(["Construir"],
            [
                "Cuando un jugador posee todas las propiedades de un mismo color, puede aumentar las rentas que le proporcionan los alquileres construyendo casas y hoteles en cada uno de los terrenos. El precio de las construcciones se puede visualizar al pasar por la propiedad el ratón sobre la casilla. Si un jugador no posee las cartas del mismo color, no puede comprar casas en la propiedad correspondiente.\n" +
                "Es necesario haber pasado al menos un turno desde que adquirió todas las casillas de un mismo grupo para comprar una casa, en cambio no es necesario estar en alguna de las propiedades. En cualquier turno del jugador podrá adquirir casas u hoteles, y el jugador disponga del dinero y de los títulos de propiedad de todo el grupo, puede adquirir construcciones.\n" +
                "Las propiedades deben incrementarse a la par; si un terreno posee una casa, la próxima casa debe ir a otro terreno del mismo grupo.\n" +
                "Cuando un jugador tiene cuatro casas en una propiedad, puede comprar un hotel que las sustituya. El precio también es el mismo que el de una casa. De todas maneras, es preciso que haya cuatro casas en cada uno de los terrenos del grupo antes de levantar un solo hotel (existe el límite de un hotel por terreno)."

            ]);
        const pag5=crearPagina(["Llegada a los espacios de \"Pociones\" o \"Hechizos\"", "Impuestos"], [
            "Cuando esto ocurre, al jugador se le da una carta aleatoria, y debe de seguir las instrucciones impresas en la misma.\n" +
            "La carta \"Salir libre de la Azkaban\", te permite salir de Azkaban, se conserva hasta que se utilice y una vez utilizada dejas de tenerla, no existe límite para acumularlas.\n" +
            "La carta \"Recibes la capa de invisibilidad\", con ella evitaras pagar la próxima vez, ya sea en impuestos, casillas de propiedad o tarjetas.",
            "Cuando el jugador llega al espacio de impuestos debe pagar a la banca el dinero que corresponde según casilla."
        ]);
        const pag6=crearPagina(["Azkaban 1ª Parte", "", "", ""], [
            "El jugador va a la cárcel cuando:",
            "- Su pieza va a parar al espacio marcado \"Vayase a Azkaban\".",
            "- Roba una carta marcada \"Vayase a Azkaban.",
            "Cuando se envía a la Cárcel a un jugador no puede cobrar el sueldo de 200 Galeones en dicho movimiento porque sin importar el lugar en donde se halle situada su pieza en el recorrido del tablero, tiene que trasladarla directamente a la cárcel. Siempre que se le envía a la cárcel termina el turno de un jugador.\n" +
            "Si en el curso de una jugada normal la ficha de un jugador llega al espacio \"Azkaban\", el jugador no sufre ningún castigo, está de visita, y sigue adelante de la manera normal cuando le toca de nuevo el turno."
        ]);
        const pag7=crearPagina(["Azkaban 2ª Parte", "", "", "", "", "El gran comedor"], [
            "El jugador puede salir de la Cárcel de alguna de las siguientes maneras:",
            "- Pagando una multa de 50 Galeones",
            "- Esperando 3 turnos.",
            "- Entregando una carta de “Salir de Azkaban.",
            "Aunque esté en la cárcel el jugador puede comprar y vender propiedades, casas y hoteles y cobrar alquileres.",
            "El jugador cuya ficha va a parar a este espacio no reciben ningún dinero, propiedad ni premios de ninguna clase. Se trata simplemente de un lugar de descanso \"gratis\"."
        ]);
        const pag8=crearPagina([ "Las casillas Honeydukes o Sortilegios Weasley", "Las salas comunes de Hogwarts", "", "", "", ""],[
            "Si caes en alguna de ellas y tiene propietario, le pagaras 4 veces el número salido en los dados, si tiene solo una de ellas o 10 veces si es dueño de las dos.",
            "Si caes en alguna de ellas y tiene propietario, pagaras según el número de ellas que tenga:",
            "- 1 sala común:  50 galeones.",
            "- 2 salas comunes:  100 galeones.",
            "- 3 salas comunes:  150 galeones.",
            "- 4 salas comunes:  100 galeones."
        ]);
        const pag9=crearPagina(["Las casas"], [
            "Cuando un jugador posee todas las propiedades de un grupo del mismo color puede comprar casas y levantarlas en dichas propiedades.\n" +
            "Si compra una sola casa, la situará en cualquiera de las propiedades del grupo. La segunda casa que compre y levante tendrá que situarse en uno de los solares no ocupados de este grupo completo de un solo color o de algún otro de dichos grupos de su propiedad.\n" +
            "Al pasar el ratón sobre la casilla se indica el precio que debe pagar por cada casa.\n" +
            "El jugador podrá comprar y construir, de conformidad con las reglas que anteceden y en cualquier momento, todas las casas que juzgue conveniente y le permita su situación económica. Pero debe construir en partes iguales (es decir que no podrá construir más de una casa en un solar de un grupo de un determinado color hasta haber construido una casa en cada solar de dicho grupo. Cuando lo haya hecho podrá entonces empezar a construir la segunda fila de casas y así sucesivamente hasta llegar al límite de cuatro casas por cada solar. Por ejemplo, no podrá construir tres casas en un solo solar mientras exista tan sólo una casa en otro solar del mismo grupo).\n" +
            "De la misma forma que hay que construir en partes iguales, también hay que deshacerse en partes iguales de las casas al volverlas."
        ]);
        const pag10 = crearPagina(["Los hoteles", "Venta de propiedades", "", ""],[
            "Antes de poder comprar un edificio de hotel, el jugador ha de tener cuatro casas en cada solar de un grupo completo de un solo color. Cuando lo logre podrá comprar un hotel para levantarlo en cualquier solar de dicho grupo de un solo color, desapareciendo de la pantalla las cuatro casas allí existentes y pagando el precio del hotel que indique la Escritura de Propiedad. En cada solar no puede construirse más de un hotel.",
            "En el caso de que por necesidad de pago de deudas un jugador se viera obligado a vender alguna de sus propiedades este obtendrá el 50% de su valor, lo hará en el siguiente orden:",
            "- Edificios: Antes de vender cualquier otra propiedad tendrá que vender todos los edificios, y además tendrá que ir vendiendo de forma proporcional de un mismo grupo de propiedades.",
            "- Propiedades: Estas se quedarán libres después de venderse."
        ]);
        const pag11 = crearPagina(["Quiebra", "Juego clásico o contrarreloj", "", ""], [
           "Un jugador entra en quiebra cuando debe más a otro jugador o al Banco que lo que puede pagar. Si es deudor de otro jugador tiene que entregarle a dicho jugador todo el valor de sus bienes y quedándose libres sus propiedades.",
            "El juego permite los dos tipos de jugadas.",
            "-La clásica: en la que el jugador gana cuando consigue que los otros jugadores entren en quiebra.",
            "-Contrarreloj: al registrar los jugadores se elige el tiempo de la partida, y gana el jugador que no haya terminado en quiebra y la sumas de las propiedades y dinero sea mayor."
        ]);

        /* FLECHA DE LA DERECHA*/
        const btnDch = document.createElement("button");
        btnDch.classList.add("arrow");
        btnDch.classList.add("arrow-derecha");
        btnDch.id="arrow-derecha";
        /* ICONO DE LA FLECHA DE LA DERECHA */
        const iconoDch = document.createElement("i");
        iconoDch.classList.add("fas");
        iconoDch.classList.add("fa-angle-right");
        btnDch.appendChild(iconoDch);

        pag1.classList.remove("oculto");
        pag1.classList.remove("pos-derecha");

        contenInterno.appendChild(btnIzq);
        contenElem.appendChild(pag1);
        contenElem.appendChild(pag2);
        contenElem.appendChild(pag3);
        contenElem.appendChild(pag4);
        contenElem.appendChild(pag5);
        contenElem.appendChild(pag6);
        contenElem.appendChild(pag7);
        contenElem.appendChild(pag8);
        contenElem.appendChild(pag9);
        contenElem.appendChild(pag10);
        contenElem.appendChild(pag11);
        contenInterno.appendChild(contenElem);
        contenInterno.appendChild(btnDch);
        /* SE AÑADE FONT-AWESOME PARA LOS ICONOS */
        const fontAwesome = document.createElement("link");
        fontAwesome.rel="stylesheet";
        fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
        /* SE AÑADE EL CSS */
        const estilo = document.createElement("link");
        estilo.rel="stylesheet";
        estilo.href = "./css/style-instrucciones.css";
        shadowRoot.appendChild(estilo);
        shadowRoot.appendChild(fontAwesome);
        shadowRoot.appendChild(contenInterno);
        /* SE AÑADEN LOS EVENTOS DE LAS FLECHAS */
        btnIzq.addEventListener("click", moverDerecha);
        btnDch.addEventListener("click", moverIzquierda);
        /* CONTADOR PARA SABER EN QUÉ PÁGINA SE ESTÁ ACTUALMENTE */
        var pagina = 1;
        /* INICIALMENTE SE DESHABILITA LA FLECHA IZQUIERDA */
        btnIzq.disabled = true;
        /* FUNCIÓN QUE MUESTRA LA PÁGINA A LA IZQUIERDA DE LA ACTUAL Y OCULTA LA ACTUAL */
        async function moverDerecha(){
            const contenedor = eval("pag" + pagina);
            /* ESPERA A QUE CASI HAYA DESAPARECIDO UNA PÁGINA PARA QUE LUEGO APAREZCA LA SIGUIENTE */
            function promesaSalida() {
                return new Promise((resolve) => {
                    contenedor.classList.add("pos-derecha");
                    contenedor.classList.add("oculto");
                    setTimeout(function(){
                        resolve();
                    }, 300);
                });
            }
            await promesaSalida();

            const contenedorAnterior = eval("pag" + (pagina - 1));
            /* ESPERA A QUE CASI HAYA APARECIDO LA SIGUIENTE PÁGINA */
            function promesaEntrada() {
                return new Promise((resolve) => {
                    contenedorAnterior.classList.remove("pos-izquierda");
                    contenedorAnterior.classList.remove("oculto");
                    setTimeout(function(){
                        resolve();
                    }, 300);
                });
            }
            /* SE RESTA LA PAGINA */
            pagina--;
            await promesaEntrada();
            /* SE HABILITA LA FLECHA DE LA DERECHA */
            btnDch.disabled = false;
            /* SI LA PÁGINA ES LA PRIMERA SE DESHABILITA LA FLECHA DE LA IZQUIERDA */
            if(pagina===1){
                btnIzq.disabled = true;
            }

        }
        /* FUNCIÓN QUE MUESTRA LA PÁGINA A LA DERECHA DE LA ACTUAL Y OCULTA LA ACTUAL */
        async function moverIzquierda(){
            const contenedor = eval("pag" + pagina);
            /* ESPERA A QUE CASI HAYA DESAPARECIDO UNA PÁGINA PARA QUE LUEGO APAREZCA LA SIGUIENTE */
            function promesaSalida() {
                return new Promise((resolve) => {
                    contenedor.classList.add("pos-izquierda");
                    contenedor.classList.add("oculto");
                    setTimeout(function(){
                        resolve();
                    }, 300);
                });
            }
            await promesaSalida();
            const contenedorSiguiente = eval("pag" + (pagina + 1));
            /* ESPERA A QUE CASI HAYA APARECIDO LA SIGUIENTE PÁGINA */
            function promesaEntrada() {
                return new Promise((resolve) => {
                    contenedorSiguiente.classList.remove("pos-derecha");
                    contenedorSiguiente.classList.remove("oculto");
                    setTimeout(function(){
                        resolve();
                    }, 300);
                });
            }
            /* SE SUMA LA PAGINA */
            pagina++;
            await promesaEntrada();
            /* SE HABILITA LA FLECHA DE LA IZQUIERDA */
            btnIzq.disabled = false;
            /* SI LA PÁGINA ES LA ÚLTIMA SE DESHABILITA LA FLECHA DE LA DERECHA */
            if(pagina===11){
                btnDch.disabled = true;
            }
        }
        /* FUNCIÓN PARA CREAR UNA PÁGINA QUE RECIBE DOS ARRAYS CON LOS TITULOS Y LOS PARAGRAFOS RESPECTIVAMENTE */
        function crearPagina(titulos, paragrafos){
            const pagina = document.createElement("div");
            pagina.classList.add("contenedor");
            pagina.classList.add("oculto");
            pagina.classList.add("pos-derecha");
            pagina.id = "contenedor" + contPagina;
            for (let i = 0; i < titulos.length; i++){
                if(titulos[i] !==""){
                    const h2 = document.createElement("h2");
                    h2.appendChild(document.createTextNode(titulos[i]));
                    h2.classList.add("titulo2");
                    pagina.appendChild(h2);
                }
                const par = document.createElement("p");
                par.appendChild(document.createTextNode(paragrafos[i]));
                par.classList.add("texto");
                pagina.appendChild(par);
            }
            contPagina++;
            return pagina;
        }

    }
}
customElements.define( "custom-carousel", Carousel );


document.addEventListener("DOMContentLoaded", ()=>{
    /* ACCIÓN DE OCULTAR EL POPUP */
    const btnAceptar = document.getElementById("btn-aceptar");
    btnAceptar.addEventListener("click", ()=>{
       const fondo = document.getElementById("fondo");
       fondo.classList.add("desaparecido");
    });
    /* ACCIÓN DE IR A LA PÁGINA DE SELECCIÓN DE JUGADORES */
    const empezar = document.getElementById("empezar");
    empezar.addEventListener("click", seleccionar);
    function seleccionar(){
        window.location.href = "./inicio.html";
    }

});