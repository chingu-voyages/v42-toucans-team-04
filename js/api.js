
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
function loadCategories(listOfCategories){
  let items = document.getElementById("mySidebar");

  //remove dev category
  listOfCategories = removeDevCategoryFromList(listOfCategories);

    let index = 0;
    //loop through list of categories
  listOfCategories.forEach(category => {

    //create the element and append to sideBar
    let p = document.createElement("p");
    p.innerHTML = category;
    p.setAttribute("onclick", "getCategory("+index+")");
    items.append(p)
    index++;
  });
}

function getCategory(index){
  //Get the select <p> element base on the global categories and index
  let item = categories[index];
  fetch('https://api.chucknorris.io/jokes/random?category='+ item )
  .then(response => {
    return response.json();
  })
  .then(joke => {
    //writing to console for now until future functionailty is created
    console.log(joke)
  })
}

function removeDevCategoryFromList(listOfCategories){
  let itemToRemove = listOfCategories.indexOf("dev");
  if (itemToRemove !== -1) {
    listOfCategories.splice(itemToRemove, 1);
  }
  return listOfCategories;
}