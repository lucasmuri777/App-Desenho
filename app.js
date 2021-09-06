const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tamanhoEl = document.getElementById('tamanho')
const increaseEl = document.getElementById('increase')
const decreaseEl = document.getElementById('decrease')
const colorEl = document.getElementById('color')
const borrachaEl = document.getElementById('borracha')

let x = undefined
let y = undefined
let tamanho = 30
let pressed = false
let cor ='black'
function draw(x1,y1,x2,y2){
   ctx.beginPath()
   ctx.moveTo(x1,y1)
   ctx.lineTo(x2,y2)
   ctx.lineWidth = tamanho;
   ctx.strokeStyle = cor
   ctx.stroke()
}
function drawnCircle(x,y){
    let tamanhoCircle = tamanho - (tamanho / 2)
    ctx.beginPath();
    ctx.arc(x, y, tamanhoCircle, 0, 2 * Math.PI);
    ctx.fillStyle = cor
    ctx.fill();
}
canvas.addEventListener('mousedown',(e)=>{
    pressed = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', (e) =>{
    pressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove', (e) =>{
    if(pressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawnCircle(x2,y2)
        draw(x, y, x2, y2)
        x = x2
        y = y2
    }
})
increaseEl.addEventListener('click',()=>{
    tamanho = tamanho + 5
    if(tamanho >= 40){
        tamanho = 40
    }
    atualizarTamanho()
})
decreaseEl.addEventListener('click',()=>{
    tamanho = tamanho - 5
    if(tamanho <= 5){
        tamanho = 5
    }
    atualizarTamanho()
})
borrachaEl.addEventListener('click', ()=>{
    cor = 'white';
})
function atualizarTamanho(){
    tamanhoEl.innerText = tamanho
}
colorEl.addEventListener('change',(e)=>{
    cor = colorEl.value
})

