var submitButtonEl = $('#submit')
var userCommentEl = $('#comment')
var starEl = $('#star')
var reviewEl = $('#review')
var nthComment = 1;
var starRating = 0;

console.log(starRating);
 
function showComment() {
   var reviews = JSON.parse(window.localStorage.getItem('reviews')) || []
   reviews.forEach(function (comment) {
      reviewEl.append(`<div class="box">`+ comment.userText + `</div>`)
   });
}

showComment();
 
function makeReview(userText, userStar) {
   for(var i = 0; i <nthComment; i++){
       reviewEl.append(`<div class="box">`+ userText + `</div>`);
       reviewEl.append(`<div class="fa fa-star">`+ userStar + `</div>`);     
   }
}

$('.fa').on('click', function () {
   var newstarRating = $(this).attr('id'); 
   starRating = newstarRating;
   return starRating;
})
 
$("#submit").on("click", function() {
   var userText = $("#comment").val();
   var userStar = starRating; 
   console.log(userStar);


   if(starRating !=0 && userText !="") {
  var reviews = JSON.parse(window.localStorage.getItem('reviews')) || []
  var newRating = {
    userStar: userStar,
    userText: userText
  }
 
  reviews.push(newRating)
  window.localStorage.setItem("reviews", JSON.stringify(reviews));
  makeReview(userText, userStar);
   } else {
      window.alert('One of the fields you have entered is blank. You must submit a comment and leave a star rating.');
   }


//   if (!userText || !userStar){
//      alert("please leave review")
//   }
//   return
})
 








for(var i=0; i<nthComment; i++){
 
   $(`#comment${i}`).val(localStorage.getItem(`comment${i}`)); // looping through Local Storage to save user values to the page after refresh.
  
   }