//import { heroes } from '../data/heroes';  //primera forma de importacion
//import { heroes } from '../data/heroes' //segunda forma de importacion, escribir imp y dar tab
//import { heroes } from '../data/heroes'; //otra forma es hacer la referencia a lo que quiero comenzando a escribirlo

//esto es para utilizar una exportacion por defecto, no se ponen las llave
//caundo se hace la exportancion se puede poner cualquier nombre
//import cualquiercosa from './data/heroes';
//import heroes from './data/heroes';


//forma de exportacion por defecto mejorada, cuando pusimos el export al final del archivo
import heroes,  { owners }  from '../data/heroes'; //aqui tengo una exportacion por defecto, 
   //y con las llaves digo que estas son exportanciones indivuiduales que tambien se encuentran en ese archivo
console.log(owners);




//find - una forma mas larga de hacerlo
//find recibe una funcion como argumento que usualmente se conoce como callback
/*const getHeroeById = (id) => {
    return heroes.find( (heroes) => {
        if (heroe.id === id){
            return true;
        }else {
            return false;
        }
    });
}*/


//find - cambio
 //const getHeroeById = (id) => cualquiercosa.find( (heroe) => heroe.id === id);
 export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
 //console.log(getHeroeById(2));

//filter
 //const getHeroeByOwner = (owner) => cualquiercosa.filter( (heroe) => heroe.owner === owner);
export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
 //console.log(getHeroeByOwner('DC'));
