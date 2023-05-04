"use strict";
let resizeOverlay; //initializing blank function
let resizeScroll; //initializing blank function
let pause = false;
let isMobile = window.innerWidth <= 800 ? true : false;
let portfolioType = 0; //0 for programming, 1 for marketing
let currProjectIdx = 0;
let pauseRotate = false;

initTraits();
initSkills();
initProjectStart();
initWorkStart();
initMenu();

/**window functions*/
window.onresize = function(){
  isMobile = window.innerWidth <= 800 ? true : false;
  resizeOverlay(currProjectIdx);
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

let mainOverlay = document.querySelector(".main-overlay");

let alertBox = document.querySelector(".social-alert");
alertBox.style.display = "none";
let alertClose = document.querySelector(".alert-close");
alertClose.onclick = function(){
  let body = document.querySelector("body");
  alertBox.style.display = "none";
  mainOverlay.style.display = "none";

}
let connectBtns = document.querySelectorAll(".connect-container");
connectBtns.forEach((btn) =>{
  btn.onclick = function(){
    let body = document.querySelector("body");
    console.log("clicked alert");
    alertBox.style.display = "flex";
    mainOverlay.style.display = "flex";
  }
});

/**Portfolio Swap Functions */
let mktgBtn = document.querySelector("#marketing-btn");
let cscBtn = document.querySelector("#compsci-btn");
let videoContainer = document.querySelector(".vid-container");
let source = document.querySelector("source");
let projectOverlay = document.querySelector(".selection-overlay");
let workOverlay = document.querySelector(".work-overlay");
let scrollUp = document.querySelector(".toTop");
let skillsBackground = document.querySelector(".skills");
let workBackground = document.querySelector(".work");
let logo = document.querySelector(".personal-logo");
let resumeBtn = document.querySelector(".r-btn");
let h1s = document.querySelectorAll("h1");
let h2s = document.querySelectorAll("h2");
let h3s = document.querySelectorAll("h3");
let skillMktg = document.querySelector(".skills-container.marketing");
let skillCsc = document.querySelector(".skills-container.compsci");
let projectCscScenes = document.querySelectorAll(".compsci > .project-body > .project-scene");
let projectCscHeads = document.querySelectorAll(".compsci > .project-head");
let projectMktgScenes = document.querySelectorAll(".marketing > .project-body > .project-scene");
let projectMktgHeads = document.querySelectorAll(".marketing > .project-head");
let cscProject = document.querySelector(".project-wrapper.compsci");
let mktgProject = document.querySelector(".project-wrapper.marketing");
let imgWindow = document.querySelector(".window");
let giffy = document.querySelector(".gif");

cscBtn.onclick = function(){
  if(portfolioType != 0){
    portfolioType = 0;

    giffy.style.backgroundImage = "url(ImageAssets/SpherePurple.gif)";
    imgWindow.style.background = "#8935af";
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

    mktgProject.style.display = "none";
    cscProject.style.display = "flex";
    skillMktg.style.display = "none";
    skillCsc.style.display = "flex";

    resizeOverlay(0);
    workOverlay.style.background = "#8935af";
    mainOverlay.style.background = "rgba(136, 53, 175, 0.286)"
    scrollUp.style.background = "#8935af";
    scrollUp.style.background = "linear-gradient(90deg, rgba(101,27,134,1) 0%, rgba(137,53,175,1) 44%, rgba(191,92,236,1) 100%)";
    skillsBackground.style.backgroundImage = "url(ImageAssets/PurpleWave1.svg)";
    workBackground.style.backgroundImage = "url(ImageAssets/PurpleWave2.svg)";
    logo.setAttribute("src", "ImageAssets/WhitePurple.svg");
    resumeBtn.style.color = "#8935af";
    resumeBtn.style.borderColor = "#8935af";
    cscBtn.style.color = "white";
    cscBtn.style.borderColor = "white";
    

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

    projectCscScenes.forEach((elem) => {
      elem.style.display = "none";
    });
    projectCscHeads.forEach((elem) =>{
      elem.style.display = "none";
    });
    projectCscScenes[0].style.display = "flex";
    projectCscHeads[0].style.display = "block";

    mktgBtn.style.color = "#8935af";
    mktgBtn.style.borderColor = "#8935af";
  }
}
mktgBtn.onclick = function(){
  if(portfolioType != 1){
    portfolioType = 1;
    
    giffy.style.backgroundImage = "url(ImageAssets/SphereOrange.gif)";
    imgWindow.style.background = "#e6c251";
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

    mktgProject.style.display = "flex";
    cscProject.style.display = "none";      
    skillMktg.style.display = "flex";
    skillCsc.style.display = "none";      

    workOverlay.style.background = "#e6c251";
    mainOverlay.style.background = "rgba(71, 56, 4, 0.342)"
    scrollUp.style.background = "#e6c251";
    scrollUp.style.background = "linear-gradient(90deg, rgba(145,127,54,1) 0%, rgba(191,158,48,1) 44%, rgba(230,194,81,1) 100%)"; 
    skillsBackground.style.backgroundImage = "url(ImageAssets/OrangeWave1.svg)";
    workBackground.style.backgroundImage = "url(ImageAssets/OrangeWave2.svg)";
    logo.setAttribute("src", "ImageAssets/WhiteOrange.svg");
    resumeBtn.style.color = "#e6c251";
    resumeBtn.style.borderColor = "#e6c251";
    mktgBtn.style.color = "white";
    mktgBtn.style.borderColor = "white";

    

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

    resizeOverlay(projectCscHeads.length);
    projectMktgScenes.forEach((elem) => {
      elem.style.display = "none";
    });
    projectMktgHeads.forEach((elem) =>{
      elem.style.display = "none";
    });
    projectMktgScenes[0].style.display = "flex";
    projectMktgHeads[0].style.display = "block";

    cscBtn.style.color = "#e6c251";
    cscBtn.style.borderColor = "#e6c251";
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
    if(pauseRotate){
      console.log("paused");
      return;
    }
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
  let mktgScroll = document.querySelector(".skills-container.marketing");
  let cscScroll = document.querySelector(".skills-container.compsci");
  let levelWrappers = document.querySelectorAll(".level-wrapper");

  let scrollSpeed = 30;
  let autoScroll = [initAutoScroll(0),initAutoScroll(1)];
  function initAutoScroll(type){
    let reverse = false;
      let auto = setInterval(function(){
        let skillScroll;
        if(type == 0){
          skillScroll = cscScroll;
        }else{
          skillScroll = mktgScroll;
        }
        let rightBound = Math.floor(skillScroll.scrollWidth - skillScroll.getBoundingClientRect().width);
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

  let circleOrange = document.querySelectorAll(".marketing .outer-circle");
  circleOrange.forEach((elem) =>{
    let skillLevel = elem.querySelector(".skill-level");
    let progressValue = skillLevel.getAttribute("level");
    elem.style.background = `conic-gradient(#f7cb3b ${progressValue * 3.6}deg, #313131 0deg)`;
    if(progressValue < 60){
      skillLevel.innerHTML = "Novice";
    }else if(progressValue < 75){
      skillLevel.innerHTML = "Intermediate"
    }else if(progressValue < 90){
      skillLevel.innerHTML = "Proficient"
    }else{
      skillLevel.innerHTML = "Expert";
    }
  });

  let circlePurple = document.querySelectorAll(".compsci .outer-circle");
  circlePurple.forEach((elem) =>{
    let skillLevel = elem.querySelector(".skill-level");
    let progressValue = skillLevel.getAttribute("level");
    elem.style.background = `conic-gradient(#8935af ${progressValue * 3.6}deg, #313131 0deg)`;
    if(progressValue < 60){
      skillLevel.innerHTML = "Novice";
    }else if(progressValue < 75){
      skillLevel.innerHTML = "Intermediate"
    }else if(progressValue < 90){
      skillLevel.innerHTML = "Proficient"
    }else{
      skillLevel.innerHTML = "Expert";
    }
  });  

  resizeScroll = function(){
    clearInterval(autoScroll[0]);
    clearInterval(autoScroll[1]);
    autoScroll = [initAutoScroll(0),initAutoScroll(1)];
  }

  scrollOnGrab(cscScroll, autoScroll);
  scrollOnGrab(mktgScroll, autoScroll);
  pauseToScroll();
}

function initProjectStart(){
  /**intiializes the start states for items in the Project Block */
  let projectTitles = document.querySelectorAll(".project-title");

  let projectScenes = document.querySelectorAll(".project-scene");
  let projectHeads = document.querySelectorAll(".project-head");

  /** Sets the Project Selector at the First Element **/
  let parentRect = projectTitles[currProjectIdx].parentElement.getBoundingClientRect();
  let selections = document.querySelectorAll(".selection-overlay");
  selections[0].style.height = parentRect.height + "px";
  selections[0].style.width = parentRect.width + "px";
  selections[0].style.left = "0px";

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
      console.log("parent = " + parent.innerHTML);
      let b = parent.getBoundingClientRect();
      let h = b.height, w = b.width;
      let x = parent.offsetLeft;

      let container = parent.parentElement.parentElement;
      let selection = container.querySelector(".selection-overlay");
      selection.style.height = h + "px";
      selection.style.width = w + "px";
      selection.style.left = x + "px";
    };
  });

  /**updates the selector overlay to the proper size on a window resize */
  resizeOverlay = function(idx){
    if (idx != null) currProjectIdx = idx;
    let parent = projectTitles[currProjectIdx].parentElement;
    let b = parent.getBoundingClientRect();
    let h = b.height, w = b.width;
    let x = parent.offsetLeft;

    let container = parent.parentElement.parentElement;
    let selection = container.querySelector(".selection-overlay");
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

  
  pane.onpointerdown = function(e){
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
    pane.style.cursor = 'grab';
    pane.addEventListener('pointermove', mouseMoveHandler);
    pane.addEventListener('pointerup', mouseUpHandler);    
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
    pane.removeEventListener('pointermove', mouseMoveHandler);
    pane.removeEventListener('pointerup', mouseUpHandler);

    pane.style.cursor = 'auto';
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
    try {
      alertBox.style.display = "none";
    } catch (error) { }
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
  pauseRotate = true;
    
  navigation.style.left = "0px";
  body.style.overflow = "hidden";
  overlay.style.display = "block";  
}
function mobileNavClose(){
  let navigation = document.querySelector(".nav-container");
  let body = document.querySelector("body");
  let overlay = document.querySelector(".main-overlay");  
  pauseRotate = false;

  navigation.style.left = "-450px";
  body.style.overflow = "visible";
  overlay.style.display = "none";
}

function pauseToScroll(){
  let navOptions = document.querySelectorAll(".nav-option .scroll-option");
  let scrollUp = document.querySelector(".toTop");

  let delay = 1000;
  var lastClick = 0;
  let paused;
  navOptions.forEach((option, i) => {
    option.onclick = function(){
      if(isMobile){
        mobileNavClose();
      }
      if(lastClick >= (Date.now() - delay)){
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

  scrollUp.onclick = function(){
    if(isMobile){
      mobileNavClose();
    }
    if(lastClick >= (Date.now() - delay)){
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
}

let insets = document.querySelectorAll(".inset");
insets.forEach((insetElem, i) => {
  let tab = insetElem.querySelector(".tab");
  let overlay = insetElem.querySelector(".overlay");
  let txt = overlay.querySelector("p");
  tab.onclick = function(){
    if(tab.innerHTML.includes("Read")){
      overlay.style.height = "100%";
      overlay.style.opacity = "1";
      txt.style.display = "block";
      tab.innerHTML = "<p>Hide</p>";
    }else{
      overlay.style.height = "0%";
      overlay.style.opacity = "0";
      txt.style.display = "none";
      tab.innerHTML = "<p>Read More</p>";      
    }

  }
});

