// Product data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 49.99, image: 'product3.jpg' }
];

let cart = [];

// Display products on page
function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Initialize
document.addEventListener('DOMContentLoaded', displayProducts);