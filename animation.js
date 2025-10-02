const t=setInterval(move,20);
let pos=0;

function move() {
pos++;
box.style.left = pos + 'px';
box.style.top = pos + 'px';
if(pos === 300){
    clearInterval(t);
}
}