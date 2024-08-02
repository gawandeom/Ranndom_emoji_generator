let btn = document.querySelector("#btn");
let emoji = document.querySelector("#emoji")
let h3 = document.querySelector("h3");

btn.addEventListener("click",()=>{
    
    emojiGenerator()
})
async function emojiGenerator(){
    let url = "https://emoji-api.com/emojis?access_key=23bde0b1522aff1e16f9c9655e0881b53d33fa55";
    let respons = await fetch(url);
    let data = await respons.json();
    let rdmNo = Math.floor(Math.random()*data.length) 
    emoji.innerHTML=data[rdmNo].character;
    let discription = data[rdmNo].unicodeName.split('.')
    h3.innerHTML =discription[1].substring(2,discription[1].length);

}
emoji.addEventListener("click",()=>{
    let em = emoji.textContent
    navigator.clipboard.writeText(em);
    alert("copied to clipboard");
})