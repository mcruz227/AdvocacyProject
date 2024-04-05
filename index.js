let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById("sign-now-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
const addSignature = () => {
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;

  let newSignature = document.createElement("p");
  newSignature.textContent = "🖊️ " + name + " from " + hometown + " supports this.";

  let signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);

  let counter = document.getElementById("counter");
  counter.remove();

  count = count + 1;

  let newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";

  signaturesSection.appendChild(newCounter);

}

themeButton.addEventListener("click", toggleDarkMode);
let count = 3;



const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }


}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);