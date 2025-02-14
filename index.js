let a = 1;
let b = "1";
let myInteger = 10;
let myDouble = 2.1;
let myString ="Cadena de texto";
let myString2 ='Cadena de texto';
let myString3 =`Cadena de 
                texto que permite salto de líneas`;
let myBoolean = false;

if (a===b){
    console.log(a + "es igual a " + b);
    console.log(`${a}  es igual a  ${b}`);
}else{
    console.log(a + " No es igual a " + b);
    console.log(`${a} NO es igual a  ${b}`);
}


// documentacion en mdn 

//myDouble = 'petaaka'
myDouble = myDouble + Number("1")


console.log(myDouble);
console.log("Hola mundo");


log("") // Primero ejecuta las declaraciones de las funciones por eso no da error


function log(m){
    console.log(m)
}
log("mi log")

let myObject= new Object();
myObject.id = 1;
myObject.name = "pepe";
myObject.p = true

let myArray = new Array();
let myArray2 = [];
let myArray3 = [1,2,3,4,5,6];

myArray3[2] = 8;

myArray3.push(8)
myArray3.pop(4) // Se usa el indice

for (let i = 0;i<myArray3.length;i++){
    log(myArray3[i])
}


/*
Distintas formas de recorrer un array

myArray3.forEach(function f(v) {
    log(`v = ${v}`)
});
myArray3.forEach(function(v) {
    log(`v = ${v}`)
});
myArray3.forEach((v) =>{
    log(`v = ${v}`)
});
myArray3.forEach((v) =>log(`v = ${v}`)); //esto es un callback(funcion que ya esta 
                                        //  declarada anteriormente o es creada en el momento de ejecucion)
*/
//myArray3.forEach(log) //esto es un callback

let sum = myArray3
       /* .map((v) => (v+1))
        //.filter((v)=>(v<3)) es equivalente a lo de abajo
        .filter((v)=>{
            return v<3;
        })*/
        .reduce((acumulator,value) =>{
            log(`${acumulator},${value}`);
            return acumulator+value
        },0)
    log(sum);

    let contact1 = {
        name : "pepe",
        phone: 12345
    };

    let contactList = [{
        name : "pepe",
        phone: 12345
    },
    {
        name : "luis",
        phone: 678910
    },]

let j =JSON.stringify(contactList)
log(JSON.stringify(contactList,null,2))
let x = JSON.parse(j)

var cool  = require('cool-ascii-faces');
console.log(cool())

// integrar paquetes o modulos 
/* npm init
    todo intro hasta q aparezca un json en la carpeta aqui ya esta creado*/