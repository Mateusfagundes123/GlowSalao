const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function calcularIdade() {

    var dataNascimentoInput = document.getElementById("dataNascimento").value;
    var dataNascimento = new Date(dataNascimentoInput);
    var dataAtual = new Date();

    var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 18){
        window.alert("A idade "+idade+" é invalida.");
    }

}
function EsqueceuSenha(){
    window.alert("Um email foi enviado para anamaria@gmail.com com os passos de recuperação")

}



