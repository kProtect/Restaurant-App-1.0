var submitButtonEl = $('#submit')
var userCommentEl = $('#comment')
var starEl = $('#star')
var reviewEl = $('.box')
var nthComment = 1;

function makeComment() {}

function makeReview() {
    for(var i = 0; i <=nthComment-1; i++){
        reviewEl.append();
        nthComment += 1;
    }

}

function getRandomImage()
{
  // get the data from the server
  $.get( "https://dog.ceo/api/breeds/image/random", function( data ) {
    // set the source of the image
    $('#dogImage').attr('src', data.message)
  });

  $.get("www.thecocktaildb.com/api/json/v1/1/random.php", function(data) {
      $('#cocktailImage').attr('src', data.message)
  })

}

$("#submit").on("click", function() {
    var userText = $(this).siblings("textarea").val();
    var userStar = $(this).siblings("textarea").attr();
    localStorage.setItem(userText, userStar);
   getRandomImage(); // API generates a random image of a dog.
})



for(var i=0; i<nthComment; i++){

    $(`#comment${i}`).val(localStorage.getItem(`comment${i}`)); // looping through Local Storage to save user values to the page after refresh.
    
    }