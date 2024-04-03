var frutas =['Bananas', 'Maçã', 'Abacaxi', 'Pera'];

console.log('----FRUTAS----')
console.log('----Quantidade De Elementos em Frutas' +frutas.length);
console.log('----Incluindo a Melancia no array')
frutas.push('Melancia');
console.log('--Nova Quantidade de Elementos em frutas' + frutas.length);
console.log('Itens armazenando as FRUTAS')
console.log(frutas);

console.log('----Veiculos----');
console.log('Imprimindo um veiculo de casda vez')

var veiculo = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta'];

console.log('----Veiculos----');
console.log('Imprimindo um veiculo de cada vez');
console.log(veiculo[0]);
console.log(veiculo[1]);
console.log(veiculo[2]);
console.log(veiculo[3]);
console.log('--ELementos no array veiculos');
console.log(veiculo.length);
console.log('--Incluindo o novo veiculo no array');
veiculo.push('Golf');
console.log('--ELementos de Repetição for')

for (i = 0; i <veiculo.length; i++){
    console.log(veiculo[i])
}