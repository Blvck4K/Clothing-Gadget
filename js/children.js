// Product data
const products = [
    // Shirts
    {
        id: 1,
        name: "T-shirt:",
        category: "male child",
        price: 49.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVXU1_kR5EwrxsHzFMQ1d3fdlkCVzYWfknQ&s",
        description: "A timeless Oxford shirt made from premium cotton. Perfect for both casual and formal occasions."
    },
    {
        id: 2,
        name: "Hoodie",
        category: "male child",
        price: 39.99,
        image: "https://littlemamashirtshop.com/cdn/shop/products/camoH_f673afee-41b4-4ce9-8bbe-8c9a3bf48c41.jpg?crop=center&height=3000&v=1752088615&width=3000",
        description: "Modern slim fit button-down shirt with a tailored silhouette for a sleek appearance."
    },
    {
        id: 3,
        name: "Shorts",
        category: "male child",
        price: 45.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOnaVSACHPoIPkZZ5QqCq0kAJQy_fnruvKw&s",
        description: "Breathable linen shirt perfect for warm weather and casual outings."
    },
    {
        id: 4,
        name: "Jeans",
        category: "male child",
        price: 42.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1P7adBQ6Q7fze-y9Nb2FGXI-aZooAVsGyw&s",
        description: "Soft flannel shirt with classic check pattern, perfect for layering in cooler weather."
    },
    
    // Pants
    {
        id: 5,
        name: "T-shirt",
        category: "female child",
        price: 59.99,
        image: "https://n.nordstrommedia.com/it/83c38d53-f871-4cbe-b57b-726a6dbf3902.jpeg?h=368&w=240&dpr=2",
        description: "Versatile chino pants that transition seamlessly from casual to business casual settings."
    },
    {
        id: 6,
        name: "Dress",
        category: "female child",
        price: 64.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjOdksoRF1n3rv1j__0L3gQAAPbSf9dX3nQ&s",
        description: "Modern slim fit jeans with slight stretch for comfort and mobility."
    },
    {
        id: 7,
        name: "Leggings",
        category: "female child",
        price: 79.99,
        image: "https://image.made-in-china.com/43f34j00AEGknzjRHDuc/Factory-Wholesale-New-Cute-Casual-Girls-Motion-Leggings-with-Ruffle-Design-at-Back-Custom-Performance-Sports-Tights-Soft-Stretchy-Running-Yoga-Pants-for-Kids.jpg",
        description: "Elegant dress pants with perfect drape and fit for formal occasions."
    },
    {
        id: 8,
        name: "Skirt",
        category: "female child",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/713y-+DFoXL._AC_SL1200_.jpg",
        description: "Comfortable joggers with modern tapered fit, perfect for casual wear and light activities."
    },
    
    // Suits
    {
        id: 9,
        name: "T-shirt:",
        category: "unisex",
        price: 299.99,
        image: "https://contents.mediadecathlon.com/p2722643/k$9bc97f3df40f2524997cd8a1d1ef00a9/kids-unisex-cotton-t-shirt-red-domyos-8772496.jpg?f=1920x0&format=auto",
        description: "Timeless navy suit crafted from premium wool blend, perfect for business and formal events."
    },
    {
        id: 10,
        name: "Hoodie / Sweatshirt",
        category: "unisex",
        price: 329.99,
        image: "https://contents.mediadecathlon.com/p2450911/k$620c8d047587972f38041180c1140fb9/kids-warm-unisex-hoodie-500-yellow-print.jpg",
        description: "Contemporary charcoal suit with slim fit design for a modern silhouette."
    },
    {
        id: 11,
        name: "Joggers / Sweatpants",
        category: "unisex",
        price: 279.99,
        image: "https://superbottoms.com/cdn/shop/files/preview_images/befe94f3b3ff41b88bd2133fa809d690.thumbnail.0000000000.jpg?v=1747135855",
        description: "Lightweight summer suit in light gray, perfect for warm weather formal occasions."
    },
    {
        id: 12,
        name: "Overalls / Dungarees",
        category: "unisex",
        price: 399.99,
        image: "https://i.pinimg.com/originals/40/8f/ae/408fae925119734bcc2782bbecf98ffc.jpg",
        description: "Classic black tuxedo for special occasions and formal events."
    },
    
    // Accessories
    {
        id: 13,
        name: "Hats and caps",
        category: "accessories",
        price: 34.99,
        image: "https://www.countyschoolwear.co.uk/sites/default/files/sun_hat_childrens_royal_blue.jpg",
        description: "Premium leather belt with classic buckle, available in black and brown."
    },
    {
        id: 14,
        name: "Belts and suspenders:",
        category: "accessories",
        price: 29.99,
        image: "https://image.made-in-china.com/202f0j00KfekMLBYMZbw/Wholesale-Custom-2-5-Cm-X-65-Solid-Color-Children-Bow-Tie-Elastic-Suspender-Braces-Belt-Baby-Boys-Girls-Kids-Suspenders-Set.webp",
        description: "Elegant silk tie in various patterns and colors to complement any formal outfit."
    },
    {
        id: 15,
        name: "Socks and tights",
        category: "accessories",
        price: 39.99,
        image: "https://i5.walmartimages.com/seo/Girls-Tights-Striped-Tights-Children-Panty-Hose-Length-69-72cm-Accessory-Witch-Carnival-Theme-Party-Kid-Girl-Socks-Boy-Socks-Size-12-Teen-Boys-Socks_5431943a-a1c0-48c5-8763-3d9cae7d7f8d.d55677cd8428dffba7ef486b531c47f8.jpeg",
        description: "Genuine leather wallet with multiple card slots and compartments."
    },
    {
        id: 16,
        name: "Backpacks and lunch bags",
        category: "accessories",
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/71WV72P4wGL._UY1000_.jpg",
        description: "Timeless watch with leather strap and minimalist design, suitable for any occasion."
    }
];