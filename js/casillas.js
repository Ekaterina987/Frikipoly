/* CASILLAS */
const PrecioCasaCalle1= 50;
const PrecioCasaCalle2= 100;
const PrecioCasaCalle3= 150;
const PrecioCasaCalle4= 200;

const salida = new Casilla(1, "salida", "Salida", "Este es el andén 9 y tres cuartos, aquí comienza tu aventura.");

const p2 = new Propiedad(2, "Privet Drive n° 4", 60, PrecioCasaCalle1, [2,10,30,90,160,250]);

const pociones1 = new Casilla(3, "pociones", "Pociones", "Casilla de carta de pociones, aleatoriamente te tocara una.");

const p4 = new Propiedad(4, "Godric's Hollow", 60, PrecioCasaCalle1, [4,20,60,180,320,450]);

const impuesto1 = new Casilla(5, "impuesto2", "Impuestos", "Casilla de la Agencia de recaudación tributaria, debes pagar un impuesto de 200 galeones.");

const salaComun1 = new SalaComun(6, "Sótano de Hufflepuff");

const p7 = new Propiedad(7, "Emporio de la Lechuza", 100, PrecioCasaCalle1, [6,30,90,270,400,550]);

const hechizos1 = new Casilla(8, "hechizos", "Hechizos", "Casilla de carta de hechizos, aleatoriamente te tocara una.");

const p9 = new Propiedad(9, "Ollivanders", 100, PrecioCasaCalle1, [6,30,90,270,400,550]);
const p10 = new Propiedad(10, "Artículos de Calidad para Quidditch", 120, PrecioCasaCalle1, [8,40,100,300,450,600]);

const azkaban = new Casilla(11, "azkaban", "Azkaban", "Azkaban, prisión del mundo mágico, puedes pasar de visita.");

const p12 = new Propiedad(12, "Grimmauld Place", 140, PrecioCasaCalle2, [10,50,150,450,625,750]);

const compania1 = new Compania(13, "Honeydukes");

const p14 = new Propiedad(14, "La Madriguera", 140, PrecioCasaCalle2, [10,50,150,450,625,750]);
const p15 = new Propiedad(15, "Sala de los Menesteres ", 160, PrecioCasaCalle2, [12,60,180,500,700,900]);

const salaComun2 = new SalaComun(16, "Torre de Gryffindor");

const p17 = new Propiedad(17, "Sauce boxeador de Hogwarts", 180, PrecioCasaCalle2, [14,70,200,550,750,950]);

const pociones2 = new Casilla(18, "pociones", "Pociones", "Casilla de carta de pociones, aleatoriamente te tocara una.");

const p19 = new Propiedad(19, "El bosque prohibido", 180, PrecioCasaCalle2, [14,70,200,550,750,950]);
const p20 = new Propiedad(20, "Cabaña de Hagrid", 200, PrecioCasaCalle2, [16,80,220,600,800,1000]);

const granComedor = new Casilla(21, "El Gran Comedor", "El Gran Comedor", "El Gran comedor, sala de reunión para comer de Hogwarts, en esta casilla podrás descansar con tranquilidad.");

const p22 = new Propiedad(22, "Ilvermorny", 200, PrecioCasaCalle3, [18,90,250,700,875,1050]);

const hechizos2 = new Casilla(23, "hechizos", "Hechizos", "Casilla de carta de hechizos, aleatoriamente te tocara una.");

const p24 = new Propiedad(24, "Beauxbatons", 200, PrecioCasaCalle3, [18,90,250,700,875,1050]);
const p25 = new Propiedad(25, "Durmstrang", 240, PrecioCasaCalle3, [20,100,300,750,925,1100]);

const salaComun3 = new SalaComun(26, "Torre de Ravenclaw", PrecioCasaCalle3, [22,110,330,800,975,1150]);

const p27 = new Propiedad(27, "Las Tres Escobas", 260, PrecioCasaCalle3, [22,110,330,800,975,1150]);
const p28 = new Propiedad(28, "Casa de los Gritos", 260, PrecioCasaCalle3, [24,120,360,850,1025,1200]);

const compania2 = new Compania(29, "Sortilegios Weasley");

const p30 = new Propiedad(30, "Artículos de bromas de Zonko", 280, PrecioCasaCalle3, [26,130,390,900,1100,1275]);

const departamento_de_seguridad_magica = new Casilla(31, "Departamento de Seguridad Mágica", "Departamento de Seguridad Mágica", "Departamento de seguridad Magica, departamento dependiente del ministerio de magia, se encarga de la seguridad en el mundo mágico, al caer en esta casilla te encerraran en Azkaban.");

const p32 = new Propiedad(32, "Oficina del uso inadecuado de Magia", 300, PrecioCasaCalle4, [26,130,390,900,1100,1275]);
const p33 = new Propiedad(33, "Oficina del Auror", 300, PrecioCasaCalle4, [26,130,390,900,1100,1275]);

const pociones3 = new Casilla(34, "pociones", "Pociones", "Casilla de carta de pociones, aleatoriamente te tocara una.");

const p35 = new Propiedad(35, "Tribunal del Wizengamot", 320, PrecioCasaCalle4, [28,150,450,1000,1200,1400]);

const salaComun4 = new SalaComun(36, "Mazmorra de Slytherin");

const hechizos3 = new Casilla(37, "hechizos", "Hechizos", "Casilla de carta de hechizos, aleatoriamente te tocara una.");

const p38 = new Propiedad(38, "Gringotts", 350, PrecioCasaCalle4, [35,175,500,1100,1300,1500]);

const impuesto2 = new Casilla(39, "impuesto1", "Impuesto", "Casilla de la Agencia de recaudación tributaria, debes pagar un impuesto de 100 galeones.");

const p40 = new Propiedad(40, "Ministerio de Magia", 400, PrecioCasaCalle4, [50,200,600,1400,1700,2000]);


/* GRUPOS */

const grupo1 = new Grupo("marron", [p2, p4]);
grupo1.setGrupo();

const grupo2 = new Grupo("azul-cielo", [p7, p9, p10]);
grupo2.setGrupo();

const grupo3 = new Grupo("fucsia", [p12, p14, p15]);
grupo3.setGrupo();

const grupo4 = new Grupo("naranja", [p17, p19, p20]);
grupo4.setGrupo();

const grupo5 = new Grupo("rojo", [p22, p24, p25]);
grupo5.setGrupo();

const grupo6 = new Grupo("amarillo", [p27, p28, p30]);
grupo6.setGrupo();

const grupo7 = new Grupo("verde", [p32, p33, p35]);
grupo7.setGrupo();

const grupo8 = new Grupo("azul-oceano", [p38, p40]);
grupo8.setGrupo();

const grupoSalasComunes = new Grupo("indiferente", [salaComun1, salaComun2, salaComun3, salaComun4]);
grupoSalasComunes.setGrupo();

const grupoCompanias = new Grupo("indiferente", [compania1, compania2]);
grupoCompanias.setGrupo();

/* TABLERO */
const tablero = [salida, p2, pociones1, p4, impuesto1, salaComun1, p7, hechizos1, p9, p10, azkaban, p12, compania1, p14, p15, salaComun2, p17, pociones2, p19, p20, granComedor,
    p22, hechizos2, p24, p25, salaComun3, p27, p28, compania2, p30, departamento_de_seguridad_magica, p32, p33, pociones3, p35, salaComun4, hechizos3, p38, impuesto2, p40];



/* GENERA LAS CASILLAS DE LA FILA DE ARRIBA Y LA DE ABAJO */
function genera_casillas_vert(col, id, numJugadores){
    /* ID CASILLA */
    col.id=id;

    /* SE GENERA BARRA CON COLOR DE GRUPO */
    if(tablero[id - 1].tipo === "propiedad"){
        let divColor = document.createElement("div");
        divColor.classList.add(tablero[id - 1].grupo.color);
        divColor.classList.add("divColor");
        /* SE AÑADEN LOS ICONOS DE LAS CASAS QUE ESTARÁN OCULTOS */
        for(let i = 0; i < 4; i++){
            let divCasa = crearSvgCasa(tablero[col.id - 1].id + "-" + (i+1));
            divColor.appendChild(divCasa);
        }
        col.appendChild(divColor);
    }
    /* SE CREA UN CONTENEDOR INTERNO PARA LA INFORMACIÓN DE LA CASILLA */
    const divInterior = document.createElement("div");
    divInterior.classList.add("div-interior");
    /* AL CONTENEDOR SE AÑADE EL NOMBRE DE LA CASILLA */
    const nombre = document.createElement("p");
    nombre.innerHTML = tablero[col.id - 1].nombre;
    nombre.classList.add("nombre");
    /* A TODAS LAS CASILLAS MENOS LA CASILLA DE VE AZKABAN SE LES AÑADE EL NOMBRE DE LA CASILLA */
    if(id!==31){
        divInterior.appendChild(nombre);
    }else{
        const nom1 = document.createElement("p");
        nom1.classList.add("nombre-carcel");
        nom1.appendChild(document.createTextNode("Ve a Azkaban"));
        divInterior.appendChild(nom1);
        divInterior.classList.add("dmle-div");
    }
    /* DEPENDIENDO DE LA CASILLA SE LE AÑADE UN ESTILO*/
    if(id===3){
        col.classList.add("pociones");
    }else if(id===8 || id===23){
        col.classList.add("hechizos");
    }else if(id===11){
        const contAzkaban = document.createElement("div");
        contAzkaban.classList.add("cont-azkaban");
        const contInternoAzkaban = document.createElement("div");
        contInternoAzkaban.classList.add("cont-interno-azkaban");
        contAzkaban.appendChild(contInternoAzkaban);
        divInterior.appendChild(contAzkaban);
    }

    /* EN CASO DE SER COMPRABLES SE AÑADE EL PRECIO */
    if(tablero[col.id - 1].tipo === "propiedad" || tablero[col.id - 1].tipo === "sala-comun" || tablero[col.id - 1].tipo === "compania"){
        const precio = document.createElement("p");
        precio.innerHTML = tablero[col.id - 1].precio + "g";
        precio.classList.add("precio");
        divInterior.appendChild(precio);
    }
    col.appendChild(divInterior);
    /* ID CASILLA */
    let numero = document.createElement("p");
    numero.classList.add("numero");
    numero.appendChild(document.createTextNode(id + "\n"));
    col.appendChild(numero);

    /* SI ES LA CASILLA DE INICIO SE CREAN LAS FICHAS DE LOS JUGADORES */
    if(id===1){
        let rowFichas = document.createElement("div");
        rowFichas.classList.add("rowFichas");
        for(let h = 0; h < numJugadores; h++){
            let ficha = document.createElement("div");
            let html = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\"><g id=\"Capa_2\" data-name=\"Capa 2\"><g id=\"The_Deathly_Hallows\" data-name=\"The Deathly Hallows\"><path d=\"M250,22.77,54.39,361.59H445.61Zm-6.68,303.48a77.27,77.27,0,0,1,0-154Zm13.44-154a77.27,77.27,0,0,1,0,154ZM77.66,348.15,243.28,61.21v97.6a90.71,90.71,0,0,0,0,180.92v8.42Zm179.06-8.42a90.71,90.71,0,0,0,0-180.92V61.35l165.61,286.8H256.72Z\"/></g><g id=\"Platform\"><path d=\"M250,0C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Zm0,477.27C124.48,477.27,22.73,375.52,22.73,250S124.48,22.73,250,22.73,477.27,124.48,477.27,250,375.52,477.27,250,477.27Z\"/></g></g></svg>";
            let html1= "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\"><g id=\"Capa_2\" data-name=\"Capa 2\"><g id=\"Hat\"><path d=\"M410,302.19c-11.37-29.53-73.51-32-90.23-33.54a2.8,2.8,0,0,0-2.49,1.13c-5.1,6.68-22.58,16.47-72.09,29.41,0,0,70.43-21.23,71.91-37.54.63-7-2.7-16.64-4.46-20.83a.56.56,0,0,0-.74-.3,135,135,0,0,1-24.26,7.82,58.22,58.22,0,0,0,22.85-13.64,5.68,5.68,0,0,0,1.69-4.83c-.38-2.9-4.51-13.11-5.55-14.51-10.08,11.7-32.91,19.86-59.46,19.86a124.91,124.91,0,0,1-16.58-1.09,129.7,129.7,0,0,0,16.86-.38c30.86-2.66,58.13-14.74,62.71-30.73,4.24-14.79-10.62-19.26-15.64-20.24a.55.55,0,0,0-.53.18l-3.47,3.93,8.25-18c14.43-10,11.32-23.42,7.28-30.73a.57.57,0,0,0-.83-.17L297.32,144s5.51-6.1,7.07-8.35c14.66-21.06,10.34-29.62,2.83-29.93a30,30,0,0,0-3.29.35l3.49-1.51a.54.54,0,0,0,.31-.32c2-6,9.74-28.67,14.48-45a2.82,2.82,0,0,0-3.87-3.36c-14.53,6.68-31.73,32.22-39.21,41.62a.55.55,0,0,0,.33.9,62.53,62.53,0,0,1,9.08,2.51,34.81,34.81,0,0,0-16.39-.83c-15.82,3.83-21.36,14.78-23.46,19.81a5.62,5.62,0,0,0,.91,5.85c1.68,1.94,4.31,4.38,7.41,5.14-5.51-.85-9.77-3.2-11.18-6.28a.55.55,0,0,0-.65-.3,27.11,27.11,0,0,0-18,16.23l-10.49,26.76a.56.56,0,0,0,.42.76c1.88.38,23.81,2.23,25.18,2.75-10.56.09-30.55-1.33-40.74,4.22-6.42,3.5-16.78,16.62-18.42,22.67-1.57,5.82,2.6,15.19,9.78,22-7.13-4.85-11.73-10.73-12.81-17.12-20,36.13-21.62,67.33-18.33,81.64,1.58,6.84,6.94,13.92,15.37,18.34-5-1-11.29-4.87-16.39-8.63a2.81,2.81,0,0,0-1.84-.54c-47.25,2.82-68.61,16.1-87.77,29.7-4.33,3.07-28.24,21.46,9,19.2s50.62,8.91,65.5,16.94c33,17.81,84.69,36.14,145.69,36.14C394.17,395.36,421.27,331.47,410,302.19ZM235,341.76c-27.34,0-51.55-4.16-66.46-10.56,15.92,5,41.11,6.9,69.13,4.43,36.7-3.22,67.3-13,78.1-23.87a9,9,0,0,1,1.26,4.48C317,330.34,280.3,341.76,235,341.76Z\"/></g><g id=\"Platform\"><path d=\"M250,0C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Zm0,477.27C124.48,477.27,22.73,375.52,22.73,250S124.48,22.73,250,22.73,477.27,124.48,477.27,250,375.52,477.27,250,477.27Z\"/></g></g></svg>";
            let html2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\"><g id=\"Capa_2\" data-name=\"Capa 2\"><g id=\"Platform\"><path d=\"M250,0C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Zm0,477.27C124.48,477.27,22.73,375.52,22.73,250S124.48,22.73,250,22.73,477.27,124.48,477.27,250,375.52,477.27,250,477.27Z\"/></g><g id=\"Golden_snitch\" data-name=\"Golden snitch\"><path d=\"M460.65,210.78s-32.18,37.14-90.72,39C329,251.11,309,268.31,302.36,275.54a16.55,16.55,0,0,0-19.69-5.21,60.08,60.08,0,0,0-56.27-14.66,16.56,16.56,0,0,0-19.73-5c-2.28-9.56-11.37-34.35-46.42-55.44-50.19-30.19-60.17-78.32-60.17-78.32S81.26,182.54,121,227.15c29.81,33.44,63.49,32.2,78.48,29.49A16.55,16.55,0,0,0,198,272.22a60,60,0,1,0,101.35,26.4,16.51,16.51,0,0,0,6.32-14.32c11.76,9.68,40.55,27.19,82.89,12.54C445,277.3,460.65,210.78,460.65,210.78ZM103.7,147.32q1.83,3.39,4,7h0l-4.1,3.49C103.63,157,103.54,151,103.7,147.32ZM104,164.4l6.61-5.62q2.09,3.1,4.47,6.29h0l-10,8.5C104.53,170,104.08,165.21,104,164.4Zm2.18,15.16,12.15-10.33c1.58,1.94,3.24,3.89,5,5.83l-15,12.8Q107.06,183.71,106.19,179.56Zm3.88,13.72L127,178.91c1.76,1.8,3.61,3.6,5.55,5.38l-19.38,16.47C112,198.28,111,195.78,110.07,193.28Zm5.49,12.34,20.94-17.8q2.91,2.49,6.08,4.92l-23,19.57Q117.39,209,115.56,205.62Zm11.36,16.26c-1.53-1.71-3-3.47-4.29-5.25L147,196h0c2.14,1.51,4.35,3,6.65,4.43l-26.07,22.17C127.33,222.32,127.12,222.11,126.92,221.88Zm4.27,4.48,27.13-23.07c2.35,1.47,4.56,3,6.64,4.45l-28.07,23.87C135,230,133.05,228.21,131.19,226.36ZM141.1,235l28.19-24c2.14,1.68,4.12,3.36,6,5l-27.51,23.4C145.48,238,143.27,236.57,141.1,235Zm11.58,7.17,26.41-22.46c1.92,1.93,3.65,3.82,5.21,5.67l-23.77,20.21A72.52,72.52,0,0,1,152.68,242.12Zm14.51,5.51h0l-.73-.2,21.14-18c1.69,2.26,3.11,4.41,4.32,6.41l-15.85,13.48A71.59,71.59,0,0,1,167.19,247.63Zm16.34,2.29,11-9.33a60.67,60.67,0,0,1,3.43,8.27A72.85,72.85,0,0,1,183.53,249.92Zm127.31,28.34a61.77,61.77,0,0,1,7-5.54l5,13.5A72.16,72.16,0,0,1,310.84,278.26Zm27.45,13.94h0a71.3,71.3,0,0,1-8.58-2.84l-7.26-19.49c2-1.16,4.32-2.34,6.9-3.49l9.68,26C338.78,292.31,338.53,292.26,338.29,292.2Zm6.82,1.41-10.89-29.24c2.27-.84,4.7-1.65,7.31-2.4l12.1,32.5A73.17,73.17,0,0,1,345.11,293.61Zm14.17.89-12.61-33.85c2.42-.55,5-1,7.65-1.47l12.92,34.68Q363.22,294.37,359.28,294.5ZM372.55,293l-12.86-34.53q3.81-.43,8-.65l12.43,33.38Q376.29,292.26,372.55,293ZM386,289.36l-.86.28-11.94-32.06c2.72-.14,5.37-.35,8-.63h0l11.14,29.92C390.26,287.77,388.16,288.61,386,289.36Zm11.1-4.77-10.55-28.31q3.94-.57,7.71-1.32l9.59,25.75Q400.6,282.78,397.09,284.59Zm11.24-6.94-8.87-23.83q3.82-.91,7.46-2l7.74,20.78Q411.65,275.24,408.33,277.65Zm10.52-8.9L412,250.24c2.48-.84,4.89-1.73,7.21-2.66l5.57,15C422.89,264.65,420.93,266.73,418.85,268.75Zm9.77-10.91L424,245.54h0c2.42-1.07,4.75-2.18,7-3.31l3,8.13C433.58,251,430.83,255,428.62,257.84Zm9-13.07-1.88-5.05h0c2.45-1.37,4.77-2.75,6.94-4.13C441,238.89,438,244,437.59,244.77Z\"/></g></g></svg>";
            let html3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\"><g id=\"Capa_2\" data-name=\"Capa 2\"><g id=\"Platform\"><path d=\"M250,0C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Zm0,477.27C124.48,477.27,22.73,375.52,22.73,250S124.48,22.73,250,22.73,477.27,124.48,477.27,250,375.52,477.27,250,477.27Z\"/></g><g id=\"Owl\"><path d=\"M395.29,157.09c6-6.9,23.72-28.26,18.95-32.2-4.93-4.06-19.35,9.44-23.2,13.2,0,0,15.19-21.63,9.48-24.93s-16.27,6.82-19.74,11.33c-4.89,6.37-12.23,22.06-14.39,28.74-1.62,5-19.5,29.55-24.87,35.6-.27-2.62-1.24-8.25-4.41-4.48-3.55,4.2-13.2,8.53-16.39,11.29a3.93,3.93,0,0,1-2.75.92c-9.47-.32-17.4,7.18-20.83,12.13-5.2,7.48-11.87,23.44-22.84,28.4-9.13,4.12-25.74,14.59-31.06,18h-.07c-4.91-5.28-13.26-8.77-22.74-8.77-9.82,0-18.43,3.75-23.26,9.37-4.77-2.39-24-11.84-35.06-15-12.72-3.68-20.14-.94-26.65-.14a18.68,18.68,0,0,1-10-1.62.63.63,0,0,0-.89.69c.13.77.21,1.65.26,2.33,0,0-46.73-15.92-61-25.84s-13.69,1.89-12.62,5.41c1.55,5.11,10.2,10.12,10.16,10.14-2.4-.7-11.26-3.06-13.24-.72-2.28,2.7,1.72,6.81,1.72,6.81a41,41,0,0,0,17,8.6s-15.21,1.22-15.61,4.52,6,6,6,6a46.5,46.5,0,0,0,11,2.48S57.63,262.53,58,264.84s.76,5.17,11.11,5.73c0,0-8.21,4.78-4.9,8,2.59,2.51,11.13,2.62,14.72,2.55,0,0-8.71,6.09-4.13,8.42,2.7,1.37,5.86.89,8,.27-.78,1.63-1.74,4.44.63,4.91,2,.4,5.33,0,7.74-.41-.31,1.55-.45,4.09,2,4.09a20.48,20.48,0,0,0,6.38-1.53c.08,1.68.43,3.89,1.74,3.94,1.51.05,5.56-2,7.71-3.21,0,0-1.93,6,.48,5.61a23.32,23.32,0,0,0,5.15-2,4.2,4.2,0,0,0,2,2.34c.92.38,3.33-.21,4.39-1.34,0,0-.18,3.37,1.47,3.37.92,0,2.54-.89,3.79-1.67a3.83,3.83,0,0,0,2.6,1.67,1.63,1.63,0,0,0,1.5-1.15,6.85,6.85,0,0,1,2.11,1.45c.63.73,2.28-.21,3.36-1a1.09,1.09,0,0,1,.65.3c1.34,1.06,2.11.36,3-.34a6,6,0,0,0,3.59,2.35c1.53.13,3.32-1.26,4.52-2.41.14,3.81,1.25,6,5.18,3.39,1.45,4.35,2.15,3.48,5.83,2.27.53,3.11,1.53,4.06,4.31,3.42a3.43,3.43,0,0,1,.49-.09c.51,1.52,1.83,4.2,4.84,4.31a7.82,7.82,0,0,0,4.11-1.37,8.1,8.1,0,0,0,4.83,1.37c1.34,0,2-.56,2.16-1.49l.1,0a7,7,0,0,0,3.82,1.51,3,3,0,0,0,2.37-1.4c.95,1,2.26,2.09,3.57,2.08a5.07,5.07,0,0,0,1.14-.15c1,1.09,2.48,2.34,4,2.25a2.53,2.53,0,0,0,1.24-.43c1.32,1.14,3.74,2.29,8.07,2a11.52,11.52,0,0,0,7.14-2.62c.52,1.71,1.6,3.5,3.91,3.22a15,15,0,0,0,3.86-1.07s-21.44,15.52-15.88,23.68c1.84,2.71,6.24,1.64,11.35-1-1.07,3-1.94,6.76-1.06,9.59a4.11,4.11,0,0,0,.3.72l-41.08,3.12a9.19,9.19,0,0,0-8.47,9.86l.05.64a9.19,9.19,0,0,0,9.86,8.47h.16c2.33,4.94-3.49,10.4-3.49,10.4l131.22-9.82s9.88-8.38,9.48-20.86a9,9,0,0,0-9.15-8.49c1.12-.51,1.94-1.18,2.05-2,.16-1.3-1-2.63-2.29-3.72,3.71-.37,7.88-1.49,7.6-4.7-.24-2.76-2.4-4.88-4.56-6.34,1.64-.12,2.79-.76,3.26-2.07,3.09-8.67-12.63-17.18-17.21-19.45a7.37,7.37,0,0,0,3-6.27,8.74,8.74,0,0,0-.11-1.37,6.93,6.93,0,0,0,5.67,2.49,7.13,7.13,0,0,0,5.43-2.17,8.61,8.61,0,0,0,2.54.37c3.48,0,6.31-2,6.31-4.43a3.38,3.38,0,0,0-.26-1.26,4,4,0,0,0,1.91-3.11l.11-.07c2.69,0,5-1.25,5.83-2.94a6.37,6.37,0,0,0,4.44-2.48l.59,0c3,0,5.58-1.52,6.18-3.53a6.46,6.46,0,0,0,5.81-5.61,7.21,7.21,0,0,0,5.29-6.94,4.93,4.93,0,0,0,0-.55,2.77,2.77,0,0,0,2.93-2.56,2.25,2.25,0,0,0-.08-.58,2.81,2.81,0,0,0,2.47-2.05,3.62,3.62,0,0,0,2-3.33,3.77,3.77,0,0,0-.31-1.51,1.52,1.52,0,0,0,1.3-1.48l.11-.11a1.59,1.59,0,0,0,.79-.63,17.63,17.63,0,0,1,1.66-1.39,1.5,1.5,0,0,0,1.14-.82,13.16,13.16,0,0,1,2.38-2,13.94,13.94,0,0,0,2.23-1.31h.08A31.24,31.24,0,0,0,363,252h0a1.52,1.52,0,0,0,1.3-.73c1.41-.4,1.4-2.12,2.1-3.28a4.55,4.55,0,0,0,3-4.1c3.52,0,3.12-3.19,3-5.65a3,3,0,0,0,.67.08,3.87,3.87,0,0,0,3.56-4.11,4.53,4.53,0,0,0-.42-1.92,5.79,5.79,0,0,0,5.68-3.29c.69-1.52-.24-3.07-1.59-4.38,5.29-1.18,5.63-4.41,3-8.63,8.12-2.39,8.11-6.32,8.11-8.32s-6.17-4.26-6.17-4.26,9.78-2.86,9.88-10.67c0-2.62-2.33-4-5.48-4.58,0,0,11.09-8.64,10.19-13-.44-2.11-4.51-2.2-8.64-1.72,4.11-2.74,18.47-12.56,17.95-15.91C408.75,155,400.93,156,395.29,157.09Z\"/></g></g></svg>";
            ficha.classList.add("ficha");
            ficha.classList.add("ficha" + (h + 1));
            ficha.id = "ficha" + (h + 1);
            switch (h){
                case 0:
                    ficha.innerHTML = html;
                    break;
                case 1:
                    ficha.innerHTML = html1;
                    break;
                case 2:
                    ficha.innerHTML = html2;
                    break;
                case 3:
                    ficha.innerHTML = html3;
                    break;
            }

            rowFichas.appendChild(ficha);
        }
        col.appendChild(rowFichas);
    }

    return col;
}
/* GENERA LAS CASILLAS DE LA COLUMNA DE LA DERECHA Y LA DE LA IZQUIERDA */
function genera_casillas_hor(col, id, numJugadores, lado){
    /* ID CASILLA*/
    var idCol;
    /* SE COMPRUEBA DE QUE LADO ES LA CASILLA PARA ASIGNARLE UN ID Y UNA FILA Y COLUMNA */
    if(lado === "izquierda"){
        idCol = 22-id;
        let casillaTablero = tablero[idCol - 1];
        casillaTablero.setFila(id);
        casillaTablero.setColumna(1);
    }else{
        idCol = 30+id;
        let casillaTablero = tablero[idCol - 1];
        casillaTablero.setFila(id);
        casillaTablero.setColumna(11);
    }
    col.id=idCol;
    col.classList.add("celdaTablero");
    col.classList.add("celdaTableroAncho");

    /* DEPENDIENDO DE LA CASILLA SE LE AÑADE UN ESTILO */
    if(idCol===18 || idCol===34){
        col.classList.add("pociones");
    }else if(idCol===37){
        col.classList.add("hechizos");
    }

    /* GENERA LOS ELEMENTOS DE LA CASILLA DEPENDIENDO DE SI SON LAS DE LA IZQUIERDA O LAS DE LA DERECHA*/
    if(lado === "izquierda"){
        /* MUESTRA ID CASILLA */
        let numero = document.createElement("p");
        numero.classList.add("numero");
        numero.appendChild(document.createTextNode(idCol + "\n"));

        col.appendChild(numero);
        /* SE GENERA EL CONTENEDOR DE INFORMACIÓN A LA IZQUIERDA */
        col = contenedorInfo(col, "izquierda");
        /* SE GENERA LA BARRA A LA DERECHA */
        col = barraGrupo(col, "izquierda");
    }else{
        /* SE GENERA LA BARRA A LA IZQUIERDA */
        col = barraGrupo(col, "derecha");
        /* MUESTRA ID CASILLA */
        let numero = document.createElement("p");
        numero.classList.add("numero");
        numero.appendChild(document.createTextNode(idCol + "\n"));
        col.appendChild(numero);
        /* SE GENERA EL CONTENEDOR DE INFORMACIÓN A LA DERECHA */
        col = contenedorInfo(col, "derecha");
    }

    return col;
}
/* GENERACIÓN BARRAS DE GRUPOS LATERALES */
function barraGrupo(col, lado){
    /* BARRA COLOR GRUPO PROPIEDAD */
    if(tablero[col.id - 1].tipo === "propiedad"){
        let divColor = document.createElement("div");
        divColor.classList.add(tablero[col.id - 1].grupo.color);
        divColor.classList.add("divColorHorizontal");
        if(lado === "izquierda"){
            divColor.classList.add("divColorHorizontalIzq");
        }else{
            divColor.classList.add("divColorHorizontalDch");
        }
        /* SE AÑADE A LA BARRA LOS ICONOS DE LAS CASAS*/
        for(let i = 0; i < 4; i++){
            let divCasa = crearSvgCasa(tablero[col.id - 1].id +"-"+ (i+1));
            divColor.appendChild(divCasa);
        }

        col.appendChild(divColor);
    }
    return col;
}
/* FUNCIÓN PARA CREAR LOS ICONOS DE LAS CASAS Y LOS HOTELES */
function crearSvgCasa(id){

    const divCasa = document.createElement("div");
    divCasa.id = "div-" + id;
    divCasa.classList.add("divCasa");
    divCasa.classList.add("oculto");
    divCasa.classList.add("casita");
    const svgCasa = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const casaG = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'g'
    );
    const casaPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    svgCasa.setAttribute('viewBox', '0 0 1244.000000 1280.000000');
    svgCasa.id = id;
    svgCasa.classList.add('svg-casa');
    svgCasa.setAttribute(
        'preserveAspectRatio',
        'xMidYMid meet'
    );
    casaG.setAttribute('transform',
        'translate(0.000000,1280.000000) scale(0.100000,-0.100000)');
    casaG.setAttribute('stroke', 'none');

    casaPath.setAttribute(
        'd',
        'M5313 12051 l-753 -748 0 629 0 628 -1335 0 -1335 0 0 -1963 0 -1962 -945 -945 -945 -945 0 -142 0 -143 523 -2 522 -3 3 -3227 2 -3228 5160 0 5160 0 0 3230 0 3230 535 0 536 0 -3 148 -3 148 -3099 3020 -3099 3019 -86 2 -86 2 -752 -748z'
    );
    casaG.appendChild(casaPath);
    svgCasa.appendChild(casaG);
    divCasa.appendChild(svgCasa);
    return divCasa;

}
/* FUNCIÓN PARA CREAR EL ICONO DE LOS DADOS */
function crearSvgDados(){
    return "<svg id=\"Capa_2\" data-name=\"Capa 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1685.24 976.57\" class='svg-dados'><path class=\"cls-1\" d=\"M225.36,846.7l-3.05,6.65,471.83,215.79a7.33,7.33,0,0,0,7.46-.82L1093,772.06a7.3,7.3,0,0,0-1.56-12.56L652.49,573a7.33,7.33,0,0,0-6.76.54l-424.27,267a7.32,7.32,0,0,0,.85,12.85l3.05-6.65,3.89,6.18,421-265L1074.05,768l-377.8,286L228.4,840l-3,6.66,3.89,6.18Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1042.06,1301.09l-264.7,226.46-73-466.19-7.23,1.13,4.42,5.83-4.42-5.83-7.23,1.13,75,479.13a7.31,7.31,0,0,0,12,4.43l269.92-230.91Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1085,798.61l-2.25-18.86L701.6,1068.32l-4.42-5.83-7.23,1.13a7.33,7.33,0,0,1,2.82-7L1084.12,760.4a7.32,7.32,0,0,1,11.68,5l2.12,17.67Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M225.36,846.7l-3.05,6.65L690.56,1067.5l72.35,462.34L307,1339.56,232.59,845.61l-7.23,1.09-3.05,6.65,3.05-6.65-7.24,1.08,75,498a7.3,7.3,0,0,0,4.42,5.66l471.82,196.9a7.31,7.31,0,0,0,10-7.89l-75-479.13a7.34,7.34,0,0,0-4.19-5.52L228.4,840a7.32,7.32,0,0,0-10.28,7.74Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M515,1183.79c5.83,28.19-7.67,54.81-30.14,59.46s-45.43-14.44-51.26-42.62,7.68-54.81,30.14-59.46S509.21,1155.6,515,1183.79Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M391.8,1026.41c5.83,28.18-7.66,54.8-30.14,59.46s-45.43-14.44-51.25-42.64,7.67-54.8,30.14-59.45S386,998.22,391.8,1026.41Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M628.73,1106.88c5.84,28.19-7.67,54.8-30.15,59.45s-45.42-14.43-51.25-42.62,7.68-54.81,30.15-59.46S622.9,1078.7,628.73,1106.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M977.32,1149.88c4.13,28.49-12.38,54.44-36.87,58s-47.68-16.68-51.81-45.17,12.38-54.45,36.87-58S973.18,1121.38,977.32,1149.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M887.31,1313.19c4.12,28.48-12.38,54.45-36.86,58s-47.69-16.68-51.82-45.17,12.38-54.45,36.86-58S883.18,1284.7,887.31,1313.19Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M857.52,763.21c2.68,19-18.54,37.71-47.4,41.77s-54.37-8.05-57-27.07,18.53-37.71,47.38-41.78S854.84,744.2,857.52,763.21Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M515.82,810.13c2.68,19-18.53,37.71-47.39,41.76s-54.38-8-57.06-27,18.54-37.72,47.38-41.78S513.14,791.12,515.82,810.13Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M411.48,1281.58c5.83,28.19-7.66,54.8-30.14,59.46s-45.42-14.45-51.26-42.63,7.67-54.81,30.15-59.45S405.66,1253.39,411.48,1281.58Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M648.41,1362.05c5.84,28.19-7.68,54.81-30.14,59.45s-45.43-14.43-51.26-42.63,7.67-54.8,30.15-59.45S642.58,1333.86,648.41,1362.05Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1189.57,635.49l-6.64,3L1399.45,1110a7.32,7.32,0,0,0,6.18,4.25l489.87,31.07a7.32,7.32,0,0,0,7-10.53L1691.83,707a7.34,7.34,0,0,0-5.47-4l-495.7-74.72a7.31,7.31,0,0,0-7.73,10.28l6.64-3-1.09,7.24,491.91,74.15L1883.82,1130l-472.9-30-214.7-467.52-6.65,3-1.09,7.24Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1406.1,1107l-6.21-3.86-256,411.89a7.32,7.32,0,0,0,6.18,11.18l488.55,1.77a7.3,7.3,0,0,0,6.1-3.23L1902,1142.13a7.32,7.32,0,0,0-5.61-11.38l-489.87-31.07a7.32,7.32,0,0,0-6.67,3.44l6.21,3.86-.47,7.3,477.15,30.27-248,368.77-471.53-1.71,249.08-400.77-6.21-3.86-.47,7.3Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1189.57,635.49l-6.64,3,214.87,467.92-247,397.44L929.62,1062.11l266.14-422.72-6.19-3.9-6.64,3,6.64-3-6.19-3.9L915.05,1057.8a7.3,7.3,0,0,0-.35,7.18l228.85,457.17a7.32,7.32,0,0,0,12.76.58l256-411.89a7.31,7.31,0,0,0,.43-6.91L1196.22,632.44a7.33,7.33,0,0,0-12.84-.85Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1188.93,1080c-14,25.16-41.58,36.51-61.64,25.36s-25-40.59-11-65.75,41.59-36.5,61.64-25.36S1202.92,1054.79,1188.93,1080Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1198.33,880.29c-14,25.16-41.58,36.51-61.66,25.36s-25-40.59-11-65.76,41.57-36.5,61.63-25.35S1212.32,855.13,1198.33,880.29Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1325.27,1095.92c-14,25.17-41.59,36.51-61.64,25.35s-25-40.58-11-65.75,41.59-36.5,61.66-25.36S1339.25,1070.76,1325.27,1095.92Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1713.11,1297.37c-15.47,24.27-44.93,33.16-65.8,19.88s-25.24-43.77-9.76-68,44.92-33.16,65.79-19.86S1728.58,1273.09,1713.11,1297.37Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1425.47,1425.88c-15.47,24.27-44.92,33.17-65.79,19.87s-25.24-43.76-9.78-68,44.94-33.16,65.8-19.87S1440.94,1401.61,1425.47,1425.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1598.62,910.58c-10.38,16.15-38.66,16.46-63.16.69s-35.94-41.59-25.56-57.75,38.67-16.46,63.16-.71S1609,894.43,1598.62,910.58Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1173.59,1302.06c-14,25.17-41.59,36.5-61.65,25.36s-25-40.59-11-65.76,41.58-36.5,61.64-25.36S1187.58,1276.9,1173.59,1302.06Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1240.14,648l58.76,125.34-67.64-120.78a5,5,0,1,1,8.71-4.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1276.78,649.72l43.74,102-52.73-97.61a5,5,0,0,1,8.79-4.75Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1320.05,658.12l55.34,131.81L1311,662.3a5,5,0,0,1,8.91-4.5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1363.32,661.51l35.36,91.83-44.48-87.78a5,5,0,0,1,8.92-4.51Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1404.86,669.75l47,113.52L1395.81,674a5,5,0,1,1,8.89-4.56Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1439.74,671.33l27.12,67-36.08-62.67a5,5,0,1,1,8.66-5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1474.47,677.61l47.26,89-55.83-83.92a5,5,0,0,1,8.32-5.53Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1517.66,684.18l29,55.86-37.49-50.58a5,5,0,1,1,8-6Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1564.23,689.18l52.3,94.09-60.79-88.84a5,5,0,1,1,8.24-5.64Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1605.74,695.73l20.76,41-29.12-35.53a5,5,0,0,1,7.76-6.36Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1647.42,707.55l52.26,97.34-60.82-92.23a5,5,0,1,1,8.33-5.5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1417.29,1106,1387,1011.11l39.59,91.37a5,5,0,1,1-9.17,4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1448.93,1106.11l-17-55.09,26.24,51.33a5,5,0,0,1-8.92,4.56Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1488.82,1107.69l-35.27-104.9,44.57,101.31a5,5,0,0,1-9.14,4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1525.43,1116.08l-20.32-63.4,29.57,59.66a5,5,0,0,1-9,4.44Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1572,1112.75l-30.29-88.34,39.55,84.61a5,5,0,0,1-9,4.23Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1610.25,1122.74l-20.32-63.41,29.56,59.66a5,5,0,1,1-9,4.44Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1650.29,1124.71,1614.86,1041l44.4,79.29a5,5,0,1,1-8.72,4.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1683.53,1123l-28.75-72,37.77,67.69a5,5,0,0,1-8.74,4.88Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1711.68,1122.73l-33.62-96.66,42.88,92.93a5,5,0,0,1-9.07,4.18Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1746.67,1122.89,1724.62,1061l31.17,57.84a5,5,0,0,1-8.81,4.74Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1784.89,1129.46l-47-123.34,56.14,119.44a5,5,0,1,1-9,4.25Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1831.65,1134.86l-32.19-70.54,41,65.82a5,5,0,1,1-8.49,5.29Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1859.9,1138.15l-47.14-100.44,56,95.79a5,5,0,1,1-8.63,5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1600.68,1519l62.41-88.78-54,94.14a5,5,0,0,1-8.67-5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1562.34,1514.12l42.55-62.32-34,67.39a5,5,0,0,1-8.93-4.5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1507.42,1517.53,1570,1416.88l-53.86,105.55a5,5,0,0,1-8.9-4.54Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1459.17,1515.89l45.94-72.41-37.22,77.26a5,5,0,1,1-9-4.34Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1412.68,1514.12l42.54-62.32-34,67.39a5,5,0,0,1-8.93-4.5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1367.71,1514.25l31-45.82-22.24,50.63a5,5,0,0,1-9.17-4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1319.35,1514.48l29.44-49.38-20.45,53.73a5,5,0,1,1-9.36-3.57Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1259.57,1514.32l47.64-79.16L1268.38,1519a5,5,0,0,1-9.07-4.2Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1204.75,1512.55l65.88-107.32-57.18,112.2a5,5,0,0,1-8.9-4.54Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1128.4,1486.52l69.06-98.33-60.66,103.72a5,5,0,0,1-8.62-5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1111.09,1440.14l46.45-55.69L1119.18,1446a5,5,0,1,1-8.48-5.29Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1094.91,1397.69l29-30.71-20.94,36.64a5,5,0,1,1-8.72-5Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1074.82,1369.21l26.6-30.91-18.3,36.44a5,5,0,1,1-9-4.51Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1051.1,1321.84l30.36-37.18-22,42.66a5,5,0,0,1-8.92-4.61Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1032.59,1281.66l66.33-79.31-58.38,85.33a5,5,0,0,1-8.25-5.64Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1005.24,1235.38l46.29-49.25L1013,1241.66a5,5,0,0,1-8.22-5.71Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M984.05,1194.21l47.52-50.48-39.78,56.77a5,5,0,0,1-8.2-5.73Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M966.54,1153.1l27.62-26.83-19.79,33a5,5,0,1,1-8.64-5.17Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M945.61,1116.61,968,1100.07l-15.07,23.38a5.07,5.07,0,0,1-8.52-5.5A5.31,5.31,0,0,1,945.61,1116.61Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M929,1081l56.44-70.69-48.32,76.48a5,5,0,1,1-8.44-5.33Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1430.69,1133.75s6.4,0,17.6.27,27.17.58,46.33,1.37,41.5,1.73,65.42,3.07l36.88,2.16,38,2.5,38,2.84c12.55.88,24.88,2,36.81,3,23.88,2,46.14,4.14,65.22,6.12s34.94,3.93,46.07,5.14,17.45,2.2,17.45,2.2-6.4,0-17.59-.26-27.18-.57-46.34-1.36-41.5-1.74-65.42-3.07c-12-.71-24.33-1.29-36.87-2.17l-38-2.5-38-2.86-36.81-3c-23.87-2-46.14-4.14-65.21-6.12s-35-3.93-46.07-5.13S1430.69,1133.75,1430.69,1133.75Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1197.46,723.4s2.56,4.48,6.82,12.4,10.39,19.24,17.4,33,15.12,29.78,23.55,47.1c4.18,8.67,8.63,17.58,12.9,26.74l13.07,27.73L1284,898.22c4.25,9.17,8.18,18.32,12.12,27.11,7.8,17.61,14.88,34.14,20.78,48.38s10.57,26.24,14,34.57,5.07,13.22,5.07,13.22-2.56-4.48-6.83-12.4-10.41-19.24-17.4-33-15.13-29.77-23.56-47.09c-4.17-8.68-8.63-17.58-12.89-26.75s-8.69-18.44-13.06-27.73l-12.76-27.87c-4.24-9.18-8.17-18.32-12.11-27.11-7.79-17.62-14.88-34.14-20.79-48.39s-10.57-26.23-14-34.56S1197.46,723.4,1197.46,723.4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1006.62,964.12s9-16.89,23.53-41.5c7.24-12.33,15.87-26.61,25.28-41.78,4.76-7.56,9.55-15.46,14.63-23.33l15.33-23.94L1101,809.81c5.11-7.86,10.37-15.44,15.34-22.86,10-14.8,19.53-28.49,27.85-40.12,16.54-23.33,28.32-38.39,28.32-38.39s-9,16.89-23.52,41.51c-7.23,12.33-15.85,26.61-25.28,41.78-4.75,7.56-9.53,15.46-14.63,23.33L1093.75,839l-15.62,23.76c-5.12,7.85-10.37,15.44-15.34,22.86-10,14.78-19.54,28.48-27.85,40.11C1018.39,949.05,1006.62,964.12,1006.62,964.12Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M792.17,1513.73l-16.28-128L802,1512.09a5,5,0,1,1-9.78,2Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M827.09,1483.78l-7.55-76.89,17.39,75.28a5,5,0,1,1-9.73,2.26Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M862,1457.36l-2.53-65.43,12.44,64.28a5,5,0,1,1-9.82,1.91Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M901.91,1422.55l-6.29-81.76,16.17,80.39a5,5,0,1,1-9.8,2Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M936.86,1390.28l-17.54-130.56,27.37,128.87a5,5,0,0,1-9.77,2.07Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M969.26,1361.45l-5-70.55L979.14,1360a5,5,0,0,1-9.78,2.11Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1004.2,1335.39l-8.8-81.91,18.64,80.24a5,5,0,1,1-9.74,2.26Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M724.65,1050.44,739.71,1150l-24.84-97.54a5,5,0,0,1,9.68-2.47Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M757.05,1021.64l13.85,83.42-23.58-81.21a5,5,0,0,1,9.61-2.79Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M785.73,1000.39l12.61,74.74L776,1002.69a5,5,0,1,1,9.56-2.94Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M813.16,979.15l11.37,67.29-21.06-64.91a5,5,0,1,1,9.52-3.09Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M840.57,959.09l12.64,66.15-22.28-63.56a5,5,0,1,1,9.45-3.31Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M871.67,933.86,893.13,1014,862.2,937a5,5,0,1,1,9.28-3.73Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M904.14,914l15.18,67.55-24.73-64.67a5,5,0,1,1,9.34-3.57Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M939.15,889.45l11.35,73.43-21.08-71.26a5,5,0,1,1,9.59-2.83Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M966.55,861.81l10.14,57.41L956.9,864.38a5,5,0,1,1,9.42-3.4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M996.41,839.14l10.21,48.9-19.71-45.89a5,5,0,1,1,9.2-4Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1033.92,817l2.64,31.15-12.33-28.72a5.06,5.06,0,0,1,9.3-4A5.18,5.18,0,0,1,1033.92,817Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1058.93,793.59l1.33,34.58-11.14-32.76a5,5,0,1,1,9.81-1.82Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M674.45,1099.25s1.41,6.23,3.64,17.19,5.48,26.6,9,45.44,7.54,40.82,11.56,64.42c2,11.81,4,24,6.1,36.4l6,37.62c1.91,12.63,3.81,25.25,5.69,37.68s3.53,24.68,5.25,36.53c3.33,23.71,6.23,45.87,8.55,64.89s3.94,34.92,5.23,46,1.74,17.49,1.74,17.49-1.42-6.24-3.65-17.2-5.49-26.6-9-45.44S717,1399.48,713,1375.88c-2-11.81-4.16-24-6.09-36.4s-4-25-6-37.62-3.82-25.25-5.69-37.68-3.54-24.69-5.24-36.54c-3.33-23.7-6.23-45.86-8.54-64.88s-4-34.92-5.25-46S674.45,1099.25,674.45,1099.25Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M656.12,1043.4l4.18,84.11-14.1-83a5,5,0,0,1,9.86-1.67Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M609.14,1023.94l-1.21,40.38-8.72-39.45a5,5,0,0,1,9.82-2.17Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M563.82,1001l.87,55.82-10.78-54.78a5,5,0,1,1,9.82-1.93Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M517.66,980.89l5,71.79-14.92-70.4a5,5,0,0,1,9.78-2.08Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M474,961.12l3.76,86.57L464.1,962.13a5,5,0,0,1,9.87-1.58Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M419.15,933.77l2.52,90.22L409.21,934.6a5,5,0,0,1,9.9-1.38Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M358,902.37l5,78-14.93-76.7a5,5,0,0,1,9.82-1.91Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M308.11,882.32l6.29,76.81-16.16-75.35a5,5,0,0,1,9.78-2.1Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M261.93,860.9,272,939.18,252.13,862.8a5,5,0,1,1,9.68-2.52Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M254.45,857.58l62.45-31.9-57.29,40.44a5,5,0,0,1-5.77-8.17Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M302.11,874.89l52.21-21.77-47.57,30.61a5,5,0,1,1-5.42-8.43Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M354.13,901.89,425,871.41l-66.34,39.37a5,5,0,0,1-5.1-8.6Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M417.61,923.83,479,888l-55.81,44a5,5,0,1,1-6.2-7.86Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M466.39,952.42,530.18,918l-58.45,42.88a5,5,0,0,1-5.92-8.07Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M515.29,972.23l58.54-26.82L520.13,981a5,5,0,0,1-5.52-8.35Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M558.4,994.34l85.28-44.77-80.19,53.35A5,5,0,0,1,558,994.6Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M607.46,1014.29l63.65-31.88-58.57,40.47a5,5,0,1,1-5.68-8.23Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M653.24,1033.66l111.83-74.11-106,82.21a5,5,0,1,1-6.12-7.89Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M428.34,1399.07l-1.68-67.84,11.61,66.86a5,5,0,1,1-9.86,1.71Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M457.43,1409l-2.5-92.69,12.45,91.89a5,5,0,0,1-9.9,1.34Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M496.52,1424.68v-76.82l10,76.18a5,5,0,0,1-9.92,1.29Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M538.92,1441.32l-2.51-112.58,12.47,111.92a5,5,0,1,1-9.93,1.1Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M573,1457.94l2.48-39.4L583,1457.3a5,5,0,0,1-9.87,1.91Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M611.25,1472.79l3.33-41,6.64,40.55a5,5,0,1,1-9.92,1.62Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M650.35,1486.4,648.67,1421l11.61,64.34a5,5,0,0,1-9.85,1.78Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M694.43,1509.77l-9.18-117,19.09,115.81a5,5,0,0,1-9.85,1.63Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M396.74,1384l1.64-39.5,8.3,38.65a5,5,0,1,1-9.83,2.11Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M658.65,612s5.73,2,15.67,5.69,24.16,9,41.06,15.6S752,647.73,773,656.37l32.32,13.42,33.26,14.11,33.12,14.42c11,4.72,21.6,9.61,32,14.22,20.72,9.28,40,18.14,56.39,25.9s30,14.5,39.57,19.07,14.91,7.47,14.91,7.47-5.74-2-15.67-5.68-24.16-8.93-41.07-15.59-36.61-14.46-57.6-23.1c-10.47-4.37-21.37-8.73-32.31-13.43l-33.26-14.12L801.5,678.63l-32-14.21c-20.71-9.29-40-18.15-56.39-25.91s-30-14.49-39.57-19.06S658.65,612,658.65,612Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1014.52,789.92s-9.94,9.15-25.62,21.81c-7.81,6.37-17,13.63-27.08,21.22-5,3.76-10.16,7.76-15.52,11.62l-16.18,11.77-16.39,11.5c-5.37,3.83-10.83,7.37-16,10.92-10.43,7-20.29,13.41-28.85,18.73-17.06,10.73-29,17.16-29,17.16s9.94-9.17,25.62-21.82c7.81-6.37,17-13.63,27.08-21.22,5-3.76,10.16-7.77,15.52-11.61l16.19-11.77,16.39-11.5c5.38-3.82,10.83-7.36,16-10.91,10.43-7,20.29-13.41,28.86-18.73C1002.64,796.36,1014.52,789.92,1014.52,789.92Z\" transform=\"translate(-218.04 -572.38)\"/><path class=\"cls-1\" d=\"M1046.66,1086.43c-14,25.16-41.59,36.51-61.66,25.36s-25-40.59-11-65.75,41.58-36.51,61.65-25.36S1060.65,1061.27,1046.66,1086.43Z\" transform=\"translate(-218.04 -572.38)\"/></svg>";
}

/* GENERACIÓN CONTENEDOR DE INFORMACIÓN CASILLAS LATERALES */
function contenedorInfo(col, lado){

    const cont = document.createElement("div");
    cont.classList.add("contenedorHorizontal");
    /* DEPENDIENDO DE A QUE LADO ESTÁ LA CASILLA SE ASIGNA UNA CLASE U OTRA */
    if(lado === "izquierda"){
        cont.classList.add("contenedorHorizontalIzquierda");
    }else{
        cont.classList.add("contenedorHorizontalDerecha");
    }

    /* AL CONTENEDOR SE AÑADE EL NOMBRE DE LA CASILLA */
    const nombre = document.createElement("p");
    nombre.innerHTML = tablero[col.id - 1].nombre;
    nombre.classList.add("nombre");
    nombre.classList.add("nombre-horizontal");
    cont.appendChild(nombre);
    /* EN CASO DE SER COMPRABLES SE AÑADE EL PRECIO */
    if(tablero[col.id - 1].tipo === "propiedad" || tablero[col.id - 1].tipo === "sala-comun" || tablero[col.id - 1].tipo === "compania"){
        const precio = document.createElement("p");
        precio.innerHTML = tablero[col.id - 1].precio + "g";
        precio.classList.add("precio");
        cont.appendChild(precio);
    }

    col.appendChild(cont);
    return col;
}
/* GENERACIÓN DEL TABLERO */
function genera_tablero(numJugadores) {
    var body = document.getElementById("tablero");
    var divTablero = document.createElement("div");

    /* GENERACIÓN FILAS TABLERO */
    for (var i = 1; i <=11; i++) {
        var hilera = document.createElement("div");
        hilera.classList.add("row");
        /* GENERACIÓN COLUMNAS TABLERO */
        if(i===1){
            /* PARA LA FILA DE ARRIBA */
            /* CASILLAS DE LA FILA */
            for(let k = 21; k <= 31; k++){
                let col = document.createElement("div");
                onMouseOverInfo(col);
                col.classList.add("celdaTablero");
                if(k===21||k===31){
                    /* CASILLAS ESQUINAS SUPERIORES */
                    col.classList.add("celdaTableroEsquina");
                }else{
                    /* RESTO DE CASILLAS */
                    col.classList.add("celdaTableroAlto");
                }
                col = genera_casillas_vert(col, k, numJugadores);
                let casillaTablero = tablero[k - 1];
                casillaTablero.setFila(i);
                casillaTablero.setColumna(k - 20);

                /* DEPENDIENDO DE LA CASILLA SE LE AÑADE UN ESTILO */
                 if(k===29){
                    col.classList.add("sortilegios");
                }
                 else if(k===31){
                     col.classList.add("dmle");
                 }else if(k===21){
                     col.classList.add("comedor");
                 }else if(k===26){
                     col.classList.add("ravenclaw");
                 }

                /* SE AÑADE LA CELDA A LA FILA */
                hilera.appendChild(col);
            }
        }else if(i===11){
            /* PARA LA FILA DE ABAJO */
            let h = 1;
            /* CASILLAS DE LA FILA */
            for(let k = 11; k >= 1; k--){
                let col = document.createElement("div");
                onMouseOverInfo(col);
                col.classList.add("celdaTablero");
                if(k===11||k===1){
                    /* CASILLAS ESQUINAS INFERIORES */
                    col.classList.add("celdaTableroEsquina");
                }else{
                    /* RESTO DE CASILLAS */
                    col.classList.add("celdaTableroAlto");
                }
                col = genera_casillas_vert(col, k, numJugadores);
                let casillaTablero = tablero[k - 1];
                casillaTablero.setFila(i);
                casillaTablero.setColumna(h);
                /* SE AÑADE CASILLA A FILA */
                hilera.appendChild(col);

                /* DEPENDIENDO DE LA CASILLA SE LE AÑADE UN ESTILO */
                if(k===11){
                    col.classList.add("azkaban");
                }
                else if(k===1){
                    col.classList.add("anden");
                }else if(k===6){
                    col.classList.add("hufflepuff");
                }else if(k===5){
                    col.classList.add("impuesto1");
                }
                h++;
            }
        }else{
            /* PARA LAS FILAS DEL MEDIO */
            for(let j = 1; j <= 3; j++) {
                /* SE GENERAN TRES COLUMNAS */
                let col = document.createElement("div");

                if(j===1){
                    /* COLUMNA DE LA IZQUIERDA */
                    onMouseOverInfo(col);
                    col = genera_casillas_hor(col, i, numJugadores, "izquierda");

                }else if(j===3) {
                    /* COLUMNA DE LA DERECHA */
                    onMouseOverInfo(col);
                    col = genera_casillas_hor(col, i, numJugadores, "derecha");
                }else{
                    /* COLUMNAS CUADRADO CENTRAL */
                    col.classList.add("internas");
                    if(i===2){
                        col.classList.add("internas-arriba");
                    }else if(i===10){
                        col.classList.add("internas-abajo");
                    }
                }
                /* DEPENDIENDO DE LA CASILLA SE LE AÑADE UN ESTILO */
                if(i===9 && j===1){
                    col.classList.add("honeydukes");
                }else if(i===6 && j!==2){
                    if(j===1){
                        col.classList.add("gryffindor");
                    }else if(j===3){
                        col.classList.add("slytherin");
                    }

                }else if(i===9 && j===3){
                    col.classList.add("impuesto2");
                }
                else if(i===2 && j===2){
                    /* CONTENEDOR DE BOTONES Y MENSAJES */
                    col.classList.add("contenedor-botones");
                    const contenedorInterno = document.createElement("div");
                    /* CONTENEDOR DEL BOTÓN DE DADOS Y BOTÓN DE FINALIZAR TURNO */
                    contenedorInterno.id="cont-dados";
                    contenedorInterno.classList.add("cont-dados");
                    const contCol = document.createElement("div");
                    contCol.classList.add("cont-col");

                    const contCol1 = document.createElement("div");
                    contCol1.classList.add("cont-col");

                    const contCol2 = document.createElement("div");
                    contCol2.classList.add("cont-col");


                    const contBtn = document.createElement("div");
                    contBtn.id="cont-botones";
                    contBtn.classList.add("cont-botones");

                    /* DADOS */
                    const dados = document.createElement("button");
                    dados.id="btnDados";
                    dados.innerHTML = crearSvgDados();
                    dados.classList.add("dados");
                    dados.addEventListener("click", tirar);
                    contCol1.appendChild(dados);

                    /* BOTÓN FIN TURNO */
                    const finTurno = document.createElement("button");
                    finTurno.id="btnFinTurno";
                    finTurno.appendChild(document.createTextNode("Finalizar turno"));
                    finTurno.classList.add("boton");
                    finTurno.classList.add("btn-finalizar");
                    finTurno.addEventListener("click", finalizar);
                    finTurno.disabled = true;
                    contCol2.appendChild(finTurno);

                    contBtn.appendChild(contCol);
                    contBtn.appendChild(contCol1);
                    contBtn.appendChild(contCol2);
                    contenedorInterno.appendChild(contBtn);

                    /* CONTENEDOR NÚMERO TIRADA*/
                    const contenedorInterno1 = document.createElement("div");
                    contenedorInterno1.id="cont-tirada";
                    contenedorInterno1.classList.add("cont-tirada");
                    const tiradaDados = document.createElement("p");
                    tiradaDados.id = "tirada";
                    tiradaDados.classList.add("tirada-dados");
                    tiradaDados.appendChild(document.createTextNode("Tirada: "));
                    const numTirada = document.createElement("span");
                    numTirada.id = "numTirada";
                    tiradaDados.appendChild(numTirada);

                    contenedorInterno1.appendChild(tiradaDados);
                    contCol1.appendChild(contenedorInterno1);


                    col.appendChild(contenedorInterno);
                }else if(i===3 && j===2){
                    /* TARJETAS AUMENTADAS CON INFORMACIÓN SOBRE LAS CASILLAS */
                    col.classList.add("contenedor-mensaje");
                    const infoDiv = document.createElement("div");
                    infoDiv.classList.add("infoDiv");
                    infoDiv.id="infoDiv";
                    const infoDivCont = document.createElement("div");
                    infoDivCont.classList.add("infoDivCont");
                    const contInterior = document.createElement("div");
                    contInterior.id = "cont-interior";
                    contInterior.classList.add("cont-interior");
                    /* CABECERA PARA LA BARRA DE COLOR */
                    const cabecera = document.createElement("div");
                    cabecera.id = "cabecera";
                    /* NOMBRE DE LA CASILLA */
                    const nomCasilla = document.createElement("h4");
                    nomCasilla.id = "nomCasilla";
                    /* DIVISOR */
                    const divisor = document.createElement("div");
                    divisor.classList.add("divisor");
                    /* PRECIOS DE LAS TASAS */
                    const preciosTasas = document.createElement("div");
                    preciosTasas.id = "preciosTasas";
                    /* INFORMACIÓN ADICIONAL */
                    const info = document.createElement("p");
                    info.id="info";
                    /* PRECIO DE CADA CASA/HOTEL */
                    const precioCasa = document.createElement("p");
                    precioCasa.id = "precioCasa";
                    const precio = document.createElement("p");
                    /* PRECIO */
                    precio.classList.add("precio");
                    precio.classList.add("precio-info-tarjeta")
                    precio.id = "precioCasilla";

                    cabecera.appendChild(nomCasilla);
                    infoDivCont.appendChild(cabecera);
                    infoDivCont.appendChild(contInterior);
                    infoDiv.appendChild(infoDivCont);
                    contInterior.appendChild(preciosTasas);
                    contInterior.appendChild(divisor);
                    contInterior.appendChild(info);
                    contInterior.appendChild(divisor.cloneNode(true));
                    contInterior.appendChild(precioCasa);
                    contInterior.appendChild(divisor.cloneNode(true));
                    contInterior.appendChild(precio);

                    infoDiv.classList.add("oculto");
                    col.appendChild(infoDiv);
                }else if(i===6 && j===2){
                    /* TITULO DEL JUEGO */
                    col.classList.add("contenedor-titulo");
                    const titulo = document.createElement("h1");
                    titulo.appendChild(document.createTextNode("Frikipoly Harry Potter"));
                    titulo.id = "titulo-juego";
                    const contTitulo = document.createElement("div");
                    contTitulo.classList.add("absoluto");
                    contTitulo.appendChild(titulo);
                    col.appendChild(contTitulo);
                }else if(i===9 && j===2){
                    /* MENSAJE INFORMATIVO ACCIONES JUGADORES */
                    const contenedorInterno = document.createElement("div");
                    contenedorInterno.id="cont-mensaje";
                    contenedorInterno.classList.add("cont-mensaje");
                    let mensaje = document.createElement("p");
                    mensaje.id = "mensaje";
                    mensaje.classList.add("mensaje");
                    mensaje.classList.add("transparente");
                    contenedorInterno.appendChild(mensaje);
                    col.appendChild(contenedorInterno);
                }
                hilera.appendChild(col);

            }
        }
        divTablero.appendChild(hilera);
    }
    body.appendChild(divTablero);

}
/* FUNCIÓN QUE MUESTRA INFORMACIÓN SOBRE LA CASILLA CUANDO SE PASA EL RATÓN POR ENCIMA */
function onMouseOverInfo(col){
    /* SE MUESTRA INFO AL PASAR EL RATON */
    col.addEventListener("mouseover", informacion);

    function informacion(){

        const infoDiv = document.getElementById("infoDiv");
        infoDiv.classList.remove("oculto");
        /* SE POSICIONA LA TARJETA AUMENTADA AL LADO DE LA CASILLA */
        var rect = col.getBoundingClientRect();
        const casilla = tablero[col.id - 1];
        if(casilla.fila<9){
            infoDiv.style.top = "calc(" + rect.top + "px" + " - 2em)";

        }else{
            infoDiv.style.top = "calc(" + rect.top + "px" + " - 18em)";
        }
        infoDiv.style.left = rect.right + "px";
        /* SE AÑADE LA INFORMACIÓN */
        const cabecera = document.getElementById("cabecera");

        const nomCasilla = document.getElementById("nomCasilla");

        const precio = document.getElementById("precioCasilla");

        const precioCasa = document.getElementById("precioCasa");

        const preciosTasas = document.getElementById("preciosTasas");

        const info = document.getElementById("info");

        var divi = document.getElementsByClassName("divisor");

        nomCasilla.innerHTML = casilla.nombre;
        /* SI LA CASILLA ES COMPRABLE SE AÑADE LA INFORMACIÓN CORRESPONDIENTE */
        if(casilla.tipo === "propiedad" || casilla.tipo === "sala-comun" || casilla.tipo === "compania"){
            precio.innerHTML = "Precio: " + casilla.precio + " galeones";
            /* SI LA CASILLA ES DE TIPO PROPIEDAD SE AÑADE LA INFORMACIÓN SOBRE LAS CASAS Y LOS HOTELES */
            if(casilla.tipo === "propiedad"){
                cabecera.classList.add(casilla.grupo.color);
                precioCasa.innerHTML = "Precio de las casas y hoteles: " + casilla.precioCasa + " galeones";
                const par1 = document.createElement("p");
                par1.appendChild(document.createTextNode("Precio alquiler:"));
                const par2 = document.createElement("p");
                par2.appendChild(document.createTextNode("Sin casas: "+ casilla.tarifa0 + " galeones"));
                const par3 = document.createElement("p");
                par3.appendChild(document.createTextNode("Con 1 casa: " + casilla.tarifa1casa + " galeones"));
                const par4 = document.createElement("p");
                par4.appendChild(document.createTextNode("Con 2 casas: " + casilla.tarifa2casas + " galeones"));
                const par5 = document.createElement("p");
                par5.appendChild(document.createTextNode("Con 3 casas: " + casilla.tarifa3casas + " galeones"));
                const par6 = document.createElement("p");
                par6.appendChild(document.createTextNode("Con 4 casas: " + casilla.tarifa4casas + " galeones"));
                const par7 = document.createElement("p");
                par7.appendChild(document.createTextNode("Con 1 hotel: " + casilla.tarifa1hotel + " galeones"));
                preciosTasas.appendChild(par1);
                preciosTasas.appendChild(par2);
                preciosTasas.appendChild(par3);
                preciosTasas.appendChild(par4);
                preciosTasas.appendChild(par5);
                preciosTasas.appendChild(par6);
                preciosTasas.appendChild(par7);
                info.innerHTML = "Si un jugador posee todos los Solares de un Grupo de color, el precio del alquiler se duplica en los Solares sin edificar de ese grupo";
                for (let i = 0; i < divi.length;i++){
                    divi[i].classList.remove("oculto");
                }

            }else if(casilla.tipo === "sala-comun"){
                /* SI LA CASILLA ES DE TIPO SALA COMÚN SE AÑADE LA INFORMACIÓN SOBRE LOS PRECIOS */
                const par1 = document.createElement("p");
                par1.appendChild(document.createTextNode("Precio alquiler:"));
                const par2 = document.createElement("p");
                par2.appendChild(document.createTextNode("Si tiene 1 Sala: "+ casilla.tarifa0 + " galeones"));
                const par3 = document.createElement("p");
                par3.appendChild(document.createTextNode("Si tiene 2 Salas: " + casilla.tarifa1 + " galeones"));
                const par4 = document.createElement("p");
                par4.appendChild(document.createTextNode("Si tiene 3 Salas: " + casilla.tarifa2 + " galeones"));
                const par5 = document.createElement("p");
                par5.appendChild(document.createTextNode("Si tiene 4 Salas: " + casilla.tarifa3 + " galeones"));

                preciosTasas.appendChild(par1);
                preciosTasas.appendChild(par2);
                preciosTasas.appendChild(par3);
                preciosTasas.appendChild(par4);
                preciosTasas.appendChild(par5);

                divi[0].classList.remove("oculto");
                divi[1].classList.add("oculto");
                divi[2].classList.add("oculto");

            }else{
                /* SI LA CASILLA ES DE TIPO COMPAÑÍA SE MODIFICA LA APARIENCIA Y SE AÑADE LA INFORMACIÓN ADICIONAL */
                info.innerHTML = casilla.info;
                divi[0].classList.add("oculto");
                divi[1].classList.add("oculto");
                divi[2].classList.remove("oculto");
            }
        }else{
            /* SI LA CASILLA NO ES COMPRABLE SE AÑADE INFORMACIÓN ADICIONAL */
            info.appendChild(document.createTextNode(casilla.info));
            for (let i = 0; i < divi.length;i++){
                divi[i].classList.add("oculto");
            }

        }
    }
    /* SE OCULTA LA INFO AL QUITAR EL RATON */
    col.addEventListener("mouseout", ocultaInfo);
    function ocultaInfo(){
        const infoDiv = document.getElementById("infoDiv");
        infoDiv.classList.add("oculto");
        const nomCasilla = document.getElementById("nomCasilla");

        const cabecera = document.getElementById("cabecera");

        const precio = document.getElementById("precioCasilla");

        const precioCasa = document.getElementById("precioCasa");


        const preciosTasas = document.getElementById("preciosTasas");

        const info = document.getElementById("info");

        cabecera.classList.forEach(cl=>{
            cabecera.classList.remove(cl);
        });
        nomCasilla.innerHTML = "";
        precio.innerHTML = "";
        precioCasa.innerHTML = "";
        preciosTasas.innerHTML = "";
        info.innerHTML = "";
    }

    return col;

}