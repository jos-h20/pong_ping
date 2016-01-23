var pingPong = function(num) {
var output = [];

  for(var i = 1; i <= num; i++) {
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
    }
    }
    }
  };
console.log(output);
return output;
};



$(document).ready(function() {
  $("form#pong").submit(function(event) {
    var num = parseInt($("input#number").val());
    var result = pingPong(num);
    var newResult = result.join(" *")
    $(".output").text(newResult);


    $("#result").show();
    event.preventDefault();
  });
});
