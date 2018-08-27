## SDJS APP

## Overview

The main app source code is in `\app` and the local development server is a loopback express server `server\server.js` which has an api used by the app.

## Requirements

* Running instance of MongoDB on port 27017
* Run `npm install` once from the root project directory and once in the app folder to ensure all dependancies are installed.
* Install the [Expo app](https://expo.io/tools#client) on your mobile device
* Install [Expo XDE](https://github.com/expo/xde/releases)
* Create an account on [Expo website](https://expo.io)

## Starting the app

* Start the server with `npm start`
* Start the Expo XDE, and login
* Open an existing app using the `app` folder
* Click share, and then scan the QR code

## Setting up ngrok for your phone to hit your localhost

* download ngrok, validate your account as per ngrok instructions, extract the .exe into your project's root folder
* in one terminal, start your mongod instance
* in another terminal, start your local server ("node ." or "npm start")
* in a 3rd terminal, run "./ngrok http {port}" where {port} is whatever port your localhost server is running on (usually 3000)
* ngrok will give you a forwarding url - anytime you hit that url, you will be hitting your localhost instance on your machine
	* any backends request in your code should be replaced by that forwarding url, followed by the route (e.g. http://ddhjfoi4.ngrok.io/api/login)
* start Expo XDE on your system, and use it to run your app on your phone
* requests to that url from your phone will now hit that ngrok tunnel and query your localhost

## Publishing the app to corresponding stores

* Refer to the android guide: https://clearbridgemobile.com/how-to-submit-an-app-to-the-google-play-store
* Refer to the ios guide: https://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store

## TODO

* setup ci
* setup unit tests
* setup end to end tests
