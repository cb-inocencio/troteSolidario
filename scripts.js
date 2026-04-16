function calcular(){
    // JS É UMA LINGUAGEM NAO TIPADA, OU SEJA SEM TIPO DE DADOS
    // let --> DECLARA VARIAVEL EM JAVASCRIPT
    // Number --> Converte o texto recebido para número
    // document.getElementById --> recupera valor informado no input no arquivo calculadora do id informado
    // USAR CAMELCASE, >>> PADRÃO <<<
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) 
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) 
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // CALCULA O VALOR TOTAL DE PONTOS
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    let cor = document.getElementById("cor").value
    let metaKit 
    if (cor == "amarela") { // COMUNICAÇÃO SOCIAL
        metaKit = 54
    } 
    else if (cor == "cinza") { // PSICOLOGIA 
        metaKit = 51
    } 
    else if (cor == "laranja"){ // LETRAS
        metaKit = 21
    }
    else if (cor == "marrom") { // MEDICINA
        metaKit = 88
    }
    else if (cor == "preta") { // ENGENHARIA DE SOFTWARE
        metaKit = 60
    }
    else if (cor == "rosa") { // CIÊNCIAS CONTÁBEIS
        metaKit = 22
    }
    else if (cor == "roxa") { // ENGENHARIAS (CIVIL E PRODUÇÃO)
        metaKit = 42
    }
    else if (cor == "verde") { // CIENCIAS DA COMPUTACAO + SISTEMAS DE INFORMACAO
        metaKit = 61
    }
    else if (cor == "vermelha") { // ADMINISTRAÇÃO
        metaKit = 32
    }

    // CALCULA META DO SUPLEMENTO
    let metaSuplemento
    let metaLeite = metaKit 
    if (metaKit % 2 == 0) {
        metaSuplemento = (metaKit / 2)
    }
    else {
        metaSuplemento = (metaKit / 2) + 0.5
    }

    // CALCULA META DA DOAÇÃO DE SANGUE
    let metaSangue = metaSuplemento



    // CALULA KIT ALIMENTAÇÃO
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000 // 5.000 PONTOS GARANTIDOS
        if (kitAlimentacao > metaKit){ 
            // GANHAMOS 83.33 PONTOS POR KIT INDIVIDUAL
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        } 
    }
    else {
        pontos = pontos + (kitAlimentacao * (5000/metaKit))
    }

    // CALCULA PONTUAÇÃO DO SUPLEMENTO
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if (qtdeLatas >= metaSuplemento) {
        pontos = pontos + 5000
        if (qtdeLatas > metaSuplemento) {
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }

    // CALCULA PONTUAÇÃO DO LEITE
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)
    if (qtdeLeite >= metaLeite) {
        pontos = pontos + 5000
        if (qtdeLeite > metaLeite) {
            pontos = pontos + (qtdeLeite - metaLeite) * (5000/metaLeite)
        }
    }
    else {
        pontos = pontos + (qtdeLeite * (5000/metaLeite))
    }

    // CALCULA PONTUACAO DAS DOAÇÕES
    let qtdeDoacoes = Number(document.getElementById("qtdeDoacoes").value)
    if (qtdeDoacoes >= metaSangue) {
        pontos = pontos + 5000
        if (qtdeDoacoes > metaSangue) {
            pontos = pontos + (qtdeDoacoes - metaSangue) * (5000/metaSangue)
        }
    }
    else {
        pontos = pontos + (qtdeDoacoes * (5000/metaSangue))
    }

    // EXIBI O RESULTADO PARA O USUÁRIO
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
}