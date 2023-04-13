# BACKEND DEVELOPMENT SECURED API

## INDEX

- [SECURED API]
    - [Brief intro](#brief-intro-)
    - [Milestones](#milestones-)
    - [Future upgrades](#future-upgrades-)
    - [HTML Notes](#html-notes-)
    - [JS Notes](#js-notes-)
    - [Node Notes](#node-js-notes-)
    - [CSS Notes](#css-notes-)
    - [Sequelize Notes](#sequelize-notes-)
    - [MySQL Notes](#mysql-notes-)
    - [Built with](#built-with-toolset-)
 
 - [MANAGING THE INFO](#managing-the-info-)
    - [Products endpoints](#products-endpoints-)
    - [Categories endpoints](#categories-endpoints-)
    - [Users endpoints](#users-endpoints-)
    - [Orders endpoints](#orders-endpoints-)
    - [Product-Orders endoints](#products-orders-endpoints-)


## Brief intro 📅
[⬆️](#index)

>*This project aims to create a complete backend system using an online store as target to develope the logic and code behind*

> __Note__
Some suggestions to include extra features have been detailed in the table below.

## Milestones 📅
[⬆️](#index)

| HTML JS CSS     | Milestone |
| :-----------:   | :---------- |
|HTML               | Create the forms to directly input the data     |
|JS           | Create the promises structure to replace postman for real form inputs.     |
|HTML               | Prepare layout to create CARDS for the products


> __Note__
Coding priorities have been re-checked almost daily in order to speed up project development.


## Future upgrades ✅
[⬆️](#index)

>Things to do
>- [ ] Create SPA to nest front-end forms and inputs 
>- [ ] Create a card system to show the products
>- [ ] Export orders in pdf


## HTML notes 📋
[⬆️](#index)

>*Due its backend nature, no html suport is needed.*

## JS notes 📋
[⬆️](#index)

>*JS has been used entirely to execute NODE JS which is the real handler of the code behind the server.*

## NODE JS notes 📋
[⬆️](#index)

>*Node framework has been the key piece to build up the server.*

## CSS notes 📋
[⬆️](#index)

>*Till frontend be created, CSS won't came into the game.*

## Sequelize notes 📋
[⬆️](#index)

>*To bring MySQL database queries to the backend, I've used this ORM which has pretty methods built within to handle tables. *

## MySQL notes 📋
[⬆️](#index)

>*Due the implementation of Sequelize in the backend development workflow, MySQL has only been accessed through the Workbench graphic interface tool, to check up Sequelize migrations and tables content. Tables linking has been fully managed within Sequelize,not using the "model" tool.*


## Built with (TOOLSET) ⚙️
[⬆️](#index)

*VISUAL STUDIO CODE*

>* [*VISUAL STUDIO CODE*](https://code.visualstudio.com/) - Code editor used (Version: 1.75.1)
>* [*NODE JS*](https://nodejs.org/es/) - Server Framework (Version: 18.15.0) 
>* [*NODEMON*](https://www.npmjs.com/package/nodemon) - Development dependency
>* [*SEQUELIZE*](https://sequelize.org/) - Object Relational Mapping tool for MySQL. (Version: 6.30.0)
>* [*SEQUELIZE CLI*](https://sequelize.org/) - Command Line Interface for Sequelize. (Version: 6.30.0)
>* [*JASON WEB TOKEN*](https://jwt.io/) - Module to create tokens.
>* [*Bcrypt*](https://www.npmjs.com/package/bcrypt/) - Production dependency to encrypt data.
>* [*Live Server*](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) -Extension that updates the choosen browser to see changes in real time.
>* [*POSTMAN*](https://www.postman.com/) -API Platform that allow us to execute promises and server requests and responses.(Version: 10.12.13)


## Authors ✒️
[⬆️](#index)

**Joan Baldó** - *Deployment* | *Coding* | - [joanbaldo](https://github.com/joanbaldo)

## License & Copyright 🔏 
[⬆️](#index)

>Please feel free to use my code if it can help you! 
>Images shown have been extracted from POSTMAN gallery section.
>Regarding JS code, please check [LICENSE.md] for details.

## Acknowledgement 🫶
[⬆️](#index)

* Sofia Pinilla as code adviser and good vibe manufacturer.
* Federico Arévalo as spiritual coach.



***

# MANAGING THE INFO ⌨️
[⬆️](#index)

>*The following sections show the different API REST methods used to bring and deliver info from ad to the server built with ODE JS. I've used Postman *

## Products endpoints 🖳
[⬆️](#index)

>*PRODUCT - Creating a product. *

![](./assets/Product_CREATE_POST.jpg)

>*PRODUCT - Updating a product. *

![](./assets/Product_UPDATEBYID_PUT.jpg)

>*PRODUCT - Deleting a product by its ID. *

![](./assets//Product_DELETEBYID_DELETE.jpg)

>*PRODUCT - Showing a product by its ID.. *

![](./assets/Product_SHOWBYID_GET.jpg)

>*PRODUCT - Filtering a product by its NAME. *

![](./assets/Product_FILTERBYNAME_GET.jpg)

>*PRODUCT - Filtering a product by its PRICE. *

![](./assets/Product_FILTERBYPRICE_GET.jpg)

>*PRODUCT - Showing all product by its PRICE in descent order. *

![](./assets/Product_FILTERBYPRICE_DOWN_GET.jpg)

## Categories endpoints 🖳
[⬆️](#index)

>*CATEGORY - Creating a category. *

![](./assets/Category_CREATE_POST.jpg)

>*CATEGORY - Updating a category by its ID. *

![](./assets/Category_UPDATEBYID_PUT.jpg)

>*CATEGORY - Deleting a category by its ID. *

![](./assets/Category_DELETEBYID_DELETE.jpg)

>*CATEGORY - Showing ALL categories. *

![](./assets/Category_SHOWALL_GET.jpg)

>*CATEGORY - Filtering categories by NAME. *

![](./assets/Category_FILTERBYNAME_GET.jpg)

>*CATEGORY - Filtering categories by its ID. *

![](./assets/Category_SHOWBYID_GET.jpg)


## Users endpoints 🖳
[⬆️](#index)

>*USER - Creating a user. *

![](./assets/User_CREATE_POST.jpg)

>*USER - Deleting a user by its ID. *

![](./assets/User_DELETE_DELETE.jpg)

>*USER - Showing the LOGGED user. *

![](./assets/User_LOGIN_POST.jpg)

>*USER - Getting the LOGGED user *

![](./assets/User_INFO_LOGGED_GET.jpg)

## Orders endpoints 🖳
[⬆️](#index)

>*ORDER - Creating an order. *

![](./assets/Order_CREATE_POST.jpg)


## Products-Orders endpoints 🖳
[⬆️](#index)

>*PRODUCT- ORDER - Showing ALL orders with products. *

![](./assets/Order_WITH_Products_GET.jpg)

