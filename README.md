<p >
  <img src="https://cloud.githubusercontent.com/assets/3420791/21895515/ef02ad7e-d8da-11e6-9119-817552ee28d3.gif" width="280px" />
  <img src="https://cloud.githubusercontent.com/assets/3420791/21895513/eefc76b6-d8da-11e6-8c3b-3a14c74788ab.gif" width="280px" />
  <img src="https://cloud.githubusercontent.com/assets/3420791/21895514/eefcc094-d8da-11e6-863c-d5240bb74820.gif" width="280px" />
</p>

| Config&nbsp;Value  | Description |
| :-------------  |:------------- |
Account&nbsp;SID | Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
Auth&nbsp;Token | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).
TwiML&nbsp;App&nbsp;SID | The TwiML application with a voice URL configured to access your server running this app - create one [in the console here](https://www.twilio.com//console/phone-numbers/dev-tools/twiml-apps). Also, you will need to configure the Voice "REQUEST URL" on the TwiML app once you've got your server up and running.
Twilio&nbsp;Phone&nbsp; | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming)


## Quick start

1. Clone this repo using `git clone --depth=1 git@github.com:luis-teixeira/react-twilio-webphone.git`
1. Run `npm install` to install dependencies.
1. Edit `server/twilio/config.js` with the four configuration parameters we gathered from above.
1. At this point you can run `npm start:tunnel`.
1. When ngrok starts up, it will assign a unique URL to your tunnel. It might be something like https://asdf456.ngrok.io. Take note of this.
1. [Configure your TwiML app](https://www.twilio.com/console/phone-numbers/dev-tools/twiml-apps)'s
   Voice "REQUEST URL" to be your ngrok URL plus `twilio/voice`. For example:

       ![screenshot of twiml app](http://www.mynameisluis.com/assets/webphone.jpg)


You should now be ready to rock! Make some phone calls. Open it on another device and call yourself. Note that Twilio Client requires WebRTC enabled browsers, so Edge and Internet Explorer will not work for testing. We'd recommend Google Chrome or Mozilla Firefox instead.

### [download video demo](http://www.mynameisluis.com/assets/demoHD.mov)
