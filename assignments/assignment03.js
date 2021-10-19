let elem = [];
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
// elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};



for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
}

for (let i=1; i<=18; i++) {
  elem[i].children[4].children[1].onclick = function(){subtract1(elem[i]);};
}

for (let i=1; i<=18; i++) {
  elem[i].children[4].children[2].onclick = function(){clear(elem[i])};
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") { 
    elem.children[2].innerHTML = "1";
    }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
   
  }
  over(elem);
}

// create an "subtract1" function
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "-1";
    }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
   
  }
  over(elem);
}

//create over function
function over (elem){
  elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML;
}


// create an "clear" function
function clear (elem) {
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
  }
}
