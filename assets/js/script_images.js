var bodyE = document.querySelector("body")

function getDogFunction(event) {
    var requestUrl = "https://dog.ceo/api/breeds/image/random";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var imgDog = data.message
            console.log("imgDog:\n", imgDog);
            var addDivDog = document.createElement("div")
            var addImgDog = document.createElement("img")
            var addPDog = document.createElement("p")
            bodyE.append(addDivDog);
            addDivDog.append(addImgDog);
            addImgDog.setAttribute("class", "fit-picture");
            addImgDog.setAttribute("alt", "HappyDog");
            addImgDog.setAttribute("id", "dogImage");
            addImgDog.setAttribute("src", imgDog);
            bodyE.append(addPDog);
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
            //console.log("meals:   \n", data.meals)
            var mealsArray = data.meals
                //console.log("meals array:   \n", mealsArray)
            for (var i = 0; i < mealsArray.length; i++) {
                var addDivAppetizer = document.createElement("div")
                var addImgAppetizer = document.createElement("img");
                var addPAppetizer = document.createElement("p")
                imgAppetizer = mealsArray[i].strMealThumb;
                console.log("imgAppetizer: \n", imgAppetizer)
                bodyE.append(addDivAppetizer);
                addDivAppetizer.append(addImgAppetizer);
                addImgAppetizer.setAttribute("class", "fit-picture");
                addImgAppetizer.setAttribute("alt", "NiceAppetizer");
                addImgAppetizer.setAttribute("id", "appetizerImage");
                addImgAppetizer.setAttribute("src", imgAppetizer);
                bodyE.append(addPAppetizer);
                addPAppetizer.setAttribute("style", "p");
                addPAppetizer.textContent = "Thank you for your review. Please enjoy one of our Famous Appetizers on the house next time you visit us";
            }
        })
}
document.getElementById("submit").addEventListener("click", getAppetizerFunction);