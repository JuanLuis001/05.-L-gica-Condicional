/*
EJERCICIO #2: Conversión de grados Farenheit a Celcius

Escribe una función que pregunte al usuario la temperatura en grados Fahrenheit.
Deberás entonces convertir ese valor a grados Celsius e imprimir en consola o en pantalla el resultado. */

var heit;
var sius;

heit =parseInt( prompt( "Ingresa la temperatura en grados Fahrenheit:"));

function heitToCius( heit, sius){
    
    sius = ((heit - 32)/1.8);

    return sius;
}

alert("La temperatura en grados Celsius es de: "+ heitToCius( heit,sius)+ " °C");