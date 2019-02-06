import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAo6_kV3RDGpCBNyjg-tyJs1M8fDS1rgGw",
    authDomain: "teachers-salary.firebaseapp.com",
    databaseURL: "https://teachers-salary.firebaseio.com",
    projectId: "teachers-salary",
    storageBucket: "teachers-salary.appspot.com",
    messagingSenderId: "982397798547"
  };
  firebase.initializeApp(config)
  
  export default firebase