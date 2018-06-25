//uses button onclick to perform toggle hide/show

function hide(){
    // console.log('hello');
    let col = document.getElementsByClassName('col');
    // console.log(cols[2]);

    //toggle display of col1
    if(col[0].style.display === 'none'){
        col[0].style.display = 'inline-block';
    }
    else {
        col[0].style.display = 'none';
    }
}

//uses event listener to perform alert

let parts = document.getElementById('parts');
    // console.log(parts);

    parts.addEventListener('click', partSelected, false);

    function partSelected(event){
        if(event.target !== event.currentTarget){
            let clickedItem = event.target.id;
            alert('Part selected is ' + clickedItem);
        }
        event.stopPropagation();
    }

//uses event listener to swap div background color
let row3 = document.getElementById('row3');
let colors = document.getElementById('colors');
// console.log(colors);
console.log(row3);

colors.addEventListener('mouseover', changeBackgroundColor, false);

function changeBackgroundColor(e){
    if(event.target !== event.currentTarget){
        let selectedColor = event.target.id;
        //console.log(selectedColor);
        row3.style.backgroundColor = selectedColor;
    }
    e.stopPropagation();
}

