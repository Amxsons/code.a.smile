const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
 // const fromNum = document.querySelector(".fromNum").value;
  //const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(9999));

  if (randomNum >= parseInt(1000)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
  }
}
