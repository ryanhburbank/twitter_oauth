$(document).ready(function() {
  var title = $('.container h1');
  var display = $('#tweet_display');
  var wait_image = function(){
  return "<img id='dude' src='http://www.reactiongifs.com/wp-content/uploads/2013/05/DudeWaiting.gif'/>";
  };

  var wait_message = function() {
    return "<h1 id='wait-head'> Could you maybe like...wait?</h1>";
  };
  // $('#sign-in').on('click', function(event){
  //   event.preventDefault();
  //   $.get('/sign_in', function(response){
  //     response.appendTo('.container');
  //   })
  // })
    $('#tweet-maker').on('submit', function(event){
      event.preventDefault();
      var tweet = $(this).serialize();
      display.html(wait_image());
      title.hide();
      title.before(wait_message())
      
      $.post('/tweet', tweet, function(response){
          display.html(response);
          $('#wait-head').remove();
          title.show();        
      });
    });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
