let productData = [];
let cart = [];
let avgPrice = 0;
let totalPrice = 0;
document.addEventListener("DOMContentLoaded", async function fetchProducts() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    productData = data;
    renderProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

function renderProducts(data) {
  const productContainer = document.getElementById("product-cards");
  productContainer.innerHTML = ""; 

  if (cart.length > 100) {
    console.log("Cart Limit Exceeded!");
    return;
  }
  if (cart.length === 0) {
    const cartContainer = document.getElementById("cart-item");
    cartContainer.innerHTML = "Your Cart is Empty!";
  }
  data.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <div>
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      </div>
      
    <button onclick="addToCart(${product.id})" class="add-btn">
    <i class="fas fa-cart-plus add-to-cart-icon"></i> 
      </button>
    </div>
  `;
  return productCard;
}

function addToCart(productId) {
  const product = productData.find((item) => item.id === productId);
  if (!product) {
    console.log("Product not found");
    return;
  }
  const exisitingProduct = cart.find((item) => item.id === productId);
  if (exisitingProduct) {
    exisitingProduct.quantity++;
    renderCart();
  } else {
    cart.push({ ...product, quantity: 1 });
    renderCart();
  }
}
function renderCart() {
  const productContainer = document.getElementById("cart-item");
  productContainer.innerHTML = "";
  if (cart.length === 0) {
    const cartContainer = document.getElementById("cart-item");
    cartContainer.innerHTML = "Your Cart is Empty!";
  }
  cart.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
  function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <div>
              <h3>${product.name}</h3>
              <p>Price: ${product.price}</p>
              ${`<p>Quantity: ${product.quantity}</p>`}
            </div>
            <button onclick="${`removeFromCart(${product.id})`}" class="remove-btn"> <i class="fas fa-trash remove-from-cart-icon"></i></button>
          </div>
        `;
    totalPrice += product.price;
    avgPrice = totalPrice / cart.length;
    //   Cart Summary Section
    const avgPriceDiv = document.getElementById("avg-price-div");
    avgPriceDiv.innerHTML = `<div class="price">
    <p>Average Price:</p>
    <p>$ ${avgPrice.toFixed(2)}</p> </div>`;
    const totalPriceDiv = document.getElementById("total-div");
    totalPriceDiv.innerHTML = `<div class="price">
    <p>Total Price:</p>
    <p>$ ${totalPrice.toFixed(2)}</p> </div>`;

    return productCard;
  }
}

function removeFromCart(productId) {
  const itemToBeRemoved = cart.filter((product) => {
    if (product.id === productId) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        cart.pop(product);
      }
    }
  });

  renderCart();
}

function clearCart() {
  cart.length = 0;
  renderCart();
}

function sortProducts(value) {
  if (value === "name") {
    // Sort cart items by name
    cart.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === "price") {
    // Sort cart items by price
    cart.sort((a, b) => a.price - b.price);
  }
  renderCart();
}

function filterProducts(event) {
  event.preventDefault(); 
  var priceInput = document.getElementById("priceInput").value;
  cart = cart.filter((product) => {
    return product.price >= priceInput;
  });

  renderCart();
}
