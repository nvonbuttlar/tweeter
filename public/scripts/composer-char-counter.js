$(document).ready(function(){
  // --- our code goes here ---
  // This function runs a cb when the dom is ready to be manipulated with jQuery


  $('.new-tweet textarea').on('keyup', function(){
    console.log(140 - $(this).val().length);

    let length = (140 - $(this).val().length)

    $('.counter').text(length); // activates character counter

    if (length >= 0 ) {
      $('.counter').css('color', '#244751');
    } else {
      $('.counter').css('color', 'red');
    }

  });



// End of document.ready function ^^^
});