

document.getElementById("fname").addEventListener("change", function () {
    var fname = this.value;
    var pattern = /^[A-Za-z]+$/;
var fn = pattern.test(fname);

    if (fn == false) {
        document.getElementById('1').style.color='red';
        document.getElementById('1').innerHTML = "numbers aren't allowed";
    }
   else  {
        document.getElementById('1').innerHTML = "";
    }

});


document.getElementById("lname").addEventListener("change", function () {
    var fname = this.value;
    var pattern = /^[A-Za-z]+$/;
    var fn = pattern.test(fname);

    if (fn == false) {
        document.getElementById('2').style.color = 'red';
        document.getElementById('2').innerHTML = "numbers aren't allowed";
    }

});


document.getElementById("birthday").addEventListener("change", function () {
    check = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0 - 9]) | ((1)[0 - 2]))(\/)\d{4}$/i;

    var bd = this.value;

    var bi = check.test(bd);

    if (bi == false) {
        document.getElementById('3').style.color = 'red';
        document.getElementById('3').innerHTML = "invalid format try :dd/mm/yyyy!";
    }
    
});

var check = /^[a-zA-Z]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i;

document.getElementById("email").addEventListener("change", function () {
    var email = this.value;
    var fn = check.test(email);
    console.log(fn);

    if (fn == false) {
        document.getElementById('4').style.color = 'red';
        document.getElementById('4').innerHTML = "invalid!";
    }

});

document.getElementById("conmail").addEventListener("change", function () {
    var conf = this.value;
    var email = document.getElementById("email").value;
    var con = check.test(conf);
    console.log(con);

    if (con == false) {
        document.getElementById('5').style.color = 'red';
        document.getElementById('5').innerHTML = "invalid!";
    }
    if (conf != email) {
        document.getElementById('5').style.color = 'red';
        document.getElementById('5').innerHTML = "doesn't match!";
    }


});

document.getElementById("password").addEventListener('change', function () {
    password = this.value;
    check = /\b^([A-Z])/;
    if (check.test(password)) {
        check = /[0-9].*[0-9]/;
        if (check.test(password)) {
            check = /[?=.*[\]\\{}!@#$%^&*]/;
            if (check.test(password)) {
                console.log(password);
                document.getElementById("6").innerHTML = "";
            } else {
                document.getElementById("6").style.color = "red";
                document.getElementById("6").innerHTML = "the password must have at least one symbol";
            }
        } else {
            document.getElementById("6").style.color = "red";
            document.getElementById("6").innerHTML = "the password must have at least two numbers";
        }
    } else {
        document.getElementById("6").style.color = "red";
        document.getElementById("6").innerHTML = "the first letter must be uppercase";
    }

    if (password == "") {

        document.getElementById("6").innerHTML = "";
    }

});


document.getElementById("conpass").addEventListener('change', function () {
    result = document.getElementById("password").value == document.getElementById("cpassword").value;
    if (result) {
        document.getElementById("7").innerHTML = "";
    } else {
        document.getElementById("7").style.color = "red";
        document.getElementById("7").innerHTML = "The password are not the same";
    }

    if (document.getElementById("cpassword").value == "")
        document.getElementById("7").innerHTML = "";
});