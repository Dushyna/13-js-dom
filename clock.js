setInterval(printTime, 1000);

function printTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h}:${m}:${s.toString().padStart(2, '0')}`;
    const text = document.createTextNode(time);
    const h1 = document.createElement('h1');
    h1.appendChild(text);
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    } else {
        root.appendChild(h1);
    }

}