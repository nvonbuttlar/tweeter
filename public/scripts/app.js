/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {


  function createTweetElement (tweetObject) {

    // DATA VARIABLES
    const firstName   = tweetObject.user.name;
    const handle      = tweetObject.user.handle;
    const avatar      = tweetObject.user.avatars["regular"];
    const content     = tweetObject.content.text;
    const dateCreated = tweetObject.created_at;

    // STRUCTURE OF POSTED TWEET USING jQuery
    const $tweet    = $("<article>").addClass('tweet');
    const $header   = $("<header>").appendTo($tweet);
    const $handle   = $("<handle>").text(handle).appendTo($header);
    const $avatar   = $("<img/>", {src: avatar, alt:'profile picture'}).addClass('avatar').appendTo($header);
    const $name     = $("<p>").text(firstName).appendTo($header);
    const $content  = $("<main>").addClass('content').text(content).appendTo($tweet);
    const $footer   = $("<footer>").appendTo($tweet);
    const $created  = $("<p>").addClass('date-created').text(moment(dateCreated).fromNow()).appendTo($footer);
    const $social   = $("<p>").addClass('social').appendTo($footer);
    const $heart    = $("<i>").addClass('fas fa-heart').appendTo($social);
    const $retweet  = $("<i>").addClass('fas fa-retweet').appendTo($social);
    const $flag     = $("<i>").addClass('fas fa-flag').appendTo($social);


    // This will return a tweet <article> containing
    // The entire HTML structure of the tweet.
    return $tweet;
  }


  function renderTweets(tweets) {

      $("#tweet-container").empty();

    // Loops through tweets
    tweets.forEach(function (tweet) {
      // Calls createTweetElement for each tweet
      // Takes return value and appends it to the tweets container
      createTweetElement(tweet).prependTo("#tweet-container");
    })
  }

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
    }).then(function(tweets) {
      renderTweets(tweets);
    })
  }

  // TOGGLE BUTTON
  $(".compose-btn").click(function() {
    $(".new-tweet").slideToggle("slow", function() {
      $(".new-tweet textarea").focus();
    });
  });


  // POST TWEET
  $("#tweet-form").on('submit', function(event){
    event.preventDefault();
    console.log($(this).serialize());

    // VAlIDATION CONDITIONS

    $(".error").slideUp();

    if ($("textarea").val() === "") {
      $(".error").text("Error: Cannot submit empty tweet").slideDown();
    } else if (Number($(".counter").text()) < 0) {
      $(".error").text("Error: Cannot post more than 140 characters").slideDown();
    } else {

      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
      }).then(function() {
        loadTweets();
        $("#tweet-form textarea").filter("textarea").val("");
        $(".counter").text(140);

      });
    };
  });

  loadTweets();

});

