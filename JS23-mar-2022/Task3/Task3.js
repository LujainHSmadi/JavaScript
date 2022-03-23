

function switchImage() {
    let x = document.getElementById("country").value;
   
    if (x =='a') {
        document.getElementById("images").src = "images/America.png";
    }
    else if (x == '2') {
        document.getElementById("images").src = "images/Itali.jpeg";
    }

    else if (x == '3') {
        document.getElementById("images").src = "images/spain.png";
    }

    else if (x == '4') {
        document.getElementById("images").src = "images/Turky.jpeg";
    }
    else {
        document.getElementById("images").src = "images/switzerland.jpeg";
    }
    

}
