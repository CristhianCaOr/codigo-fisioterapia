
function identificacion(){

let  documento = null
documento = prompt("Pon el tipo de documento y el numero de identificacion")
    document.write(documento)
}


function visitapresencial(){  
    
  
function agregar(){
    let  pork = null
    pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
}

function presencialmente(){
        document.write("<br><br> Se realiza visita desde el área con el objetivo de hacer seguimiento y la atención, se llega a la vivienda en donde ")
} 


function cuidador(){
    let parentesco = prompt("¿Cuál es el parentesco del cuidador?");
        
        if (parentesco == "padre" || parentesco == "hermano" || parentesco == "abuelo" || parentesco == "primo" || parentesco == "vecino") {
            document.write(" atiende la visita su " + parentesco + " cuidador, ")
        } 
        
        else if (parentesco == "madre" || parentesco == "abuela" || parentesco == "hermana" || parentesco == "prima" || parentesco == "vecina") {
            document.write(" atiende la visita su " + parentesco + " cuidadora, ")
        } 
        
        else if(parentesco == "usuaria" || parentesco == "cuidadora"){
            document.write("atiende la " + parentesco +", ")
        } 
        
        else if(parentesco == "usuario" || parentesco == "cuidador"){
            document.write("atiende el " + parentesco +", ")
        }
}



function condicionesusuario(){
    let  estado = null
    let  why = null
    estado = prompt("¿como estaba el usuario? \n 1: bien \n 2: mal / regular") 
    
    switch(estado){
            
        case "1":
                document.write(" refiriendo que se encuentra en estables condiciones de salud general ")
            break;

            case "2":
                why = prompt("¿Por que?")
                document.write(why)
            break;
        }
}
    
 
function movilidadarticular(){

let miembros = null   
let what = null
miembros = prompt("en que miembros \n 1:Miembros superiores \n 2: Miembros inferiores \n 3: Miembro superiores e inferiores ")
 
switch(miembros){
    case "1":
        document.write("se enfoca la atención en la realización de técnicas de movilidad articular en miembros superiores, ")
    break;

    case "2":
        document.write("se enfoca la atención en técnicas de movilidad articular en miembros inferiores, ")
    break;

    case "3":
        document.write("se enfoca la atención en técnicas de movilidad articular en miembros superiores e inferiores, ")
    break;
}

what = prompt("que se hizo o que se utilizo \n 1: elevacion de miembros superiores \n 2: botellas caseras \n 3: peso corporal")

switch(what){
    case "1":
        document.write("se realizan elevaciones de miembros inferiores para mejorar retorno censo y edema, ")
    break;

    case "2":
        document.write("con la utilización de botellas caseras, ")
    break;

    case "3":
        document.write("con la utilización de su propio peso corporal, ")
    break;
}
           
agregar()
        

}


function flexo(){

let  extencion = null
extencion = prompt("extencion de que \n 1: rodillas \n 2: caderas \n 3: rodillas y caderas \n 4: codo \n 5: hombro \n 6: codo y hombro  ")
    
    switch(extencion){
        case "1":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de rodillas, ")
        break;

        case "2":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de caderas, ")
        break;

        case "3":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de rodillas y caderas, ")
        break;

        case "4":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de codos, ")
        break;

        case "5":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de hombros, ")
        break;

        case "6":
            document.write("se enfoca la atención en desplazamientos en flexo extensión de codo y hombros, ")
        break;
    }
   
}
    
function enfoquevisita1(){

let razon = null
    razon = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: Control cabeza y cuello \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
    
switch(razon){

    case "1":
        document.write("se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
    break;

    case "2":
        movilidadarticular()
    break;

    case "3":
        document.write("se enfoca la atención en fortalecimiento de miembros superiores e inferiores, ")
    break;

    case "4":
        document.write("se enfoca la atención en desplazamientos en diferentes direcciones, ")
    break;

    case "5":
        flexo()
    break;

    case "6":
        document.write("la atención se enfoca en abducción y aducción, ")
        agregar()
    break;

    case "7":
        document.write("la atención se enfoca en rotaciones, ")
        agregar()
    break;

    case "8":
        document.write("la atención se enfoca en técnicas de marcha, ")
        agregar()
    break;

    case "9":
        document.write("la atención se enfoca en técnicas de equilibrio y propiocepcion, ")
        agregar()
    break;

    case "10":
        document.write("la atención se enfoca en propiocepción, ")
        agregar()
    break;

    case "11":
        document.write("se enfoca la atención en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
    break;

    case "12":
        document.write("se enfoca la atención en la realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
    break;

    case "13":
        document.write("se enfoca la atención en técnicas de masaje")
    break;

    case "14":
        document.write("la atencion se enfoca en la posición del tendon, para modulación del tono muscular")
    break;

    case "15":
        document.write("se enfoca la atención y la asesoría para manejo de dolor")
    break;
}


} 


function enfoquevisita2(){  
let razon = null
razon = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: control cuello y cabeza \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
    
       
    switch(razon){

    case "1":
        document.write(", tambien se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
    break;

    case "2":
        movilidadarticular()
    break;

    case "3":
        document.write("tambien se enfoca la atención en fortalecimiento de miembros superiores e inferiores, ")
    break;

    case "4":
        document.write("tambien se enfoca la atención en desplazamientos en diferentes direcciones, ")
    break;

    case "5":
        flexo()
    break;

    case "6":
        document.write("tambien la atención se enfoca en abducción y aducción, ")
        agregar()
    break;

    case "7":
        document.write("tambien la atención se enfoca en rotaciones, ")
        agregar()
    break;

    case "8":
        document.write("tambien la atención se enfoca en técnicas de marcha, ")
        agregar()
    break;

    case "9":
        document.write("tambien la atención se enfoca en técnicas de equilibrio, ")
        agregar()
    break;

    case "10":
        document.write("la atención se enfoca tambien en la propiocepción, ")
        agregar()
    break;

    case "11":
        document.write("tambien se enfoca en en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
    break;

    case "12":
        document.write("tambien en realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
    break;

    case "13":
        document.write("tambien se enfoca la atención en técnicas de masaje")
    break;

    case "14":
        document.write("tambien en la posición del tendon, para modulación del tono muscular")

    break;

    case "15":
        document.write(" tanmbien en la asesoría para manejo de dolor")
    break;
}


    

} 

function enfoquevisita3(){
    let razon = null
    razon = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: control cuello y cabeza \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
        
           
        switch(razon){
    
        case "1":
            document.write(" y en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
        break;
    
        case "2":
            movilidadarticular()
        break;
    
        case "3":
            document.write("y en fortalecimiento de miembros superiores e inferiores, ")
        break;
    
        case "4":
            document.write("y en desplazamientos en diferentes direcciones, ")
        break;
    
        case "5":
            flexo()
        break;
    
        case "6":
            document.write("y en abducción y aducción, ")
            agregar()
        break;
    
        case "7":
            document.write("y en rotaciones, ")
            agregar()
        break;
    
        case "8":
            document.write("y en técnicas de marcha, ")
            agregar()
        break;
    
        case "9":
            document.write("y en técnicas de equilibrio, ")
            agregar()
        break;
    
        case "10":
            document.write("y en la propiocepción, ")
            agregar()
        break;
    
        case "11":
            document.write("y en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
        break;
    
        case "12":
            document.write("y en la realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
        break;
    
        case "13":
            document.write("y en técnicas de masaje")
        break;
    
        case "14":
            document.write("y en la posición del tendon, para modulación del tono muscular")
        break;
    
        case "15":
            document.write("y la asesoría para manejo de dolor")
        break;
    }
    
}


function referencias(){
let  references = null
references = prompt("¿Dejaste indicaciones? \n 1: si  \n 2: no ")

switch(references){
    case "1":
        document.write(" se dejan las indicaciones y se recuerdan los compromisos y dinámicas del programa, se deja el usuario en estables condiciones y se informa la fecha de la próxima atención ")
    break;

    case "2":
        document.write(" ")
    break;
    }       
}
    
function fecha(){
        let  cita = null
        cita = prompt("Escribe la fecha de la proxima visita")
        document.write(cita + " ")
}
    
function cierrepresencial(){
        document.write("se deja a usuario en estables condiciones de salud general.")
}
    // Codigo a ejecutar

    presencialmente()
    cuidador()
    condicionesusuario()
    enfoquevisita1()
    enfoquevisita2()
    enfoquevisita2()
    enfoquevisita3()
    referencias()
    fecha()
    cierrepresencial()
}

function atencionvirtual(){  

    
function agregar(){
        let  pork = null
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
}
    
function atenciontelefonica(){
let eleccion = null     
eleccion = prompt("¿Qué tipo de atencion fue? \n 1: para virtual")
        
    switch(eleccion){
        case "1":
            document.write("<br><br>se realiza seguimiento telefónico con el objetivo de hacer seguimiento desde el área y reencuadre frente al inicio de las atenciones, se establece comunicación con acudiente del usuario, ")
        break;
    }
} 


function estadousuario(){
let estado =null
let razon = null   
estado = prompt("¿como estaba el usuario? \n 1: Bien \n 2: mal") 

switch(estado){
 
    case "1":
        document.write(" quien indica que el usuario se ha encontrado en estables condiciones de salud general ")
    break;

    case "2":
        razon = prompt("¿Por que? \n 1: problemas economicos \n 2: hospitalizacion \n 3: otro" )
    
    switch(razon){

        case "1":
            document.write("quien refiere que se ha presentado dificultad para conseguir los alimentos y la situación económica es compleja")
        break;

        case "2":
            document.write("quien refiere que el usuario esta hospitalizado ")
        break;
        
        case "3":
            agregar()
        break;

    }
}
}


function enfoquellamada(){
let razon = null
razon = prompt("motivo de la atencion: \n 0: ninguna\n 1: indicaciones de las dinamicas del proyecto \n 2: continuacion de atenciones \n 3: condiciones de salud del usuario \n 4: Revision de ejercicios dejados con anterioridad")

switch(razon){
    case"0":
        ocument.write(" ")
    break;

    case"1":
        document.write("la atención se enfoca en las indicaciones frente a las dinámicas del proyecto, la continuidad de las atenciones y la importancia de cumplir con los compromisos")
    break;

    case"2":
        document.write("la atención se enfoca en la indicación de la continuidad de las atenciones") 
    break;

    case"3":
        document.write("se enfoca la atención en la revisión de las condiciones de salud de la usuaria y en el cuidado")
    break;

    case"4":
        document.write("se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de las mismas para evitar lesiones y dolores articulares")
    break;
    }
}     


function indicaciones() {
let indications = null
indications = prompt("¿Dejaste indicaciones? \n 1: si  \n 2: no ")
        
switch(indications){
    
    case "1":
        document.write(" se dejan las indicaciones y se recuerdan los compromisos y dinámicas del programa, se deja el usuario en estables condiciones y se informa la fecha de la próxima atención ")
    break;

    case "2":
        document.write(" ")
    break;

    }
}


function tecnicas(){

let tecnics = null
let tipodetecnica = null
tecnics = prompt("¿El usuario practico tecnicas? \n 1: si  \n 2: no ")


switch(tecnics){
    case "1":
        tipodetecnica = prompt("que tecnicas ha practicado el usuario \n 1: movilidad articular \n 2: tecnicas de cambios de posición \n 3: ambas \n 4: reducir espasticidad" )

    switch(tipodetecnica){
        
        case "1":
            document.write(" indica que se han aplicado las tecnicas con enfoque en movilidad articular, ")
        break;

        case "2":
            document.write(" indica que se han aplicado las tecnicas con enfoque en cambios de posición, ")
        break;

        case "3":
            document.write(" indica que han aplicado tecnicas con enfoque en movilidad articular y cambios de posición, ")
        break;

        case "4":
        document.write(" indica que han aplicado tecnicas para reducir espasticidad")
        break;
    
    }

    break;


    case "2":
        document.write(" ")
    break;

}
}


function fecha(){
        let  cita = null
        cita = prompt("Escribe la fecha de la proxima visita, ")
        document.write(cita)
}

function cierrevirtual(){
        document.write(", se lleva a cabo la atención virtual de activación bajo consentimiento de quien la recibe dado que el servicio de transporte para facilitar las atenciones presenciales inician en los primeros días de junio por lo anterior se deja constancia de estas sin firma del usuario y/o persona cuidando. ")
}

function ejercicios(){
let practicas = null
let cual = null
practicas = prompt("¿Le han dejado ejercicios al usuario? \n 1: si \n 2: no")

switch(practicas){
    case "1":
        cual = prompt("¿Cuales? \n 1: movilidad articular \n 2: ejercicios en miembros superiores \n 3: ejercicios en miembros inferiores \n 4:movilidad articular en miembros superiores \n 5:movilidad articular en miembros inferiores \n 6: movilidad articular en miembros superiores e inferiores")

        switch(cual){
            case "1":
                document.write("se dejan ejercicios de movilidad articular")
            break;

            case "2":
                document.write("se dejan ejercicios para miembros superiores")
            break;

            case "3":
                ducument.write("se dejan ejercicios para miembros inferiores")
            break;

            case "4":
                document.write("se dejan ejercicios para movilidad articular en miembros superiores")
            break;

            case "5":
                document.write("se dejan ejercicios para movilidad articular en miembros inferiores")
            break;

            case "6":
                document.write("se dejan ejercicios para movilidad articular en miembros superiores e inferiores")
            break;
        }

        case "2":
            document.write(" ")
        break;

    }
}


// Codigo a ejecitar
    atenciontelefonica()
    estadousuario()
    agregar()
    enfoquellamada()
    agregar()
    ejercicios()
    tecnicas()
    indicaciones()
    agregar()
    fecha()
    cierrevirtual()
    
}


function tipodevisita(){
    let  respuesta = null
    respuesta = prompt("¿de que forma fue la visita? \n 1: presencial \n 2: virtual")
    
    switch(respuesta){
        case "1":
            visitapresencial()
        break;

        case "2":
            atencionvirtual()
        break;
    }
    
}

identificacion()
tipodevisita()
























