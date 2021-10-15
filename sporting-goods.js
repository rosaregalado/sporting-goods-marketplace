import inventory from './inventory.js';
const displaySaleItems = document.querySelector('#items');

const userSearch = document.getElementById('user-search');

const renderInventory = (filter) => {
  // clear displaySaleItems before re-rendering inventory
  displaySaleItems.innerHTML = "";
  //iterate through inventory
  for (let i = 0; i < inventory.length; i++) {
    //create reference to keywords
    const keywords = inventory[i].keywords;
    const keywordsContainingSubstring = keywords.filter(keyword => keyword.indexOf(filter) > -1);
      if (filter === "" || keywordsContainingSubstring.length > 0) {
        
        //create container for each item
        const container = document.createElement('container');
        displaySaleItems.appendChild(container);
        container.className = 'item';
    
        //create img element
        const img = document.createElement('img');
        img.src = inventory[i].image;
        img.width = 300;
        img.height = 300;
        container.appendChild(img);
        
        //create description element
        const description = document.createElement('p');
        description.innerText = inventory[i].description;
        container.appendChild(description);
        //style description element
        description.style.fontSize = "20px";
      
        //create price element
        const price = document.createElement('price');
        price.innerText = inventory[i].price;
        container.appendChild(price);
        //style price element
        price.style.color = "red";
        price.style.fontSize = "30px";
        
        //create contact-seller button
        const contact = document.createElement("button");
        contact.id = inventory[i].name;
        contact.innerHTML = "Contact Seller";
        container.appendChild(contact);
      }    

  }
}

renderInventory("");

//event listener for contact-seller button
console.log(document.querySelector("button"));

document.addEventListener("DOMContentLoaded", function(e){
  document.querySelectorAll("button").forEach((button) => {
    //console.log(button);
    button.addEventListener('click', event => {
      console.log(event, event.target);
      const contactPopup = document.querySelector('.contact-popup')
      let dimScreen = document.createElement("div");

      dimScreen.style.width =  window.innerWidth + 'px';
      dimScreen.style.height = window.innerHeight + 'px';
      dimScreen.className = 'dimScreen';

      
      dimScreen.onclick = function() {
        document.body.removeChild(this);   
        contactPopup.style.visibility = 'hidden';
      }

      document.body.appendChild(dimScreen);

      contactPopup.style.visibility = 'visible';
      
      return false;
    });
  })
  
});





userSearch.onkeyup = function() {
  const filter = userSearch.value.toLowerCase();
  console.log('searching: ', filter);
  renderInventory(filter);
}




