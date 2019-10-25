// Preview da foto de perfil

function previewFotoPerfil(imagem_preview) {
    var foto = document.querySelector('input[name=foto_usuario]').files[0];
    var preview = document.querySelector('#'+ imagem_preview);
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if(foto) {
        reader.readAsDataURL(foto);
        document.getElementById(imagem_preview).className = 'foto_perfil foto_perfil_preview';
    } else {
        preview.src = "img/roxo/icone_inserir_foto_perfil_roxo.svg";
        document.getElementById(imagem_preview).className = 'foto_perfil';
    }
}

// Abrir e fechar bloco detalhe

function abrir_bloco_detalhe(bloco) {
    document.getElementById(bloco).className = 'fundo_bloco_detalhe';
}

function fechar_bloco_detalhe(bloco) {
    document.getElementById(bloco).className = 'fundo_bloco_detalhe fundo_bloco_detalhe_invisivel';
}

// Abrir e fechar seção de informação

function abrir_secao_informacao(secao_visivel, secao_invisivel) {
    document.getElementById(secao_visivel).className = 'bloco_informacao bloco_informacao_invisivel bloco_informacao_expansivel';
    document.getElementById(secao_invisivel).className = 'bloco_informacao secao_expansivel';
}

function fechar_secao_informacao(secao_invisivel, secao_visivel) {
    document.getElementById(secao_invisivel).className = 'bloco_informacao bloco_informacao_expansivel';
    document.getElementById(secao_visivel).className = 'bloco_informacao bloco_informacao_invisivel secao_expansivel';
}