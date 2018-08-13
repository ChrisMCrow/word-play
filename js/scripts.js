$(document).ready(function(){
  $("button").click(function(event){
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

});
