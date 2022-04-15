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
var addDivAppetizer = document.createElement("div")
var addImgAppetizer = document.createElement("img")
var addPAppetizer = document.createElement("p")

function getRandomAppetizer() {
    // get the data from the server
    $.get("www.thecocktaildb.com/api/json/v1/1/random.php", function(data) {
        $('#appetizerImage').attr('src', data.message)
        console.log("Random Appetizer Pic Retrieved:\n", data.message);
    });

};
getRandomAppetizer();

function getAppetizerFunction(event) {
    event.preventDefault();
    bodyE.append(addDivAppetizer);
    addDivAppetizer.append(addImgAppetizer);
    addImgAppetizer.setAttribute("class", "fit-picture");
    addImgAppetizer.setAttribute("alt", "NiceAppetizer");
    addImgAppetizer.setAttribute("id", "appetizerImage");
    addImgAppetizer.setAttribute("src", getRandomAppetizer());
    bodyE.append(addPAppetizer);
    addPAppetizer.setAttribute("style", "p");
    addPAppetizer.textContent = "Thank you for your review. Please enjoy one of our Famous Appetizers on the house next time you visit us";
};
document.getElementById("submit").addEventListener("click", getAppetizerFunction);

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



for (var i = 0; i < nthComment; i++) {

    $(`#comment${i}`).val(localStorage.getItem(`comment${i}`)); // looping through Local Storage to save user values to the page after refresh.

}
*/