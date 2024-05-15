


//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman',
    //rango : 'Soldado'
};

//Extraigo del objeto persona los atributos nombre, edad, clave
//const { nombre, edad, clave} = persona;

//Esto es si tuviera otra variable llamada nombre
//Extraigo del objeto persona el atributo nombre y le estoy asignando
//a la constante nombre2 
//const { nombre : nombre2} = persona;

//console.log(nombre2);
//console.log(nombre);
//console.log(edad);
//console.log(clave);


const retornaPersona = ({nombre, edad, rango}) => {
     console.log(nombre, edad, rango);
};

retornaPersona(persona);

const usaContext = ( {clave, nombre, edad, rango = 'Capitán'} ) => {
    //La desestructuracion nos permite asignar valores por defecto
    //Si no tuviera la propiedad en el objeto usa la que le definimos

    //console.log(nombre, edad, rango);

    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 14.1232,
            lng : -12.3232
        }
    }


};

const avenger = usaContext(persona);
//console.log(avenger);
const { nombreClave, anios, latlng: { lat, lng } } = usaContext(persona);
// o const { lat, lng } = latlng;


console.log(nombreClave, anios);
console.log(lat, lng);

