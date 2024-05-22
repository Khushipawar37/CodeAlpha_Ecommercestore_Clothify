document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector(".product-container");
    const products = [
        {
            image: "img/slider-2.jpg",
            price: "$25",
            actual_price: "$50",
            off: "50% off",
        },
        {
            image: "img/slider-3.jpg",
            price: "$35",
            actual_price: "$70",
            off: "50% off",
        },
        {
            image: "img/slider-4.jpg",
            price: "$20",
            actual_price: "$40",
            off: "50% off",
        },
        {
            image: "img/slider-5.jpg",
            price: "$15",
            actual_price: "$30",
            off: "50% off",
        },
        {
            image: "img/slider-6.jpg",
            price: "$20",
            actual_price: "$40",
            off: "50% off",
        },
        {
            image: "img/slider-7.jpg",
            price: "$15",
            actual_price: "$30",
            off: "50% off",
        },
    ];

    products.forEach((product) => {
        const productCard = `
        <div id="product-card">
          <div class="product-image">
            <img class="product-thumb" src="${product.image}" alt="">
            <span class="discount-tag">${product.off}</span>
            <div class="product-info">
              <div class="price">${product.price}</div>
              <div class="actual_price">${product.actual_price}</div>
            </div>
          </div>
        </div>
        `;
        productContainer.innerHTML += productCard;
      });
  
      const nxtBtn = document.querySelector(".nxt-btn");
      const preBtn = document.querySelector(".pre-btn");
  
      nxtBtn.addEventListener("click", () => {
        productContainer.scrollLeft += productContainer.offsetWidth;
      });
  
      preBtn.addEventListener("click", () => {
        productContainer.scrollLeft -= productContainer.offsetWidth;
      });
    });
