window.onload = () => {
    main();
}

const main = () => {
 let body = document.getElementById('body');
 let btn = document.getElementById('changebtn')
 let copy = document.getElementById('copy')
 let input = document.getElementById('input');

 btn.addEventListener('click',function(){
     let bgcolor = rgbcolor();
     body.style.backgroundColor = bgcolor;
     input.value = bgcolor;
    
 })

 copy.addEventListener('click',function(){
     navigator.clipboard.writeText(input.value);
     generatetoastmsg(`${input.value}copied`);
 })

 
}


function generatetoastmsg(msg){
    const div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast';
    document.body.appendChild(div);
}


function rgbcolor(){
    let red = Math.round(Math.random()*255) ;
    let blue =  Math.round(Math.random()*255);

    let green =  Math.round(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
