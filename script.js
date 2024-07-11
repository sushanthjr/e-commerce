// Initialize cart items array
let cartItems = [];

// Function to add a product to the cart
function addToCart(productId) {
    // Example function to add products to the cart
    // In a real scenario, you would have backend interaction or storage mechanism
    switch(productId) {
        case 1:
            cartItems.push({ id: 1, name: 'Product 1', price: 39.00 });
            break;
        case 2:
            cartItems.push({ id: 2, name: 'Product 2', price: 45.00 });
            break;
        case 3:
            cartItems.push({ id: 3, name: 'Product 3', price: 33.00 });
            break;
        case 4:
            cartItems.push({ id: 4, name: 'Product 4', price:  49.00 });
            break;
        case 5:
            cartItems.push({ id: 5, name: 'Product 5', price:  28.00});
            break;
        case 6:
            cartItems.push({ id: 6, name: 'Product 6', price:  44.00 });
            break;
        default:
            break;
    }

    // Update the cart icon in the header
    updateCartIcon();

    // Display the cart items
    displayCart();
}

// Function to update the cart icon in the header
function updateCartIcon() {
    const cartBtn = document.querySelector('#cart-btn');
    if (cartItems.length > 0) {
        cartBtn.textContent = `Cart (${cartItems.length})`;
    } else {
        cartBtn.textContent = 'Cart';
    }
}

// Function to display items in the shopping cart
function displayCart() {
    const cartContainer = document.querySelector('#cart-items');
    const cartTotalValue = document.querySelector('#cart-total-value');

    // Clear existing content
    cartContainer.innerHTML = '';

    // Generate HTML for each cart item
    cartItems.forEach(item => {
        const cartItem = `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
        `;
        cartContainer.innerHTML += cartItem;
    });

    // Calculate and display total cart value
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    cartTotalValue.textContent = `$${total.toFixed(2)}`;

    // Show the cart section
    const cartSection = document.querySelector('#cart');
    cartSection.classList.remove('hidden');
}

// Function to simulate checkout (dummy function)
function checkout() {
    alert('Checkout feature is not implemented in this demo.');
}
