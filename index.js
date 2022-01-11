const img1=document.getElementById('img1')

const tt1=document.getElementById('tt1')


const btn1=document.getElementById('btn1');
const date=document.getElementById('date');
const exp1=document.getElementById('exp1');
btn1.addEventListener('click', getInfo)

function getInfo(){
    console.log('mnb')
    fetch('https://api.nasa.gov/planetary/apod?api_key=UHZi0jQGJjq30PBwdzfKbTdotwVWaRcjUFZZloXX').then
    (res=>res.json()).then(data=>{
        console.log(data);
        tt1.innerHTML=data.title;
        img1.innerHTML=`<img src="${data.url}"/>`
        exp1.innerHTML=data.explanation;
        date.innerHTML=data.date;
    })
}