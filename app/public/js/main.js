// Carrossel

window.location = "#wall-1";

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
        preview.src = "";
    }

    document.getElementById('foto_usuario_cadastro').className = 'foto_perfil foto_perfil_preview';
};