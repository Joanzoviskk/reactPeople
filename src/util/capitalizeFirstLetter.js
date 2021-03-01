/*
Faz om que a primeira palavra de uma frase 
fique em letra maiuscula
EX: carro => Carro
*/

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;