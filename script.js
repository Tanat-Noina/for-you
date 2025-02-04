const catImg = document.querySelector(".cat-img");
const noButton = document.querySelector('#no');
const yesButton = document.querySelector('#yes');

const messages = [
    "Are you sure?",
    "Really sure??",
    "NO wayTT",
    "please...",
    "Just think again",
    "If you say no, I will be really sad...",
    "I am very sad...",
    "I am very very very sad...",
    "Ok fine, I will stop",
    "Just kidding"
];

let messageIndex = 0;
let noCount = 0;
const MAX_IMAGES = 10;
let play = true;


function handleNoClick() {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
        if (play) {
          noCount++;
          const imageIndex = Math.min(noCount, MAX_IMAGES);
          changeImage(imageIndex);
          if (noCount === MAX_IMAGES) {
            play = false;
          }
        }
      
}
function changeImage(image) {
    catImg.src = `img/sad${image}.jpg`;
  }

function handleYesClick() {
    window.location.href = "http://127.0.0.1:5500/yesindex.html";
}

