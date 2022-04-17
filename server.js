const express = require('express');
const bodyParser = require('body-parser');
const { admin } = require('./firebase-config');
const app = express();

app.use(bodyParser.json())

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};
//pass token here from client;
const registrationToken = "token"

var payload = {
    notification: {
        title: "This is a Notification",
        body: "This is the body of the notification message."
    }
};


var db = admin.database();

var description = "default";

var ref = db.ref("User").on("value", function (snapshot) {
    description = snapshot.toJSON().city;

    payload = {
        notification: {
            title:  snapshot.toJSON().state,
            body: description,
        }
    };

    admin.messaging().sendToDevice( registrationToken, payload, notification_options)
        .then(function (response) {
            console.log("Successfully sent message:", response);
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
        });
});


console.log(ref);