# weekly-assignment-L2
PSEUDOCODE FOR THE SHOPPING CART APPLICATION
SOHANA KHATUN

STEPS:

1. Begin

2. Define a static json file where all the products are hard coded in a json format,name it as data.json.

3. Make 3 more files:
   index.html,script.js,style.css

4. Interconnect them through link tag for css and script tag for script.js.

5. Write the HTML code for the Static content.

6. Give them basic CSS Accordingly.

7. Define variables in Javascript file:
   productData,cart,avgPrice,totalPrice

8.Add an event listener with DOMContentLoaded type and its function fetches data from data.json file and store the data in productData variable also call a renderProducts function.

9. Define renderProducts function:
   i.it first checks if the cart limit has exceeded or not.
   ii. It then checks if the cart is empty of not if yes then display the message "Your Cart is Empty!"
   iii. for each data then create productCard and append it to productContainer
   iv. define the function createProductCard:
   i.render all the necessary details for the product card like name,image,price etc.
   ii. Also add a "add to cart" button.

10. Define a addToCart function that takes the product id as parameter.
    i.find out the product whose product id is given in the function parameter from the entire productData array.
    ii.put a validation check on that product.
    iii.check if the product already exists in the cart or not. if it exists then just increase the quantity else add the product to the cart.
    iv. to render the cart define renderCart function.

11. Define renderCart function

i. create another productContainer and productCard and append productCard to productContainer.
ii.define all necessary details to be rendered for each product,also add a remove from cart buttton on clicking which removeFromCart function gets triggered.
iii.calculate the total price, average price of all items in cart and render them.

12. Define removeFromCart function
    i. filter the product from the cart .
    ii. if the quantity is more then 1 then reduce the quantity till 1 when it becomes 0 remove the product from the cart.
    else remove the product directly from the cart.
    iii.render the cart

13. Define clearCart function that clears the entire cart at once.

14. Define sortProducts function that sorts the products based on the parameter selected(name or price) and then render the cart.

15. Define filterProducts function that takes in and event object.
    i.first it prevents the event's original or default functionality.
    ii. Then select the input value.
    iii. filter the products that are having price greater than or equal to the input value.
    iv. render the cart.

16. END.

LIVE: https://whimsical-kelpie-58dfcc.netlify.app/
