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

let projectTitles = document.querySelectorAll(".project-title");
let parentRect = projectTitles[0].parentElement.getBoundingClientRect();
let selection = document.getElementById("selection-overlay");
selection.style.height = parentRect.height + "px";
selection.style.width = parentRect.width + "px";
selection.style.left = "0px";
let currElem;

let projectScenes = document.querySelectorAll(".project-scene");
let currProjectScene = projectScenes[0];
currProjectScene.style.display = "flex";
projectTitles.forEach((elem, i) => {
  elem.onclick = function() {
    console.log(currProjectScene);
    currProjectScene.style.display = "none";
    currProjectScene = projectScenes[i];

    currProjectScene.style.display = "flex";

    currElem = elem;
    let parent = elem.parentElement;
    let b = parent.getBoundingClientRect();
    let h = b.height, w = b.width;
    let x = parent.offsetLeft;

    let selection = document.getElementById("selection-overlay");
    selection.style.height = h + "px";
    selection.style.width = w + "px";
    selection.style.left = x + "px";
  };
});

window.onresize = function(){
  let parent = currElem.parentElement;
  let b = parent.getBoundingClientRect();
  let h = b.height, w = b.width;
  let x = parent.offsetLeft;

  let selection = document.getElementById("selection-overlay");
  selection.style.height = h + "px";
  selection.style.width = w + "px";
  selection.style.left = x + "px";  
};

