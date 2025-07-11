const typingtext = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-feild')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cp span')
const btn = document.querySelector('button')

// set values
let timer;
let maxtime = 60;
let timeleft = maxtime;
let charIndex = 0;
let mistake = 0;
let istyping = false;
function loadparagraph(){
    const paragraph= ["JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
 "It is the third layer of the layer cake of standard web technologies, alongside HTML and CSS",
 "JavaScript is used to create interactive webpages and can be used for both client-side and server-side development.",
 "It is a versatile, dynamically typed programming language that supports multiple paradigms such as imperative, functional, and object-oriented programming.",
 "JavaScript can be added directly to a web page using script tags and giving them the type attribute text/javascript.",
 "It is also possible to add JavaScript to a page as a separate header file with the extension .js."];
const randomIndex = Math.floor(Math.random()*paragraph.length);
typingtext.innerHTML='';
for(const char of paragraph[randomIndex]){
console.log(char);
typingtext.innerHTML+=`<span>${char}</span>`;
}
typingtext.querySelectorAll('span')[0].
classList.add('active');
document.addEventListener('keydown',()=>input.focus());
typingtext.addEventListener("click",()=>{
    input.focus()});
    typingtext.addEventListener("click",()=>{
        input.focus()
    })
}
function initTyping(){
    const charSpans = typingtext.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex) || ''; 
    
    if (charIndex < charSpans.length && timeleft > 0) {
          if(!istyping){
            timer = setInterval(initTime,1000);
            istyping= true;
          }
        if (charSpans[charIndex].innerText === typedChar) {
            charSpans[charIndex].classList.add('correct');
            console.log("correct");
        } 
        
        else {
            charSpans[charIndex].classList.add('incorrect');
            console.log("incorrect");
            mistake++;
            mistakes.innerText = mistake;
        }
        charIndex++;
        char[charIndex].classList.add
        ('active');
        mistake.innerText = mistake;
        cpm.innerText = charIndex - mistake;
    }
else{
    clearInterval(timer);
input.value='';
}
}

function initTime(){
    if(timeleft>0){
        timeleft--;
        time.innerText-timeleft;
        let wpmVal = Math.round(((charIndex - mistake)/5) (maxTime - timeleft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}
function reset(){
    loadparagraph();
    clearInterval(timer);
    timeleft = maxtime;
    time.innerText = timeleft;
    input.value='';
    charIndex = 0;
    mistake = 0;
    istyping = false;
    wpm.innerText = 0;
    cpm.innerText=0;
    mistakes.innerText=0;
}

input.addEventListener("input" ,initTyping);
btn.addEventListener("click",reset);
loadparagraph();

