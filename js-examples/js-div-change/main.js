let shapes = document.getElementById('shapes');
let shape = document.getElementById('shape');
console.log(shapes);
console.log(shape);

shapes.addEventListener('click', changeShape, false);

function changeShape(e){
    // console.log(e);
    if(e.target !== e.currentTarget){
    let selectedElement = e.target.id;
    console.log(selectedElement);
    if(selectedElement === 'square'){
        shape.id = 'squareCSS';
    }
    else {
        shape.id = 'rectangleCSS';
    }
    
    
    }
}

// function changeLength(){
 
//     let square = document.getElementById('square');
//     square.style.backgroundColor = 'red';
//     square.style.width = '200px';
//     console.log(square.style.backgroundColor);
    

// }

// ToDo:

// How to change css property in Javascript