var leftHand = '';
var rightHand = '';
var operator = '';
var result = '';

var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('operator_button');
var enterButton = document.getElementById('enter_button');
var clearButton = document.getElementById('clear_button');
var screen = document.getElementById('equation-label');

//add inputed number to screen
function addToScreen(toDisplay){
    screen.innerText = toDisplay;
}

function clearLeftRightOperator(){
    leftHand = result;
    rightHand = '';
    operator = '';
}


//set action for clicking number buttons
for(var i=0; i<numberButtons.length; i++){
    var button = numberButtons[i];
    button.addEventListener('click', function(){
        if(operator.length){
            if(operator === '/' && this.innerText == 0){
                alert("you are unable to devide by zero, try again.");
            }else{
                rightHand += this.innerText;
                var equation = leftHand + " " + operator + " " + rightHand;
                addToScreen(equation);
            }
        }else{
            leftHand += this.innerText;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }
    })
}

//set action for clicking operator buttons
for(var i=0; i<operatorButtons.length; i++){
    var button = operatorButtons[i];
    button.addEventListener('click', function(){
        if(operator.length){
            operator = this.innerText;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }else{
            operator += this.innerText;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }
    })
}

//set action for clear button
clearButton.addEventListener('click', function(){
    leftHand = '';
    rightHand = '';
    operator = '';
    answer = '';
    var equation = leftHand + " " + operator + " " + rightHand;
    addToScreen(equation);
})

//set action for enter button
enterButton.addEventListener('click', function(){
    switch (operator){
        case '+':
            answer = parseFloat(leftHand) + parseFloat(rightHand);
            result = answer.toString();
            addToScreen(result);
            clearLeftRightOperator();
            break;
        case '-':
            answer  = parseFloat(leftHand) - parseFloat(rightHand);
            result = answer.toString();
            addToScreen(result);
            clearLeftRightOperator();
            break;
        case 'x':
            answer = parseFloat(leftHand) * parseFloat(rightHand);
            result = answer.toString();
            addToScreen(result);
            clearLeftRightOperator();
            break;
        case '/':
            answer = parseFloat(leftHand) / parseFloat(rightHand);
            result = answer.toString();
            addToScreen(result);
            clearLeftRightOperator();
            break;
    }
})

//set action for keyboard 0-9 and operators
window.addEventListener('keydown', dealWithKeyboard);

var keys = [];
function dealWithKeyboard(e){
    console.log(e.keyCode)
    if(e.code >= 'Digit0' && e.code <= 'Digit9' ){
        selectDigitsFromKeyboard(e);
    } else {
        keys[e.keyCode] = true;
        
        if(keys[189]){
            //TODO: add minus
        }else if(keys[16] && keys[187]){
            //TODO: add plus
            console.log("hit plus");
        }else if (keys[16] && keys[56]){
              //TODO: add times
        }else if (keys[191]){
            //TODO: add divide
        }else if(keys[190] ){
            //TODO: add period
        }else if(keys[13]){
            //TODO: add enter key
        }

    }


    
}

function selectDigitsFromKeyboard(e){
    switch (e.code){
        case "Digit0":
            addDigitsFromKeyboard('0')
            break
         case "Digit1":
            addDigitsFromKeyboard('1')
            break
         case "Digit2":
            addDigitsFromKeyboard('2')
            break
         case "Digit3":
            addDigitsFromKeyboard('3')
            break
         case "Digit4":
            addDigitsFromKeyboard('4')
            break
         case "Digit5":
            addDigitsFromKeyboard('5')
            break
         case "Digit6":
            addDigitsFromKeyboard('6')
            break
         case "Digit7":
            addDigitsFromKeyboard('7')
            break
         case "Digit8":
            addDigitsFromKeyboard('8')
            break
         case "Digit9":
            addDigitsFromKeyboard('9')
            break
    }
}

function addDigitsFromKeyboard(number){
    if(operator.length){
            if(operator === '/' && number == '0'){
                alert("you are unable to devide by zero, try again.");
            }else{
                rightHand += number;
                var equation = leftHand + " " + operator + " " + rightHand;
                addToScreen(equation);
            }
        }else{
            leftHand += number;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }
}


