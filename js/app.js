$(document).ready(function(){
  $('#start-tutorial').click(function(){
    $('#about').hide('slow');
    $('#tutorial').show('fast');

    $.getJSON('exercises.json', function(data){
      alert("boo");
    });
  });
});