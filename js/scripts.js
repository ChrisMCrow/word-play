$(document).ready(function(){
  $("button#form1").click(function(event){
    var input = $("input#sentence").val();
    var words = input.split(" ");
    var longWords = [];
    words.forEach(function(word){
      if(word.length > 3){
        longWords.push(word);
      }
    });
    var reverseWords = longWords.reverse();
    alert(reverseWords.join(' '));
    event.preventDefault();
  });


  $("button#form2").click(function(event){
    var input = $("input#object").val();
    var words = input.split(" ");
    var object = {}
    words.forEach(function(word){
      if(object[word]) {
        object[word] += 1;
      } else {object[word] = 1}
    });
    Object.keys(object).forEach(function(sortedWord) {
      $("#output").append("<li>" + sortedWord + ": " + object[sortedWord] + "</p>")
    });
    event.preventDefault();
  });
});
