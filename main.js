var box = document.getElementsByClassName ('box');

function bgColor() {
    document.box[i].style.backgroundColor = 'blue';
};

for (i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', bgColor);
    box[i].addEventListener('mouseleave', bgColor);
};

//cannot figure out why the above is not working


var elementOne = document.createElement('p');
elementOne = 'oooh - so close, but no cigar';

function onClickOne() {
    document.box[0].appendChild('elementOne');
};

document.box.addEventListener('click', onClickOne);
