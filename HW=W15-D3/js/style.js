let qorap = document.getElementById('box');

let greanBtn = document.querySelector('.batyrma1');
let widthBtn = document.querySelector('.batyrma2');
let heightBtn = document.querySelector('.batyrma3');


qorap.addEventListener("mouseenter", function() {
    qorap.textContent = "Сіздің мышкаңыз қораптың ішінде!";
    qorap.style.transitionDuration="500ms"
});


qorap.addEventListener('mouseleave', function() {
    qorap.textContent = "Сіздің мышкаңыз қораптан шығып кетті!";
    qorap.style.transitionDuration="500ms"
});


greanBtn.addEventListener('click', function() {
    qorap.style.backgroundColor = 'green';
    qorap.style.transitionDuration="1s"
});

widthBtn.addEventListener('click',function(){
    qorap.style.width=parseInt(qorap.style.width)+10 +"px"
})
heightBtnBtn.addEventListener('click',function(){
    qorap.style.height=parseInt(qorap.style.height)+10 +"px"
})