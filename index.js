let evaluing = document.querySelector('#valuing')
let inputValue = document.querySelector('#value')
let reset = document.querySelector('#reset')
let res
evaluing.addEventListener('click',result)
reset.addEventListener('click',resets)
// Get input value
inputValue.value = ''
function add(number){
   
    inputValue.value += number
}
function result(){
    res= (eval(inputValue.value))
    inputValue.value = res
}
function resets(){
    inputValue.value = 0
}
function mathFormulae(operation){
   let f = `Math.${operation}(inputValue.value)`
    inputValue.value = eval(f)
}
function mathFormulaePow(num){
    let f1 = `Math.pow(inputValue.value,${num})`
    inputValue.value  = eval(f1)
} 
let del = document.querySelector('#del')
del.addEventListener('click',()=>{
   let len = inputValue.value.length
   inputValue.value = Number(inputValue.value.toString().slice(0, -1))
})



// For the sliding
let slide = document.querySelector('#slide')
let title = document.querySelector('#title')
let card = document.querySelector('#card')
let buttons = document.querySelectorAll('#card button')
slide.addEventListener('click',()=>{
    if(slide.classList.contains('sliderMiddle')){
        slide.classList.remove('sliderMiddle')
        slide.classList.remove('sliderMiddle')
        document.body.classList.remove('body')
        inputValue.classList.remove('input')
        title.classList.remove('title')
        card.classList.remove('calBody')
        buttons.forEach((button)=>{
            button.classList.remove('calBodyButtons')
        })
        del.classList.remove('del')
        reset.classList.remove('reset')
        evaluing.classList.remove('equal')
    }
    else{
    slide.classList.add('sliderMiddle')
    document.body.classList.add('body')
    inputValue.classList.add('input')
    title.classList.add('title')
    card.classList.add('calBody')
    buttons.forEach((button)=>{
        button.classList.add('calBodyButtons')
    })
    del.classList.add('del')
    reset.classList.add('reset')
    evaluing.classList.add('equal')
}
})