
// Real-time cart functionality
document.addEventListener('DOMContentLoaded', function(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Add click listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function(){
            const item = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: this.dataset.price
            };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Update cart count badges
    function updateCartCount(){
        document.querySelectorAll('#cart-count').forEach(el => {
            el.textContent = cart.length;
        });
    }

    // Display cart items on cart page
    const cartItemsContainer = document.getElementById('cart-items');
    if(cartItemsContainer){
        if(cart.length === 0){
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map((item,i) => 
                `<div class="cart-item">
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                </div>`
            ).join('');
        }
    }
});
