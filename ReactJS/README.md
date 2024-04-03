# Dashboard
 
This is a simple React app that displays a report of items
 
## Getting Started
 
To get started, you'll need to have Node.js and npm installed on your computer. Once you have those installed, you can create a new React app by running the following command:
 
npx create-react-app my-app
 
## Installing Dependencies
 
Once you've created your new React app, you can install any additional dependencies you need by running the following command:
 
npm install <dependency-name>
 
For example, if you wanted to install the `axios` library, you would run the following command:
 
## Running the App
 
To run the app, navigate to the `my-app` directory and run the following command:
 
npm start
 
This will start the development server and you can view the app by navigating to `http://localhost:3000` in your web browser.
 
## Code Structure
 
React app's code will be structured in the following way:
 
my-app: This is the root directory of your React app.
public: This directory contains static files like your HTML file and any images you might use.
src: This directory contains all of your React components and application logic.
components: This directory contains all of your individual React components.
config.js: The config.js file defines a JavaScript object with properties for configuring a web application.
App.js: This is the main entry point for your React app. It renders the Dashboard component.
index.js: This is the file that bootstraps your React app and renders it to the page.
 
 
## Adding Redux Store (Optional)
 
You may want to utilize Redux for managing state in your React app. If you plan to do so in the future, you can add a Redux store file. Here's how you can do it:
 
1. Install Redux and React-Redux:
 
 
npm install redux react-redux



# Note

FYI
We have some files such as 'store ui-component' that may be used in the future. For now, we can ignore that functionality. Additionally, we have separated utilities for better organization, specifically for using icons, colors, etc.