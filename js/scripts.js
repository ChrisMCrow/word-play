$(document).ready(function() {
  $("[type='submit']").click(function(event) {
    event.preventDefault();

    var food = $("input#food").val();
    var color = $("input#color").val();
    var activity = $("input#activity").val();
    var movie = $("input#movie").val();
    var faves = [food, color, activity, movie];
    var newFaves = [faves[1], faves[0], faves[2]];

    $(".hide").show();
    $(".hide ul").append("<li>" + newFaves[0] + "</li>" + "<li>" + newFaves[1] + "</li>" + "<li>" + newFaves[2] + "</li>");

  });
});
