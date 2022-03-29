var newDiv = document.createElement('div');
newDiv.className = ('hello');
newDiv.id = 'd1';
newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode("Hello Iam Lujain and this div is created on jS");
newDiv.appendChild(newDivText);
console.log(newDiv);
