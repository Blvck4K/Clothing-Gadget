document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    const cartIcon = document.getElementById('cart-icon');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    const paymentForm = document.getElementById('payment-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeConfirmation = document.getElementById('close-confirmation');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const orderNumber = document.getElementById('order-number');
    
    // Cart Array
    let cart = [];
    
    // Display Products
    function displayProducts(products) {
        productGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('data-category', product.category);
            
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-actions">
                        <div class="product-action-btn quick-view" data-id="${product.id}">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="product-action-btn wishlist" data-id="${product.id}">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <div class="price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add
                        </button>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to add to cart buttons
        const addToCartBtns = document.querySelectorAll('.add-to-cart');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', addToCart);
        });
        
        // Add event listeners to quick view buttons
        const quickViewBtns = document.querySelectorAll('.quick-view');
        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', quickView);
        });
        
        // Add event listeners to wishlist buttons
        const wishlistBtns = document.querySelectorAll('.wishlist');
        wishlistBtns.forEach(btn => {
            btn.addEventListener('click', addToWishlist);
        });
    }
    
    // Filter Products
    function filterProducts() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Category Cards Click
    function setupCategoryCards() {
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Find the corresponding filter button and click it
                filterBtns.forEach(btn => {
                    if (btn.getAttribute('data-filter') === category) {
                        btn.click();
                    }
                });
                
                // Scroll to products section
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    
    // Add to Cart
    function addToCart() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(item => item.id === productId);
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Update cart UI
        updateCart();
        
        // Show cart
        cartOverlay.classList.add('show');
    }
    
    // Quick View
    function quickView() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(item => item.id === productId);
        
        // In a real application, you would show a modal with product details
        console.log('Quick view:', product);
        alert(`${product.name}\n${product.description}\nPrice: $${product.price.toFixed(2)}`);
    }
    
    // Add to Wishlist
    function addToWishlist() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(item => item.id === productId);
        
        // In a real application, you would add to wishlist
        console.log('Added to wishlist:', product);
        
        // Toggle heart icon
        if (this.querySelector('i').classList.contains('far')) {
            this.querySelector('i').classList.remove('far');
            this.querySelector('i').classList.add('fas');
            alert(`${product.name} added to wishlist!`);
        } else {
            this.querySelector('i').classList.remove('fas');
            this.querySelector('i').classList.add('far');
            alert(`${product.name} removed from wishlist!`);
        }
    }
    
    // Update Cart
    function updateCart() {
        // Clear cart items
        cartItems.innerHTML = '';
        
        // If cart is empty
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            cartCount.textContent = '0';
            return;
        }
        
        // Add cart items
        let total = 0;
        let count = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            
            total += item.price * item.quantity;
            count += item.quantity;
        });
        
        // Update cart total and count
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartCount.textContent = count;
        
        // Add event listeners to cart item controls
        const decreaseBtns = document.querySelectorAll('.decrease');
        const increaseBtns = document.querySelectorAll('.increase');
        const removeItemBtns = document.querySelectorAll('.remove-item');
        
        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', decreaseQuantity);
        });
        
        increaseBtns.forEach(btn => {
            btn.addEventListener('click', increaseQuantity);
        });
        
        removeItemBtns.forEach(btn => {
            btn.addEventListener('click', removeItem);
        });
    }
    
    // Decrease Quantity
    function decreaseQuantity() {
        const productId = parseInt(this.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === productId);
        
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }
    
    // Increase Quantity
    function increaseQuantity() {
        const productId = parseInt(this.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === productId);
        
        cartItem.quantity++;
        
        updateCart();
    }
    
    // Remove Item
    function removeItem() {
        const productId = parseInt(this.getAttribute('data-id'));
        
        cart = cart.filter(item => item.id !== productId);
        
        updateCart();
    }
    
    // Cart Toggle
    function setupCart() {
        cartIcon.addEventListener('click', function() {
            cartOverlay.classList.add('show');
        });
        
        closeCart.addEventListener('click', function() {
            cartOverlay.classList.remove('show');
        });
        
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === cartOverlay) {
                cartOverlay.classList.remove('show');
            }
        });
    }
    
    // Checkout
    function setupCheckout() {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            cartOverlay.classList.remove('show');
            checkoutModal.classList.add('show');
        });
        
        closeCheckout.addEventListener('click', function() {
            checkoutModal.classList.remove('show');
        });
        
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove('show');
            }
        });
        
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would process the payment here
            
            // Generate random order number
            const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
            orderNumber.textContent = randomOrderNumber;
            
            // Show confirmation modal
            checkoutModal.classList.remove('show');
            confirmationModal.classList.add('show');
            
            // Clear cart
            cart = [];
            updateCart();
        });
        
        closeConfirmation.addEventListener('click', function() {
            confirmationModal.classList.remove('show');
        });
        
        confirmationModal.addEventListener('click', function(e) {
            if (e.target === confirmationModal) {
                confirmationModal.classList.remove('show');
            }
        });
        
        continueShoppingBtn.addEventListener('click', function() {
            confirmationModal.classList.remove('show');
        });
    }
    
    // Initialize
    function init() {
        displayProducts(products);
        filterProducts();
        setupCategoryCards();
        setupCart();
        setupCheckout();
        updateCart();
    }
    
    init();
});