| Config&nbsp;Value  | Description |
| :-------------  |:------------- |
Account&nbsp;SID | Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
Auth&nbsp;Token | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).
TwiML&nbsp;App&nbsp;SID | The TwiML application with a voice URL configured to access your server running this app - create one [in the console here](https://www.twilio.com//console/phone-numbers/dev-tools/twiml-apps). Also, you will need to configure the Voice "REQUEST URL" on the TwiML app once you've got your server up and running.
Twilio&nbsp;Phone&nbsp; | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming)


## Quick start

1. Clone this repo using `git clone --depth=1 git@github.com:talkdesk-challenges/challenge_luisteixeira.git`
1. Run `npm install` to install dependencies.
1. Edit `server/twilio/config.js` with the four configuration parameters we gathered from above.
1. At this point you can run `npm start:tunnel`.
1. When ngrok starts up, it will assign a unique URL to your tunnel. It might be something like https://asdf456.ngrok.io. Take note of this.
1. [Configure your TwiML app](https://www.twilio.com/console/phone-numbers/dev-tools/twiml-apps)'s
   Voice "REQUEST URL" to be your ngrok URL plus `twilio/voice`. For example:

       ![screenshot of twiml app](http://www.mynameisluis.com/assets/webphone.jpg)


You should now be ready to rock! Make some phone calls. Open it on another device and call yourself. Note that Twilio Client requires WebRTC enabled browsers, so Edge and Internet Explorer will not work for testing. We'd recommend Google Chrome or Mozilla Firefox instead.

### [video demo](http://www.mynameisluis.com/assets/demoHD.mov)
