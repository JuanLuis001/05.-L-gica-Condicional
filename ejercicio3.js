/*
EJERCICIO #3: Mayor de 3 números

Escribe una función que reciba como parámetro 3 números.
Posteriormente deberá mostrar en consola o pantalla el número mayor de los 3. */

var numero1;
var numero2;
var numero3;
var n=0;  

numero1 = parseInt( prompt( "Inserta el primer numero:")); 
numero2 = parseInt( prompt( "Inserta el segundo numero:")); 
numero3 = parseInt( prompt(" Inserta el tercer numero:")); 

function mayorD3( numero1, numero2, numero3, n){

    if ( numero1 >= numero2){

        n = numero1;
    } else{

        n = numero2;
    }

    if ( numero3 >= n){

        n = numero3;
    } 

    return n;
}

alert("El numero mayor es: "+ mayorD3(numero1, numero2, numero3, n));








