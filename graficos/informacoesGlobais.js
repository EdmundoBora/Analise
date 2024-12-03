const url = 'https://raw.githubusercontent.com/EdmundoBora/Api-planilhas-/refs/heads/main/dados-brasil.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas)
    const pessoasNoMundo = (dados.total_pessoas_mundo )
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No Brasil tem <span>${pessoasNoMundo} milhoes</span> de pessoas e a diversos pratos na culinaria brasileira, e os pratos dos brasileiros mais preferidos são:`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()