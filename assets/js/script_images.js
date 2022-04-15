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
const get_meal_btn = document.getElementById("submit");

function getRandomAppetizer() {
    get_meal_btn.addEventListener("click", () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                createMeal(res.meal.strMealThumb);
            })
            .catch(e => {
                console.warn(e);
            });
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
get_meal_btn.addEventListener("click", getAppetizerFunction);