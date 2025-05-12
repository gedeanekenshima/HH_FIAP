// Funções para controle dos relés
function AlteraRele1() {
    var link = document.querySelector('#botao a');
    var rele = document.getElementById('rele');
    if(link.textContent === 'Ligar') {
        rele.className = 'rele1_ligado';
        link.textContent = 'Desligar';
        link.href = '/?desligar';
    } else {
        rele.className = 'rele1_desligado';
        link.textContent = 'Ligar';
        link.href = '/?ligar';
    }
}

function AlteraRele2() {
    var link = document.querySelector('#botao_2 a');
    var rele = document.getElementById('rele_2');
    if(link.textContent === 'Ligar') {
        rele.className = 'rele2_ligado';
        link.textContent = 'Desligar';
        link.href = '/?2_desligar';
    } else {
        rele.className = 'rele2_desligado';
        link.textContent = 'Ligar';
        link.href = '/?2_ligar';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Configura estado inicial dos relés
    var link1 = document.querySelector('#botao a');
    var rele1 = document.getElementById('rele');
    if(link1.textContent === 'Desligar') {
        rele1.className = 'rele1_ligado';
    } else {
        rele1.className = 'rele1_desligado';
    }
    
    var link2 = document.querySelector('#botao_2 a');
    var rele2 = document.getElementById('rele_2');
    if(link2.textContent === 'Desligar') {
        rele2.className = 'rele2_ligado';
    } else {
        rele2.className = 'rele2_desligado';
    }
});
