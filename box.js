let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);
var i = 0;
var oldValue = 0;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);
    for (i = 1; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        oldValue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldValue);
    }
}