"use strict";

var pineTree = {};
var btn = document.getElementById('btn');
    console.log(btn);
var branch = document.getElementById('char');
    console.log('branch is ', branch);
var height = document.getElementById('height');
    console.log('height is ', height);
  var space = " ";
  // var C = output.height; //blerg this isn't right. 
  

//add event listeners & fix C (constant/trunk/whatever)




function tree(needle){
  var output = "";
  var x = height.value - 1;

  if(!(needle.size) || !(needle.unit)) {
        alert("both fields must contain a value")
      } else{ 
        output += space.repeat(x) + "*";
        for (var i = 0; i < needle.size; i++) {
          output += '\n' + space.repeat(x-i) + needle.unit.repeat(i) 
                    + needle.unit + needle.unit.repeat(i); 
        }
        output += '\n' + space.repeat(x-1) + "|◙|" 
                  + space.repeat(x) + "...and that's how the Grinch saved Christmas.";
               

        console.log(output);
      }
  }

//---keydown return

height.addEventListener('keydown', function(event){
  console.log(event);
  if(event.which == 13);
    pineTree.size = height.value;
    pineTree.unit = char.value;
    tree(pineTree);
  })

branch.addEventListener('keydown', function(event){
  console.log(event);
  if(event.which == 13);
    pineTree.size = height.value;
    pineTree.unit = char.value;
    tree(pineTree);
  })

  btn.addEventListener("click", function() {
    pineTree.size = height.value;
    pineTree.unit = char.value; 
    tree(pineTree);  
    })