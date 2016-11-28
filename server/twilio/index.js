const express = require('express');
const twilio = require('twilio');
const config = require('./config');

const router = express.Router(); /* eslint new-cap: ["error", { "capIsNew": false }] */

// TWILIO POC
// Register API middleware
// -----------------------------------------------------------------------------
const client = twilio(config.accountSid, config.authToken);

/**
 * Get Twilio Token
 * @returns {Object} token
 */
router.get('/token', function getToken(req, res) {
  this.nid = 'luispteixera';// Math.random().toString(8).substring(7);

  const capability = new twilio.Capability(config.accountSid, config.authToken);
  capability.allowClientOutgoing(config.twilioMlApp);
  capability.allowClientIncoming(this.nid);

  const token = capability.generate();
  // Include token in a JSON response
  res.send({
    identity: this.nid,
    token,
  });
});

/**
 *  Handle an POST request to make the call
 */
router.post('/voice', function voice(req, res) {
  // Create TwiML response
  const twiml = new twilio.TwimlResponse();

  if (req.body.To && req.body.To === config.twilioNumber) {
    // inbound
    twiml.dial({ callerId: req.body.Caller }, (conn) => { conn.client(this.nid); });
  } else if (req.body.To && req.body.To !== config.twilioNumber) {
    // outbound
    twiml.dial({ callerId: config.twilioNumber }, (conn) => { conn.number(req.body.To); });
  } else {
    twiml.say('Thanks for calling! you are here so is not so bad!');
  }

  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
});

/**
 * Get Call List
 */
router.get('/calls/list', (req, res) => {
  client.calls.get({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data.calls);
    }
  });
});

module.exports = router;
