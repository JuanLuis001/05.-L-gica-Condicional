
/*
EJERCICIO #1: ¿Hiciste la tarea?
Escribe una función que pregunte al usuario si hizo la tarea o no. Asumiremos que:

    - En caso afirmativo el usuario responderá si
    - En caso contrario responderá no

Si el usuario responde si, se escribirá en la consola o en pantalla "¡Bien hecho!".
Si el usuario responde no, se escribirá en la consola o en pantalla "No te rindas, ¡empieza ya mismo!" */

var respuesta = ' ';

respuesta = prompt("¿Hiciste la tarea?").toUpperCase();

if(respuesta == "SI"){
    alert("¡Bien hecho!");

} else if(respuesta == "NO"){
    alert("No te rindas ¡Empieza ya mismo!");

}else{
    alert("Respuesta no válida, prueba recargar la página y responde con <<SI>> o <<NO>>");
}