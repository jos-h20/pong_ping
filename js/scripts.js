var pingPong = function(num) {
var output = [];

  for(var i = num; i > 0; i--) {
    if (i % 15 === 0) {
      output.push("ping pong");
    } else {
      if(i % 5 === 0) {
        output.push("pong");

    } else {
    if(i % 3 === 0) {
    output.push("ping");

    } else {
      output.push(i);
      ;
    }

console.log(output)


          }
        }
      }

};




//   var divThree = (num % 3 === 0);
//     if (divThree) {
//     return true;
//     }
//   var divFive = (num % 5 === 0);
//     if (divFive) {
//     return true;
//
//     }
//   var divFifteen = (num % 15 === 0);
//     if (divFifteen) {
//     return true;
//
//     }
//
//   return output;
// };
