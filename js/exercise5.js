let numeros1 = [10,5,7,2,30,27,6,4]

let numerosPares =[]

let resultadoMultiplicacion=[]

const descartarImpar = () =>{
    //le digo que inicie el contador en 0 luego que i recorra todo el arrray con .length para kuego decirle a i que aumente de uno en uno

    for (let i= 0; i< numeros1.length; i++) {
    //le paso cada dato que hay dentro del array a la condicion
        //este hace que incremente en uno mas el indice i y solo pase si los dos numeros consecutivos son pares 
    if (numeros1[i]%2==0 && numeros1[i+1]%2==0 ){
        //envia los datos que cumplen la condicion al nuevo array indicandole el dato y los indices i
        numerosPares.push(numeros1[i],numeros1[i+1])
    
    }        
    // console.log(numerosPares)
}
} 
//si no lo llamamos nos dara dos arrays vacios debido a que no esta ejecutando la funcion que declaramos anteriormente
descartarImpar()
console.log(numerosPares)

// let multiplicacion = numerosPares[0]*numerosPares[1]
// console.log(multiplicacion)

//aumenta de dos en dos para que no hayan errores de suma y el -1 solamente asegura que no nos de un valor nan al acceder a un dato que no existe por ejemplo si el array va hasta 3 no acceda a al dato 4 el cual no existe y dara nan
for (let i = 0; i < numerosPares.length-1; i+=2) {
    let multiplicacion = numerosPares[i]*numerosPares[i+1]
    console.log(`${numerosPares[i]} * ${numerosPares[i + 1]} = ${multiplicacion}`);
    resultadoMultiplicacion.push(multiplicacion)
}
console.log(resultadoMultiplicacion)


//solo sirve si el array tiene el metodo clave valor  
// for (let num of resultadoMultiplicacion.i) {
//     console.log(i); // Muestra cada número por separado
// }