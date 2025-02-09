const button = document.querySelector(".btn");

const record = document.querySelector(".record");

const audio = document.querySelector(".audio");

const stopBtn = document.querySelector(".btn-stop");

const btn2  = document.getElementById("letterBtn")

const arrow = document.getElementById("arrow");


button.addEventListener("click", function () {
  record.classList.add("active");
  btn2.classList.remove("hidden")
  btn2.classList.add("shown");
  arrow.classList.remove("hidden")
  arrow.classList.add("shown");
  stopBtn.classList.remove("hidden")
  stopBtn.classList.add("shown");
  button.classList.add("hidden")
  audio.play();
});

stopBtn.addEventListener("click", function () {
  record.classList.remove("active");
  stopBtn.classList.add("hidden");
  stopBtn.classList.remove("shown");
  btn2.classList.add("hidden");
  btn2.classList.remove("shown");
  arrow.classList.add("hidden");
  arrow.classList.remove("shown");
  button.classList.remove("hidden")
  audio.pause();
});
