

//Funciones en JS

const saludar = function (nombre){
        return `Hola, ${nombre}`;
}
//funcion de flecha
const saludar2 = (nombre) => {
        return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

//console.log(saludar('Naia'));

console.log(saludar2('Lia'));
console.log(saludar3('Akim'));
console.log(saludar4());



const getUser = () => ({
                uid : 'ABC123',
                username : 'El_Papi1502'
});

const user = getUser();
console.log(user);

//Tarea
// 1. Transformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
/*function getUsuarioActivo( nombre ) {
        return {
                uid: 'ABC456',
                username : nombre
        }
};*/

const getUsuarioActivo = (nombre) => ({
                uid: 'ABC456',
                username : nombre
});

const usuarioActivo = getUsuarioActivo('Monica');
console.log(usuarioActivo);






