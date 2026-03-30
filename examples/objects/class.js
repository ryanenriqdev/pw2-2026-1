function somar(...values) {
    return values.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual,
        0
    )
}

/*
console.log( somar(3, 5) )
console.log( somar(3, 5, 10) )
*/

class Company {
    
    constructor(name, founded, industry, 
        kind = 'Internet company') {
        this.name = name;
        this.founded = founded;
        this.industry = industry;
        this.kind = kind;
    }

    print() {
        return `${this.name}, ${this.founded}`;
    }

    lifeTime(referenceYear = 2026) {
        return referenceYear - this.founded;
    }
}

const amazon = new Company('Amazon', 1994, 'E-Commerce, Cloud');

console.log( amazon.print() )
console.log( amazon.lifeTime(2000) )