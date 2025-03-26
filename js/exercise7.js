let numero = 9876;  // Número de entrada

let sumaAcumulada = numero;  // Inicializa la suma con el número original

// Usamos un do...while para repetir el proceso hasta que el número sea de un solo dígito
do {
    // Convierte el número en una cadena, separa los dígitos y los suma
    sumaAcumulada = String(sumaAcumulada)
        .split('')  // Separa los dígitos en un arreglo
//esta linea lo que hace es reducir el valor a uno ya que es un contador tipo metodo de arreglos osea array que se encarga de tener un contador acc que se inicializo en 0
// esto para que no tuviera el primer valor del array que seria 1, despues parseint(val) le pasa los valores osea cada numero del array y los va sumando y en el while se
//la condicion que se rompa cuando el numero sea de un solo digito este metodo es muy util 
        .reduce((acc, val) => acc + parseInt(val), 0);  // Suma los dígitos

} while (String(sumaAcumulada).length > 1);  // Continúa hasta que el número tenga un solo dígito

console.log('El número reducido a un solo dígito es:', sumaAcumulada);