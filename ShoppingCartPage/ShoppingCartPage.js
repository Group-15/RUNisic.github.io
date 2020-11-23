var shoImageslInk = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
]

var shoePrices = [
    200,
    300,
    250,
    225,
    350,
    275,
]

var chipPrice = [
    130,
    180,
]

var shoeNames = [
    "Runner",
    "Midnight black",
    "Helios",
    "Titan",
    "Ninja",
    "Boulder"
]

function clickGuestCheckout() {
    window.alert("You have selected Guest Checkout");
}

function clickMemberCheckout() {
    window.alert("You have selected Member Checkout");
}


function clickPayPalCheckout() {
    window.alert("You have selected Paypal Checkout");
}


function clickRemoved() {
    window.alert("You have selected remove item from cart. This will result in decreasing selected quantity by one. Once selected qunatity is zero item will be removed from cart");
}

function loadTable() {
    if (window.localStorage.getItem("chipIndex") != null && window.localStorage.getItem("chipIndex") != null) {

        chipIndex = parseInt(window.localStorage.getItem("chipIndex"));
        shoeIndex = parseInt(window.localStorage.getItem("itemNumber"));
        var totalPrice = shoePrices[shoeIndex] + chipPrice[chipIndex];
        var tax = Math.round(0.13 * totalPrice);
        document.getElementById("cartTable").innerHTML =
            `
    <tr  class"newTable" id="cartTable" style="font-size: 15px; background: linear-gradient(109.49deg, #A12CBE 0%, #00EDED 100%);">
                            <th>${(shoeIndex+1)}</th>
                            <th><img src="${shoImageslInk[shoeIndex]}" style="display: block;margin-left: auto;margin-right: auto;width: 100px;"></th>
                            <th>${shoeNames[shoeIndex]}</th>
                            <th>${totalPrice} </th>
                            <th>1 </th>
                            <th>${totalPrice} </th>
                        </tr>
    
    `;

        document.getElementById("cart-summary").innerHTML =
            `
            <tr>
                        <td>Subtotal </td>
                        <td> $${totalPrice} </td>
                    </tr>
                    <tr>
                        <td>Delivery and Shipping </td>
                        <td>$0.00 </td>
                    </tr>
                    <tr>
                        <td>Taxes</td>
                        <td>$${tax}</td>
                    </tr>
                    <tr>
                        <td>Total </td>
                        <td> $${((totalPrice+tax))} </td>
                    </tr>
    `;

    }
}