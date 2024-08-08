// #1 Ejercicio

function parOImpar(num) {
  if (num % 2 === 0) {
    console.log(`el numero ${num} es par`);
  } else {
    console.log(`el numero ${num} es impar`);
  }
}

// parOImpar(3);
// parOImpar(12);
// parOImpar(1.5);

// #2 Ejercicio

function compararNum(num1, num2) {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
  } else if (num1 < num2) {
    console.log(`el numero ${num1} es menor que el numero ${num2}`);
  } else {
    console.log(`los numeros ${num1} y ${num2} son iguales`);
  }
}

// compararNum(2, 5);
// compararNum(17, 2);
// compararNum(3, 3);

// #3 Ejercicio

function multiploCinco(num) {
  if (num % 5 === 0) {
    console.log(`el numero ${num} es multiplo de 5`);
  } else {
    console.log(`el numero ${num} NO es multiplo de 5`);
  }
}
// multiploCinco(5);
// multiploCinco(10);
// multiploCinco(12);

//#4 Ejercicio
function hastaNum(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`el numero actual es ${i}`);
  }
}

// hastaNum(10);

// #5 Ejercicio

function multiplicarPalabra(palabra, num) {
  for (let i = 1; i <= num; i++) {
    console.log(` ${palabra} esta cantidad de veces ${i}`);
  }
}

// multiplicarPalabra("pepito", 7);

// #6 Ejercicio

let arrayNum = [1, 2, 3, 4, 7, 8];

function imprimirArray() {
  for (let nombres of arrayNum) {
    console.log(nombres);
  }
}
// imprimirArray();

//#7 Ejercicio

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function imprimirSalteando(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(array[i]);
  }
}

// imprimirSalteando(numeros);
// imprimirSalteando(numero2);

// #8 ejercicio

let arrayMult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicarArray(array, num) {
  for (let i = 0; i < arrayMult.length; i++) {
    console.log(`${arrayMult[i]}` * num);
  }
}

// multiplicarArray(arrayMult, 7);
