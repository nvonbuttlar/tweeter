/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  const tweetObject = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

  function createTweetElement (tweetObject) {

    // DATA VARIABLES
    const firstName   = tweetObject.user.name;
    const handle      = tweetObject.user.handle;
    const avatar      = tweetObject.user.avatars["small"];
    const content     = tweetObject.content.text;
    const dateCreated = tweetObject.created_at;

    // POSTED TWEET
    const $tweet    = $("<article>").addClass('tweet');
    const $header   = $("<header>").appendTo($tweet);
    const $handle   = $("<handle>").text(handle).appendTo($header);
    const $avatar   = $("<img/>", {src: avatar, alt:'profile pic'}).addClass('avatar').appendTo($header);
    const $name     = $("<p>").text(firstName).appendTo($header);
    const $content  = $("<main>").addClass('content').text(content).appendTo($tweet);
    const $footer   = $("<footer>").appendTo($tweet);
    const $created  = $("<p>").addClass('date-created').text(dateCreated).appendTo($footer);
    const $social   = $("<p>").addClass('social').appendTo($footer);
    const $heart    = $("<i>").addClass('fas fa-heart').appendTo($social);
    const $retweet  = $("<i>").addClass('fas fa-retweet').appendTo($social);
    const $flag     = $("<i>").addClass('fas fa-flag').appendTo($social);

// var img = $('<img />', { id: 'Myid', src: 'MySrc.gif',alt: 'MyAlt'})



    // This will return a tweet <article> containing
    // the entire HTML structure of the tweet.
    return $tweet;
  }


  createTweetElement(tweetObject).appendTo("#tweet-container");









});

