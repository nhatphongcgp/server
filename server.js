const express = require('express');
var bodyParser = require('body-parser');
const { admin } = require('./firebase-config');

const app = express();

app.use(bodyParser.json())

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};



const registrationToken = "fl3Rv7XzQ72Oxie2CYBx1C:APA91bEhDPQTC4rnqTpDGzxiXbIIXTX77bECpX6cyr9EpzgXaSr1H_njrC6G74Li94AK9kOPVbzoQbZ4Tr3oBJXMvmbWYmiI6KwVP3H3JEbbS62JXzQWCKS2Hv_r19QTP9QIz-BeAXZ_"
var payload = {
    notification: {
        title: "This is a Notification",
        body: "This is the body of the notification message."
    }
};

admin.messaging().sendToDevice(registrationToken, payload, notification_options)
    .then(function (response) {
        console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
        console.log("Error sending message:", error);
    });
