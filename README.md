#Bar Service App (Name in progress)

##To Reach MVP (Minimum Viable Product)

this app is for cash pickups of drinks.

list: long island, beer, update and delete, at top a create button

Sunday: WireFrames: Web-app, Phone, Tablet
React Native: flex week?

Monday:
  1. Landing page + Sign Up with authentication (check box for client vs business) (React and Redux)
    1. landing page with log in fields & log in & sign up buttons
    2. Sign up page with sign up fields, and submit button
  2. Set up MongoDb and add end points for landing page/ sign up (Node and Express)
    1. set up mLab
    2. set up post endpoints for log in from landing page & sign up page
    3. set up models and schemas for user and business.

Tuesday:
  1. Profile page (client and business) (both work on this)
    1. Client
      (All should be editable)
      1. Nav bar on top
      2. First and Last name
      3. Email
      4. Driver License Number / picture of Drivers License (If there is time)
    2. Business
      1. Nav bar on top
      2. Name
      3. Unique ID
      4. Email
      5. drink list button
        1. CRUD operations for drinks (possible drink list page that can be add to, updated, or deleted)
        2. list: long island, beer, update and delete, at top a create button
  2. build get endpoints for profile page(), build CRUD endpoints for business drinks (mentor?) create in mongo we would have to create a new collection for each unique business.

Wednesday:
  1. DashBoard Page (client and business) (both work on this)
    1. Client
      1. displays name
      2. displays input field for Unique business id with submit button
        1. when submit show business's drink list.
        2. drink list are selectable. click drink pop up with are you sure message, if yes send drink order
      3. Notification Area/Receipt Area
    2. Business
      1. Display Name
      2. Display list of orders
        1. Each order is clickable when completed. When clicked should ask are you sure?
  2.  build get endpoints for dashboard pages
  4. build get ordered drinks endpoints

Thursday:
  Finish any work leftover
  and start adding CSS

Friday:
  CSS / fix bugs

MVP (Marketable)

React and Redux
1. Landing page + Sign Up ()
2. Profile Page (client and business)
3. DashBoard Page (client and business) (email micro Service)
middleware(redux-axios, redux-saga, redux-ship, https://github.com/zeit/next.js)

Node and Express
1. End Points
2. micro Services (authentication, basic-authentication, emailer, )
3. Mongoose connection and searching through mongo
4. Testing

MongoDb
1. models and Schemas

###Overall Ideas

1. Have a Client and Business Interface
2. Use MongoDb for database to Start, possibly switch to posgtres later on for scaling.
3. Build out Schemas and models in Mongo
  1. Client User
  2. Business User
  3. drinks, to food, to coffee,  
  4. build your own schema (build an appetizer)

###Client Side Ideas

1. Client has a profile, with picture of driver license/ or driver license number, profile picture, settings, credit Card information, etc...

2. Client can see a list of nearby business that use the app.

3. Client can directly enter business code to sync up to the business of their choice or select from the list of nearby places.

4. Client can order service from the specific business, in this case an alcoholic beverage, when a client makes a purchase it submits their driver license picture and card info to the business, the client then receives an estimated time for when the drink will be ready and where they are in the queue. This return message can also be changed to add where to pick up the drink, unless the business wants to deliver the drink as well.

5. Clients can create a favorite list of drink types.

6. Client when connect to a business will be taken to their business page,

  1. which will have a scroll through list of possible drinks to be able to select, and ordered, multiple selections will be available, so you can order more than one drink?

  2. Will have busy level

  3. current wait time for a drink

  4. address linked to google maps.

  5. phone-number

###Business Side Ideas

1. Business profile includes pictures, name, address, phone-number, current-level of how busy, or wait time for drinks/seats, access to creating new drinks/basic crud operations, payment gateway

MVP (don't have to handle payments) no revenue generated
free to use app.
eventually add in percentage taken.

basic client website:
1. user sign up and authentication
2. profile creation through form.
3. Use libraries for optimization (http://redux-form.com/6.5.0/examples/)
4. notification system (https://github.com/igorprado/react-notification-system)
5. react-bootstrap and flex box (https://react-bootstrap.github.io/)
6.

basic business website

MVP (Marketable)

React and Redux
1. Landing page + Sign Up ()
2. Profile Page (client and business)
3. DashBoard Page (client and business) (email micro Service)
middleware(redux-axios, redux-saga, redux-ship, https://github.com/zeit/next.js)

dont worry about credit card stuff, assume cash only, emailer, queue,

time estimates
1. click button to say drink is done: sends message/receipt back to buyer / 1:00
2.
3.
4.

walk up during this time, and that not calculated

Node and Express
1. End Points
2. micro Services (authentication, basic-authentication, emailer, )
3. Mongoose connection and searching through mongo
4. Testing

MongoDb
1. models and Schemas

design wireframes:

1 person react and redux
landing page and sign up page
user profile page

1 person node and express and mongo
authentication, user schema



Business Goals:

1. Vision

2. Mission

3. Value Proposition

4. Core Competence

5. USP (Unique Selling Point):

Pitch Deck

video of product working at house party and or at bar

The Lean Startup (book)
