(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".roleta__btn");
  let deg = 0;

  startButton.addEventListener("click", () => {
    // Disable button during spin
    startButton.style.pointerEvents = "none";
    startButton.style.backgroundColor = "gray";
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = "all 10s ease-out";
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add("blur");
  });

  wheel.addEventListener("transitionend", () => {
    // Remove blur
    wheel.classList.remove("blur");
    // Enable button when spin is over
    startButton.style.pointerEvents = "auto";
    startButton.style.backgroundColor = "";
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();

const desafios = document.querySelector(".menu-desafios-label");

desafios.addEventListener("click", () => {
  document.querySelector(".menu-desafios-bg").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".menu-desafios-bg").style.display = "none";
});
