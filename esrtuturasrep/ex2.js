function ePaisagem(larg, altu)
{
    return larg >= altu ? true : false;
}
console.log(ePaisagem(1920, 1080));

// OR YOU COULD DO THIS:

const iPaisagem = (largura, altura) => largura > altura;
console.log(iPaisagem(1080, 1920));