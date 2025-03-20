const interesante = (n)=>{
    if(n%7==0){
        console.log("esInteresante")
    }else if(n.toString().includes(`7`)){
        console.log("esInteresante")
    }
    else{
        console.log("no es interesante")
    }
    return n 
};
interesante(5)
interesante(17)
interesante(15)
interesante(7)

// listo