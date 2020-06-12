# onlineFood Angular Application
## Food Ordering Application
## Question:
You need to create a food ordering web application using HTML and javascript along with React or Angular. The application should have the following features.

The web app should display a food menu
The menu should display a list of items, various sizes and the per unit price of the item.
A user should be able to select items, sizes and their quantities from the menu.
On clicking the checkout button, the user should be taken to a second screen where he is shown a list of all selected items, the various details and a combined total of the order. The UI can be referred from any existing application or any other online source. You can use 3 colours + 1 shade of black + 1 shade of white; in total 5 colours.

# Solution
## Back-End (PHP):
 I've created an API using PHP and MySql database namely, "index.php" and "onlineFood.sql" respectively that provides API response for login, signup and get-menu. I have also exported and uploaded the actual database, so that you can import it and have a look at it. I have used BLOWFISH encryption for storing passwords in the database, and the code is as per the latest PHP standards, i.e, I have stripped tags from input to prevent cross site scripting and escaped the special characters and sequences to prevent SQL injection. The other PHP file "add-item.php" enables you to add items to the menu, making the app dynamic.
 
 ## Angular Part:
 I have used Angular version 9, used only the following colors: Teal(0, 128, 128), firebrick(178, 34, 34), dodgerblue(30, 144, 255), whitesmoke(245, 245, 245)[a shade of white] and #111(17, 17, 17)[a shade of black for fonts].
 
 ## Usage:
 Create a MySql database named "onlineFood", and there import the provided "food-point.sql". Host the given PHP pages at "http://localhost/foodOrdering/index.php" (create a folder named "orderFood" in your local machine, and place the PHP files there). Now host the given files in "foodOrdering" as well, and then visit the hosted "index.html" page.
 
 ## Screenshots
 
