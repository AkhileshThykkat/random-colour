const button = document.querySelector('button');
const container = document.querySelector('.container');
const textHsl = document.querySelector('.hsl');
const textRgb = document.querySelector('.rgb');
button.addEventListener('click', () => {
    
    const hue = Math.floor(Math.random() * 361);
    const sat = Math.floor(Math.random() * 101);
    const lum = Math.floor(Math.random() * 101);
    const color = `hsl(${hue}, ${sat}%, ${lum}%)`;
    container.style.backgroundColor = color;
    textHsl.innerText = color
    if ((sat < 20 && lum < 30) || lum<20) {
        container.style.color = 'white';
    } else {
        container.style.color = 'black';
    }
    const colorRgb = container.style.backgroundColor;
    textRgb.innerText = colorRgb;
})

