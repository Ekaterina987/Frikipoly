/* AQUÍ SE AÑADEN LOS NOMBRES DE LOS JUGADORES */
var jugadoresArray = [];
/* CONTADOR PARA IR AÑADIENDO MÁS NOMBRES DE JUGADORES */
var contador = 0;
$(document).ready(function(){
    /* SE AÑADEN DOS INPUTS PARA AÑADIR NOMBRE DE JUGADOR */
    aniadirNombre();
    aniadirNombre();
    /* SE DESHABILITAN LOS BOTONES DE SELECCIONAR MODO DE JUEGO Y DE EMPEZAR EL JUEGO */
    const btnEnviar = $("#enviar");
    btnEnviar.prop( "disabled", true);

    /* AL PULSAR EN COMENZAR EL JUEGO SE ALEATORIZA EL TURNO DE LOS JUGADORES Y SE GUARDA EN UNA COOKIE LOS NOMBRES DE ESTOS */
    btnEnviar.click(()=>{
        mezclar(jugadoresArray);
        let jugadores = jugadoresArray.join();
        localStorage.setItem("jugadores", jugadores);
    });

});
/* FUNCIÓN QUE ALEATORIZA LOS JUGADORES */
function mezclar(array) {
    var indiceActual = jugadoresArray.length;
    var valorTemporal;
    var indiceAleatorio;

    while (0 !== indiceActual) {

        // Seleccionar un elemento sin mezclar...
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual -= 1;

        // E intercambiarlo con el elemento actual
        valorTemporal = array[indiceActual];
        array[indiceActual] = array[indiceAleatorio];
        array[indiceAleatorio] = valorTemporal;
    }

    return array;
}
/* FUNCIÓN QUE AÑADE UN JUGADOR A LA LISTA DE JUGADORES */
function aniadirJugador(nombre){
    jugadoresArray.push(nombre)
    if(jugadoresArray.length>=2 && jugadoresArray.length < 4){
        aniadirNombre();
    }
}
/* FUNCIÓN QUE CREA LOS INPUTS Y BOTONES PARA AÑADIR Y MODIFICAR LOS JUGADORES */
function aniadirNombre(){
    contador++;

    const contNombre = $("<div id='cont-nombre'></div>");

    const lbl = $("<label id='label" + contador + "' class='label'></label>").text("Nombre:");

    var input = $("<input id='input" + contador + "' class='input' type='text'>");

    var btnAniadir = $("<button id='btn" + contador + "' class='boton btn-aniadir' type='button'>Añadir</button>");


    var cambiar = $("<button id='btnCambiar" + contador + "' class='boton btn-cambiar oculto' type='button'>Cambiar</button>");

    /* AL PULSAR EL BOTÓN DE MODIFICAR EL NOMBRE, SI EL NUEVO NOMBRE ES VÁLIDO
     SE ELIMINA EL NOMBRE YA GUARDADO DE LA LISTA Y SE AÑADE EL NUEVO NOMBRE MODIFICADO, SI NO ES VÁLIDO SALTA UN MENSAJE DE ERROR */
    cambiar.click(async () =>{
        if(input.val()!=="") {
            let i = input.attr('id').slice(5);
            let indice = parseInt(i) - 1;
            jugadoresArray[indice] = input.val();
            await popUp("Se ha modificado el nombre a " + jugadoresArray[indice]);
            $("#fondo").addClass("oculto");
        }else{
            await popUp("No puedes dejar el nombre en blanco");
            $("#fondo").addClass("oculto");
        }

    });
    contNombre.append(lbl);
    contNombre.append(input);
    contNombre.append(btnAniadir);
    contNombre.append(cambiar);
    $("#contenedor").append(contNombre);
    /* AL PULSAR EL BOTÓN DE AÑADIR, SI EL  NOMBRE ES VÁLIDO SE AÑADE EL NOMBRE A LA LISTA, SI NO ES VÁLIDO SALTA UN MENSAJE DE ERROR.
    * SE COMPRUEBA SI HAY SUFICIENTES JUGADORES PARA HABILITAR LOS BOTONES DE SELECCIÓN DE MODO */
    btnAniadir.click( async() =>{
        if(input.val()!==""){
            aniadirJugador(input.val());
            await popUp("Se ha añadido el jugador " + input.val());
            btnAniadir.prop( "disabled", true );
            cambiar.removeClass("oculto");
            $("#fondo").addClass("oculto");
        }else{
            await popUp("No puedes dejar el nombre en blanco");
            $("#fondo").addClass("oculto");
        }
        $("#enviar").prop( "disabled", jugadoresArray.length < 2);

    })
}