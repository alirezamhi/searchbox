let container =  document.querySelector('.container');
let button =  document.querySelector('button');
let  input =  document.querySelector('input');

button.addEventListener('click' , function(){
    input.classList.toggle('active');
    input.focus();
});
