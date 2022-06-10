/* POP UP QUE MUESTRA INFORMACIÓN */
async function popUp(texto){
    const fondo = document.getElementById("fondo");
    fondo.classList.remove("oculto");

    const mensaje = document.getElementById("mensaje-popup");
    mensaje.innerHTML = texto;
    const btn = document.getElementById("btn-aceptar");
    /* SE ESPERA A QUE EL JUGADOR PULSE EL BOTÓN ACEPTAR ANTES DE REALIZAR OTRAS ACCIONES*/
    function aceptar() {
        return new Promise((resolve) => {
            btn.addEventListener('click',()=> {
                resolve(true);
            }, {once: true});
        });
    }
    await aceptar();
}
/* POPUP QUE PIDE CONFIRMACIÓN PARA REALIZAR UNA ACCIÓN */
async function popUpConfirm(texto){
    const fondo = document.getElementById("fondo1");
    fondo.classList.remove("oculto");

    const mensaje = document.getElementById("mensaje-popup1");
    mensaje.innerHTML = texto;
    const btn = document.getElementById("btn-aceptar1");

    const btnCancelar = document.getElementById("btn-cancelar");
    /* SE ESPERA A QUE EL JUGADOR PULSE EL BOTÓN ACEPTAR O CANCELAR ANTES DE REALIZAR OTRAS ACCIONES*/
    function confirmar() {
        return new Promise((resolve, reject) => {
            btn.addEventListener('click',()=> {
                resolve();
            }, {once: true});
            btnCancelar.addEventListener('click',()=> {
                reject();
            }, {once: true});
        });
    }
    await confirmar();
}