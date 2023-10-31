const resultEl = document.getElementById('result')
const subBtn = document.getElementById('submit')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const delBtn = document.getElementById('del')
const umnBtn = document.getElementById('umn')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
let action ='+'

plusBtn.onclick = function(){
    action ='+'
}

minusBtn.onclick = function(){
    action ='-'
}

delBtn.onclick = function(){
    action ='/'
}

umnBtn.onclick = function(){
    action ='*'
}

function printResult(result){
    if(result < 0){
        resultEl.style.color ='tomato'
    }else{
        resultEl.style.color ='MediumSpringGreen'
    }
    resultEl.textContent = result
}

function computeAction(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    }else if (actionSymbol == '-'){
        return num1 - num2
    }else if (actionSymbol == '*'){
        return num1 * num2
    }else{
        return num1 / num2
    }
}

subBtn.onclick = function(){
    const result = computeAction(input1, input2, action)
    printResult(result.toFixed(2))
}
