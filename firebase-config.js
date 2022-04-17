
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/nhatp/Desktop/service/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notification-app-e212b-default-rtdb.firebaseio.com"
});
module.exports.admin = admin