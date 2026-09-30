let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added to Cart");
}

window.onload = function () {

    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    if (cartItems) {

        cart.forEach(item => {

            cartItems.innerHTML += `
                <div class="card">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>
            `;

            total += item.price;
        });

        document.getElementById("total").innerHTML = total;
    }
}

function checkout() {
    alert("Order Placed Successfully 🎉");
    localStorage.removeItem("cart");
    location.reload();
}
function buyNow() {
    alert("Product added successfully!");
    window.location.href = "checkout.html";
}

function placeOrder() {
    alert("Your order has been placed successfully!");
    window.location.href = "success.html";
}