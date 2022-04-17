const express = require('express')
const app = express()
const { admin } = require('./firebase-config');
var registrationToken = "cmID6fJBRaiqK5yfuvsEWl:APA91bEKd_svYJNnOF4im0CQPO1lnZE5SgHd4Qf-aqVdRJ-WOcfJ42ReGK6ff4GG9Vc3zzazJKM_uBJTgSSLxSVn_hR5rZ_eDZ9Jdnu3vP1vT7UhHbTZK8evaBQ_tdHAhm6Enc-Quyb1";

var payload = {
    notification: {
        title: "Account Deposit",
        body: "A deposit to your savings account has just cleared."
    },
    data: {
        account: "Savings",
        balance: "$3020.25"
    }
};

var options = {
    priority: "normal",
    timeToLive: 60 * 60
};


var db = admin.database();
var ref = db.ref("User").child("address").on("value", function name(snsh) {

    payload = {
        notification: {
            title: "Account Deposit",
            body: snsh.val().state,
        },
        data: {
            account: "Savings",
            balance: "$3020.25"
        }
    };
    console.log(payload);

    admin.messaging().sendToDevice(registrationToken, payload, options)
        .then(function (response) {
            console.log("Successfully sent message:", response);
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
        });


})
console.log(ref);




