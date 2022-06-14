/* CONTADOR PARA LA GENERACIÓN DE ÁREAS DE CADA JUGADOR */
var cont = 0;
/* FUNCIÓN QUE GENERA LAS ÁREAS DE CADA JUGADOR */
function generarJugador(nombre){
    /* SE AUMENTA EL CONTADOR QUE INDICA PARA QUÉ JUGADOR HAY QUE GENERAR EL ÁREA */
    cont++;
    /* ÁREA JUGADOR */
    const contenedor = document.getElementById("jugador" + cont);
    contenedor.classList.add("jugadores");
    /* NOMBRE DEL JUGADOR */
    const tituloNombre = document.createElement("h3");
    tituloNombre.appendChild(document.createTextNode(nombre));
    tituloNombre.id = "tnombre" + cont;
    tituloNombre.classList.add("subrayado");
    /* DINERO DEL JUGADOR */
    const galeon = document.createElement("p");
    galeon.appendChild(document.createTextNode("Galeones: "));
    galeon.classList.add("galeones")
    const dinero = document.createElement("span");
    dinero.id = "sdinero" + cont;
    dinero.classList.add("dinero");
    dinero.appendChild(document.createTextNode(jugadores[cont - 1].dinero));
    galeon.appendChild(dinero);
    galeon.id = "tgaleon" + cont;
    /* CONTENEDOR TARJETAS */
    const contTarjetas = document.createElement("div");
    contTarjetas.classList.add("cont-tarjetas");
    contTarjetas.id="cont-tarjetas" + cont;
    /* BOTÓN COMPRAR PROPIEDAD */
    const btnComprar = document.createElement("button");
    btnComprar.classList.add("boton");
    btnComprar.appendChild(document.createTextNode("Comprar propiedad"));
    btnComprar.id = "btnComprar" + cont;
    btnComprar.disabled = true;
    /* BOTÓN COMPRAR CASAS/HOTELES */
    const btnComprarCasas = document.createElement("button");
    btnComprarCasas.appendChild(document.createTextNode("Comprar casa"));
    btnComprarCasas.classList.add("boton");
    btnComprarCasas.id = "btnComprarCasas" + cont;
    btnComprarCasas.disabled = true;
    /* BOTÓN VENDER PROPIEDADES A JUGADORES*/
    const btnVentaJug = document.createElement("button");
    btnVentaJug.classList.add("boton");
    btnVentaJug.appendChild(document.createTextNode("Vender propiedad a jugador"));
    btnVentaJug.id = "btnVentaJug" + cont;
    btnVentaJug.disabled = true;
    /* BOTÓN VENDER PROPIEDADES */
    const btnVenta = document.createElement("button");
    btnVenta.classList.add("boton");
    btnVenta.appendChild(document.createTextNode("Vender propiedad"));
    btnVenta.id = "btnVenta" + cont;
    btnVenta.classList.add("invisible");
    /* BOTÓN VENDER CASAS/HOTELES */
    const btnVentaCasas = document.createElement("button");
    btnVentaCasas.classList.add("boton");
    btnVentaCasas.appendChild(document.createTextNode("Vender casa"));
    btnVentaCasas.id = "btnVentaCasas" + cont;
    btnVentaCasas.classList.add("invisible");

    /* TEXTO DEUDA */
    const txtDeuda = document.createElement("p");
    txtDeuda.classList.add("deuda");
    txtDeuda.classList.add("oculto");
    txtDeuda.id="txt-deuda" + cont;

    contenedor.appendChild(tituloNombre);
    contenedor.appendChild(galeon);
    contenedor.appendChild(contTarjetas);
    contenedor.appendChild(btnComprar);
    contenedor.appendChild(btnComprarCasas);
    contenedor.appendChild(btnVentaJug);
    contenedor.appendChild(btnVenta);
    contenedor.appendChild(btnVentaCasas);
    contenedor.appendChild(txtDeuda);
}
