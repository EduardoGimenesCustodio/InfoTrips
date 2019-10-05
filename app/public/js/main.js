// Carrossel

var carrossel = ['item1_carrossel', 'item2_carrossel', 'item3_carrossel', 'item4_carrossel'];
var itemCarrosselAtual = 0;

// function mudar_item_automaticamente() {
//     document.getElementById(carrossel[itemCarrosselAtual]).className = 'item_carrossel';
//     document.getElementById('ponto_'+ carrossel[itemCarrosselAtual]).className = 'ponto_carrossel';
//     itemCarrosselAtual = (itemCarrosselAtual + 1) % carrossel.length;
//     document.getElementById(carrossel[itemCarrosselAtual]).className = 'item_carrossel item_carrossel_atual';
//     document.getElementById('ponto_'+ carrossel[itemCarrosselAtual]).className = 'ponto_carrossel ponto_carrossel_atual';
// }

// function mudar_item_manualmente() {
//     for(var i = 0; i < carrossel.length; i++) {
//         document.getElementById(carrossel[i]).className = 'item_carrossel';
//         document.getElementById('ponto_'+ carrossel[i]).className = 'ponto_carrossel';
//     }
//     document.getElementById(carrossel[itemCarrosselAtual]).className = 'item_carrossel item_carrossel_atual';
//     document.getElementById('ponto_'+ carrossel[itemCarrosselAtual]).className = 'ponto_carrossel ponto_carrossel_atual';
// }

// function mudar_item(posicao_item_carrossel) {
//     itemCarrosselAtual = posicao_item_carrossel;
//     setInterval(mudar_item_manualmente, 10000);
// }

function mudar_item_automaticamente() {
    document.getElementById(carrossel[itemCarrosselAtual]).className = 'item_carrossel';
    document.getElementById('ponto_'+ carrossel[itemCarrosselAtual]).className = 'ponto_carrossel';
    itemCarrosselAtual = (itemCarrosselAtual + 1) % carrossel.length;
    document.getElementById(carrossel[itemCarrosselAtual]).className = 'item_carrossel item_carrossel_atual';
    document.getElementById('ponto_'+ carrossel[itemCarrosselAtual]).className = 'ponto_carrossel ponto_carrossel_atual';
}

function mudar_item(posicao_item_carrossel) {
    itemCarrosselAtual = posicao_item_carrossel;
    for(var i = 0; i < carrossel.length; i++) {
        if(carrossel[i] === carrossel[itemCarrosselAtual]) {
            document.getElementById(carrossel[i]).className = 'item_carrossel item_carrossel_atual';
            document.getElementById('ponto_'+ carrossel[i]).className = 'ponto_carrossel ponto_carrossel_atual';
        } else {
            document.getElementById(carrossel[i]).className = 'item_carrossel';
            document.getElementById('ponto_'+ carrossel[i]).className = 'ponto_carrossel';
        }
    }
}

// Transição de abas na tela País

function mudar_aba(aba_atual, aba_destino, secao_atual, secao_destino) {
    document.getElementById(aba_atual).className = "aba_pais";
    document.getElementById(aba_destino).className = "aba_pais aba_atual_pais";
    document.getElementById(secao_atual).className = "secao_pais secao_invisivel_pais";
    document.getElementById(secao_destino).className = "secao_pais";
}

// Preview da foto de perfil

// function previewFotoPerfil() {
//     var foto = document.querySelector('input[name=foto_usuario]').files[0];
//     var preview = document.querySelector('#foto_usuario_cadastro');
//     var reader = new FileReader();

//     reader.onloadend = function() {
//         preview.src = reader.result;
//     }

//     if(foto) {
//         reader.readAsDataURL(foto);
//         document.getElementById('foto_usuario_cadastro').className = 'foto_perfil foto_perfil_preview';
//     } else {
//         preview.src = "img/roxo/icone_inserir_foto_perfil_roxo.svg";
//         document.getElementById('foto_usuario_cadastro').className = 'foto_perfil';
//     }
// }

function previewFotoPerfil() {
    var foto = document.querySelector('input[name=foto_usuario]').files[0];
    var foto_anterior = document.querySelector('input[name=foto_usuario]').files[0];
    var preview = document.querySelector('#foto_usuario_cadastro');
    

    if(foto) {
        var reader = new FileReader();
        reader.onloadend = function() {
            preview.src = reader.result;
        }
        reader.readAsDataURL(foto);
        document.getElementById('foto_usuario_cadastro').className = 'foto_perfil foto_perfil_preview';
    } else {
        var reader = new FileReader();
        reader.onloadend = function() {
            preview.src = reader.result;
        }
        reader.readAsDataURL(foto_anterior);
        document.getElementById('foto_usuario_cadastro').className = 'foto_perfil foto_perfil_preview';
    }
}

// Abrir e fechar bloco detalhe

function abrir_bloco_detalhe(bloco) {
    document.getElementById(bloco).className = 'fundo_bloco_detalhe';
}

function fechar_bloco_detalhe(bloco) {
    document.getElementById(bloco).className = 'fundo_bloco_detalhe fundo_bloco_detalhe_invisivel';
}

// Abrir e fechar seção visto

function abrir_secao_visto() {
    document.getElementById('bloco_informacao_visto').className = 'bloco_informacao bloco_informacao_invisivel';
    document.getElementById('secao_visto').className = 'bloco_informacao';
}

function fechar_secao_visto() {
    document.getElementById('bloco_informacao_visto').className = 'bloco_informacao';
    document.getElementById('secao_visto').className = 'bloco_informacao bloco_informacao_invisivel';
}