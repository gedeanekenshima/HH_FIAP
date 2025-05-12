document.addEventListener('DOMContentLoaded', function() {
    // Configura os eventos de clique para recarregar a página
    document.querySelector('#botao1 a').addEventListener('click', function(e) {
        // A ação já está no href, só precisamos garantir o recarregamento
    });
    
    document.querySelector('#botao2 a').addEventListener('click', function(e) {
        // A ação já está no href, só precisamos garantir o recarregamento
    });
    
    // Verificação inicial para garantir que as imagens estão corretas
    updateReleImages();
});

function updateReleImages() {
    // Atualiza Rele 1
    const botao1 = document.querySelector('#botao1 a');
    const rele1 = document.getElementById('rele1');
    if(botao1.textContent === 'Desligar') {
        rele1.className = 'rele-ligado';
    } else {
        rele1.className = 'rele-desligado';
    }
    
    // Atualiza Rele 2
    const botao2 = document.querySelector('#botao2 a');
    const rele2 = document.getElementById('rele2');
    if(botao2.textContent === 'Desligar') {
        rele2.className = 'rele-ligado';
    } else {
        rele2.className = 'rele-desligado';
    }
}
