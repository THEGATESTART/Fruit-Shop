let indexValue = 1;
showImg(indexValue);

function sideSlide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    let i;
    const sliderItems = document.querySelectorAll('.sliderItems');

    if(e > sliderItems.length) {
        indexValue = 1;
    }
    if(e < 1) {
        indexValue = sliderItems.length;
    }

    for(i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = "none";
    }
    sliderItems[indexValue-1].style.display = "flex";
}