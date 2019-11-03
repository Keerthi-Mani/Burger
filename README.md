# Eat-Da-Burger!
A Burger Eatin' Application With Node.js/Express/MySQL/Handlebars/Materialize.

## Description
This application demonstrates a simple <em>full stack application </em>with a front end implemented with <strong>HTML/CSS</strong> and elements from the Materialize framework and the <em>backend </em>implemented with <strong>Node.js and Express.</strong> HTML templating is done with the help of <strong>Handlebars.</strong>

## How it works?
The user may enter any burger name in the input. Select any one among the needs to be devoured or devoured. Then, click on the add burger button and it adds to the menu. If it is not devoured, the menu is added to the burgers waiting to be devoured. If it is devoured, the menu is added to the devoured burgers.This also adds the new burger entry into the MySQL database. Updates its status accordingly in the database.

## Directory setup
```sh
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       │── img
│       │   └── burger.png
│       └── js
│           └── burger.js
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## MySQL Database
<strong>Create a table</strong>

<img width="1018" alt="Screen Shot 2019-11-02 at 5 23 37 PM" src="https://user-images.githubusercontent.com/52920074/68077198-e9719400-fd95-11e9-8cd1-06b4cd6b31cc.png">
<hr>
<strong>Table values are updated from the user's input</strong>

<img width="1015" alt="Screen Shot 2019-11-02 at 5 23 51 PM" src="https://user-images.githubusercontent.com/52920074/68077197-e8406700-fd95-11e9-8623-415dfafe7cab.png">

## Demo
The demo of the burger eating application can be found here.
https://drive.google.com/open?id=1Yfg_IbvCKy0pZNB6cg9nW49HehHoBqjq

## Installation
Install all the application dependencies below from npm packages using,
```sh
npm install
```
- [Express](https://www.npmjs.com/package/express)
- [Express-Handlebar](https://www.npmjs.com/package/express-handler)
- [Router](https://www.npmjs.com/package/router)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Body-parser](https://www.npmjs.com/package/body-parser)

run: 
```sh
node server.js
```
Now, open the local application on port 8080 at the URL: http://localhost:8080/.
<hr>

## Screenshot
<strong>Enjoy and have a burger!</strong>
<img width="1437" alt="Screen Shot 2019-11-02 at 5 24 17 PM" src="https://user-images.githubusercontent.com/52920074/68077209-32c1e380-fd96-11e9-9405-f0756a733f78.png">

## Hosting on Heroku 
Now that we have a backend to our applications, we use Heroku for hosting. Please note that while Heroku is free, it will request credit card information if you have more than 5 applications at a time or are adding a database.

## Author
<strong><em>Keerthi Mani</em></strong>