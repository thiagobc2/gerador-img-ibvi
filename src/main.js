const img = new Image();
img.src = "/imagem-base.jpg"; // imagem na pasta public

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const dateInput = document.getElementById("dateInput");
const generateBtn = document.getElementById("generateBtn");
const downloadLink = document.getElementById("downloadLink");

img.onload = () => {
  document.fonts.load("68px 'Nanum Gothic'").then(() => {
    desenharImagem();
  });
};

function desenharImagem() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const date = dateInput.value;
  if (date) {
    ctx.font = "bold 68px 'Nanum Gothic'";
    ctx.fillStyle = "#00788B";

    const text = date;
    const x = canvas.width - 795;
    const y = canvas.height - 403;

    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  }
}

generateBtn.addEventListener("click", () => {
  desenharImagem();

  const dataURL = canvas.toDataURL("image/jpeg");
  downloadLink.href = dataURL;
  downloadLink.download = "imagem-com-data.jpg";
  downloadLink.textContent = "Baixar Imagem";
});
