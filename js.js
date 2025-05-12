function AlteraRele1(){
    var estado = document.getElementById("estado").textContent;
    if(estado === "0"){
        document.getElementById("estado").textContent = "1";
        document.getElementById("rele").className = "rele1_ligado";
        document.getElementById("botao").innerHTML = "<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").textContent = "0";
        document.getElementById("rele").className = "rele1_desligado";
        document.getElementById("botao").innerHTML = "<a href='/?ligar' class='botao'>Liga</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").textContent;
    if(estado_2 === "0"){
        document.getElementById("estado_2").textContent = "1";
        document.getElementById("rele_2").className = "rele2_ligado";
        document.getElementById("botao_2").innerHTML = "<a href='/?2_desligar' class='botao_2'>Desliga</a>";
    } else {
        document.getElementById("estado_2").textContent = "0";
        document.getElementById("rele_2").className = "rele2_desligado";
        document.getElementById("botao_2").innerHTML = "<a href='/?2_ligar' class='botao_2'>Liga</a>";
    }
}

// Inicialização dos elementos quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se os elementos existem antes de manipular
    if(document.getElementById("rele")) {
        document.getElementById("rele").className = "rele1_desligado";
    }
    if(document.getElementById("rele_2")) {
        document.getElementById("rele_2").className = "rele2_desligado";
    }
    if(document.getElementById("botao")) {
        document.getElementById("botao").innerHTML = "<a href='/?ligar' class='botao'>Liga</a>";
    }
    if(document.getElementById("botao_2")) {
        document.getElementById("botao_2").innerHTML = "<a href='/?2_ligar' class='botao_2'>Liga</a>";
    }
});
