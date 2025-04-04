function coletarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    dados(cep)
}
//

async function dados(cep) {
let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
console.log(dados)
dadostela(dados)
}

function dadostela(dados){
    document.querySelector("#endereco").innerHTML = dados.logradouro
    document.querySelector("#bairro").innerHTML = dados.bairro
    document.querySelector("#cidade").innerHTML = dados.localidade
    document.querySelector("#estado").innerHTML = dados.estado
    document.querySelector("#regiao").innerHTML = dados.regiao
}

