// system environment variables (so we don't check them in to source control!)
module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID, // Twilio Account SID - found on your dashboard

  authToken: process.env.TWILIO_AUTH_TOKEN, // Twilio Auth Token - found on your dashboard

  twilioMlApp: process.env.TWILIO_ML_APP, // A Twilio ML App

  twilioNumber: process.env.TWILIO_NUMBER, // A Twilio number that you have purchased through the twilio.com

  port: process.env.PORT || 3000,   // The port your web application will run on
};
