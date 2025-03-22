let palabra = "ana";

//tolowercase lo convierte todo en minusculas y replace(/\s+/g, '') quita todos los espacios que hay en el string
const textoLimpio = palabra.toLowerCase().replace(/\s+/g, '');


// Invertimos el string
const textoInvertido = textoLimpio.split('').reverse().join('');

// Comparamos si el string original es igual al invertido
if(palabra==textoInvertido){
    console.log( `la palabra ${palabra} es palindroma`)
}else{
    console.log(`no es palindroma la palabra ${palabra}`)
}
