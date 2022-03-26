p = ["L", "M", "N"];
c = [100, 200, 300]

mainloop: for (var i = 0; p.length; i++){
    console.log(p[i]);
  nestedloop:  for (var j = 0; j < c.length; c++){
      console.log(c[i]);
      if (c[i] == 200) {
          break mainloop;
      }
    }
}
function name1(...p2) {
    sum = 0;
    for (var i = 0; i < p2.length; i++){
        sum = sum + p2[i];
    }
    
    return sum;
}

console.log(name1(1,2,3,4,65,7,4,54,87,145,51));

var x = function (...p2) {
    sum = 0;
    for (var i = 0; i < p2.length; i++) {
        sum = sum + p2[i];
    }

    return sum;
}

console.log(x(1, 2, 3, 4, 65, 7, 4, 54, 87, 145, 51));

var f = ["Mohammad", "Lujain", "Majd"];
filterF = f.filter(function (ele) {
    return ele.startsWith("M");
})
// Filter 
document.write(filterF);
var sentence = "I Love Fooood code Too Playing Much";
var smallwords = sentence.split(" ");

filterd = smallwords.filter(function (ele) {
    return ele.length > 4 ? true : false;
}).join();
console.log(filterd);
// map

 sentence = "I Love Fooood code Too Playing Much";
 smallwords = sentence.split(" ");

filterd = smallwords.map(function (ele) {
    return ele.length > 4 ? true : false;
}).join();
console.log(filterd);

 sentence = "ILove123klkkh";
 smallwords = sentence.split("");

filterd = smallwords.map(function (ele) {
    
        return isNaN(parseInt(ele));
    
    
});

console.log(filterd);


var x = (ele) =>{

    return isNaN(parseInt(ele));


}
//Reduce

let num = [10, 20, 30, 40];

let add = num.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element =>${current}`);    
    console.log(`Current Element index =>${index}`);
    console.log(`Array =>${arr}`);
    console.log(acc + current);
    console.log('###############');
    return acc + current;
});

console.log(add);


 num = [10, 20, 30, 40];

 add = num.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element =>${current}`);
    console.log(`Current Element index =>${index}`);
    console.log(`Array =>${arr}`);
    console.log(acc + current);
    console.log('###############');
    return acc + current;
}, 5);

console.log(add);1
