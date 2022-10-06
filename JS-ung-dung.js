function cong() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let result = a + b
    document.getElementById('ketqua').innerHTML='kết quả = ' + result
}
function tru() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let result = a - b
    document.getElementById('ketqua').innerHTML='kết quả = ' + result
}
function nhan() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let result = a * b
    document.getElementById('ketqua').innerHTML='kết quả = ' + result
}
function chia() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let result = a / b
    document.getElementById('ketqua').innerHTML='kết quả = ' + result
}