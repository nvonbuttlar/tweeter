/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
    const $created  = $("<p>").addClass('date-created').text(dateCreated).appendTo($footer);
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

  renderTweets(data);

  $("#tweet-form").on('submit', function(event){
    event.preventDefault();
    console.log($(this).serialize());

    $.ajax({
  type: "POST",
  url: "/tweets",
  data: $(this).serialize(),

  });
    // data.serialize()
  });






//   var $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });










});

