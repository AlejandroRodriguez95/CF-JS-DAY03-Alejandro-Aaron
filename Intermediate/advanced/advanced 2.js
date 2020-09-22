
function changeBg() {
    var a = Math.random() * 255;
    var b = Math.random() * 255;
    var c = Math.random() * 255;

    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}