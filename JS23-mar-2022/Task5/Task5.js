function pass1() {

    let valuep = document.getElementById('pass').value;
    if (valuep.length < 6) {
        document.getElementById('short').innerHTML = 'Too short';
    }
}
function repass() {
    let valuer = document.getElementById('reepass').value;
    let valuep = document.getElementById('pass').value;
    if (valuep == valuer) {
        document.getElementById('btn').style.display = 'block';

    }
    else {
        document.getElementById('dontmatch').innerHTML = "The two passwords don't match";
    }
}
