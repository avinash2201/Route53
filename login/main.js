var mainapp={};
(function(){
    var firebase=app_firebase;
    var uid=null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        }else{
window.location.replace("login.html");
        }
      });
      function logout(){
        firebase.auth().signOut();
      }
      mainapp.logout=logout;
})()