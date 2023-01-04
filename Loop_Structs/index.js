for (let i = 500; i >= 400; i -=10)
{
    console.log(`Linha ${i}`);
}


for (let j = 0; j <= 10; j++)
{
    const par = j %2 === 0 ? 'par' : 'impar';
    console.log(j, par);
}

const pessoa = {
    nome: 'Emilio',
    sobrenome: 'Bresolin',
    idade: 32
  };
  
for (let chave in pessoa) 
{
    console.log(chave, pessoa[chave]);
}

let frutas = ['maca','pera','uva'];
for (let index in frutas) 
{
    console.log(frutas[index]);
}
  
for (let i = 0; i < frutas.length; i++) 
{
    console.log(frutas[i]);
}

let nomes = ['Emilio', 'Helena', 'Leticia'];

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});