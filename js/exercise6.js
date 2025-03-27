let numeros = [2,23,44,10,100,"hola"]
let resultado =[]
// join elimina las comas y lo convierte a estring las dos cosas con su parentesis ya que esta funcion es personalizable si lo quiero con comas o no, a diferencia de tostring que no puede hacer esto split separa cada dato y map(number) convierte el string en numeros sin las comas pq ya join se las quito con esto se evita los valore nan por las comas 
do {
    for (let i = 0; i <numeros.length; i++) {
        numeros = numeros.filter(item => typeof item === 'number' && !isNaN(item)) // Filtra solo números válidos dentro del mismo array ya que sin el numeros = numeros crearia otro array 
        let digitos = String(numeros[i]).split('').map(Number);
        let cuadrados = digitos.map(num => num** 2 ); // Elevar cada dígito al cuadrado y map me crea un nuevo array a diferencia de for each
        if (numeros[i]==1){
            console.log("es feliz")

        }
        
        console.log(`estos son los digitos que sacamos del for ${digitos}`); 
        console.log(cuadrados)
        // if (cuadrados.forEach(num,i,arr) => {})
    
    }
    

} while (resultado.forEach((num,i,arr) =>{
    if (i+1<arr.length && (num+arr[i+1]) ==1 ){
        console.log(`el ${resultado} es un numero feliz`)
    }else{
        console.log(`el ${resultado} no es numero feliz`)
    }
    
}));
resultado.array.length =0; // Borra el contenido del array antes de hacer push
resultado.push(cuadrados)
console.log(`el resultado de la multiplicacion es ${resultado}`);



// ejemplo de map 
// let cuadrados = numeros.map(num => num * num);
// let numerosValidos = datos.filter(item => typeof item === 'number' && !isNaN(item));

// numeros.forEach((num, i, arr) => arr[i] = num * 2);
