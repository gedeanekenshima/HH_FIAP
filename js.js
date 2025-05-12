document.addEventListener('DOMContentLoaded', function() {
    // Atualiza os estados iniciais
    updateReleStates();
    
    // Configura eventos para os botões
    document.querySelector('#botao a').addEventListener('click', function(e) {
        setTimeout(updateReleStates, 100); // Atualiza após o clique
    });
    
    document.querySelector('#botao_2 a').addEventListener('click', function(e) {
        setTimeout(updateReleStates, 100); // Atualiza após o clique
    });
});

function updateReleStates() {
    // Atualiza Rele 1
    var link1 = document.querySelector('#botao a');
    var rele1 = document.getElementById('rele');
    if(link1.textContent === 'Desligar') {
        rele1.className = 'rele1_ligado';
    } else {
        rele1.className = 'rele1_desligado';
    }
    
    // Atualiza Rele 2
    var link2 = document.querySelector('#botao_2 a');
    var rele2 = document.getElementById('rele_2');
    if(link2.textContent === 'Desligar') {
        rele2.className = 'rele2_ligado';
    } else {
        rele2.className = 'rele2_desligado';
    }
}
