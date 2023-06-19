// let soldado = {
//     name: "link",
//     edad: 19,
//     nivel: 3,
//     habilidad: ["ataque-circular", "magia-nivel-1", "eter"]
// };

// for(let dato in soldado){
//     console.log({dato: soldado[dato]}); 

//     if(typeof(soldado[dato]) === "object"){
//         let habilidades = {}; 
//         for(let habilidad of soldado[dato]){
//             habilidades[habilidad] = habilidad; 
//         }; 

//         console.table(habilidades); 
//     }

// }


// const clearElemenOfArray = (array, pos) =>{
//     return array.splice(pos, 1); 
// } 

// console.log(clearElemenOfArray(soldado.habilidad, 2)); 

// console.log(
//     soldado.habilidad
// )

const persona = {
    name : "link",
    edad: 19,
    nivel: 3,
}

// //obtener todas las propiedades de un objeto

// const names = Object.getOwnPropertyNames(persona); 
// console.log(names);

// const values = Object.values(persona);
// const keys = Object.keys(persona);
// console.log({values: values, keys: keys});

//funciones 

// const square = function (value) {
//     return Math.pow(value, 2);
// };

// const random = () => Math.ceil(Math.random() * 100);

// const data = (callback, value) =>{

//     const cache = {};   
    
//     if(!!cache[value]){
//         return cache[value];
//     }

//     cache[value] = callback(value);

//     return cache[value];

// }

// console.log(data(square, 3));
// console.log(random());

// //medir tiempo 
// let list = ["celina","joseph","Carol","jose"];



// console.time('slice'); 
// const familia2 = list.slice(); 
// console.timeEnd('slice');

// console.time('spress');
// const familia = [...list];
// console.timeEnd('spress');

// console.log(Date());

const dias ={

    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',   
};

console.log(dias[0]);
const p = document.querySelector('#dia');
p.innerText = dias[0];

true && 'hola' // hola
false || 'hola'; //hola

false && 'holaa' // false
true || 'hola'; // true
