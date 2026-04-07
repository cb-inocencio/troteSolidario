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
    let metaProva1 
    if (cor == "amarela") {
        metaProva1 = 54
    } 
    else if (cor == "cinza") {
        metaProva1 == 51
    } 
    else if (cor == "laranja"){
        metaprova1 == 21
    }
    else if (cor == "marrom") {
        metaProva1 == 88
    }
    else if (cor == "preta") {
        metaProva1 = 60
    }
    else if (cor == "rosa") {
        metaProva1 = 44
    }
    else if (cor == "roxa") {
        metaProva1 = 42
    }
    else if (cor == "verde") {
        metaProva1 = 61
    }
    else if (cor == "vermelha") {
        metaProva1 = 32
    }

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000 // 5.000 PONTOS GARANTIDOS
        if (kitAlimentacao > metaProva1){ 
            // GANHAMOS 83.33 PONTOS POR KIT INDIVIDUAL
            pontos = pontos + (kitAlimentacao - metaProva1) * (5000/metaProva1)
        } 
    }
    else {
        pontos = pontos + (kitAlimentacao * (5000/metaProva1))
    }
    // EXIBI O RESULTADO PARA O USUÁRIO
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}