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


