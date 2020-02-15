var boxHover = document.getElementsByClassName ('box');

function bgColor() {
    document.boxHover[i].style.backgroundColor = 'blue';
};

for (i = 0; i < boxHover.length; i++) {
    boxHover[i].addEventListener('mouseenter', bgColor);
    boxHover[i].addEventListener('mouseleave', bgColor);
};

//cannot figure out why the above is not working