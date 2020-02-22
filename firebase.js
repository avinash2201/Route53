var app_firebase={};
(function(){
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlb3gMTCTKQZ4nZ_nEpVQEpFz_-KnWqrc",
    authDomain: "fire-auth-75f0f.firebaseapp.com",
    databaseURL: "https://fire-auth-75f0f.firebaseio.com",
    projectId: "fire-auth-75f0f",
    storageBucket: "fire-auth-75f0f.appspot.com",
    messagingSenderId: "472496423651",
    appId: "1:472496423651:web:29a99d73f37ceec6d97bd6",
    measurementId: "G-NCG10W83SR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
app_firebase=firebase;
// app_firebase.prototype.setData=function;
})()