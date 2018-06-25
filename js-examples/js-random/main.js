//create array of colors
let colors = ['red', 'yellow', 'pink', 'green', 'orange', 'purple', 'blue'];
console.log(colors);

//create variable to hold random numbers between 1 and 6
let randomColor = Math.floor(Math.random() * colors.length);
console.log(randomColor);

//change html css color element based on random array postion
let color = document.getElementById('color');
color.style.backgroundColor = colors[randomColor];
