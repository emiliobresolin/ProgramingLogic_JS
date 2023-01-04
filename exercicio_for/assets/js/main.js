function escopo () {
    const container = document.querySelector('.container');
 
    const elementos = 
    [
        {tag: 'p', texto: 'Primeira frase'},
        {tag: 'div', texto: 'Segunda frase'},
        {tag: 'footer', texto: 'Terceira frase'},
        {tag: 'section', texto: 'Quarta frase'}
    ];
 
    const div = document.createElement('div');
 
    for (let i = 0; i < elementos.length; i ++) 
    {
        const {tag, texto} = elementos[i];
        const agoravai = document.createElement(tag);
        agoravai.innerHTML = texto;
        div.appendChild(agoravai);
    }
 
    container.appendChild(div);
}
 
 
escopo();