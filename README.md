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

## Publishing the app to corresponding stores

* Refer to the android guide: https://clearbridgemobile.com/how-to-submit-an-app-to-the-google-play-store
* Refer to the ios guide: https://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store

## TODO

* setup ci
* setup unit tests
* setup end to end tests



