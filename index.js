
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

    //console.log(content)

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





/* EVENT LISTENERS */

//select the first button on the page
const firstBtn = document.querySelector("button");

//addEVentListener()
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
    //use info contained while handling the event.
    //print which button we just clicked
    console.log(event.target);
})

//handle multiple elements
//Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");
//Itereate thrrough the list of buttons and add an event handler to each.
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target)
        //print the park that belongs to each button
        console.log(event.target.parentNode)
        //highlight the background of the park selected
        const park = event.target.parentNode
        park.style.backgroundColor = "#c8e6c9"
    })
})

//A complete example
// give ability to sort the list of parks displayed on the page
//sort by either name or rating
//add two links and allow the user to click whichever one they wish
//get list of parks from the DOM, perform a sort and insert the parks back into DOM
    /* 
    1. Get the <main> element that contains all the parks.
    2. Get a NodeList of all the parks.
    3. Empty the <main> element.
    4. Convert the NodeList to an array for convenience of sorting.
    5. Sort the array using techniques that you learned previously.
    6. Iterate through the sorted array and append each park to <main>.
    */

//select nameSorter link
const nameSorter = document.querySelector("#name-sorter");
//Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("you clicked the name sorter")

    // 1. get the main element
    const main = document.querySelector("main")
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display")
    // 3. Empty the main element
    main.innerHTML = "";
    // 4. Create an array
    const parksArray = Array.from(parksList);
    // 5. Sort the array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText
        const parkBName = parkB.querySelector("h2").innerText
        if(parkAName > parkBName) {
            return -1;
        } else if (parkAName < parkBName) {
            return 1;
        } else {
            return 0;
        }
    })
    // 6. Insert each park into the DOM
    parksArray.forEach((park) =>{
        main.appendChild(park);
    })
})
