$(document).ready(function(){
  $('#start-tutorial').click(function(){
    $('#about').hide('slow');
    $('#tutorial').show('fast');

    $.getJSON('exercises.js', function(data){
      $.each(data, createExercise);
    });
  });
});

function createExercise(index, currentExercise){

  var elementHeader = $("<li>")
    .html($("<a>").attr("data-toggle","tab")
                  .attr("href", "#" + currentExercise.key)
                  .html(currentExercise.title));
  if(index == 0)
    elementHeader.addClass("active");

  $("#tab-header").append(elementHeader);
  var elementBody = $("<div>")
        .addClass("tab-pane")
        .attr("id", currentExercise.key)
        .html(currentExercise.description);

  if(index == 0)
    elementBody.addClass("active");

  $(".tab-content").append(elementBody);
}