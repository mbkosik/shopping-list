
const newProductInput = document.querySelector(".new-product");
const searchInput = document.querySelector(".search");
const addBtn = document.querySelector(".add-product");
const shoppingList = document.querySelector("ul.shopping-list");

// DODAWANIE ELEMENTÓW DO LISTY

const addNewProduct = () => {
    const newProduct = document.createElement("li");
    shoppingList.appendChild(newProduct);
    newProduct.innerHTML = `${newProductInput.value} <button class="remove">Usuń</button>`; 
    newProduct.querySelector("button.remove").addEventListener("click", removeProduct);
    newProductInput.value = "";
}

addBtn.addEventListener("click", addNewProduct);

// USUWANIE ELEMENTÓW

const removeProduct = (e) => {
    e.target.parentNode.remove();
}

// // FILTROWANIE

// let products = document.querySelectorAll("li");

// const searchProducts = (e) => {
//     const searchText = e.target.value.toLowerCase(); 
//     let elements = [...products];
//     elements = elements.filter(element => element.textContent.toLowerCase().includes(searchText));
//     shoppingList.textContent = "";
//     elements.forEach(element => shoppingList.appendChild(element)); 

// }

// searchInput.addEventListener("input", searchProducts);




