// "use strict";

var pineTree = {};




//add event listeners & fix C (constant/trunk/whatever)

// //---button click?
// btn.onclick = tree();


// //---keydown return
// onkeydown = function(returnEvent){
//   if(returnEvent.which == 13);
//     tree();
//   }

function tree(taco){
  var output = "";
  var branch = document.getElementById('char').value;
  var height = document.getElementById('height').value;
  var x = height - 1;
  var C = pineTree.height; //blerg this isn't right. 
  var space = "\n";
  var btn = document.getElementById('btn');

  btn.onclick = console.log(output, {    
      if( !(taco.height) || !(taco.char) ) {
        alert("both fields must contain a value")
      } else{
        for (i = 0; i < taco.height; i++) {
          pineTree += space.repeat(x) + taco.branch.repeat(i);
          pineTree += taco.C + taco.branch.repeat(i);
          pineTree += '<br>';
        }
      }
  })
}
