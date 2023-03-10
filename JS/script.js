"use strict";
initTraits();
initProjectStart();
initWorkStart();

 /**Animates the Traits Falling In/Out */
function initTraits(){
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
}

function initProjectStart(){
  /**intiializes the start states for items in the Project Block */
  let projectTitles = document.querySelectorAll(".project-title");
  let currProjectIdx = 0;

  let projectScenes = document.querySelectorAll(".project-scene");
  let projectHeads = document.querySelectorAll(".project-head");

  /** Sets the Project Selector at the First Element **/
  let parentRect = projectTitles[currProjectIdx].parentElement.getBoundingClientRect();
  let selection = document.getElementById("selection-overlay");
  selection.style.height = parentRect.height + "px";
  selection.style.width = parentRect.width + "px";
  selection.style.left = "0px";

  projectScenes[currProjectIdx].style.display = "flex";
  projectHeads[currProjectIdx].style.display = "block";
  /** On-Click for Project Tab Selectors, Move the Selector Animation
   *  Shows the Selected Project Card (details) and Project Heads
   */
  projectTitles.forEach((elem, i) => {
    elem.onclick = function() {
      /**updates the project displayed */
      projectScenes[currProjectIdx].style.display = "none";
      projectHeads[currProjectIdx].style.display = "none";
      currProjectIdx = i;
      projectScenes[currProjectIdx].style.display = "flex";
      projectHeads[currProjectIdx].style.display = "block";

      /**updates the selection overlay */
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

  /**updates the selector overlay to the proper size on a window resize */
  window.onresize = function(){
    let parent = projectTitles[currProjectIdx].parentElement;
    let b = parent.getBoundingClientRect();
    let h = b.height, w = b.width;
    let x = parent.offsetLeft;

    let selection = document.getElementById("selection-overlay");
    selection.style.height = h + "px";
    selection.style.width = w + "px";
    selection.style.left = x + "px";  
  };

  /** scroll on grab */
  let projectScrolls = document.querySelectorAll(".project-scene");
  let mouseIsDown = false;
  let startX;
  let pos = {
    // The current scroll
    left: 0,
    top: 0,
    // Get the current mouse position
    x: 0,
    y: 0,
  };  
  projectScrolls.forEach((pane) => {
    pane.onmousedown = function(e){
      pos = {
        // The current scroll
        left: pane.scrollLeft,
        top: pane.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };
      pane.addEventListener('mousemove', mouseMoveHandler);
      pane.addEventListener('mouseup', mouseUpHandler);    
    }
    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
    
        // Scroll the element
        pane.scrollTop = pos.top - dy;
        pane.scrollLeft = pos.left - dx;
    };  
    const mouseUpHandler = function () {
      pane.removeEventListener('mousemove', mouseMoveHandler);
      pane.removeEventListener('mouseup', mouseUpHandler);

      pane.style.cursor = 'grab';
      pane.style.removeProperty('user-select');
    }; 
  });
}

function initWorkStart(){
  /**intiializes the start states for items in the Work Block */
  let workOptions = document.querySelectorAll(".work-option>img");
  let workCards = document.querySelectorAll(".work-card");
  let currWorkIdx = 0;

  workCards[currWorkIdx].style.display = "block";
  let optionRect = workOptions[currWorkIdx].getBoundingClientRect();

  let selection = document.getElementById("work-overlay");
  selection.style.height = "3px";
  selection.style.width = optionRect.width + "px";
  selection.style.left = workOptions[currWorkIdx].offsetLeft + "px";
  selection.style.bottom = "0px";

  workOptions.forEach((elem, i) => {
    elem.onclick = function(){
      /** Change the Work Card */
      workCards[currWorkIdx].style.display = "none";
      currWorkIdx = i;
      workCards[currWorkIdx].style.display = "block";

      /** Change The Work Selection Overlay Position */
      optionRect = workOptions[currWorkIdx].getBoundingClientRect();
      selection.style.width = optionRect.width + "px";
      selection.style.left = workOptions[currWorkIdx].offsetLeft + "px";
    }
  });
}


