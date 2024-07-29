function limpacampos(){
    var pl = document.getElementById('inpitFeedbck');
    pl.value = "";

}
var botoesClicados = [];

function CalculoBotoes(botao) { 
    var valor = 0;
    switch (botao.id) {
        case "botao1":
            valor = 40;
            break;
        case "botao2":
            valor = 85;
            break;
        case "botao3":
            valor = 55;
            break;
        case "botao4":
            valor = 290;
            break;
        case "botao5":
            valor = 385;
            break;
    }
    
    var indice = botoesClicados.indexOf(botao.id);
    
    if (indice === -1) {
        botoesClicados.push(botao.id);
        botao.style.backgroundColor = "green";
    } else {
        botoesClicados.splice(indice, 1);
        botao.style.backgroundColor = "";
    }
    AtualizarDivResultado();
}

function AtualizarDivResultado() {
    var divResultado = document.getElementById("resultado");
    var soma = 0;
    // Percorre a lista de botões clicados e soma seus valores
    for (var i = 0; i < botoesClicados.length; i++) {
        var valor = 0;
        // Atribui valores diferentes para cada botão
        switch (botoesClicados[i]) {
            case "botao1":
                valor = 40;
                break;
            case "botao2":
                valor = 85;
                break;
            case "botao3":
                valor = 55;
                break;
            case "botao4":
                valor = 290;
                break;
            case "botao5":
                valor = 385;
                break;
        }
        soma += valor;
    }
    divResultado.textContent = "R$"+soma+",00";
}

function FormadePagamento() {
    var tipodeaco = document.getElementById("tipodeaco");
    var imagem = document.getElementById("imagemFormaPagamento");

    var tipoSelecionado = tipodeaco.options[tipodeaco.selectedIndex].value;

    if (tipoSelecionado === "Pix") {
        document.querySelector('.valordasreservas').innerHTML = "Pix";
        imagem.src = "../Img/QRPIX.png";
        imagem.style.display = "block"; 

    } else if (tipoSelecionado === "CartaoDebito") {
        document.querySelector('.valordasreservas').innerHTML = '<input type="text" maxlength="16" placeholder="Número do Cartão"><br><input type="text"placeholder="Data de validade" maxlength="5" placeholder="MM/AA"><br><input type="text"placeholder="Código de segurança"><br><input type="text" placeholder="Nome no cartão"<br>  <br><input type="text" placeholder="CPF"<br>';
        imagem.style.display = "none"; 


    } else if (tipoSelecionado === "TraBan") {
        document.querySelector('.valordasreservas').innerHTML = 'Banco Sicoob<br>Agência 3069<br>Número da Conta<br>Glow Salão<br>12.345.678/0001-90<br></button>';
        imagem.style.display = "none"; 

    } else {
        document.querySelector('.valordasreservas').innerHTML = "Dinheiro";
        imagem.style.display = "none"; 
    }
}
    function EsqueceuSenha(){
        window.alert("Um email foi enviado para anamaria@gmail.com com os passos de recuperação")
    }

    function PagamentoConfirmado(){
        var pagamentoOK = document.getElementById("pagamentoOK");
        pagamentoOK.textContent = "Pagamento confirmado"

    }

    
