// Carrossel

var itens = ['item1_carrossel', 'item2_carrossel', 'item3_carrossel', 'item4_carrossel'];
var itemAtual = 0;

function mudar_item() {
    document.getElementById(itens[itemAtual]).className = 'item_carrossel';
    document.getElementById('ponto_'+ itens[itemAtual]).className = 'ponto_carrossel';
    itemAtual = (itemAtual + 1) % itens.length;
    document.getElementById(itens[itemAtual]).className = 'item_carrossel item_carrossel_atual';
    document.getElementById('ponto_'+ itens[itemAtual]).className = 'ponto_carrossel ponto_carrossel_atual';
}

$('#ponto_item1_carrossel').click(function(){
    itemAtual = 0;
    document.getElementById('item1_carrossel').className = 'item_carrossel item_carrossel_atual';
    document.getElementById('item2_carrossel').className = 'item_carrossel';
    document.getElementById('item3_carrossel').className = 'item_carrossel';
    document.getElementById('item4_carrossel').className = 'item_carrossel';
    document.getElementById('ponto_item1_carrossel').className = 'ponto_carrossel ponto_carrossel_atual';
    document.getElementById('ponto_item2_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item3_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item4_carrossel').className = 'ponto_carrossel';
});

$('#ponto_item2_carrossel').click(function(){
    itemAtual = 1;
    document.getElementById('item1_carrossel').className = 'item_carrossel';
    document.getElementById('item2_carrossel').className = 'item_carrossel item_carrossel_atual';
    document.getElementById('item3_carrossel').className = 'item_carrossel';
    document.getElementById('item4_carrossel').className = 'item_carrossel';
    document.getElementById('ponto_item1_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item2_carrossel').className = 'ponto_carrossel ponto_carrossel_atual';
    document.getElementById('ponto_item3_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item4_carrossel').className = 'ponto_carrossel';
});

$('#ponto_item3_carrossel').click(function(){
    itemAtual = 2;
    document.getElementById('item1_carrossel').className = 'item_carrossel';
    document.getElementById('item2_carrossel').className = 'item_carrossel';
    document.getElementById('item3_carrossel').className = 'item_carrossel item_carrossel_atual';
    document.getElementById('item4_carrossel').className = 'item_carrossel';
    document.getElementById('ponto_item1_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item2_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item3_carrossel').className = 'ponto_carrossel ponto_carrossel_atual';
    document.getElementById('ponto_item4_carrossel').className = 'ponto_carrossel';
});

$('#ponto_item4_carrossel').click(function(){
    itemAtual = 3;
    document.getElementById('item1_carrossel').className = 'item_carrossel';
    document.getElementById('item2_carrossel').className = 'item_carrossel';
    document.getElementById('item3_carrossel').className = 'item_carrossel';
    document.getElementById('item4_carrossel').className = 'item_carrossel item_carrossel_atual';
    document.getElementById('ponto_item1_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item2_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item3_carrossel').className = 'ponto_carrossel';
    document.getElementById('ponto_item4_carrossel').className = 'ponto_carrossel ponto_carrossel_atual';
});

setInterval(mudar_item, 10000);

// Transição de abas na tela País

function mudar_aba(aba_atual, aba_destino, secao_atual, secao_destino) {
    document.getElementById(aba_atual).className = "aba_pais";
    document.getElementById(aba_destino).className = "aba_pais aba_atual_pais";
    document.getElementById(secao_atual).className = "secao_pais secao_invisivel_pais";
    document.getElementById(secao_destino).className = "secao_pais";
}

// Preview da foto de perfil

function previewFotoPerfil() {
    var foto = document.querySelector('input[name=foto_usuario]').files[0];
    var preview = document.querySelector('#foto_usuario_cadastro');
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if(foto) {
        reader.readAsDataURL(foto);
    } else {
        preview.src = "img/roxo/icone_perfil_grande_roxo.svg";
    }

    document.getElementById('foto_usuario_cadastro').className = 'foto_perfil foto_perfil_preview';
};