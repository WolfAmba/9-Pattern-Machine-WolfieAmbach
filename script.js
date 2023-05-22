//constants to store values 

//event listeners for submit button

//output for the program to display program's reaction. 

//refresh after submit button is hit again. 

const numberBox1 = document.getElementById("numberbox1");
const numberBox2 = document.getElementById("numberbox2");
const submitButton = document.getElementById("submitbutton");
const colorBox = document.getElementById("yourcolor")
const gridofBoxes= document.getElementById("gridofboxes")

submitButton.addEventListener("click", makeGrid)

function makeGrid(){
  gridofBoxes.innerHTML = '';
  const numberofrows = numberBox1.value;

  const numberofcolumns = numberBox2.value;
  console.log(numberofrows, numberofcolumns);

  const newColor = colorBox.value;
  

  for(let i=0; i<numberofrows; i++){
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', `row${i}`);
    //newRow.style.backgroundColor = newColor;
    gridofBoxes.appendChild(newRow);
  
    for (let j=0; j<numberofcolumns; j++){
    
    let newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.setAttribute('id', `box0${i}${j}`);
    newBox.style.backgroundColor = newColor;
    newRow.appendChild(newBox);
    newBox.addEventListener("click",changeColor);
    newBox.addEventListener("mouseover", changeColor);
    }
  }
 // let newColumn = document.createElement('div');
 // newColumn.classList.add('column');
 // newRow.setAttribute('id', 'column0');
 //newColomn.style.backgroundColor = newColor;
 // gridofBoxes.appendChild(newColumn);

}

function changeColor(event){
  const newColor = colorBox.value
  if (event.type === "click" || (event.type === "mouseover" && event.buttons === 1)){
    event.target.style.backgroundColor = newColor;
  }
}













