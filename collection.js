document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".productList");

    const products = [
        {
            id: 2,
            brand: "Yousify Summer Sweaters",
            description: "Neck Cap Sleeve Tops Sleeveless Spring Clothes Sweater Vest",
            price: 89,
            actualPrice: 180,
            discount: "51%",
            images: ["img/wimg1.jpg", "img/wimg3.jpg", "img/wimg2.jpg", "img/wimg4.jpg"],
            style: "background-image: url('img/wimg1.jpg'); background-size: contain;background-repeat: no-repeat; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 3,
            brand: "GRECERELLE",
            description: "Women's Summer Maxi Dress Casual Short Sleeve Crewneck Swing Dress",
            price: 79,
            actualPrice: 160,
            discount: "52%",
            images: ["img/wimg5.jpg", "img/wimg6.jpg", "img/wimg7.jpg", "img/wimg8.jpg"],
            style: "background-image: url('img/wimg8.jpg'); background-size: contain;background-repeat: no-repeat; width: 500px;height: 500px; position: relative;"
        },
        {
            id: 4,
            brand: "BELONGSCI",
            description: "Sleeveless Racerback Flared Swing A-Line Waist Hollow Out Summer Short Dress",
            price: 69,
            actualPrice: 140,
            discount: "51%",
            images: ["img/wimg9.jpg", "img/wimg10.jpg", "img/wimg11.jpg", "img/wimg11.jpg"],
            style: "background-image: url('img/wimg9.jpg'); background-size: contain;background-repeat: no-repeat; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 5,
            brand: "Hoodies",
            description: "Zip Up Hoodies Cropped Sweatshirts Fall",
            price: 59,
            actualPrice: 120,
            discount: "50%",
            images: ["img/wimg12.jpg", "img/wimg13.jpg", "img/wimg14.jpg", "img/wimg15.jpg"],
            style: "background-image: url('img/wimg12.jpg'); background-size: contain;background-repeat: no-repeat; width: 500px;height: 500px; position: relative;"
        },
        {
            id: 6,
            brand: "TICTICMIMI",
            description: "Casual Long Sleeve Color Block/Solid Tops Crewneck Sweatshirts",
            price: 49,
            actualPrice: 100,
            discount: "51%",
            images: ["img/wimg16.jpg", "img/wimg17.jpg", "img/wimg18.jpg", "img/wimg19.jpg"],
            style: "background-image: url('img/wimg16.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 7,
            brand: "Baggy Jeans",
            description: "Women High Waisted Baggy Jeans",
            price: 89,
            actualPrice: 180,
            discount: "50%",
            images: ["img/wimg21.jpg", "img/wimg20.jpg", "img/wimg22.jpg", "img/wimg21.jpg"],
            style: "background-image: url('img/wimg21.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 8,
            brand: "Dokotoo",
            description: "Casual Loose Overalls Jumpsuits",
            price: 99,
            actualPrice: 200,
            discount: "50%",
            images: ["img/wimg25.jpg", "img/wimg23.jpg", "img/wimg24.jpg", "img/wimg25.jpg"],
            style: "background-image: url('img/wimg25.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 9,
            brand: "DELCARINO",
            description: "Casual Short-Sleeved Shirt Vertical Stripe",
            price: 49,
            actualPrice: 100,
            discount: "51%",
            images: ["img/mb1.jpg", "img/mb2.jpg", "img/mb3.jpg", "img/mb4.jpg"],
            style: "background-image: url('img/mb1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 10,
            brand: "COOFANDY",
            description: "Men's Linen Shirts Short Sleeve Casual Shirts Button Down",
            price: 59,
            actualPrice: 120,
            discount: "50%",
            images: ["img/ma1.jpg", "img/ma2.jpg", "img/ma3.jpg", "img/ma4.jpg"],
            style: "background-image: url('img/ma1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 11,
            brand: "Crewneck Sweatshirt",
            description: "Soild Color Geometric Texture Long Sleeve Casual Pullover",
            price: 69,
            actualPrice: 140,
            discount: "51%",
            images: ["img/mc1.jpg", "img/mc2.jpg", "img/mc3.jpg", "img/mc4.jpg"],
            style: "background-image: url('img/mc1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 12,
            brand: "Puffer Jacket",
            description: "Hooded Lightweight Water Resistant Winter Jackets",
            price: 79,
            actualPrice: 160,
            discount: "50%",
            images: ["img/md1.jpg", "img/md2.jpg", "img/md3.jpg", "img/md4.jpg"],
            style: "background-image: url('img/md1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 13,
            brand: "Henley Shirts",
            description: "Long Sleeve Hippie Beach T Shirts",
            price: 89,
            actualPrice: 180,
            discount: "51%",
            images: ["img/me1.jpg", "img/me2.jpg", "img/me3.jpg", "img/me4.jpg"],
            style: "background-image: url('img/me1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 14,
            brand: "Drawstring Linen Pants",
            description: "Mens Drawstring Linen Pants Relaxed Fit Elastic Waist",
            price: 99,
            actualPrice: 200,
            discount: "50%",
            images: ["img/mf2.jpg", "img/mf1.jpg", "img/mf3.jpg", "img/mf4.jpg"],
            style: "background-image: url('img/mf2.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 15,
            brand: "Columbia",
            description: "Men's Jacquard Knit Lounge Sets Short Sleeve T-Shirts and Shorts Matching Set Loungewear Sweatsuit",
            price: 59,
            actualPrice: 120,
            discount: "51%",
            images: ["img/mg1.jpg", "img/mg2.jpg", "img/mg3.jpg", "img/mg4.jpg"],
            style: "background-image: url('img/mg1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        },
        {
            id: 16,
            brand: "TNITAGUT",
            description: "Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts",
            price: 69,
            actualPrice: 140,
            discount: "50%",
            images: ["img/mh1.jpg", "img/mh2.jpg", "img/mh3.jpg", "img/mh4.jpg"],
            style: "background-image: url('img/mh1.jpg'); background-size: cover; width: 500px; height: 500px; position: relative;"
        }
    ];
// Template for a product item
const createProductItem = (product) => {
    const { id, brand, description, price, actualPrice, discount, images, style } = product;
    
    // Generating HTML for the image slider
    const imageSliderHTML = images.map((image, index) => {
        return `<img src="${image}" class="${index === 0 ? 'active' : ''}" alt="">`;
    }).join('');

    // Generating HTML for the product item
    return `
        <section class="product-details" id="${id}">
            <div class="image-slider" style="${style}">
                <div class="product-images">
                    ${imageSliderHTML}
                </div>
            </div>
            <section>
                <div class="details">
                    <h2 class="product-brand">${brand}</h2>
                    <p class="product-short-des">${description}</p>
                    <span class="product-price">$${price}</span>
                    <span class="product-actual-price">$${actualPrice}</span>
                    <span class="product-discount">(${discount} off)</span>
                    <p class="product-sub-heading">select size</p>
                    <input type="radio" name="size-${id}" value="s" checked hidden id="s-size-${id}">
                    <label for="s-size-${id}" class="size-radio-btn check">s</label>
                    <input type="radio" name="size-${id}" value="m" hidden id="m-size-${id}">
                    <label for="m-size-${id}" class="size-radio-btn">m</label>
                    <input type="radio" name="size-${id}" value="l" hidden id="l-size-${id}">
                    <label for="l-size-${id}" class="size-radio-btn">l</label>
                    <input type="radio" name="size-${id}" value="xl" hidden id="xl-size-${id}">
                    <label for="xl-size-${id}" class="size-radio-btn">xl</label>
                    <button class="btn cart-btn">add to cart</button>
                </div>
            </section>
        </section>
    `;
};

    const generateProducts = (products) => {
        products.forEach(product => {
            const productHTML = createProductItem(product);
            productList.insertAdjacentHTML("beforeend", productHTML);
        });
    };

    generateProducts(products);
});

document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-images img"); 
    const productImageSlide = document.querySelector(".image-slider"); 

    let activeImageSlide = 0; 

    productImages.forEach((item, i) => { 
        item.addEventListener('click', () => { 
            productImages.forEach(image => image.classList.remove('active'));
            item.classList.add('active'); 
            activeImageSlide = i;
            productImageSlide.style.backgroundImage = `url('${item.src}')`; 
        });
    });

    const sizeBtns = document.querySelectorAll('.size-radio-btn'); 

    sizeBtns.forEach((item, i) => { 
        item.addEventListener('click', () => { 
            sizeBtns.forEach(btn => btn.classList.remove('check'));
            item.classList.add('check'); 
        });
    });
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

if (productId) {
    const productSlider = document.querySelector(`#${id}`);
    if (productSlider) {
        productSlider.scrollIntoView({ behavior: 'smooth' });
    }
}
