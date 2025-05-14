const buttonValues = [
    "AC","+/-","%","÷",
    "7","8","9","x",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
];
const rightSymbols = ["÷","x","-","+","="];
const topSymbols = ["AC","+/-","%"];

const display = document.getElementById("display")

// functionality of Buttons

// inputs(operands), operator 

// A & B - Operands 
//Operator

//Adds to display and saves it 

let A = 0;
let operator = null;
let B = null;


function clearAll(){
    A = 0;
    operator = null;
    B = null;
}




//adding buttons for each symbol

for(let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button"); 
    button.innerText =  value;

//adding buttons to div
//append
const jsbutton = document.getElementById("buttons");

jsbutton.appendChild(button);


//Changing color of topSymbols and rightSymbols

if (rightSymbols.includes(value)){
    button.style.backgroundColor = "#FF9500";
 }
 else if (topSymbols.includes(value)){
    button.style.backgroundColor = "#D4D4D2"
    button.style.color =" #1C1C1C";
 }
//making 0 occupy 2 columns using grid

if (value == 0){
    button.style.gridColumn = "span 2"; // should occupy 2 columns
    button.style.width = "176px"; // should occupy width of one button + the spacing
}

// adding an event listener for each button

button.addEventListener("click", function(){
   if(rightSymbols.includes(value)){
    if(value == "="){
        if(A != null){
            B = display.value;
            let numA = Number(A);
            let numB = Number(B);

            if(operator == "÷"){
                display.value = numA/numB;
            }
            else if(operator == "x"){
                display.value = numA*numB;
            }
            else if(operator == "-"){
                display.value = numA - numB;
         
            }
            else if(operator == "+"){
                display.value = numA+numB;
            }
            
            
            
            clearAll();
        }

    }
    else{ // other operators
        operator = value; // storing the current value as  the operator 
        A = display.value; // store value in display as A 
        display.value = ""; // clears display after storing

    }


   } 
   else if(topSymbols.includes(value)){
    if(value == "AC"){
        clearAll();
        display.value = "";

    }
    else if(value == "+/-" ){
        if(display.value != "0" &&  display.value != ""){
            if(display.value[0] == "-"){
                display.value = display.value.slice(1);
            }
            else {
                display.value = "-"+ display.value;
            }
        }

    }
    else if (value == "%"){

        display.value = Number(display.value)/100
    }

   }
   else{
    if(value == '.'){
        if(display.value != "" && !display.value.includes(value)){
           display.value += value;
        }

    }
    else if(display.value == "0"){
        display.value = value;
    }
    else {
        display.value += value;
    }
   }
})


 }





