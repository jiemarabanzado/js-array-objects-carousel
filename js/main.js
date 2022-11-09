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
LeftCar.innerHTML=`
        <div class="big-image">
            <img class="big-img" src="img/01.webp" alt="">
            <div class="rel-text">
                <h2 class="title">
                     Marvel's Spiderman Miles Morales
                </h2>
                <p class="description">
                    Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.
                </p>
            </div>
        </div>
`

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
        actual=0;
        SmallImg[actual].classList.add('actual');

    }else{
        SmallImg[actual].classList.remove('actual');
        actual+=1,
        SmallImg[actual].classList.add('actual');
    }
    BigWindow();
}
function Up(){
    if(actual==0){
        SmallImg[actual].classList.remove('actual');
        actual=SmallImg.length-1;
        SmallImg[actual].classList.add('actual');

    }else{
        SmallImg[actual].classList.remove('actual');
        actual-=1,
        SmallImg[actual].classList.add('actual');
    }
    BigWindow();
}
document.getElementById('up').addEventListener('click',Up)
document.getElementById('down').addEventListener('click',Down)

//cambio dell'immagine principale
const bigImg=document.querySelector('.big-img');
const title=document.querySelector('.title');
const paragraph=document.querySelector('.description');

function BigWindow(){
    bigImg.src=images[actual].image;
    title.innerHTML=images[actual].title;
    paragraph.innerHTML=images[actual].text;
}

//cambio immagine con il click
for (let index = 0; index < SmallImg.length; index++) {
    SmallImg[index].addEventListener('click',function(){
        clearInterval(stop);
        resetAutoPlay();
        SmallImg[actual].classList.remove('actual');
        actual=index;
        SmallImg[actual].classList.add('actual');
        BigWindow();
    })
}
let stop;
function AutoPlay(){
    const standby=setInterval(Down,5000);
    stop=standby;
}

setTimeout(AutoPlay,10000);

function resetAutoPlay(){
    setTimeout(AutoPlay,10000);
}