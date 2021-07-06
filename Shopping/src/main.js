//Fetch the items from the Json file
//동적으로 파일 가져오기
function loadItems() {
  //fetch 구글링 해보기
  return fetch('./data/data.json')
  .then(response =>response.json())
  .then(json => json.items)

}
//Update the list with the given items
function displayItems(items){
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//Create HTML list item from th given data item
function createHTMLString(item){
  return `
  <li class="item">
      <img src= "${item.image}" alt="${item.type}" class="item__thumbnail"/>
      <span class="item_description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

//main
loadItems().then(items => {
 // console.log(items)
  displayItems(items)
  // setEventListeners(items)
}).catch(console.log)