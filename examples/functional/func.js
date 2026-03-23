/*
for(let i = 0; i < 50; i++) {
    console.log( i + 1 );
}
*/
let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    // console.log( array[i] );
}

// Funcional
array.forEach(
    (elem) => { console.log(elem) }    
)

const arrayAoQuadrado = array.map(
    (x) => x ** 2  
)

let arrayInicializado30 = Array(30).fill("teste");

const arrayResultante = arrayInicializado30
.map(  
    (elem, index) => index + 1
)
.filter( (elem) => elem % 2 !== 0)

console.log( arrayResultante );

console.log(
    arrayResultante.reduce(
        (acumulado, valorAtual) => acumulado + valorAtual, 0
    )
);





const a = Array(30).fill(0);
const array1 = a.map(  
    (elem, index, array) => {
        return array[index] = index + 1

    }
)

console.log(
    array1
);

console.log(v = 3)