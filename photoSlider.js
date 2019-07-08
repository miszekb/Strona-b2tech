var number = Math.floor(Math.random()*28)+1;

var timer1 = 0;
var timer2 = 0;

function setSlide(direction)
{
    if (direction == true) number++;
    if (direction == false) number--;

    clearTimeout(timer1);
    clearTimeout(timer2);

    hide();
    setTimeout("switchSlide()", 500);
    console.log("halo");
}

function hide()
{
    $("#slider").fadeOut(500);
}            

function switchSlide()
{
    number++;
    if(number > 28) number = 1;

    var file = "<img src=\"images/img"+number+".jpg\" width=\"60%\" height=\"50%\">";
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("switchSlide()", 4000);
    timer2 = setTimeout("hide()", 3500);
}