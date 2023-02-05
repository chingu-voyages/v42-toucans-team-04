//Create a global list of categories
var categories;

//set categories on load
fetch("https://api.chucknorris.io/jokes/categories")
  .then((response) => {
    return response.json();
  })
  .then((categories) => {
    this.categories = categories;
    loadCategories(categories);
  });

//Dynamically load category side bar with api data
function loadCategories(listOfCategories) {
  let items = document.getElementById("mySidebar");

  //remove category
  listOfCategories = removeCategoryFromList(listOfCategories);

  let index = 0;
  //loop through list of categories
  listOfCategories.forEach((category) => {
    //create the element and append to sideBar
    let p = document.createElement("p");
    p.innerHTML = category;
    p.id = "category-" + index;
    p.setAttribute("onclick", "getCategory(" + index + ")");
    items.append(p);
    index++;
  });
}

var globaCategoryIndex;
var previousCategoryIndex;
function getCategory(index) {
  //Get the select <p> element base on the global categories and index
  let item = categories[index];
  fetch("https://api.chucknorris.io/jokes/random?category=" + item)
    .then((response) => {
      return response.json();
    })
    .then((joke) => {
      showJoke(joke);

      //remove highlight from selected category
      if (typeof previousCategoryIndex !== "undefined") {
        let p = document.getElementById("category-" + previousCategoryIndex);
        p.style.color = "#818181";
      }

      // highlight the selected category
      globaCategoryIndex = index;
      let p = document.getElementById("category-" + index);
      p.style.color = "#f1f1f1";
      if (previousCategoryIndex !== index) {
        previousCategoryIndex = index;
      }
    });
}

function removeCategoryFromList(listOfCategories) {
  let explicitIndex = listOfCategories.indexOf("explicit");
  if (explicitIndex !== -1) {
    listOfCategories.splice(explicitIndex, 1);
  }
  let religionIndex = listOfCategories.indexOf("religion");
  if (religionIndex !== -1) {
    listOfCategories.splice(religionIndex, 1);
  }
  let politicalIndex = listOfCategories.indexOf("political");
  if (politicalIndex !== -1) {
    listOfCategories.splice(politicalIndex, 1);
  }
  return listOfCategories;
}

// Surprise Me Button
// declaring joke variable
let joke;
// api url
const apiUrl = "https://api.chucknorris.io/jokes/random";
// Fetch request
async function getRandom(url) {
  // Storing response
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  // Store data in form of JSON
  let joke = await response.json();

  // Call render function
  showJoke(joke);
}

// Display joke on screen
function showJoke(joke) {
  // Access value in joke object
  let jokeBox = document.querySelector(".jokes");
  let jokes = `<p class="jokeText">${joke.value}</p`;
  jokeBox.innerHTML = jokes;

  // showContentAfter1Second();
}
// animation
// function showContentAfter1Second(){
//   setTimeout(() => {
//     let jokeText =  document.querySelector(".jokes");
//  jokeText.style.top = 15;
// }, 1000);
// }

//Listener for the 'R' Key up event to show new joke in same category
document.addEventListener("keyup", (event) => {
  if (event.code === "KeyR") {
    if (typeof globaCategoryIndex !== "undefined") {
      getCategory(globaCategoryIndex);
    }
  }
});

// Input string query

const queryUrl = "https://api.chucknorris.io/jokes/search?query={query}";


async function search() {
  let index =0;
  let input = document.querySelector(".form-control").value;
  let results = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${input}`
  );
  let searchedJoke = await results.json();


  //  Writing to console
  console.log(searchedJoke);

  }
  
