var bodyE = document.querySelector("body")
var addDivDog = document.createElement("div")
var addImgDog = document.createElement("img")
var addPDog = document.createElement("p")


function getRandomDog() {
    // get the data from the server
    $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        // set the source of the image
        $('#dogImage').attr('src', data.message);
        console.log("Random Dog Pic Retrieved:\n", data.message);
    });

};
getRandomDog();

function getDogFunction(event) {
    event.preventDefault();
    bodyE.append(addDivDog);
    addDivDog.append(addImgDog);
    addImgDog.setAttribute("class", "fit-picture");
    addImgDog.setAttribute("alt", "HappyDog");
    addImgDog.setAttribute("id", "dogImage");
    addImgDog.setAttribute("src", getRandomDog());
    bodyE.append(addPDog);
    addPDog.setAttribute("style", "p");
    addPDog.textContent = "Your Puppy is Welcome to Join You";
};
document.getElementById("submit").addEventListener("click", getDogFunction);

var bodyE = document.querySelector("body")
var addDivCocktail = document.createElement("div")
var addImgCocktail = document.createElement("img")
var addPCocktail = document.createElement("p")

function getRandomCocktail() {
    // get the data from the server
    $.get("www.thecocktaildb.com/api/json/v1/1/random.php", function(data) {
        $('#cocktailImage').attr('src', data.message)
        console.log("Random Cocktail Pic Retrieved:\n", data.message);
    });

};
getRandomCocktail();

function getCocktailFunction(event) {
    event.preventDefault();
    bodyE.append(addDivCocktail);
    addDivCocktail.append(addImgCocktail);
    addImgCocktail.setAttribute("class", "fit-picture");
    addImgCocktail.setAttribute("alt", "NiceCocktail");
    addImgCocktail.setAttribute("id", "cocktailImage");
    addImgCocktail.setAttribute("src", getRandomCocktail());
    bodyE.append(addPCocktail);
    addPCocktail.setAttribute("style", "p");
    addPCocktail.textContent = "Thank you for your review. Please enjoy one of our Famous Cocktails on the house next time you visit us";
};
document.getElementById("submit").addEventListener("click", getCocktailFunction);

/*
const btnState = document.getElementById("submit");
btnState.addEventListener("click", myFunction);
*/

/*
var userCommentEl = $('#comment')
var starEl = $('#star')
var reviewEl = $('.box')
var nthComment = 1;

function makeComment() {}

function makeReview() {
    for (var i = 0; i <= nthComment - 1; i++) {
        reviewEl.append();
        nthComment += 1;
    }

}

function getRandomImage() {
    // get the data from the server
    $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        // set the source of the image
        $('#dogImage').attr('src', data.message)
    });

}

$("#submit").on("click", function() {
    var userText = $(this).siblings("textarea").val();
    var userStar = $(this).siblings("textarea").attr();
    localStorage.setItem(userText, userStar);
    // Andres_Note - Need to create couple of image element to put in there the images for the dog and the cocktail..
    getRandomImage(); // API generates a random image of a dog.
})



for (var i = 0; i < nthComment; i++) {

    $(`#comment${i}`).val(localStorage.getItem(`comment${i}`)); // looping through Local Storage to save user values to the page after refresh.

}
*/