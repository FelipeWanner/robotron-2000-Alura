const controle = document.querySelectorAll("[data-controle]")   //seleciona todos os data attributes de nome 
                                                                //'controle' em um array
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(element => {
    element.addEventListener("click", (evento) =>{
        const operacao = evento.target.dataset.controle //atribuir + ou - na variavel operacao, 
                                                        //dependendo de qual node for clicado.
                                                        
        manipulaDados(operacao, evento.target.parentNode) //chamado da funcao 'manipula dados' 
                                                    // passando o value do 'data-controle' e o pai do 'data-controle'
        atualizaEstatisticas(evento.target.dataset.peca, operacao)
    })                                              
});


function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]") //seleciona o 'data-contador' dentro pai de 'data-controle'
    
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao){
    if(operacao === "+"){
        estatisticas.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    } else {
        estatisticas.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
}
