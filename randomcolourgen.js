

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let cc = document.querySelector("#colourbox");
let count = 0;

btn.addEventListener("click", function () {
    console.log("I'll give you a random colour");
    let x = getRandomcolour();
    h1.innerText = x;
    cc.style.backgroundColor = x;
    showNotification("Random colour generated successfully!");
});

h1.addEventListener("mouseout", function(){
    if(count>0){
    let text = h1.innerText;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        showNotification("Text copied to clipboard successfully!");
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
       showNotification("Failed to copy text to clipboard!");
    });
}
});

function getRandomcolour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let colour = `rgb(${red},${green},${blue})`;
    count++;
    return colour;
}



