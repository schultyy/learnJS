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


  elementBody.append($("<textarea>").attr("id", "editor-" + currentExercise.key)
                                .attr("display", "none")
                                .addClass("code-editor")
                                .text(code));

  $(".tab-content").append(elementBody);

    var editor = CodeMirror.fromTextArea($("#editor-" + currentExercise.key).get(0),{
            value: code,
            mode:  "javascript",
            lineNumbers: true
    });

  elementBody.append($("<button>").addClass("btn")
                                  .text("Evaluate")
                                  .click(function(){
                                    var userCode = evaluate(editor.getValue());
                                    var results = testCatalog[currentExercise.key](userCode);
                                    alert(JSON.stringify(results));
                                  }));
}