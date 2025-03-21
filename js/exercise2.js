
const rango = (a,b) =>{
    a=10
    b=20
    return [a,b]
}

const [a,b] = rango();
let primos = []

for (let i = a; i<b; i++) {
    if (i%2!=0 && i%3!=0){
        primos.push(i); // esto es lo que le envia los datos al array vacio que lo va a al macenar 
        console.log(`su numero ${i} es primo`) // esto muetra los datos uno por uno almacenados
        // console.log(`estos son ${primos}`)// esto muestra los numeros acumulados en el array despues de cada vuelta que hace el for 
    }
    
};
console.log(`estos son ${primos}`) // esto muestra todos los datos almacenados despues de que el for cumple todos sus ciclos 