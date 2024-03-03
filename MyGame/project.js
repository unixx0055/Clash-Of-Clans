const body = document.querySelector('body');
const change = document.getElementsByClassName("change-btn");
const text = document.getElementsByClassName("poster-text");
const img= document.getElementById("image")

const bcimg= ['bar-back.png','gob-back.jpg']
const warior=['barbarian.png','goblin.png']

change.addEventListner('click', function(){
    const bacidx=parseInt(Math.random()*bcimg.length);
    body.style.backgroundImage= url(bcimg[bacidx]);
})