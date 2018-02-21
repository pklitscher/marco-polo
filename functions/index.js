const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
var db = admin.database();

exports.respondWithPolo = functions.database.ref('/marco/{id}').onWrite((event) => {
  if (event.data.previous.exists()) {
    return null;
  }
  if (!event.data.exists()) {
    return null;
  }

  var id = event.params.id
  var polo_response = {
    message:"POLO",
    timestamp: + new Date()
  }
  return db.ref(`polo/${id}`).set(polo_response);
});
