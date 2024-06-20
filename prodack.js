document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            name: "Facial Cleanser",
            description: "A gentle facial cleanser for daily use.",
            image: "https://images.unsplash.com/photo-1595085556463-e4a48706ff6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 100.000",
            rating: 4.5
        },
        {
            name: "Moisturizing Cream",
            description: "Hydrates and nourishes your skin.",
            image: "https://images.unsplash.com/photo-1575658106612-d5cf0c5f0b43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 150.000",
            rating: 4.7
        },
        {
            name: "Sunscreen SPF 50",
            description: "Protects your skin from harmful UV rays.",
            image: "https://images.unsplash.com/photo-1593209987485-7e4c490b79f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 120.000",
            rating: 4.8
        },
        {
            name: "Toner",
            description: "Balances your skin's pH levels.",
            image: "https://images.unsplash.com/photo-1615337768286-797f17a0463c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 90.000",
            rating: 4.4
        },
        {
            name: "Serum Vitamin C",
            description: "Brightens and evens out skin tone.",
            image: "https://images.unsplash.com/photo-1592084442527-1b32fa9e62c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 200.000",
            rating: 4.9
        },
        {
            name: "Eye Cream",
            description: "Reduces dark circles and puffiness.",
            image: "https://images.unsplash.com/photo-1595579145268-94e7c121f1b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 130.000",
            rating: 4.6
        }


         {
            name: "Eye Cream",
            description: "Reduces dark circles and puffiness.",
            image: "https://images.unsplash.com/photo-1595579145268-94e7c121f1b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 130.000",
            rating: 4.6
        }


         {
            name: "Eye Cream",
            description: "Reduces dark circles and puffiness.",
            image: "https://images.unsplash.com/photo-1595579145268-94e7c121f1b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 130.000",
            rating: 4.6
        }


         {
            name: "Eye Cream",
            description: "Reduces dark circles and puffiness.",
            image: "https://images.unsplash.com/photo-1595579145268-94e7c121f1b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: "Rp 130.000",
            rating: 4.6
        }
    ];

    const catalogContainer = document.querySelector('.catalog');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="rating">Rating: ${product.rating} / 5</p>
        `;

        catalogContainer.appendChild(productElement);
    });
});
