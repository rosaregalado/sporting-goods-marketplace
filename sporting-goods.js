import inventory from '../inventory.js';
const displaySaleItems = document.querySelector('#items');


//iterate through inventory
for (let i = 0; i < inventory.length; i++) {
  //create new container
  const container = document.createElement('container');
  container.className = 'item';

  //create img element
  const img = document.createElement('img');
  img.src = inventory[i].image;
  img.width = 300;
  img.height = 300;
  container.appendChild(img);
  displaySaleItems.appendChild(container);

  //create description element
  const description = document.createElement('P');
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
  const button = document.createElement('button');
  button.setAttribute("id", "contact-button");
  button.id = inventory[i].name;
  button.innerHTML = "Contact Seller";
  container.appendChild(button);
  //style contact-seller button
  
}

