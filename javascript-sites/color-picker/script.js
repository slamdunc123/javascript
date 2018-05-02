// function called by button onclick

function colorsPalette(btn){
    
//console.log(btn);
let colors = ["blue", "green", "orange", "purple", "red", "yellow"];
let i = 0;
let color = document.getElementById("colors"); 

document.getElementById(btn.id).disabled = true; 
    
    while(i < colors.length){
        console.log(colors[i]);
        color.innerHTML += "<button class='btn' style='background-color: " + colors[i] + "; color: lightgrey; border: 1;' onclick='changeColor(event.target.innerText)'>"+ colors[i]+ "</button><br><br>";
        

           i++;
        
    }
    
    
}



// function to display selected button color

function changeColor(color){
    console.log(color);
    let selected = document.getElementById("selected");
    let myCanvas = document.getElementById("myCanvas");
    selected.innerHTML = "<br> The color you selected is: " + color;
    canvas.innerHTML = "<canvas style='background-color: " + color + "; border: solid 2px lightgrey; border-radius: 10px;' width='150' height='150'</canvas>";
}





