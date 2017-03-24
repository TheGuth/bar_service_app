# Drunk Fast

Collaborators: James Guthrie & Laura Wolfart

## Background

We built this app drawing from a common problem that we have seen when going out to popular bars and clubs. This problem is that it is very hard to fight through the crows to order your drink in a timely manner.

### This app has two main components:

* 1. allow users to see the bar or clubs drink menu from their phone and place an order.
* 2. allow bars and clubs to have a platform to receive orders from their customers via the app, and be able to customize their menu.

## Use Case

Why is this app useful? If your like me then you hate having to wait for the opportunity to place an order, while you could be out dancing or talking with your friends, this app will allow you the ability to place orders without skipping a beat, that way you can enjoy your night with minimal down time. Business will have to decide on their own whether they will have a pick up area for ordered drinks or actually bring them to the customer.

## Initial UX



## Mobile UX

## Working Prototype

## Functionality
The app's functionality includes:

* A landing page with a connect interface for customers to connect to their favorite bar or club to place and order.
* login and signup pages for the business owners to set up their account.
* A business dashboard where the business can receive orders as well as create and edit their menu.
* A customer dashboard where they can see the current menu of the bar or club they are at and select drinks to add to an order, which they can then submit to the business.

## Technical

This app is built using React, Redux, Nodejs, express, mongodb as well as html and css.

## Development Roadmap

This is v1.0 of the app, but future enhancements are expected.

### Future developments:

* Create Customer sign up and login page, so they can save favorite drinks as well as save unique ids to connect to their favorite business.
* Create Customer Profile page.
* Create business Profile page.
* Add social auth to customer actions.
* Improve authentication for Business side.
* Add webSocket to the ordering system and drink status system.
* Add stripe library so that users and business can handle transactions without having to use cash.
* Add better validation to forms
* Add email service
* Add client ability to have drivers license as part of their Profile
* add when an order is send it also sends the drivers license to help verify the order.
* Add queue structure for orders
* Add client estimated time till order is ready
