# Help Desk Project

## Overview

This project builds a Technical Support Portal (Help Desk) using Node.js, Express, MongoDB, and Handlebars.

![Project image on Google Chrome](\content\project_image.png)


## Installation and Setup

1. Ensure Node.js is installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. Install MongoDB on your machine if it isn't already installed. You can download it from [MongoDB official website](https://www.mongodb.com/try/download/community). Installation instructions can be found on the [MongoDB documentation page](https://docs.mongodb.com/manual/installation/).
3. Remember to enable the Install MongoDB Compass option to install the Graphical User Interface (GUI) version of MongoDB.
4. To verify if the server is truly installed and running, search for MongoDB in Services and it will be running.
	![MongoDB on Services](Help-Desk-Project\content\mongodb.png) 
5. The default port will be 27017.
	![MongoDB on Services](Help-Desk-Project\content\local_host_27017.png) 
6. Automatically, 3 databases are created: admin, config and local.
	![MongoDB on Services](Help-Desk-Project\content\mongodb_databases.png) 

## Project Creation

1. Create a new directory for your project in the desired location.
 ![MongoDB on Services](Help-Desk-Project\content\mkdir.png) 
2. Initialize a new Node.js project in this directory by running `npm init -y` in your terminal.
3. Install the necessary dependencies by running `npm install express mongoose express-handlebars` in your terminal.

## Project Files

1. Create a new directory named 'views' within your project directory.
2. Create new .handlebars files in the 'views' directory for your HTML templates.
3. Create a new file named 'app.js' in the main project directory.
4. Open 'app.js' in a text editor and add the following code to configure Express and Handlebars:

```jsx
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));

```

## Running the Application

1. Start the application by running `node app.js` in your terminal.
2. Open a web browser and navigate to `http://localhost:3000` to view the application.

## Source

The project tutorial can be found on [YouTube](https://www.youtube.com/watch?v=l4HeaNRi8f8).
