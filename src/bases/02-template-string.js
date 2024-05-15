
const nombre = 'Monica';
const apellido = 'Maldonado';

//const nombreCompleto = nombre + ' ' + apellido;
//const nombreCompleto = ` Hola mundo `;
const nombreCompleto = ` ${nombre} ${apellido} `;
console.log(nombreCompleto);


function getSaludo(nombre) {
    return 'Hola ' + nombre ;
}
//`` template string con los simbolos ``
console.log(`Este es un texto: ${ getSaludo(nombre) }`);