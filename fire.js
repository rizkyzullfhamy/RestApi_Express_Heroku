var firebase = require('firebase')

//AKUN FIREBASE PROJECT
var config = {
apiKey              : "AIzaSyAwBAsumlbgaNYIP2taPxVAE5wn9_V6uuY",
authDomain          : "projecthidroponik.firebaseapp.com",
databaseURL         : "https://projecthidroponik.firebaseio.com/",
projectId           : "projecthidroponik",
storageBucket       : "projecthidroponik.appspot.com",
messagingSenderId   : "566043058737"
};

const fire = firebase.initializeApp(config);
module.exports = fire;
