(function($) {
    $.each(['show','hide'], function(i, val) {
        var _org = $.fn[val];
        $.fn[val] = function() {
            this.trigger(val);
            _org.apply(this, arguments);
        };
    });
})(jQuery);

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
    .html(currentExercise.title))
  .click(function(){
    setTimeout(function(){
      $("#editor-" + currentExercise.key).focus();
    },100);    
  });

  //container element
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

  var code = "";
  if(currentExercise.code){
    code = currentExercise.code;
  }

  elementBody.append($("<div>").attr("id", "result-" + currentExercise.key));

  elementBody.append($("<textarea>").attr("id", "editor-" + currentExercise.key)
                                .attr("display", "none")
                                .addClass("code-editor")
                                .text(code));
  

  elementBody.append($("<button>").addClass("btn")
                                  .text("Evaluate")
                                  .click(function(){
                                    var results = testCatalog[currentExercise.key](editor.getValue());
                                    showTestResults($("#result-" + currentExercise.key), results);  
                                  }));

  $(".tab-content").append(elementBody);

    var editor = CodeMirror.fromTextArea($("#editor-" + currentExercise.key).get(0),{
            value: code,
            mode:  "javascript",
            lineNumbers: true
    });


}

function showTestResults(container, results){
  container.empty();
  for (var i = 0; i < results.length; i++) {
    var currentResult = results[i];
    var paragraph = $("<p>").text(currentResult.message);
    if(currentResult.status.toLowerCase() == "passed"){
      paragraph.addClass("test-success");
    }
    else{
      paragraph.addClass("test-failure");
    }
    container.append(paragraph);
  }
}
