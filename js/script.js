// script.js – Real-time cart update functionality

// Cart state
const cart = {};

// Add to cart function
function addToCart(itemId, itemName) {
  if (cart[itemId]) {
    cart[itemId].quantity += 1;
  } else {
    cart[itemId] = {
      name: itemName,
      quantity: 1,
    };
  }
  updateCartDisplay();
}

// Update cart display in real-time
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  cartContainer.innerHTML = '';

  let totalItems = 0;
  for (const itemId in cart) {
    const item = cart[itemId];
    totalItems += item.quantity;

    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - Quantity: ${item.quantity}`;
    cartContainer.appendChild(itemDiv);
  }

  cartCount.textContent = totalItems;
}

// Attach listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.itemId;
      const itemName = button.dataset.itemName;
      addToCart(itemId, itemName);
    });
  });
});
