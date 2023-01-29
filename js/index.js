function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

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

  //remove category
  listOfCategories = removeCategoryFromList(listOfCategories);

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
function removeCategoryFromList(listOfCategories){
  let itemToRemove = listOfCategories.indexOf("religion")
  if (itemToRemove !== -1) {
    listOfCategories.splice(itemToRemove, 3);
  }
  return listOfCategories;
}
function removeCategoryFromList(listOfCategories){
  let itemToRemove = listOfCategories.indexOf("political")
  if (itemToRemove !== -1) {
    listOfCategories.splice(itemToRemove, 3);
  }
  return listOfCategories;
}
function removeCategoryFromList(listOfCategories){
  let itemToRemove = listOfCategories.indexOf("explicit")
  if (itemToRemove !== -1) {
    listOfCategories.splice(itemToRemove, 3);
  }
  return listOfCategories;
}