function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "false"){
        document.getElementById("estado").innerHTML="true";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'><img src='LED_ON.png' alt='LED1 ON'><p>LED1</p></div>";
        document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>OFF</a>";
    } else {
        document.getElementById("estado").innerHTML="false";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'><img src='LED_OFF.png' alt='LED1 OFF'><p>LED1</p></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>ON</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "false"){
        document.getElementById("estado_2").innerHTML="true";
        document.getElementById("rele_2").innerHTML="<div class='rele2_ligado'><img src='LED_ON.png' alt='LED2 ON'><p>LED2</p></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao'>OFF</a>";
    } else {
        document.getElementById("estado_2").innerHTML="false";
        document.getElementById("rele_2").innerHTML="<div class='rele2_desligado'><img src='LED_OFF.png' alt='LED2 OFF'><p>LED2</p></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao'>ON</a>";
    }
}

// Initialize buttons on page load
window.onload = function() {
    AlteraRele1();
    AlteraRele2();
};
