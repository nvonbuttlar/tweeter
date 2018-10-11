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

    // POSTED TWEET
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
    // the entire HTML structure of the tweet.
    return $tweet;
  }


  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function (tweet) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
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


  $("#tweet-form").on('submit', function(event){
    event.preventDefault();
    console.log($(this).serialize());


    // VAlIDATION CONDITIONS
console.log()
    if ($("textarea").val() === "") {
      alert("Cannot submit an empty field");
    } else if (Number($(".counter").text()) < 0) {
      alert("Cannot post more than 140 characters");
    } else {

      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
      }).then(function() {
        loadTweets();
      });

    };
  });

  loadTweets();

});

