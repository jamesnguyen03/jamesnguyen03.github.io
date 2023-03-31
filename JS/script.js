"use strict";
let resizeOverlay; //initializing blank function
let resizeScroll; //initializing blank function
let pause = false;
initTraits();
initSkills();
initProjectStart();
initWorkStart();

window.onresize = function(){
  resizeOverlay();
  resizeScroll();
}


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

function initSkills(){
  let skillScroll = document.querySelector(".skills-container");
  scrollOnGrab(skillScroll);

  let levelWrappers = document.querySelectorAll(".level-wrapper");
  levelWrappers.forEach((levelWrapper, i) =>{

  });

  let rightBound = Math.floor(skillScroll.scrollWidth - skillScroll.getBoundingClientRect().width);
  let reverse = false;

  let scrollSpeed = 30;
  let autoScroll = initAutoScroll();
  function initAutoScroll(){
      let auto = setInterval(function(){
          if(skillScroll.scrollLeft == rightBound) reverse = true;
          if(skillScroll.scrollLeft == 0) reverse = false;
          if(reverse){
            if(!pause) skillScroll.scrollBy(-1,0);
          }else{
            if(!pause) skillScroll.scrollBy(1,0);
          }

          levelWrappers.forEach((level, i) => {
            skillInView(level, i);
          });
      }, scrollSpeed);    
      return auto;
  }
  let inView = new Array(levelWrappers.length);
  for(let i = 0; i < levelWrappers.length; i++) inView[i] = false;

  let lTitles = document.querySelectorAll(".skill-level");
  let lCircles = document.querySelectorAll(".outer-circle");

  function skillInView(level, i){
    let skillRect = skillScroll.getBoundingClientRect();
    let rect = level.getBoundingClientRect();
    let midpoint = Math.floor(rect.x + rect.width - (rect.width/2) - skillRect.x);
    let visible = false;
    if(midpoint <= 0 || midpoint >= skillRect.width) visible = false;
    else                                             visible = true;

    let incrementFunctions = new Array(levelWrappers.length);
    let decrementFunctions = new Array(levelWrappers.length);
    let levelTitle = lTitles[i];
    let levelCircle = lCircles[i];
    let progressValue;
    let circleProgress;

    let endValue = parseInt(levelTitle.getAttribute("level"));
    let speed = 60;

    //if previously not in View and now in View, increment
    if(!inView[i] && visible){
      progressValue = 0;
      let progress = setInterval(function(){
        progressValue++;
        if(progressValue == 1){
          levelTitle.textContent = "Beginner";
        }else if(progressValue == 30){
          levelTitle.textContent = "Intermediate";
        }else if(progressValue == 60){
          levelTitle.textContent = "Proficient";
        }else if(progressValue == 90){
          levelTitle.textContent = "Expert";
        }
        levelTitle.textContent = progressValue;
        levelCircle.style.background = `conic-gradient(#e6c251 ${progressValue * 3.6}deg, #ededed 0deg)`;
        if(progressValue == endValue) clearInterval(incrementFunctions[i]);
        //console.log(progressValue);
      }, speed);
      incrementFunctions[i] = progress;
    }else if(inView[i] && !visible){ //previously in View, now not in View, decrement
      progressValue = endValue;
      let progress = setInterval(function(){
        progressValue--;
     
        if(progressValue == 1){
          levelTitle.textContent = "Beginner";
        }else if(progressValue == 30){
          levelTitle.textContent = "Intermediate";
        }else if(progressValue == 60){
          levelTitle.textContent = "Proficient";
        }else if(progressValue == 90){
          levelTitle.textContent = "Expert";
        }
        levelTitle.textContent = progressValue;
        if(progressValue <= 0) clearInterval(decrementFunctions[i]);
        //console.log(progressValue);
      }, speed);
      decrementFunctions[i] = progress;    
    } // else do nothing
    
    
    if(midpoint <= 0 || midpoint >= skillRect.width) inView[i] = false;
    else                                             inView[i] = true
  }

  resizeScroll = function(){
    clearInterval(autoScroll);
    rightBound = Math.floor(skillScroll.scrollWidth - skillScroll.getBoundingClientRect().width);
    autoScroll = initAutoScroll();
  }
  let navOptions = document.querySelectorAll(".nav-option.scroll-option");
  let navItems = document.querySelectorAll(".scroll-option>a");
  let jumpIds = new Array(navItems.length);
  for(let i = 0; i < jumpIds.length; i++){
    jumpIds[i] = navItems[i].getAttribute("href");    
  }
  
  let jumpElements = new Array(jumpIds.length);
  for(let i = 0; i < jumpElements.length; i++){
    jumpElements[i] = document.querySelector(jumpIds[i]);
  }

  let delay = 1000;
  var lastClick = 0;
  let paused;
  navOptions.forEach((option, i) => {
    option.onclick = function(event){
      if(lastClick >= (Date.now() - delay)){
        console.log("did not run");
        return;
      }else{
        lastClick = Date.now();
        pause = true;
        if(paused == null){
          let paused = setTimeout(() => {
            pause = false;
          }, 800);
          paused = null;
        }
      }
    }
  });  

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
  resizeOverlay = function(){
    let parent = projectTitles[currProjectIdx].parentElement;
    let b = parent.getBoundingClientRect();
    let h = b.height, w = b.width;
    let x = parent.offsetLeft;

    let selection = document.getElementById("selection-overlay");
    selection.style.height = h + "px";
    selection.style.width = w + "px";
    selection.style.left = x + "px";  
  }

  /** scroll on grab */
  let projectScrolls = document.querySelectorAll(".project-scene");
  let mouseIsDown = false;
  let startX;
  projectScrolls.forEach((pane) => {
    scrollOnGrab(pane);

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

function scrollOnGrab(pane){
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
}

