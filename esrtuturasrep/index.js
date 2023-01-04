
//funcao que gera um numero aleatorio de 1 ~50
function random(min, max)
{
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let rand = random(1, 50);
//console.log(rand);

// um numero aleatorio \/
let rand2 = random(1, 50);
console.log(rand2);
console.log('-----------------------------');
//pego o rand2 q é um numero aleatorio e vai rodando o rand até q chegue nesse numero rand2
const min = 1;
const max = 50;
while (rand !== rand2)
{
    rand = random(min, max);
    console.log(rand);
}