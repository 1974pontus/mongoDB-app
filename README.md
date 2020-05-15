# mongoDB-app

## Description of the application
This is a application where you can see peoples favorite qoutes. 
If you are only a visitor you see all qoutes that have been post on the application page. Meant the visitor have the READ functionallity of CRUD. 

If you want, you can logg in with a user name and password(that is encrypted). When you have logged in to your account you can post your favorite quote, edit and delete your posts. Meant the login in user  have full CRUD functionallity to their own posts. 

## How we built the project
To built the server
In the server folder we installed: npm init -y to make a package.json file

Then we installed, in the server folder:
npm install nodemon 
npm install mongoose
npm install express
npm install cors
npm install bcrypt
npm install body-parser
npm install cookie-session
    
## How to run the project

### First to start the server:
Open the project, open the terminal.
Go in the server-file (write cd server)
When you are in the server file run: npm start
Now you have started the server.

### To start the client
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# To test the application, you can logg in with:
User: Elaine, password: 123
User: Jerry, password: 456

## Link to the GitHub-repo
https://github.com/1974pontus/mongoDB-app