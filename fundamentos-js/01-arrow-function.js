function quadradro(n) {
    return n * n
}

console.log(quadradro(7))

//arrow 

const quadradoA = n => n * n

console.log('funcao arrow: ', quadradoA(5))

const somaA = (a,b,c)=> a + b + c
console.log(somaA(4,5,1))


const fatorialA => {
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *=i
    return resultado
}