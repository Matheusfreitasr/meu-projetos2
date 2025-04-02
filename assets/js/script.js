document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");
});

// Controle do áudio
document.getElementById("audioButton").onclick = function () {
    var audio = document.getElementById("surpriseAudio");
    if (audio) {
        audio.style.display = "block";  // Exibe o player de áudio
        audio.play();  // Inicia o áudio
        this.style.display = "none";  // Oculta o botão de áudio

        // Quando o áudio terminar, exibe a opção para ouvir de novo
        audio.onended = function () {
            document.getElementById("repeatMessage").style.display = "block";  // Exibe a opção de "Quer ouvir de novo?"
        };
    }
};

// Função para reproduzir o áudio novamente quando clicar em "Quer ouvir de novo?"
document.getElementById("repeatAudio").onclick = function () {
    var audio = document.getElementById("surpriseAudio");
    if (audio) {
        audio.currentTime = 0;  // Reseta o áudio para o início
        audio.play();  // Reproduz o áudio novamente

        // Esconde a mensagem de repetição após clicar
        document.getElementById("repeatMessage").style.display = "none";  // Esconde a opção "Quer ouvir de novo?"
    }
};

// Exibir o player de vídeo ao clicar no botão
document.getElementById("videoButton").onclick = function () {
    var videoContainer = document.getElementById("videoContainer");
    var video = document.getElementById("surpriseVideo");

    if (videoContainer && video) {
        videoContainer.style.display = "block";  // Exibe o player de vídeo
        video.play();  // Inicia o vídeo
    }

    // Oculta os botões de áudio e vídeo ao abrir o vídeo
    document.getElementById("audioButton").style.display = "none";
    document.getElementById("videoButton").style.display = "none";

    // Mostra o botão de "Voltar" ao exibir o vídeo
    document.getElementById("backButton").style.display = "block";

    // Quando o vídeo terminar, os botões reaparecem
    video.onended = function () {
        // Retorna para a tela inicial mostrando os botões
        videoContainer.style.display = "none";  // Oculta o player de vídeo
        document.getElementById("videoButton").style.display = "inline-block";  // Mostra o botão de vídeo novamente
        document.getElementById("audioButton").style.display = "inline-block";  // Mostra o botão de áudio novamente

        // Oculta o botão de "Voltar" após o vídeo
        document.getElementById("backButton").style.display = "none";
    };
};

// Redirecionar para a página de surpresas (ou página anterior)
document.getElementById("backButton").onclick = function () {
    window.location.href = "surpresas.html";  // Aqui você coloca o caminho para a página "surpresas"
};
