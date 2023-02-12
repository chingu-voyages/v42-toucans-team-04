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
  if(joke.categories === "explicit"){
    getRandom(url)
  }
  // Call render function
  showJoke(joke);
}

// Display joke on screen
function showJoke(joke) {
  // Access value in joke object
  let jokeBox = document.querySelector(".jokes");
  let jokes = `<p class="jokeText">${joke.value}</p`;
  jokeBox.innerHTML = jokes;


}


//Listener for the 'R' Key up event to show new joke in same category
document.addEventListener("keyup", (event) => {
  if (event.code === "KeyR") {
    if (typeof globaCategoryIndex !== "undefined") {
      getCategory(globaCategoryIndex);
    }
  }
});
//Listener for the 'R' Key up event to show new random joke 
document.addEventListener("keyup", (event) => {
  let jokeBox = document.querySelector(".jokes");
  if (event.code === "KeyR") {
    if( jokeBox.innerHTML != ''){
      getRandom();
    }
  }
});

// Input string query

const queryUrl = "https://api.chucknorris.io/jokes/search?query={query}";


async function search() {
  let input = document.getElementById("#searchInput").value;
  let results = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${input}`
  );
  let response = await results.json();
  let isCleanJoke = false;
  let index = Math.floor(Math.random() * response.result.length);
  while(isCleanJoke === false){
    if(response.result[index].categories !== 'explicit'){
      isCleanJoke = true;
    }
    showJoke(response.result[index]);
  }
}
  
