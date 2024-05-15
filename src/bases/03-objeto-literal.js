
const persona = {
        nombre : 'Tony',
        apellido : 'Stark',
        edad : 45,
        direccion : {
                ciudad : 'New York',
                zip : 55321321,
                lat : 14.3232,
                lng : 34.9233321
        }
};

console.log( { persona : persona}); //estoy creando un objeto que dentro tiene una
//propiedad que se llama persona y le estamos asiganando el valor persona

console.log(persona);
//console.table(persona);

const persona2 = persona;  //Cuando se hace una asignacion de este tipo, no se esta copiando
                           //el valor sino la referencia al espacio en memoria de la  variable
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

//Entonces si se quiere crear un clon se debe crear un nuevo objeto y
//apunta a un espacio en memoria nuevo
const persona3 = { ...persona }  //operador spread que se utiliza para hacer
// un clon o extraer las propiedades de un objeto y asignarselas al
//que estoy creando
persona3.nombre = 'Lia';
console.log(persona3);
