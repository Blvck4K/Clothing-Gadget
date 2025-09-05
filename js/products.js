// Product data
const products = [
    // Shirts
    {
        id: 1,
        name: "Classic Oxford Shirt",
        category: "shirts",
        price: 49.99,
        image: "https://www.realhoxton.com/wp-content/uploads/2023/03/img_7257.jpeg",
        description: "A timeless Oxford shirt made from premium cotton. Perfect for both casual and formal occasions."
    },
    {
        id: 2,
        name: "Slim Fit Button-Down",
        category: "shirts",
        price: 39.99,
        image: "https://m.media-amazon.com/images/I/511N98Qk7HL._UY1000_.jpg",
        description: "Modern slim fit button-down shirt with a tailored silhouette for a sleek appearance."
    },
    {
        id: 3,
        name: "Casual Linen Shirt",
        category: "shirts",
        price: 45.99,
        image: "https://cdn.shopify.com/s/files/1/0579/5771/1959/files/blue-white-variegated-stripe-cotton-linen-classic-fit-button-down-casual-shirt-5013blu_model-image-2.jpg?v=1748940972",
        description: "Breathable linen shirt perfect for warm weather and casual outings."
    },
    {
        id: 4,
        name: "Flannel Check Shirt",
        category: "shirts",
        price: 42.99,
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/0981142/1.jpg?5425",
        description: "Soft flannel shirt with classic check pattern, perfect for layering in cooler weather."
    },
    
    // Pants
    {
        id: 5,
        name: "Classic Chino Pants",
        category: "pants",
        price: 59.99,
        image: "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_22_03_01.jpg?250710",
        description: "Versatile chino pants that transition seamlessly from casual to business casual settings."
    },
    {
        id: 6,
        name: "Slim Fit Jeans",
        category: "pants",
        price: 64.99,
        image: "https://www.legendlondon.co/cdn/shop/files/legend-london-jeans-slim-2-0-slim-fit-jeans-2-0-light-blue-33701346607301.jpg?v=1702639210",
        description: "Modern slim fit jeans with slight stretch for comfort and mobility."
    },
    {
        id: 7,
        name: "Tailored Dress Pants",
        category: "pants",
        price: 79.99,
        image: "https://images.tailorstore.com/YToxOntzOjU6IndpZHRoIjtpOjU3Njt9/images%252Fcatalog%252F4795-medley-black-trousers.jpg",
        description: "Elegant dress pants with perfect drape and fit for formal occasions."
    },
    {
        id: 8,
        name: "Casual Joggers",
        category: "pants",
        price: 49.99,
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/374098/1.jpg?0063",
        description: "Comfortable joggers with modern tapered fit, perfect for casual wear and light activities."
    },
    
    // Suits
    {
        id: 9,
        name: "Classic Navy Suit",
        category: "suits",
        price: 299.99,
        image: "https://www.eadenmyles.com/cdn/shop/products/AFD_1767_1.jpg?v=1632201902",
        description: "Timeless navy suit crafted from premium wool blend, perfect for business and formal events."
    },
    {
        id: 10,
        name: "Modern Charcoal Suit",
        category: "suits",
        price: 329.99,
        image: "https://cdn.shopify.com/s/files/1/0550/5767/8581/files/charcoal-grey-wedding-suit.jpg?v=1687124480",
        description: "Contemporary charcoal suit with slim fit design for a modern silhouette."
    },
    {
        id: 11,
        name: "Light Gray Summer Suit",
        category: "suits",
        price: 279.99,
        image: "https://www.ties-necktie.com/img/cms/blog/uploads/1b89cfe944e87411613d1decfc84ac35.jpg",
        description: "Lightweight summer suit in light gray, perfect for warm weather formal occasions."
    },
    {
        id: 12,
        name: "Black Tuxedo",
        category: "suits",
        price: 399.99,
        image: "https://www.hollomen.com/cdn/shop/products/august-black-tuxedo-868841.jpg?v=1710965192",
        description: "Classic black tuxedo for special occasions and formal events."
    },
    
    // Accessories
    {
        id: 13,
        name: "Leather Belt",
        category: "accessories",
        price: 34.99,
        image: "https://cartnear.s3.us-east-2.amazonaws.com/ng/6303b54ac420b8b19bf112a7ef4aaae4.jpg",
        description: "Premium leather belt with classic buckle, available in black and brown."
    },
    {
        id: 14,
        name: "Silk Tie",
        category: "accessories",
        price: 29.99,
        image: "https://a.storyblok.com/f/110856/1800x1048/7dffb2349b/silk-ties-category.jpg",
        description: "Elegant silk tie in various patterns and colors to complement any formal outfit."
    },
    {
        id: 15,
        name: "Leather Wallet",
        category: "accessories",
        price: 39.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCi0n3_x6fOEfirf6cTeUUAAvDjapJLcjncA&s",
        description: "Genuine leather wallet with multiple card slots and compartments."
    },
    {
        id: 16,
        name: "Classic Watch",
        category: "accessories",
        price: 129.99,
        image: "https://sylvi.in/cdn/shop/collections/analog_watch_For_Men.jpg?v=1715685842",
        description: "Timeless watch with leather strap and minimalist design, suitable for any occasion."
    }
];