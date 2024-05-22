document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('cartTableBody')) {
        renderCart();

    }
});

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    const cartTableBody = document.getElementById('cartTableBody');
    cartTableBody.innerHTML = "";

    let totalAmount = 0;
    let totalItems = 0;

    cart.forEach(item => {
        totalAmount += parseFloat(item.price) * item.quantity;
        totalItems += item.quantity;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td class="text-right">$${item.price.toFixed(2)}</td>
            <td class="text-right">${item.quantity}</td>
            <td class="text-right">$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartTableBody.appendChild(row);
    });

    document.getElementById('totalAmount').innerText = `${totalAmount.toFixed(2)}`;
    document.getElementById('itemCount').innerText = totalItems;
}


    document.getElementById('totalAmount').innerText = `$${totalAmount.toFixed(2)}`;
    document.getElementById('itemCount').innerText = totalItems;

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
function emptyCart() {
    localStorage.removeItem('cart');
    renderCart();
}
async function orderNow() {
    const cartItems = renderCart(); // Assume this function exists and gets all cart items
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the cart inside the function
    const totalAmountText = document.getElementById('totalAmount').innerText;
    const totalAmount = parseFloat(totalAmountText);

    if (isNaN(totalAmount)) {
        document.getElementById('orderMessage').innerText = 'Total amount is not a number';
        return;
    }

    const orderDetails = {
        items: cart.map(item => ({
            productId: item.productId || 'default-id', // ensure productId is present
            name: item.name,
            quantity: item.quantity,
            price: item.unitPrice // changed to price for consistency
        })),
        totalAmount: totalAmount
    };

    try {
        const response = await fetch('http://localhost:3001/order', { // Ensure the port matches your backend server port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        });

        if (response.ok) {
            document.getElementById('orderMessage').innerText = 'Order successful!';
            emptyCart();
        } else {
            document.getElementById('orderMessage').innerText = 'Order failed. Please try again.';
        }
    } catch (error) {
        document.getElementById('orderMessage').innerText = 'Order failed. Please try again.';
    }
}