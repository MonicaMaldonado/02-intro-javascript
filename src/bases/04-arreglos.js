

// Arreglos en JS
//const arreglo = new Array(100);  
//Se utiliza de esta manera solo cuando
//se quiere crear un arreglo con un tamaño predefinido


const arreglo = [1,2,3,4];
//No es recomendable usar el push, porque el push modifica el objet principal
        //arreglo.push(1);  
        //arreglo.push(2); 
        //arreglo.push(3);
        //arreglo.push(4);
//Cuando queramos insertar algo a un arreglo utilzaremos el operador spread


let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(numero) {
        return numero * 2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
