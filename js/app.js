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

  var elementBody = $("<div>")
        .addClass("tab-pane")
        .attr("id", currentExercise.key);

  if(index == 0){
    elementHeader.addClass("active");
    elementBody.addClass("active");
  } 

  $("#tab-header").append(elementHeader);

  var elementDescription = $("<p>")
                .addClass("description")
                .addClass("lead")
                .html(currentExercise.description);
  elementBody.append(elementDescription);

  if(currentExercise.code){
    var elementCode = $("<pre>").html(currentExercise.code);
    elementBody.append(elementCode);
  }

  $(".tab-content").append(elementBody);
}