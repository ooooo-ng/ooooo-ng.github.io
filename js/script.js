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
