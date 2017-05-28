
# Design and Assumptions

1. The design on `/docs` isn't very clear but it gives the sense that we are building two pages.
   1. Product listing
    
    This page displays the product on grid structure. 
    
   2. Cart/Checkout page
  
    This page displays the list of products on cart (items added by user). 
    Items are displays in a group with category as heading. User can change the number of each item they wan to buy
    and/or can delete the item. The Menu icon of "List" doesn't exactly represt the cart but we will go with the design. 
    
    
2. Total number of products and total price is listed at the top of the page. This value always relates to the product and value of shoping cart.
 
3. There are separate client and server running on a port 8080 and 8888 respectively. 

4. For the purpose of this application and to demonstrate the excellent knowledge, I have not used `create-react-app` or similar tools rather started from scratch. 
 
 5. Items on product api will not be duplicated.
 
 6. Total value = unitCost * unitsInCarton * noOfCartons
    
    > where: unitCost and unitsInCarton would be provided from API and noOfCarton would be user selected 0 < positive integer < 100

 7. Product on cart is not stored on server. User will lose the cart data on refresh.
 
 8. User can add product multiple times
 
 9. Total products is equal to total number of individual item (not the total number of cartons). Increasing the number of cartons on one product wont increase total product but would change total price.
 
 10. It is responsive for mobile interface
 
# Improvements:

1. Pagination
2. More test coverage


# Get Started

Install the package
> $ npm install

Compile and build the application 
> $ npm build 

Note: You can either start the client and server with two different command
> $ npm run start-server

> $ npm run start-client


Note (debug) : You must have port 8080 and 8888 free for client and server.

### or 

You can use one single command; these two commands are combined on one script
> $ npm start


## Client
You can access the application at [localhost:8080](http://localhost:8080)

## Server
You can access the api at [localhost:8888/api/products](http://localhost:8888/api/products)

Any other end poin will throw an error with message

 
# Architecture

## Backend

I am using Express JS on the back end for as an API endpoint.
Files related to server are inside `/src/server/` folder

Endpoint `api/products` give the list of products from a json file called `payload.json` from server folder.


## Frontend

Frontend is build using ReactJS for view and Redux for state management.
Files related to client are inside `src/client`.

## Test
I am using Jest and Enzyme for testing. You can find the test files inside `test` folder. 

To run tests

> $ npm test

## Eslist

To run eslist for the project
> $ gulp lint



  

 
