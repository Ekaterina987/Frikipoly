/* JUGADOR */
class Jugador{
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.dinero = 1500;
        this.posicion = 0;
        this.azkaban = false;
        this.turnosAzkaban = 0;
        this.propiedades = [];
        this.gruposCasillas = [];
        this.deuda = 0;
        this.tarjetasLibertad = 0;
        this.tarjetasInvisibilidad = 0;
        this.posicionJugador = 0;
        this.puntuacion = 0;
    }
    /* COMPRUEBA SI EL JUGADOR TIENE CASAS */
    comprobarCasas(){
        var tieneCasas = false;
        turno.propiedades.forEach(prop=> {
            if (prop.casas > 0) {
                tieneCasas = true;
            }
        });
        return tieneCasas;
    }
    /* TASA EL VALOR DE LAS PROPIEDADES DEL JUGADOR MÁS SU DINERO */
    tasarPropiedades(){
        let suma = this.dinero;
        this.propiedades.forEach(propiedad=>{
            suma+=(propiedad.precio/2);
            if(propiedad.tipo === "propiedad"){
                suma+=(propiedad.casas * (propiedad.precioCasa/2));
                suma+=(propiedad.hoteles * (propiedad.precioCasa/2));
            }
        });
        return suma;
    }
    /* CALCULA CUANTAS CASAS TIENE LA PROPIEDAD DEL GRUPO QUE TIENE MENOS CASAS */
    calcularMenorCasas(grupo){
        let numMenorCasas = 4;
        let numMenorHoteles = 1;
        grupo.casillas.forEach(propiedad=>{
            if(propiedad.casas< numMenorCasas){
                numMenorCasas = propiedad.casas;
            }
            if(propiedad.hoteles<numMenorHoteles){
                numMenorHoteles = propiedad.hoteles;
            }
        });
        return numMenorCasas+numMenorHoteles;
    }
    /* CALCULA CUANTAS CASAS TIENE LA PROPIEDAD DEL GRUPO QUE TIENE MÁS CASAS */
    calcularMayorCasas(grupo){
        let numMayorCasas = 0;
        let numMayorHoteles = 0;
        grupo.casillas.forEach(propiedad=>{
            if(propiedad.casas> numMayorCasas){
                numMayorCasas = propiedad.casas;
            }
            if(propiedad.hoteles>numMayorHoteles){
                numMayorHoteles = propiedad.hoteles;
            }
        });
        return numMayorCasas+numMayorHoteles;
    }
    /* COMPRUEBA SI EL GRUPO PERTENECE AL JUGADOR */
    tieneGrupo(grupo){
        return this.gruposCasillas.indexOf(grupo) !== -1;
    }
    /* ELIMINA EL GRUPO DE LA LISTA DEL GRUPOS DEL JUGADOR */
    quitarGrupo(grupo){
        let gru = this.gruposCasillas.indexOf(grupo);
        if(gru !== -1) {
            this.gruposCasillas.splice(gru, 1);
        }
        grupo.propietario = null;
    }
    /* ELIMINA LA PROPIEDAD DE LA LISTA DE PROPIEDADES DEL JUGADOR */
    quitarPropiedad(propiedad){
        let prop = this.propiedades.indexOf(propiedad);
        if(prop !== -1) {
            this.propiedades.splice(prop, 1);
        }
    }
}
/* CASILLA */
class Casilla{
    constructor(id, tipo, nombre, info) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.fila = 0;
        this.columna = 0;
        this.info = info;
    }
    /* MÉTODOS QUE ESTABLECEN LA FILA Y COLUMNA DE LA CASILLA */
    setFila(fila){
        this.fila = fila;
    }
    setColumna(columna){
        this.columna = columna;
    }
}
/* GRUPO */
class Grupo{
    constructor(color, casillas) {
        this.color = color;
        this.casillas = casillas;
        this.propietario;
    }
    /* ESTABLECE EL GRUPO PARA CADA CASILLA DEL GRUPO */
    setGrupo(){
        this.casillas.forEach(casilla => casilla.setGrupo(this));
    }
    /* ESTABLECE Y DEVUELVE EL PROPIETARIO DEL GRUPO */
    getPropietario(){
        var propietario = null;
        var mismo = true;
        for(let i = 0; i < this.casillas.length && mismo; i++){
            if (this.casillas[i].propietario == null){
                mismo = false;
            }else{
                if(i === 0){
                    propietario = this.casillas[i].propietario;
                }else if(this.casillas[i].propietario !== propietario){
                    mismo = false;
                }
            }
        }
        if(!mismo){
            propietario = null;
            this.propietario = null;
        }else{
            if(propietario!==null){
                propietario.gruposCasillas.push(this);
                this.propietario = propietario;
            }
        }
        if(this.propietario!=null)console.log(this.propietario.nombre);
        return propietario;
    }
    /* COMPRUEBA SI TODAS LAS PROPIEDADES DEL GRUPO TIENEN TODAS LAS CASAS*/
    isCasasCompleto(){
        var completo = true;
        this.casillas.forEach(casilla =>{
            if(casilla.casas!==4){
                completo = false;
            }
        });
        return completo;
    }
}
/* CASILLA COMPRABLE */
class Comprable extends Casilla{
    constructor(id, nombre, precio, tipo, info) {
        super(id, tipo, nombre, info);
        this.precio = precio;
        this.propietario = null;
        this.grupo;
    }
    /* ESTABLECE EL GRUPO */
    setGrupo(grupo){
        this.grupo = grupo;
    }
    /* SE COMPRA LA CASILLA POR EL JUGADOR*/
    comprar(jugador){
        if(jugador.dinero > this.precio && this.propietario == null){
            jugador.dinero-=this.precio;
            this.propietario=jugador;
            actualizarDinero(jugador);
        }
    }
    /* SE PAGA LA TASA POR EL JUGADOR*/
    pagarTasa(jugador, tasa){
        if(this.propietario != null && jugador !== this.propietario){
            if(tasa > jugador.tasarPropiedades()){
                asyncPerder("No puedes permitirte pagar la tasa, has perdido");
            }else{
                const txtDeuda = document.getElementById("txt-deuda");
                txtDeuda.innerHTML = "Deuda: " + tasa + " Galeones";
            }

        }
    }
}
/* CASILLA PROPIEDAD */
class Propiedad extends Comprable{
    constructor(id, nombre, precio, precioCasa, tarifa) {
        super(id, nombre, precio, "propiedad", "");
        this.casas = 0;
        this.hoteles = 0;
        this.precioCasa = precioCasa;
        this.tarifa0 = tarifa[0];
        this.tarifa1casa = tarifa[1];
        this.tarifa2casas = tarifa[2];
        this.tarifa3casas = tarifa[3];
        this.tarifa4casas = tarifa[4];
        this.tarifa1hotel = tarifa[5];
        this.tarifa = tarifa[0];
    }
    /* ESTABLECE LA TARIFA */
    setTarifa(){
        var tarifa;
        if (this.grupo.propietario !== null){
            if(this.casas === 0){
                tarifa = this.tarifa0*2;
            }else{
                switch (this.casas){
                    case 1:
                        tarifa = this.tarifa1casa;
                        break;
                    case 2:
                        tarifa = this.tarifa2casas;
                        break;
                    case 3:
                        tarifa = this.tarifa3casas;
                        break;
                    case 4:
                        if(this.hoteles === 0){
                            tarifa = this.tarifa4casas;
                        }else{
                            tarifa = this.tarifa1hotel;
                        }
                        break;
                }
            }
        }else{
            tarifa = this.tarifa0;
        }

        this.tarifa = tarifa;
    }
    /* AÑADE CASAS */
    construirCasa(){
        if(this.propietario!=null && this.grupo.getPropietario() !== null && this.casas < 4){
            if(this.propietario.dinero >= this.precioCasa){
                this.casas++;
            }
        }
    }
    /* AÑADE HOTELES */
    construirHotel(){
        if(this.propietario!=null && this.grupo.getPropietario() !== null && this.casas === 4 && this.hoteles === 0){
            if(this.propietario.dinero >= this.precioCasa){
                this.hoteles++;
            }
        }
    }
    /* MÉTODO PARA PAGAR LA TARIFA */
    pagarTarifa(jugador){
        super.pagarTasa(jugador, this.tarifa);
    }

}
/* CASILLA SALA COMÚN */
class SalaComun extends Comprable{
    constructor(id, nombre) {
        super(id, nombre, 200, "sala-comun", "");
        this.tarifa = 25;
        this.tarifa0 = 25;
        this.tarifa1 = 50;
        this.tarifa2 = 100;
        this.tarifa3 = 200;

    }
    /* ESTABLECE LA TARIFA */
    setTarifa() {
        var tarifa;

        var cantidadSalas = 0;
        this.propietario.propiedades.forEach(propiedad=>{
            if(propiedad.tipo==="sala-comun"){
                cantidadSalas++;
            }
        });
        switch (cantidadSalas){
            case 1:
                tarifa = this.tarifa0;
                break;
            case 2:
                tarifa = this.tarifa1;
                break;
            case 3:
                tarifa = this.tarifa2;
                break;
            case 4:
                tarifa = this.tarifa3;
                break;
        }
        this.tarifa = tarifa;
    }
    /* MÉTODO PARA PAGAR LA TARIFA */
    pagarTarifa(jugador){
        super.pagarTasa(jugador, this.tarifa);
    }

}
/* CASILLA COMPAÑIA */
class Compania extends Comprable{
    constructor(id, nombre) {
        super(id, nombre, 150, "compania", "Si se posee UNA carta de Sortilegios Weasley o Honeydukes el alquiler es 4 veces el número salido en los dados." + "<br>" +
            "Si se poseen DOS cartas de Sortilegios Weasley o Honeydukes el alquiler es 10 veces el número salido en los dados.");
        this.tarifa;
    }
    /* ESTABLECE LA TARIFA */
    setTarifa(tirada) {
        var tarifa = 0;
        var numCompanias=0;
        this.propietario.propiedades.forEach(propiedad=>{
                if(propiedad.tipo==="compania"){
                    numCompanias++;
                }
            }
        )
        if(numCompanias===1){
            tarifa = tirada*4;
        }else if(numCompanias===2){
            tarifa = tirada * 10;
        }
        this.tarifa = tarifa;
    }
    /* MÉTODO PARA PAGAR LA TARIFA */
    pagarTarifa(jugador){
        super.pagarTasa(jugador, this.tarifa);
    }

}
/* TARJETA */
class Tarjeta {
    constructor(id, texto, num, tipo) {
        this.id = id;
        this.texto = texto;
        this.numero = num;
        this.tipo = tipo;
    }
}