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
    const paragraph= [
  "JavaScript is a powerful, flexible programming language that empowers developers to design rich web interfaces, build dynamic applications, and control browser behavior in real time. it is very powerful tool which one should study ",
  "JavaScript is a high-level, dynamic, and interpreted programming language that has evolved beyond its original role as a browser script into a core technology for both client-side and server-side development using platforms like Node.js.",
  "Through innovations such as Web APIs, ES6 modules, and full-stack JavaScript frameworks like Express, MongoDB, and Next.js, JavaScript has redefined how developers build and maintain scalable, unified web applications.",
  "JavaScript is widely used to create responsive and interactive web experiences and serves as a core tool for both front-end user interface design and back-end server logic implementation.",
  "As a dynamically typed language, JavaScript supports multiple programming paradigms—including imperative, object-oriented, and functional approaches—making it highly adaptable across diverse coding environments.",
  "JavaScript can be added directly to web pages using the <script> tag with the type attribute set to text/javascript, allowing embedded scripts to manipulate the DOM and respond to user actions instantly.",
  "It is also common practice to link JavaScript files externally using the .js extension, enabling modular script management, reusable components, and improved separation between structure, style, and behavior."
];
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

