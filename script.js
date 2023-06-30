const button = document.querySelector('button');
const container = document.querySelector('.container');
const text = document.querySelector('h1');
button.addEventListener('click', () => {
    
    const hue = Math.floor(Math.random() * 361);
    const sat = Math.floor(Math.random() * 101);
    const lum = Math.floor(Math.random() * 101);
    const color = `hsl(${hue},${sat}%,${lum}%)`;
    container.style.backgroundColor = color;
    text.innerText = color
    if ((sat < 20 && lum < 30) || lum<20) {
        container.style.color = 'white';
    } else {
        container.style.color = 'black';
    }
})

