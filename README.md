# Node.js and MongoDB, 2-Page Website
This is a simple 2-page website built using Node.js and MongoDB database. The website has the following functionalities:

* Fetch Users: On clicking this button, the application fetches data from the (https://randomuser.me/) API and stores it in a MongoDB collection named 'users'. The data is fetched in bulk, which means if the API returns a single record, the application fetches around 50 or 100 records in a single click.

* Delete Users: On clicking this button, the application removes all the entries in the 'users' collection in MongoDB.

* User Details: On clicking this button, the application opens Page 2 where it displays the data in the 'users' collection as a table view with pagination feature and filter options to filter the data in the table.

## Prerequisites
Node.js and npm installed
MongoDB installed and running on your system
Internet connectivity to fetch data from the API

## Installation
* Clone the repository
* Run npm install to install the required packages
* Create a .env file in the root directory of the project and add the following variables:
* PORT - The port number on which the server will run (default: 3000)
* MONGO_URI - The connection string for the MongoDB database (default: mongodb://localhost:27017/users)
* Run npm start to start the server

## Usage
* Open your web browser and go to http://localhost:{PORT}/ (replace {PORT} with the port number you set in the .env file).
* Click on the 'Fetch Users' button to fetch data from the API and store it in the 'users' collection in MongoDB. An error alert will be displayed if data fetch is already in progress.
* Click on the 'Delete Users' button to remove all the entries in the 'users' collection in MongoDB. An error alert will be displayed before deleting all the records.
* Click on the 'User Details' button to view the data in the 'users' collection as a table view with pagination and filter options.

## Glimps of Project

## 1. Home Page

![Home-page](https://res.cloudinary.com/dym57v5kc/image/upload/v1677424436/Screenshot_6766_lmrge4.png)

## 2. Error alert message if data fetch is already in progress

![fetch-validation-pic](https://res.cloudinary.com/dym57v5kc/image/upload/v1677424436/Screenshot_6770_m1vgku.png)

## 3. Users Deatils page with pagination and filter options

![Users-deatils-page](https://res.cloudinary.com/dym57v5kc/image/upload/v1677424436/Screenshot_6767_gidzwp.png)

## 4. Error alert message before deleting all the records.

![delte-all-user-alert-pic](https://res.cloudinary.com/dym57v5kc/image/upload/v1677424436/Screenshot_6768_iwssjn.png)

## 5. If no User details available 

![no-data-pic](https://res.cloudinary.com/dym57v5kc/image/upload/v1677424436/Screenshot_6769_pn13ny.png)
