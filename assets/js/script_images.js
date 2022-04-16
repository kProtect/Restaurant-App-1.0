function getDogFunction(event) {
    var requestUrl = "https://dog.ceo/api/breeds/image/random";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var imgDog = data.message
            var imgDogEle = document.querySelector("#dogImage")
            console.log("imgDogEle:\n", imgDogEle)
            var addPDog = document.querySelector("#addPDog")
            imgDogEle.setAttribute("class", "fit-picture");
            imgDogEle.setAttribute("src", imgDog);
            addPDog.setAttribute("style", "p");
            addPDog.textContent = "Your Puppy is Welcome to Join You";
        });
}
document.getElementById("submit").addEventListener("click", getDogFunction);

function getAppetizerFunction(event) {
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var mealsArray = data.meals
            for (var i = 0; i < mealsArray.length; i++) {
                imgAppetizer = mealsArray[i].strMealThumb;
                var addImgAppetizer = document.querySelector("#appetizerImage")
                var addPAppetizer = document.querySelector("#addPAppetizer")
                console.log("addImgAppetizer: \n", addImgAppetizer)
                addImgAppetizer.setAttribute("class", "fit-picture");
                addImgAppetizer.setAttribute("src", imgAppetizer);
                addPAppetizer.setAttribute("style", "p");
                addPAppetizer.textContent = "As a Thank you for your review, please enjoy one of our Famous Appetizers on the house next time you visit us";
            }
        })
}
document.getElementById("submit").addEventListener("click", getAppetizerFunction);