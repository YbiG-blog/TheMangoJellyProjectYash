
# Config
1. Here the DataBase has connected.

# Models
1. schema created

# Router

A. <h2>details.js<h2>
1. Post request - here the new data has created.
2. Get request for All - gives to us all product details.
3. Get request for a particular product - gives to us the particular product details.
4. Delete request - delete a particular product.
5. Updated request - update a particular product.

B. <h2>filter.js<h2>
1. Get products, filter by brandName
2. Get products, filter by productCategory

# Apis
1. register  - 
2. login
3. delete
4. update
5. filter by brandName
6. filter by productCategory
7. get all products
8. get a particular product
 
# Functions And Errors:-

<h3>Functions<h3>
1. Find - used to fetch all model data from the database.
2. findById - finds and returns one document that matches the given selection criteria(only valid for _id).
3. findByIdAndDelete - finds and delete that docment(valid for only _id).
4. findByIdAndUpdate - finds and updates one document that matches the given selection criteria(only valid for _id).
5. FindOne -  finds and returns one document that matches the given selection criteria.

<h3>Erros<h3>
1. If data is not found then return a 404 error.
2. Bad request (400 error code) - For syntax error, invalid request message framing, or deceptive request routing). 
3. For internal server - return 501 error.
4. If new data is created then send data with the 201 error code.
5. If we fetched the data then send data response with a 200 error code.

# For testing use:-
npm install

Post request with body(Product - Register) :-
{
    "name": "jsr mdn51",<br>
    "price": 40099,<br>
    "productCategory": "laptop",<br>
    "description": "Latest windows 11 laptop with touch pad",<br>
    "brandName": "JSR",<br>
    "RAM": "8gb",<br>
    "internalStorage": "512gb SSD",<br>
    "screenSize": "16 inch",<br>
    "bookingAvailable": "offline and online"<br>
}

** For any confusion contact me at #yashvardhan7906@gmail.com   