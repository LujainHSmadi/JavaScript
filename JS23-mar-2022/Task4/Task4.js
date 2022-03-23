function fontFam() {
    let x = document.getElementById("F").value;
    if (x === 'Arial') {
        document.getElementById("TB").style.fontFamily = x;
    }
    if (x === 'TimesNewRoman') {
        document.getElementById("TB").style.fontFamily = x;
    }
    if (x === 'fantasy') {
        document.getElementById("TB").style.fontFamily = x;
    }
    if (x === 'cursive') {
        document.getElementById("TB").style.fontFamily = x;
    }
}


function fontSize() {

    let x = document.getElementById("s").value;
    if (x === '12') {
        document.getElementById("TB").style.fontSize = x + "px";
    }
    if (x === '18') {
        document.getElementById("TB").style.fontSize = "18px";
    }
    if (x === '24') {
        document.getElementById("TB").style.fontSize = "24px";
    }
    if (x === '32') {
        document.getElementById("TB").style.fontSize = "32px";
    }
}



function fontItalic() {
    italic = false;    
    let x = document.getElementById("a").value;
    if (document.getElementById("a").checked == true) {
        italic = true;

        document.getElementById("TB").style.fontStyle = x;
    }
    else {
        document.getElementById("TB").style.fontStyle = "normal";
    }
    
}

function fontBold() {

    let x = document.getElementById("b").value;
    if (document.getElementById("b").checked == true) {
        document.getElementById("TB").style.fontWeight = x;
    }
    else {
        document.getElementById("TB").style.fontWeight  = "normal";
    }
}

function fontUderLine() {
    let x = document.getElementById("c").value;
    if (document.getElementById("c").checked == true) {
        document.getElementById("TB").style.textDecoration = x;
    }
    else {
        document.getElementById("TB").style.textDecoration="none";
    }

}