setInterval(move, 15);
let pos = 0;
let i = 1;

function move() {
    pos += i;
    if (pos >= 300 || pos <= 0) {
        i = -i;
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';

}