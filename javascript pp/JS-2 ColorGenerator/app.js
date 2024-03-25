
const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let colorCode="";
let code = document.querySelector("#color-code");
let pallet = document.querySelector(".main");
let copy = document.querySelector("#copy");
let msgBox = document.querySelector(".msg");
function generate(){
    colorCode="#";
    for(let i=0; i<6; i++){
        let randomNumber = Math.floor(Math.random()*16);
        colorCode+=arr[randomNumber];
    }   
    code.innerText=colorCode;
    pallet.style.backgroundColor = colorCode;
    
}

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(colorCode);
    msgBox.classList.remove("hidden");
    setTimeout(()=>{
        msgBox.classList.add("hidden");
    },1000)
})

generate();

const btn = document.querySelector("#generate-btn");
btn.addEventListener("click",generate);

