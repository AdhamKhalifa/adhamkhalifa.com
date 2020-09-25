
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBG0FKjvV_ljauJsdWGiSSbLDO6a7tgEY4",
    authDomain: "collaborative-sketch-d88f5.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-d88f5.firebaseio.com",
    projectId: "collaborative-sketch-d88f5",
    storageBucket: "collaborative-sketch-d88f5.appspot.com",
    messagingSenderId: "524303672683",
    appId: "1:524303672683:web:e46a4933467da6cc39182e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var pointsData = firebase.database().ref()