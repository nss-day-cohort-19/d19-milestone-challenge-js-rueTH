"use strict";

var pineTree = {};
var btn = document.getElementById('btn');
    console.log(btn);
var branch = document.getElementById('char');
    console.log('branch is ', branch);
var height = document.getElementById('height');
    console.log('height is ', height);
var space = " ";


//event Listeners
btn.addEventListener("click", checkValues)
height.addEventListener('keydown', checkKeydown)
branch.addEventListener('keydown', checkKeydown)

function checkKeydown(event){
  if(event.which === 13) {
    checkValues()
  }
} 
function checkValues(event){
  if(!(height.value) || !(char.value)) {
  alert("both fields must contain a value")
  } else{ 
  buildObject()
  }
}
function buildObject(){
  pineTree.size = height.value;
  pineTree.unit = char.value;
  tree(pineTree);
}
function tree(needle){
  var output = "";
  var x = height.value - 1;
  output += space.repeat(x) + "*";
  for (var i = 0; i < needle.size; i++) {
      output += '\n' + space.repeat(x-i) + needle.unit.repeat(i) 
                     + needle.unit + needle.unit.repeat(i); 
  }
  output += '\n' + space.repeat(x-1) + "|◙|" 
                 + space.repeat(x) + "...and that's how the Grinch saved Christmas.";
  console.log(output);
}