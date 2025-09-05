// Product data
const products = [
    // Shirts
    {
        id: 1,
        name: "Blouse",
        category: "shirts",
        price: 49.99,
        image: "https://images.squarespace-cdn.com/content/v1/5cad83070cf57dc310944e6c/1699535276519-J5U3N0C9K078MWCSAEX9/Amalfi_Blouse-15.jpg?format=1500w",
        description: "A timeless Oxford shirt made from premium cotton. Perfect for both casual and formal occasions."
    },
    {
        id: 2,
        name: "Wrap Top",
        category: "shirts",
        price: 39.99,
        image: "https://www.lulus.com/images/product/xlarge/7117341_1453316.jpg?w=375&hdpi=1",
        description: "Modern slim fit button-down shirt with a tailored silhouette for a sleek appearance."
    },
    {
        id: 3,
        name: "Tank Top",
        category: "shirts",
        price: 45.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVQKSEFJJBIz_SY5m-f8-sF5sMNSgOEw25g&s",
        description: "Breathable linen shirt perfect for warm weather and casual outings."
    },
    {
        id: 4,
        name: "Off-the-Shoulder (Orchid/ Bardot) Top",
        category: "shirts",
        price: 42.99,
        image: "https://www.usa.bardot.com/dw/image/v2/BCGZ_PRD/on/demandware.static/-/Sites-bardot-master-catalog/default/dw9aa0c296/images/hi-res/bardot/59742TB/59742TB_110601_TF_02.jpg?sw=900",
        description: "Soft flannel shirt with classic check pattern, perfect for layering in cooler weather."
    },
    
    // Pants
    {
        id: 5,
        name: "Pencil skirt",
        category: "skirts",
        price: 59.99,
        image: "https://cartnear.s3.us-east-2.amazonaws.com/ng/4952f7ce263aa8550f6df32c69c407d2.jpg",
        description: "Versatile chino pants that transition seamlessly from casual to business casual settings."
    },
    {
        id: 6,
        name: "A-line skirt",
        category: "skirts",
        price: 64.99,
        image: "https://m.media-amazon.com/images/I/610ovjYEPqL._AC_SL1500_.jpg",
        description: "Modern slim fit jeans with slight stretch for comfort and mobility."
    },
    {
        id: 7,
        name: "Mini skirt",
        category: "skirts",
        price: 79.99,
        image: "https://www.motelrocks.com/cdn/shop/products/TIONA-TOP-ADRENALIN-RED-STRIPE-_-CASINI-SKIRT-TAILORING-BLACK-_7.jpg?crop=center&height=2428&v=1678117471&width=1920",
        description: "Elegant dress pants with perfect drape and fit for formal occasions."
    },
    {
        id: 8,
        name: "Culottes",
        category: "skirts",
        price: 49.99,
        image: "https://www.icebreaker.com/dw/image/v2/AAFX_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3871f010/0A56OP/0A56OP001_1.jpg?sw=1290&sh=1693&sm=fit",
        description: "Comfortable joggers with modern tapered fit, perfect for casual wear and light activities."
    },
    
    // Suits
    {
        id: 9,
        name: "Ballgown",
        category: "gowns",
        price: 299.99,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ball_gown_MET_DP348337.jpg/1200px-Ball_gown_MET_DP348337.jpg",
        description: "Timeless navy suit crafted from premium wool blend, perfect for business and formal events."
    },
    {
        id: 10,
        name: "A-Line Gown",
        category: "gowns",
        price: 329.99,
        image: "https://www.pronovias.com/media/catalog/product/s/k/skies_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=747&width=560&canvas=560:747",
        description: "Contemporary charcoal suit with slim fit design for a modern silhouette."
    },
    {
        id: 11,
        name: "Empire Waist Gown",
        category: "gowns",
        price: 279.99,
        image: "https://i.pinimg.com/736x/7f/04/c8/7f04c8a11c0d4b247965cdb8d24fad2d.jpg",
        description: "Lightweight summer suit in light gray, perfect for warm weather formal occasions."
    },
    {
        id: 12,
        name: "Princess Gown",
        category: "gowns",
        price: 399.99,
        image: "https://i.pinimg.com/736x/9f/1e/62/9f1e625305167589f1a20a4ee7d02f21.jpg",
        description: "Classic black tuxedo for special occasions and formal events."
    },
    
    // Accessories
    {
        id: 13,
        name: "Necklaces",
        category: "accessories",
        price: 34.99,
        image: "https://www.sojoee.com/wp-content/uploads/2025/04/NKL-244_1-450x450.jpg",
        description: "Premium leather belt with classic buckle, available in black and brown."
    },
    {
        id: 14,
        name: "Handbags",
        category: "accessories",
        price: 29.99,
        image: "https://image.made-in-china.com/202f0j00qCWYgnMkZioG/Wholesale-Handbag-Small-Shoulder-Bag-Purses-Ladies-Luxury-Bags-Women-Handbags-for-Lady-Wholesales-Distributor.webp",
        description: "Elegant silk tie in various patterns and colors to complement any formal outfit."
    },
    {
        id: 15,
        name: "Hair Accessories",
        category: "accessories",
        price: 39.99,
        image: "https://curlee.me/wp-content/uploads/2020/12/10-natural-hair-accessories.jpg",
        description: "Genuine leather wallet with multiple card slots and compartments."
    },
    {
        id: 16,
        name: "Sunglasses",
        category: "accessories",
        price: 129.99,
        image: "https://www.carfia.com/cdn/shop/articles/What_s_the_most_popular_sunglasses_for_women_in_2020-505650.jpg?v=1627167093",
        description: "Timeless watch with leather strap and minimalist design, suitable for any occasion."
    }
];