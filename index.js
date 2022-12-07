document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#bio').addEventListener('click', () => gotobio());
    document.querySelector('#kahoot').addEventListener('click', () => gotokahoot());
    document.querySelector('#imovie').addEventListener('click', () => gotoimovie());
    document.querySelector('#garageband').addEventListener('click', () => gotogarageband());
    document.querySelector('#powerpoint').addEventListener('click', () => gotopowerpoint());
    document.querySelector('#padlet').addEventListener('click', () => gotopadlet());
    document.querySelector('#tpack').addEventListener('click', () => gototpack());
    document.querySelector('#reflection').addEventListener('click', () => gotoreflection());
    document.querySelector('#toc').addEventListener('click', () => gototoc());

    // table of contents links
    document.querySelector('#bio2').addEventListener('click', () => gotobio());
    document.querySelector('#kahoot2').addEventListener('click', () => gotokahoot());
    document.querySelector('#imovie2').addEventListener('click', () => gotoimovie());
    document.querySelector('#garageband2').addEventListener('click', () => gotogarageband());
    document.querySelector('#powerpoint2').addEventListener('click', () => gotopowerpoint());
    document.querySelector('#padlet2').addEventListener('click', () => gotopadlet());
    document.querySelector('#tpack2').addEventListener('click', () => gototpack());
    document.querySelector('#reflection2').addEventListener('click', () => gotoreflection());
    document.querySelector('#toc2').addEventListener('click', () => gototoc());

    gotobio();
});

function blankall() {
    // disable all display divs
    document.querySelector('#aboutmediv').style.display = 'none';
    document.querySelector('#kahootdiv').style.display = 'none';
    document.querySelector('#imoviediv').style.display = 'none';
    document.querySelector('#garagebanddiv').style.display = 'none';
    document.querySelector('#powerpointdiv').style.display = 'none';
    document.querySelector('#padletdiv').style.display = 'none';
    document.querySelector('#tpackdiv').style.display = 'none';
    document.querySelector('#reflectiondiv').style.display = 'none';
    document.querySelector('#tocdiv').style.display = 'none';
    
    
    // make all buttons inactive
    document.querySelector('#bio').classList.remove('active');
    document.querySelector('#kahoot').classList.remove('active');
    document.querySelector('#imovie').classList.remove('active');
    document.querySelector('#garageband').classList.remove('active');
    document.querySelector('#powerpoint').classList.remove('active');
    document.querySelector('#padlet').classList.remove('active');
    document.querySelector('#tpack').classList.remove('active');
    document.querySelector('#reflection').classList.remove('active');
    document.querySelector('#toc').classList.remove('active');

}

function gotobio() {
    blankall();
    document.querySelector('#aboutmediv').style.display = 'block';
    document.querySelector('#bio').classList.add('active');
}

function gotokahoot() {
    blankall();
    document.querySelector('#kahootdiv').style.display = 'block';
    document.querySelector('#kahoot').classList.add('active');
}

function gotoimovie() {
    blankall();
    document.querySelector('#imoviediv').style.display = 'block';
    document.querySelector('#imovie').classList.add('active');
}

function gotogarageband() {
    blankall();
    document.querySelector('#garagebanddiv').style.display = 'block';
    document.querySelector('#garageband').classList.add('active');
}

function gotopowerpoint() {
    blankall();
    document.querySelector('#powerpointdiv').style.display = 'block';
    document.querySelector('#powerpoint').classList.add('active');
}

function gotopadlet() {
    blankall();
    document.querySelector('#padletdiv').style.display = 'block';
    document.querySelector('#padlet').classList.add('active');
}

function gototpack() {
    blankall();
    document.querySelector('#tpackdiv').style.display = 'block';
    document.querySelector('#tpack').classList.add('active');
}

function gotoreflection() {
    blankall();
    document.querySelector('#reflectiondiv').style.display = 'block';
    document.querySelector('#reflection').classList.add('active');
}

function gototoc() {
    blankall();
    document.querySelector('#tocdiv').style.display = 'block';
    document.querySelector('#toc').classList.add('active');
}