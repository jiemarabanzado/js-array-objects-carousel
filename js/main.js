const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const LeftCar=document.querySelector('.left-carousel');
const RightCar=document.querySelector('.right-carousel');
for (let index = 0; index < images.length; index++) {
    LeftCar.innerHTML+=`
        <div class="big-image">
            <img class="big-img" src="${images[index].image}" alt="">
            <div class="rel-text">
                <h2 class="title">
                    ${images[index].title}
                </h2>
                <p class="description">
                ${images[index].text}
                </p>
            </div>
        </div>
` 
}
let bigAc=0;
let Bigs=document.querySelectorAll('.big-image');
Bigs[0].classList.add('big-actual')

for (let index = 0; index < images.length; index++) {
    const element = images[index];
    RightCar.innerHTML+=`
            <div class="small-image">
                <img class="small-img" src="${element.image}" alt="">
            </div>
    ` 
}
let actual=0;
const SmallImg=document.querySelectorAll('.small-image');
SmallImg[0].classList.add('actual');

//funzionamento dei bottoni scorrimento
function Down(){
    if(actual==SmallImg.length-1){
        SmallImg[actual].classList.remove('actual');
        Bigs[bigAc].classList.remove('big-actual');
        bigAc=0;
        actual=0;
        SmallImg[actual].classList.add('actual');
        Bigs[bigAc].classList.add('big-actual');

    }else{
        Bigs[bigAc].classList.remove('big-actual');
        SmallImg[actual].classList.remove('actual');
        actual+=1;
        bigAc+=1;
        SmallImg[actual].classList.add('actual');
        Bigs[bigAc].classList.add('big-actual');
    }
}
function Up(){
    if(actual==0){
        Bigs[bigAc].classList.remove('big-actual');
        SmallImg[actual].classList.remove('actual');
        actual=SmallImg.length-1;
        bigAc=Bigs.length-1;
        Bigs[bigAc].classList.add('big-actual');
        SmallImg[actual].classList.add('actual');

    }else{
        Bigs[bigAc].classList.remove('big-actual');
        SmallImg[actual].classList.remove('actual');
        actual-=1;
        bigAc-=1;
        Bigs[bigAc].classList.add('big-actual');
        SmallImg[actual].classList.add('actual');
    }
}
document.getElementById('up').addEventListener('click',Up)
document.getElementById('down').addEventListener('click',Down)
document.getElementById('up').addEventListener('click',Stop)
document.getElementById('down').addEventListener('click',Stop)

//cambio dell'immagine principale
const bigImg=document.querySelector('.big-img');
const title=document.querySelector('.title');
const paragraph=document.querySelector('.description');

//cambio immagine con il click
for (let index = 0; index < SmallImg.length; index++) {
    SmallImg[index].addEventListener('click',function(){
        Stop();
        Bigs[bigAc].classList.remove('big-actual')
        SmallImg[actual].classList.remove('actual');
        actual=index;
        bigAc=index;
        Bigs[bigAc].classList.add('big-actual')
        SmallImg[actual].classList.add('actual');
        BigWindow();
    })
}
let AutoStopDown;
let AutoStopUp;
function AutoPlayDown(){
    const standby = setInterval(Down,4000);
    AutoStopDown = standby;
}
function AutoPlayUp(){
    const standby = setInterval(Up,4000);
    AutoStopUp = standby;
}
setTimeout(AutoPlayDown,5000);

//extra play-stop button
let direction='down';
let CurrentState='play';
function Play(){
    if(CurrentState!='play'){
        document.getElementById('play').style.display='none';
        document.getElementById('stop').style.display='inline-block';
        clearInterval(AutoStopUp);
        clearInterval(AutoStopDown);
        CurrentState='play'
        if(direction=='down'){
            AutoPlayDown();
        }else{
            AutoPlayUp();
        }

    }
}
function Stop(){
    if(CurrentState!='stop'){
        clearInterval(AutoStopUp);
        clearInterval(AutoStopDown);
        document.getElementById('play').style.display='inline-block';
        document.getElementById('stop').style.display='none';
        CurrentState='stop';
    }
}
function Back(){
    if(direction!='up'){
        clearInterval(AutoStopUp);
        clearInterval(AutoStopDown);
        if(CurrentState=='stop'){
            CurrentState='play'
            document.getElementById('play').style.display='none';
            document.getElementById('stop').style.display='inline-block';
        }
        AutoPlayUp();
        direction='up'
    }
}
function Forward(){
    if(direction!='down'){
        clearInterval(AutoStopUp);
        clearInterval(AutoStopDown);
        if(CurrentState=='stop'){
            CurrentState='play'
            document.getElementById('play').style.display='none';
            document.getElementById('stop').style.display='inline-block';
        }
        AutoPlayDown();
        direction='down'
    }
}
document.getElementById('play').addEventListener('click',Play);
document.getElementById('stop').addEventListener('click',Stop);
document.getElementById('back').addEventListener('click',Back);
document.getElementById('forward').addEventListener('click',Forward);
