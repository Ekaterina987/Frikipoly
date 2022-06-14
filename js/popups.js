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
                fondo.classList.add("oculto");
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
                fondo.classList.add("oculto");
            }, {once: true});
            btnCancelar.addEventListener('click',()=> {
                reject();
                fondo.classList.add("oculto");
            }, {once: true});
        });
    }
    await confirmar();
}
/* POPUP QUE PIDE CONFIRMACIÓN PARA REALIZAR UNA ACCIÓN */
async function popUpCantidad(){
    const fondo = document.getElementById("fondo3");
    fondo.classList.remove("oculto");

    const btn = document.getElementById("btn-aceptar3");

    const btnCancelar = document.getElementById("btn-cancelar1");

    const btn100 = document.getElementById("btn-100");
    const btn250 = document.getElementById("btn-250");
    const btn500 = document.getElementById("btn-500");
    const btn1000 = document.getElementById("btn-1000");

    const inputCantidad = document.getElementById("cantidad");

    let botones = [btn100, btn250, btn500, btn1000];
    botones.forEach(boton=>{
        boton.addEventListener("click", selectCantidad);
    });
    function selectCantidad(){
        let id = this.id;
        inputCantidad.value = id.substr(4);
    }
    /* SE ESPERA A QUE EL JUGADOR PULSE EL BOTÓN ACEPTAR O CANCELAR ANTES DE REALIZAR OTRAS ACCIONES*/
    function confirmar() {
        return new Promise((resolve, reject) => {
            btn.addEventListener('click',async()=> {
                if(inputCantidad.value === null || inputCantidad.value === ""){
                    await popUp("Debes seleccionar un valor");
                }else{
                    resolve();
                    fondo.classList.add("oculto");
                }
            }, {once: true});
            btnCancelar.addEventListener('click',()=> {
                reject();
                fondo.classList.add("oculto");
            }, {once: true});
        });
    }
    await confirmar();
}