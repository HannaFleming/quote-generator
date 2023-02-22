const button = document.querySelector("#btn");
const par = document.querySelector('#par');

const quotes = ['“I can and I will. Watch me.”','“Today is your opportunity to build the tomorrow you want.”','Practice makes progress, not perfect.','“Success is liking yourself, liking what you do, and liking how you do it.”', '“You can cry, scream, and bang your head in frustration but keep pushing forward. It’s worth it.”', ]

button.addEventListener('click', function(){
    let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]
   
par.style.display = "block";
par.textContent = randomQuotes;
}); 


