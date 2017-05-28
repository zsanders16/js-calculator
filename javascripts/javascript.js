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
    console.log('in addtoscreen function');
    console.log(toDisplay);
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
    //answer = '';
    var equation = leftHand + " " + operator + " " + rightHand;
    addToScreen(equation);
})

//set action for enter button
enterButton.addEventListener('click',  hitEnter);



function hitEnter(){
    console.log('in hitenter function');
    console.log(operator);
    console.log(leftHand);
    console.log(rightHand);
    switch (operator){
        case '+':
            answer = parseFloat(leftHand) + parseFloat(rightHand);
            result = answer.toString();
            console.log(result);
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
}

//set action for keyboard 0-9 and operators
window.addEventListener('keydown', dealWithKeyboard);

var keys = [];
function dealWithKeyboard(e){
    
        keys[e.keyCode] = true;

        console.log(e.keyCode);

        if(keys[189]){
            keys = [];
            addOperatorsFromKeyboard('-');
        }else if(keys[16] && keys[187]){
            keys = [];
            addOperatorsFromKeyboard('+');
        }else if (keys[16] && keys[56]){
            keys = [];
            addOperatorsFromKeyboard('x');
        }else if (keys[191]){
            keys = [];
            addOperatorsFromKeyboard('/');
        }else if(keys[190] ){
            keys = [];
            addDigitsFromKeyboard('.')
        }else if(keys[13]){
            keys = [];
            hitEnter();
        }else if(keys[48]){
            keys = [];
            addDigitsFromKeyboard('0');
        }else if(keys[49]){
            keys = [];
            addDigitsFromKeyboard('1')
        }else if(keys[50]){
            keys = [];
            addDigitsFromKeyboard('2')
        }else if(keys[51]){
            keys = [];
            addDigitsFromKeyboard('3')
        }else if(keys[52]){
            keys = [];
            addDigitsFromKeyboard('4')
        }else if(keys[53]){
            keys = [];
            addDigitsFromKeyboard('5')
        }else if(keys[54]){
            keys = [];
            addDigitsFromKeyboard('6')
        }else if(keys[55]){
            keys = [];
            addDigitsFromKeyboard('7')
        }else if(keys[56]){
            keys = [];
            addDigitsFromKeyboard('8')
        }else if(keys[57]){
            keys = [];
            addDigitsFromKeyboard('9')
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

function addOperatorsFromKeyboard(selectedOperator){
    if(operator.length){
            operator = selectedOperator;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }else{
            operator += selectedOperator;
            var equation = leftHand + " " + operator + " " + rightHand;
            addToScreen(equation);
        }
}


