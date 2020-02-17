var box = document.getElementsByTagName('p');

function bgColor() {
    document.box.style.backgroundColor = 'blue';
};

for (i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', bgColor);
    box[i].addEventListener('mouseleave', bgColor);
};


var elementOne = document.createElement('p');
elementOne = 'oooh - so close, but no cigar';
var elementTwo = document.createElement('p');
elementTwo = 'we have a winner!';
var elementThree = document.createElement('p');
elementThree = 'oops, better luck next time!';

function onClick() {
    document.box[0].appendChild('elementOne');
    document.box[0].appendChild('elementTwo');
    document.box[0].appendChild('elementThree');
};

document.box[0].addEventListener('click', onClick);
document.box[1].addEventListener('click', onClick);
document.box[2].addEventListener('click', onClick);

//cannot figure out why the above is not working

//Trigger for hover
var buttonClick = document.getElementsByClassName('hidden');


function showButton() {
    this.children[1].classList.toggle('show'); 
}

// li, li, li, li
for (i = 0; i < navLinks.length; i++) {
    buttonClick[i].addEventListener('click', showButton);
}
