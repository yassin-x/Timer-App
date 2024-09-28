let mainDev = document.querySelector(".main-container");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let num = 0;
let numM = 0;
let numH = 0;
// -
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
// -
function timerS() {
  num++;
  if (seconds.textContent < 9) {
    seconds.innerHTML = `0${num}`;
  } else {
    seconds.innerHTML = `${num}`;
  }
  if (num === 60) {
    num = 0;
    seconds.innerHTML = `0${num}`;
    timerS();
  }
}
// -
function timerM() {
  numM++;
  if (minutes.textContent < 9) {
    minutes.innerHTML = `0${numM}`;
  } else {
    minutes.innerHTML = `${numM}`;
  }
  if (numM === 60) {
    numM = 0;
    minutes.innerHTML = `0${numM}`;
    timerM();
  }
}
// -
function timerH() {
  numH++;
  if (minutes.textContent < 9) {
    hours.innerHTML = `0${numH}`;
  } else {
    hours.innerHTML = `${numH}`;
  }
}
// -
function timerMain() {
  startBtn.addEventListener("click", () => {
    let time = setInterval(() => {
      timerS();
    }, 1000);
    let timeM = setInterval(() => {
      timerM();
    }, 60000);
    let timeH = setInterval(() => {
      timerM();
    }, 600000);
    time;
    timeM;
    timeH;
    startBtn.classList.add("btn-stop");
    // -
    stopBtn.addEventListener("click", () => {
      setTimeout(clearInterval(time));
      startBtn.classList.remove("btn-stop");
    });
    stopBtn.addEventListener("click", () => {
      setTimeout(clearInterval(timeM));
      startBtn.classList.remove("btn-stop");
    });
    stopBtn.addEventListener("click", () => {
      setTimeout(clearInterval(timeH));
      startBtn.classList.remove("btn-stop");
    });
    resetBtn.addEventListener("click", () => {
      num = 0;
      seconds.innerHTML = `0${num}`;
      clearInterval(time);
      startBtn.classList.remove("btn-stop");
      numM = 0;
      minutes.innerHTML = `0${numM}`;
      clearInterval(timeM);
    });
  });
  //
}
timerMain();
