
//Create a global list of categories
var categories;

//set categories on load
fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => {
    return response.json();
  })
  .then(categories => {
    this.categories = categories;
    loadCategories(categories);
  })

//Dynamically load category side bar with api data
function loadCategories(listOfCategories) {
  let items = document.getElementById("mySidebar");

  //remove dev category
  listOfCategories = removeDevCategoryFromList(listOfCategories);

  let index = 0;
  //loop through list of categories
  listOfCategories.forEach(category => {

    //create the element and append to sideBar
    let p = document.createElement("p");
    p.innerHTML = category;
    p.id = "category-" + index;
    p.setAttribute("onclick", "getCategory(" + index + ")");
    items.append(p)
    index++;
  });
}

var globaCategoryIndex;
var previousCategoryIndex;
function getCategory(index) {
  //Get the select <p> element base on the global categories and index
  let item = categories[index];
  fetch('https://api.chucknorris.io/jokes/random?category=' + item)
    .then(response => {
      return response.json();
    })
    .then(joke => {
      //writing to console for now until future functionailty is created
      showJoke(joke);
      
      //remove highlight from selected category
      if(typeof previousCategoryIndex !== 'undefined'){
        let p = document.getElementById("category-" + previousCategoryIndex);
      p.style.color = "#818181";
      }
  
      // highlight the selected category
      globaCategoryIndex = index;
      let p = document.getElementById("category-" + index);
      p.style.color = "#f1f1f1";
      if(previousCategoryIndex !== index){
        previousCategoryIndex = index;
      }
    })
    
}

function removeDevCategoryFromList(listOfCategories) {
  let itemToRemove = listOfCategories.indexOf("dev");
  if (itemToRemove !== -1) {
    listOfCategories.splice(itemToRemove, 1);
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
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  // Store data in form of JSON
  let joke = await response.json();
  // Call render function
  showJoke(joke);
}

// Display joke on screen
function showJoke(joke) {
  // Access value in joke object
  let jokeBox = `<div class="jokes">${joke.value}</div>`;
  document.querySelector('.jokes').innerHTML = jokeBox;
}

//Listener for the 'R' Key up event to show new joke in same category
document.addEventListener('keyup', event => {
  if (event.code === 'KeyR') {
    if(typeof globaCategoryIndex !== 'undefined'){
      getCategory(globaCategoryIndex);
    }
  }
})


