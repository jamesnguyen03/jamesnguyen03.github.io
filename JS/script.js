"use strict";
let traits = document.querySelectorAll(".trait");
traits.forEach((trait) => {
  let letters = trait.textContent.split("");
  trait.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    trait.append(span);
  });
});

let traitIdx = 0;
let maxTraitIdx = traits.length - 1;
traits[traitIdx].style.opacity = "1";

let rotateText = () => {
  let currentWord = traits[traitIdx];
  let nextWord = traitIdx === maxTraitIdx ? traits[0] : traits[traitIdx + 1];
 
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  traitIdx = traitIdx === maxTraitIdx ? 0 : traitIdx + 1;
};

rotateText();
setInterval(rotateText, 4000);
