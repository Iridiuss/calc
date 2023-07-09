function sum() {
    let a = Number(document.getElementById('one').value);
    let b = Number(document.getElementById('two').value);
    let sum = a + b;
    document.getElementById('res').innerHTML = sum;
    document.getElementById('res').style.color = "blue";
    document.getElementById('res').style.fontSize = '3vw';
}
function diff() {
    let a = Number(document.getElementById('one').value);
    let b = Number(document.getElementById('two').value);
    let dif = a - b;
    document.getElementById('res').innerHTML = dif;
    document.getElementById('res').style.color = "blue";
    document.getElementById('res').style.fontSize = '3vw';
}
function pro() {
    let a = Number(document.getElementById('one').value);
    let b = Number(document.getElementById('two').value);
    let mul = a * b;
    document.getElementById('res').innerHTML = mul;
    document.getElementById('res').style.color = "blue";
    document.getElementById('res').style.fontSize = '3vw';
}
function div() {
    let a = Number(document.getElementById('one').value);
    let b = Number(document.getElementById('two').value);
    let  d= a / b;
    document.getElementById('res').innerHTML = d;
    document.getElementById('res').style.color = "blue";
    document.getElementById('res').style.fontSize = '3vw';
}