"use strict";
let resizeOverlay; //initializing blank function
let resizeScroll; //initializing blank function
let pause = false;
let isMobile = window.innerWidth <= 800 ? true : false;
let portfolioType = 0; //0 for programming, 1 for marketing

initTraits();
initSkills();
initProjectStart();
initWorkStart();
initMenu();

/**window functions*/
window.onresize = function(){
  isMobile = window.innerWidth <= 800 ? true : false;
  resizeOverlay();
  resizeScroll();
}

window.onscroll = function(){
  let top = document.querySelector(".toTop");
  if(document.body.getBoundingClientRect().top <= -80){
    top.style.opacity = "1";
  }else{
    top.style.opacity = "0";
  }
}
/**Portfolio Swap Functions */
let mktgBtn = document.querySelector("#marketing-btn");
let cscBtn = document.querySelector("#compsci-btn");
let video = document.querySelector("video");
let videoContainer = document.querySelector(".vid-container");
let source = document.querySelector("source");
let mainOverlay = document.querySelector(".main-overlay");
let projectOverlay = document.querySelector(".selection-overlay");
let workOverlay = document.querySelector(".work-overlay");
let scrollUp = document.querySelector(".toTop");
let skillsBackground = document.querySelector(".skills");
let workBackground = document.querySelector(".work");
let logo = document.querySelector(".personal-logo");
let gameBtn = document.querySelector(".game-btn");
let h1s = document.querySelectorAll("h1");
let h2s = document.querySelectorAll("h2");
let h3s = document.querySelectorAll("h3");

mktgBtn.onclick = function(){
  if(portfolioType != 1){
    video.pause();
    source.setAttribute("src", "ImageAssets/SpherePurple.mp4");
    video.load();
    video.play();
    portfolioType = 1;
    videoContainer.style.background = `linear-gradient(to top left,
      rgba(107, 5, 133, 0.521) 0%,
      rgba(0, 0, 0, 0.836) calc(50% - 0.8px),
      rgb(0, 0, 0) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(107, 5, 133, 0.521) 100%),
  linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%)`;

    projectOverlay.style.background = "rgb(101,27,134)";
    projectOverlay.style.background = "linear-gradient(90deg, rgba(101,27,134,1) 0%, rgba(137,53,175,1) 44%, rgba(191,92,236,1) 100%)";
    workOverlay.style.background = "#8935af";
    mainOverlay.style.background = "rgba(136, 53, 175, 0.286)"
    scrollUp.style.background = "#8935af";
    scrollUp.style.background = "linear-gradient(90deg, rgba(101,27,134,1) 0%, rgba(137,53,175,1) 44%, rgba(191,92,236,1) 100%)";
    skillsBackground.style.backgroundImage = "url(ImageAssets/PurpleWave1.svg)";
    workBackground.style.backgroundImage = "url(ImageAssets/PurpleWave2.svg)";
    logo.setAttribute("src", "ImageAssets/WhitePurple.svg");
    gameBtn.style.color = "#8935af";
    gameBtn.style.borderColor = "#8935af";
    mktgBtn.style.color = "white";
    mktgBtn.style.borderColor = "white";
    

    function makeTextPurple(elem){
      elem.style.background = "#7A2F9C";
      elem.style.background = "linear-gradient(to top, #7A2F9C 0%, #B647E8 100%)";
      elem.style.webkitBackgroundClip = "text";
      elem.style.webkitTextFillColor = "transparent";
    }    
    h1s.forEach((elem) => {
      makeTextPurple(elem);
    });
    h2s.forEach((elem) => {
      makeTextPurple(elem);
    });
    h3s.forEach((elem) => {
      makeTextPurple(elem);
    });    

    cscBtn.style.color = "#e6c251";
    cscBtn.style.borderColor = "#e6c251";
  }
}
cscBtn.onclick = function(){
  if(portfolioType != 0){
    video.pause();
    source.setAttribute("src", "ImageAssets/SphereOrange.mp4");
    video.load();
    video.play();
    portfolioType = 0;
    videoContainer.style.background = `linear-gradient(to top left,
      rgba(192, 134, 25, 0.521) 0%,
      rgba(0, 0, 0, 0.836) calc(50% - 0.8px),
      rgb(0, 0, 0) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(192, 134, 25, 0.521) 100%),
  linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%)`;

    projectOverlay.style.background = "rgb(145,127,54)"; 
    projectOverlay.style.background = "linear-gradient(90deg, rgba(145,127,54,1) 0%, rgba(191,158,48,1) 44%, rgba(230,194,81,1) 100%)"; 
    workOverlay.style.background = "#e6c251";
    mainOverlay.style.background = "rgba(71, 56, 4, 0.342)"
    scrollUp.style.background = "#e6c251";
    scrollUp.style.background = "linear-gradient(90deg, rgba(145,127,54,1) 0%, rgba(191,158,48,1) 44%, rgba(230,194,81,1) 100%)"; 
    skillsBackground.style.backgroundImage = "url(ImageAssets/OrangeWave1.svg)";
    workBackground.style.backgroundImage = "url(ImageAssets/OrangeWave2.svg)";
    logo.setAttribute("src", "ImageAssets/WhiteOrange.svg");
    gameBtn.style.color = "#e6c251";
    gameBtn.style.borderColor = "#e6c251";
    cscBtn.style.color = "white";
    cscBtn.style.borderColor = "white";
    

    function makeTextOrange(elem){
      elem.style.background = "#e6c251";
      elem.style.background = "linear-gradient(to top, #977503 0%, #e6c251 100%)";
      elem.style.webkitBackgroundClip = "text";
      elem.style.webkitTextFillColor = "transparent";
    }    
    h1s.forEach((elem) => {
      makeTextOrange(elem);
    });
    h2s.forEach((elem) => {
      makeTextOrange(elem);
    });
    h3s.forEach((elem) => {
      makeTextOrange(elem);
    }); 

    mktgBtn.style.color = "#8935af";
    mktgBtn.style.borderColor = "#8935af";
  }
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

  let levelWrappers = document.querySelectorAll(".level-wrapper");
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
      }, scrollSpeed);    
      return auto;
  }
  let inView = new Array(levelWrappers.length);
  for(let i = 0; i < levelWrappers.length; i++) inView[i] = false;

  let lTitles = document.querySelectorAll(".skill-level");
  let lCircles = document.querySelectorAll(".outer-circle");
  lCircles.forEach((elem) =>{
    let skillLevel = elem.querySelector(".skill-level");
    let progressValue = skillLevel.getAttribute("level");
    elem.style.background = `conic-gradient(#f7cb3b ${progressValue * 3.6}deg, #313131 0deg)`;
    if(progressValue < 60){
      skillLevel.innerHTML = "Beginner";
    }else if(progressValue < 75){
      skillLevel.innerHTML = "Intermediate"
    }else if(progressValue < 90){
      skillLevel.innerHTML = "Proficient"
    }else{
      skillLevel.innerHTML = "Expert";
    }
  });

  resizeScroll = function(){
    clearInterval(autoScroll);
    rightBound = Math.floor(skillScroll.scrollWidth - skillScroll.getBoundingClientRect().width);
    autoScroll = initAutoScroll();
  }

  scrollOnGrab(skillScroll, autoScroll);
  pauseToScroll();
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

function scrollOnGrab(pane, autoScroll=null){
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
    if(autoScroll != null){
      pause = true;
    }
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
    pause = false;
    pane.removeEventListener('mousemove', mouseMoveHandler);
    pane.removeEventListener('mouseup', mouseUpHandler);

    pane.style.cursor = 'grab';
    pane.style.removeProperty('user-select');
  };   
}

function initMenu(){
  let mobileMenus = document.querySelectorAll(".drop-menu");
  let overlay = document.querySelector(".main-overlay"); 
  let open = mobileMenus[0];
  let close = mobileMenus[1];

  overlay.onclick = function(){
    mobileNavClose();
  }

  open.onclick = function(){
    mobileNavOpen();
  }
  close.onclick = function(){
    mobileNavClose();
  }

  if(window.top >= 80){
    let nav = document.querySelector(".navbar");
    nav.style.position = "fixed";
    nav.style.top = "0px";
  }
}
function mobileNavOpen(){
  let navigation = document.querySelector(".nav-container");
  let body = document.querySelector("body");
  let overlay = document.querySelector(".main-overlay");  
    
  navigation.style.left = "0px";
  body.style.overflow = "hidden";
  overlay.style.display = "block";  
}
function mobileNavClose(){
  let navigation = document.querySelector(".nav-container");
  let body = document.querySelector("body");
  let overlay = document.querySelector(".main-overlay");  

  navigation.style.left = "-450px";
  body.style.overflow = "visible";
  overlay.style.display = "none";
}

function pauseToScroll(){
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
      if(isMobile){
        mobileNavClose();
      }
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
