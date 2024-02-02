const endDate = "14 Feb 2024 10:20 AM";
document.querySelector("#endDate").innerHTML=endDate;

const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");

function setdate (){
    const end = new Date(endDate);
    const start = new Date();
    const diff = (end - start)/1000;
    const days = Math.floor(diff/3600/24);
    const hours = Math.floor(diff/3600%24);
    const minutes = Math.floor(diff/60)%60;
    const seconds = Math.floor(diff%60);

    day.value=days;
    hour.value=hours;
    minute.value=minutes;
    second.value=seconds;
}
setdate();
setInterval(()=>{
    setdate();
},1000)



