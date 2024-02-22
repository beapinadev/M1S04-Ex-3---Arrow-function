let numerosArray = [6, 8, 1, 4, 2]

const mediaCalculadora = (numerosArray) => {
    let soma = 0;
    for (let numero of numerosArray){
        soma += numero;
    }
    let resultadoMedia = soma/numerosArray.length;
    return resultadoMedia;
}

console.log(mediaCalculadora(numerosArray));