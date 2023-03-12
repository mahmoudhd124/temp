const btn = document.querySelector('button')
const h3 = document.querySelector('h3')
const div = document.querySelector('div')

const handleClick = () => {
    let value = h3.textContent
    if(isNaN(Number(value))) h3.textContent = 0
    else h3.textContent = Number(value) + 1
}

btn.addEventListener('click', e => handleClick())