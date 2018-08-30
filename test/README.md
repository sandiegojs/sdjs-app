# Testing SDJS-App
To test the app in an android emulator, ensure you have appium installed by running `npm i` in root directory, 
as well as an apk of the app to test. 

#### Running E2E Tests
* place apk into root of project
* inside `/test/e2e/login.spec.js`, ensure `config.app` is set to the path to the apk
* open and boot up an android emulator
* in terminal, run `appium`
* in another terminal, run `npm run test:e2e`

#### Generating APK
* in terminal, `cd app`
* run `exp build:android`
  * log into expo if prompted
* wait for exp to finish compiling the apk, click on the link once done and download the apk
