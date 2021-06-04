function rangeChange() {
  let red = document.getElementById("slideRed").value;
  let Green = document.getElementById("slideGreen").value;
  let Blue = document.getElementById("slideBlue").value;
  
  let result = document.getElementById("output");
  result.style.backgroundColor = `rgb(${red}, ${Green}, ${Blue}`;
}

let allSlide = document.querySelectorAll(".range");
for(let i=0; i<allSlide.length; i++) {
  allSlide[i].addEventListener('input', rangeChange);
}



// PWA 설치
let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById("install_button");

window.addEventListener("beforeinstallprompt", e => {
  console.log("beforeinstallprompt fired");
  // Prevent Chrome 76 and earlier from automatically showing a prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install button
  installButton.hidden = false;
  installButton.addEventListener("click", installApp);
});

function installApp() {
  // Show the prompt
  deferredPrompt.prompt();
  installButton.disabled = true;

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted");
      installButton.hidden = true;
    } else {
      console.log("PWA setup rejected");
    }
    installButton.disabled = false;
    deferredPrompt = null;
  });
}

window.addEventListener("appinstalled", evt => {
  console.log("appinstalled fired", evt);
});
// PWA 설치
