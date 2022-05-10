let horizontal = 0
let vertical = 0
const kekw = document.getElementById('kekw')

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        vertical -= 20
    }if (event.key == 'ArrowDown') {
        vertical += 20
    }if (event.key == 'ArrowLeft') {
        horizontal -= 20
    }if (event.key == 'ArrowRight') {
        horizontal += 20
    }
    kekw.style.top = 
    vertical + "px"
    kekw.style.left =
    horizontal + "px"
})