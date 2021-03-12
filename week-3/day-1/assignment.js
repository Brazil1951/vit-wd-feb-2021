// function slideLeft (){
    currentImgPosition--;
    var slider = document.getElementById("jsSlider");
// slider.style.transform = "translateX(0px)";
slider.style.transform = "translateX(-" + currentImgPosition * 500 + "px)";
}
}

