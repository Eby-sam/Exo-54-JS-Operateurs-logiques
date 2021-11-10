let x = 1;
let y = 4;
let z = 1;
let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');
let test3 = document.getElementById('test3');
let test4 = document.getElementById('test4');
let test5 = document.getElementById('test5');

if (x < 2) {
    test1.innerHTML = "x et plus petit que 2 !!!"
}

else  {

}

if (y > 3) {
    test2.innerHTML = "y et plus grand que 3 !!!"
}

else  {

}

if (z < 0) {
    test3.innerHTML = "x et plus petit 0 !!!"
}

else  {
    test3.innerHTML = "x et plus grand 0 !!!"
}

if (x < 2 && y > 3 && z < 0) {
    test4.innerHTML = "x et plus petit que 2  et y plus grand que 3 et z plus petit zero!!!"
}

else {
    test4.innerHTML = " z plus grand que 0"
}

if ( x < 2 && y > 3 ||  z < 0 ) {
    test5.innerHTML = "x et plus petit que 2  et y plus grand que 3 OU z plus petit zero!!!"
}

else {

}