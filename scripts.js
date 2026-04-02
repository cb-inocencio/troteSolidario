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

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= 60) {
        pontos = pontos + 5000 // 5.000 PONTOS GARANTIDOS
        if (kitAlimentacao > 60){ 
            // GANHAMOS 83.33 PONTOS POR KIT INDIVIDUAL
            pontos = pontos + (kitAlimentacao - 60) * 83.33
        } 
    }
    else {
        pontos = pontos + (kitAlimentacao * 83.33)
    }
    // EXIBI O RESULTADO PARA O USUÁRIO
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}