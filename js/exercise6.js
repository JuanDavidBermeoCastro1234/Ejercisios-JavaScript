let numeros = [2,23,44,10,100]

// join elimina las comas y lo convierte a estring las dos cosas con su parentesis ya que esta funcion es personalizable si lo quiero con comas o no, a diferencia de tostring que no puede hacer esto split separa cada dato y map(number) convierte el string en numeros sin las comas pq ya join se las quito con esto se evita los valore nan por las comas 
let digitos = numeros.join('').split('').map(Number);

console.log(digitos); 


// ejemplo de map
// let cuadrados = numeros.map(num => num * num);