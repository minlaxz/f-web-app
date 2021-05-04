// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDict0z_u37tjBCTHh5Ls7SCdurgg0xEBs",
    authDomain: "minlaxz-bundle.firebaseapp.com",
    databaseURL: "https://minlaxz-bundle.firebaseio.com",
    projectId: "minlaxz-bundle",
    storageBucket: "minlaxz-bundle.appspot.com",
    messagingSenderId: "841818091508",
    appId: "1:841818091508:web:ca293b7daae710895a13a1",
    measurementId: "G-20SF9NBMPN"
};

// Initialize Firebase with a "default" Firebase project
var defaultProject = firebase.initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"

var db = firebase.database()

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();