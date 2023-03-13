 const btnLeft = document.querySelector('.button-arrow._left')
const btnRight = document.querySelector('.button-arrow._right')

const elements = document.querySelector('.elements')



let tamanho = 869

btnLeft.addEventListener('click', ()=>{  
    tamanho -= 355
    elements.style = `transform: translateX(${tamanho}px)`
    console.log(tamanho)
})   

btnRight.addEventListener('click', ()=>{  
    tamanho += 355   
    elements.style = `transform: translateX(${tamanho}px)` 
    console.log(tamanho)
}) 
