/*this creates an empty shopping cart with object as follows
prod = {productName:"xyz",productDescription:"xxx",productSpec:"colors or anyother detail",size:[4,5,6,7],SelectedQty:1,img:"dir"}
*/
var shoppingCart = [];





function clickGuestCheckout()
{
    window.alert("You have selected Guest Checkout");
}

function clickMemberCheckout()
{
    window.alert("You have selected Member Checkout");
}


function clickPayPalCheckout()
{
    window.alert("You have selected Paypal Checkout");
}


function clickRemoved()
{
    window.alert("You have selected remove item from cart. This will result in decreasing selected quantity by one. Once selected qunatity is zero item will be removed from cart");
}