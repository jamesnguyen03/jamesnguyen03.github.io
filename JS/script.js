document.addEventListener('DOMContentLoaded', function(event){
    var scrBtnRight = document.getElementById("btn-right");
    var scrBtnLeft = document.getElementById("btn-left");
    var skillScr = document.getElementById("skills-scroll");
    scrBtnRight.onclick = function(){
        var elemWidth = skillScr.offsetWidth + 10;
        skillScr.scrollBy(elemWidth, 0);
    };
    scrBtnLeft.onclick = function(){
        var elemWidth = skillScr.offsetWidth + 10;
        skillScr.scrollBy(-elemWidth, 0);
    };
});
