const fs = require('fs');
let moment = require('moment');

const superHerois = require('./superherois')

//let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8')
let data = moment().format('DD/MM/YYYY')

console.log(data);