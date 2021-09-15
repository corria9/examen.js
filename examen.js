//Valor Mayor Encontrado dentro de un arreglo
// const array = {
//     nombres: ["A", "B","C", "D", "E"],
//     numeros: [12, 34, 45, 56, 76, 199, 2]
// }

// function valorMayorEncontrado(){
//       console.log(Math.max.apply(null, array.numeros));
// }

// valorMayorEncontrado();
//Valor esperado 199











//Utilizando Spread Operators y Arrow Functions
const array = {
    nombres: ["A", "B","C", "D", "E"],
    numeros: [12, 34, 45, 56, 76, 199, 2]
}

let maxNum = array.numeros;
valorMayorEncontrado = () => console.log(Math.max(...maxNum));

valorMayorEncontrado();
//Valor esperado 199