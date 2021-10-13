// select elements on DOM
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