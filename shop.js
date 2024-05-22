document.addEventListener("DOMContentLoaded", () => {
    const womenProducts = [
        { id: 1, name: "calvin klein", description: "Blooming Jelly Women's Dressy Casual Tops Business Work Blouses White Button Down Shirts Cap Sleeve V Neck Tshirt", imageUrl: "img/img-1.jpg" },
        { id: 2, name: "Yousify Summer Sweaters", description: "Neck Cap Sleeve Tops Sleeveless Spring Clothes Sweater Vest ", imageUrl: "img/wimg1.jpg" },
        { id: 3, name: "GRECERELLE", description: "Women's Summer Maxi Dress Casual Short Sleeve Crewneck Swing Dress", imageUrl: "img/wimg8.jpg" },
        { id: 4, name: "BELONGSCI", description: "Sleeveless Racerback Flared Swing A-Line Waist Hollow Out Summer Short Dress", imageUrl: "img/wimg9.jpg" },
        { id: 5, name: "Hoodies", description: "Zip Up Hoodies Cropped Sweatshirts Fall", imageUrl: "img/wimg12.jpg" },
        { id: 6, name: "TICTICMIMI ", description: "Casual Long Sleeve Color Block/Solid Tops Crewneck Sweatshirts", imageUrl: "img/wimg16.jpg" },
        { id: 7, name: "Baggy Jeans", description: "Women High Waisted Baggy Jeans", imageUrl: "img/wimg21.jpg" },
        { id: 8, name: "Dokotoo", description: "Casual Loose Overalls Jumpsuits", imageUrl: "img/wimg25.jpg" },
    ];

    const menProducts = [
        { id: 9, name: "DELCARINO", description: "Casual Short-Sleeved Shirt Vertical Stripe", imageUrl: "img/mb1.jpg" },
        { id: 10, name: "COOFANDY", description: "Men's Linen Shirts Short Sleeve Casual Shirts Button Down", imageUrl: "img/ma1.jpg" },
        { id: 11, name: "Crewneck Sweatshirt", description: "Soild Color Geometric Texture Long Sleeve Casual Pullover", imageUrl: "img/mc1.jpg" },
        { id: 12, name: "Puffer Jacket", description: "Hooded Lightweight Water Resistant Winter Jackets", imageUrl: "img/md1.jpg" },
        { id: 13, name: "Henley Shirts", description: "Long Sleeve Hippie Beach T Shirts", imageUrl: "img/me1.jpg" },
        { id: 14, name: "Drawstring Linen Pants", description: "Mens Drawstring Linen Pants Relaxed Fit Elastic Waist", imageUrl: "img/mf2.jpg" },
        { id: 15, name: "Columbia", description: "Men's Jacquard Knit Lounge Sets Short Sleeve T-Shirts and Shorts Matching Set Loungewear Sweatsuit", imageUrl: "img/mg1.jpg" },
        { id: 16, name: "TNITAGUT", description: "Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts", imageUrl: "img/mh1.jpg" },
    ];

    function generateProductHTML(product, type) {
        return `
        <div class="${type}_sec"><div class ="${type}">
                <div class ="${type}_name">${product.name}</div>
                <div class="${type}_des">${product.description}</div>
                <img src="${product.imageUrl}" id="${type}1">
                <button class ="card-btn"data-id="${product.id}" data-name="${product.name}" data-price="20">Add to Cart</button>
            </div>
        </div>
    `;
    }
    function renderProducts(products, containerClass, type) {
        const container = document.querySelector(`.${containerClass}`);
        container.innerHTML = "";

        products.forEach(product => {
            const productHTML = generateProductHTML(product, type);
            container.innerHTML += productHTML;
        });
    }

    renderProducts(womenProducts, 'wc_sec', 'wc');
    renderProducts(menProducts, 'mc_sec', 'mc');

    document.querySelectorAll('.card-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price); 
            addToCart(id, name, price);
        });
    });
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === id);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart.`);
}