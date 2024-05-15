const personajes = ['Goku', 'Vegeta', 'Trunks'];
//console.log(personajes[0]);

/*const [ p1 ] = personajes;
console.log(p1);*/

/*const [ , p2 ] = personajes; //estoy diciendo a js que ignore el primer elemento
console.log(p2);*/

const [ , , p3 ] = personajes; //estoy diciendo a js que ignore el primero y el segundo
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

//Llamo a retornaArreglo y extraigo las letras y los numeros
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. El segundo valor del arreglo se llamara setNombre
 const userState = ( valor ) => {
     return [valor, () => { console.log('Hola mundo')}];
 }

 //Esto es sin utilizar la desestructuracion del arreglo
 //const arr = userState( 'Naia');
 //console.log(arr);
 //arr[1]();

const [nombre, setNombre] = userState('Naia');
console.log(nombre);
setNombre();
