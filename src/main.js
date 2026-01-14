const imageSelect = document.getElementById("imageSelect");
const dateInput = document.getElementById("dateInput");
const generateBtn = document.getElementById("generateBtn");
const downloadLink = document.getElementById("downloadLink");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const images = {
  domingo: "/imagem-base.jpg",
  quarta: "/imagem-base-2.jpg",
};

let img = new Image();

function carregarImagem() {
  img.src = images[imageSelect.value];
  img.onload = () => {
    document.fonts.load("68px 'Nanum Gothic'").then(() => {
      desenharImagem();
    });
  };
}

function desenharImagem() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const date = dateInput.value;
  if (date) {
    ctx.font = "bold 68px 'Nanum Gothic'";
    ctx.fillStyle = imageSelect.value === "domingo" ? "#00788B" : "#fff";

    // Definir posição conforme a imagem
    let x, y;
    if (imageSelect.value === "domingo") {
      x = canvas.width - 795;
      y = canvas.height - 403;
    } else if (imageSelect.value === "quarta") {
      x = canvas.width - 760;
      y = canvas.height - 403;
    }

    ctx.strokeText(date, x, y);
    ctx.fillText(date, x, y);
  }
}

generateBtn.addEventListener("click", () => {
  desenharImagem();

  const dataURL = canvas.toDataURL("image/jpeg");
  downloadLink.href = dataURL;
  downloadLink.download = "imagem-com-data.jpg";
  downloadLink.textContent = "Baixar Imagem";
});

imageSelect.addEventListener("change", () => {
  carregarImagem();
});

// Inicializa com a imagem de domingo
carregarImagem();
