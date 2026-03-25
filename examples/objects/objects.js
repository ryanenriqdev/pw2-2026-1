/*
const students = [
  {
    id: 1,
    name: 'fulano',
    email: 'fulano@gmail.com',
    toString() {
        return `${this.name}, ${this.email}`
    },
    valueOf() {
        return this.id;
    }
    
  },
  {
    id: 2,
    name: 'sicrano',
    email: 'sicrano@gmail.com',
  },
];

console.log( "Primeiro estudante: " + students[0] );
console.log( `Primeiro estudante: ${students[0]}` );
*/


const students = {
  20181234: {
    name: 'fulano',
    email: 'fulano@gmail.com',
  },
  20181235: {
    name: 'sicrano',
    email: 'sicrano@gmail.com',
  },
};

const studentsArray = [
  {
    matricula: "20181234",
    name: 'fulano',
    email: 'fulano@gmail.com',
  },
  {
    matricula: "20181235",
    name: 'sicrano',
    email: 'sicrano@gmail.com',
  }
]

console.log( students["20181234"] );

const docente = {
    matricula: 123,
    nome: "Francisco",
    cargaHoraria: 80,
    tempoDocencia: 15, // unidade de medida = anos
    enquadrarDocente: function() {
        if(this.tempoDocencia === undefined) return `tempo docência undefined`;

        if(this.tempoDocencia > 10) return `Docente antigo`;

        return `Docente recente`;
    }
    /*
    enquadrarDocenteArrowFunction: (_this) => {
        if(_this.tempoDocencia === undefined) return `tempo docência undefined`;

        if(_this.tempoDocencia > 10) return `Docente antigo`;

        return `Docente recente`;
    }
    */
}

// console.log( docente.enquadrarDocente.apply(null, [docente]));
console.log( docente.enquadrarDocente() );

console.log( JSON.stringify(docente) );

const ip = `{"status":"success","country":"United States",
"countryCode":"US","region":"VA","regionName":"Virginia",
"city":"Ashburn","zip":"20149","lat":39.03,"lon":-77.5,
"timezone":"America/New_York","isp":"Google LLC",
"org":"Google Public DNS","as":"AS15169 Google LLC",
"query":"8.8.8.8"}`;

const ipObj = JSON.parse(ip);
console.log( ipObj.status );


/*
const ip = { address: '192.168.0.2', mask: '255.255.255.0' };
ip.version = 'IPv4';
ip.func = function() {
    return `teste`;
}
// delete ip.mask;
const myIp = { ...ip }; // { address, mask, version }
myIp.version = 'v6';
myIp.func = function() {
    return `teste spread`;
}

console.log(ip.func());

*/
const ips = [
  { address: '192.168.0.2', mask: '255.255.255.0' },
  { address: '192.168.0.10', mask: '255.255.255.0' },
  { address: '192.168.0.26', mask: '255.255.255.0' },
];

for(const indice in ips) {
    console.log( indice );
    console.log(ips[indice].address);
}
console.log('---');
for(const elemento of ips) {
    console.log(elemento.address);
}

