let number = 27;

let timer1 = 0;
let timer2 = 0;

setSlide = (direction) =>
{
    if (direction == false) number=number-2;

    clearTimeout(timer1);
    clearTimeout(timer2);
    
    hide();
    setTimeout("switchSlide()", 500);    
}

hide = () =>
{
    $("#slider").fadeOut(500);
}            

switchSlide = async () => 
{
    number++;
    if(number > 29) number = 1;
    let imgBuffer = new Image();
    imgBuffer.src = "images/img"+(number)+".jpg";
    await sleep(5);
    console.log(imgBuffer.width + " / " + imgBuffer.height + " / " + imgBuffer.src);

    let file = "<img src=\"images/img"+number+".jpg\" width="+ imgBuffer.width / 3 +" height="+imgBuffer.height / 3 +">";

    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("switchSlide()", 4000);
    timer2 = setTimeout("hide()", 3500);
}

sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

init = () => {
    document.addEventListener('keydown', event => {
        if(event.keyCode == 37) {
            if(number === 1) {
                number = 29;
            }
            setSlide(false);
        }
        else if(event.keyCode === 39) {
            if(number === 29) {
                number = 0;
            }
            setSlide(true);
        }
    });

    switchSlide();
}
