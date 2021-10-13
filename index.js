
/*
// SELECT ELEMENTS ON THE DOM

const value = document.querySelector(".park-display");
console.log(value)

const button = document.querySelector("button")
console.log(button)

 const areaClass = document.querySelector(".area-display")
 console.log(areaClass)

 const classStat = document.querySelector(".stats")
 const findDiv = classStat.querySelector("div")
 console.log(findDiv)

 const findHello = document.querySelector(".hello")
 console.log(findHello)

 //find all <button> elements on the page
 const buttons = document.querySelectorAll("button")
 console.log(buttons)

//you can iterate over the NodeList using the values() method

//get a list of all <div> elements containing ratins on the page
//log them using the values method
const divsRatings = document.querySelectorAll(".rating-display");

//iterate over the list and print each one
for (let element of divsRatings.values()) {
    console.log(element)
}
//get a list of all the div elements containing areas on the page
//log them using the for loop
const divsAreas = document.querySelectorAll(".area-display")
for (let i = 0; i < divsAreas.length; i++) {
    const element = divsAreas[i]
    console.log(element)
}
*/



/*
UPDATING THE DOM
*/

/*
Log each description
truncate the text to 250 character and add ellipses if they are longer thatn that.
use the slice()
*/

const descriptions = document.querySelectorAll(".description-display")

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + `<a href="#">...</a>`;
    }

    console.log(content)

    //Update the HTMLElement
    //use .innerHTML
    // use .innerHTML instead of .innerText so ellipses displays correctly
    desc.innerHTML = content;
}

/*
Changing the style
bold and green rating values greater thatn 4.7
*/

const ratings = document.querySelectorAll(".rating-display .value")

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    //add properties with javascript
    // if (ratingValue > 4.7) {
    //     rating.style.fontWeight = "bold";
    //     rating.style.color = "#3ba17c"
    // }

    //using classList property to edit
    if(ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value")
    }
}

/* 
Creaating DOM elements
the createElement() method creates a new elements with given tag name
After creating the element, add it to the page using appendchild()
*/

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
//create the element
const newElement = document.createElement("div")
newElement.innerText = `${numberParks} exciting parks to visit`;
//add class to the new element
newElement.classList.add("header-statement");
//add element to the page on the header
const header = document.querySelector("header");
header.appendChild(newElement);

/*
Removing DOM elements
select the first park on the page and remove it,
as demonstrated here:

//Get the parent element of all parks
const main = document.querySelector("main")

//select a single park
/const park = main.querySelector(".park-display");

//Remove that park
main.removeChild(park)
*/