  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCpRdTNXxPz86ftDHx--qQpFTUOrBgmcqY",
    authDomain: "poseitive-386d6.firebaseapp.com",
    databaseURL: "https://poseitive-386d6.firebaseio.com",
    projectId: "poseitive-386d6",
    storageBucket: "poseitive-386d6.appspot.com",
    messagingSenderId: "687959543818",
    appId: "1:687959543818:web:abc51ed761fdd018780ff3",
    measurementId: "G-QHDHXG0YSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var firestore=firebase.firestore();
  const docRef=firestore.doc("samples/Avi");
  const status=document.querySelector('#status');
  const inputfield=document.querySelector('#inputfield');
  const email=document.querySelector('#email');
  const save=document.querySelector('#save');
  const load=document.querySelector('#load');

  save.addEventListener("click",function(){
const textsave=inputfield.value;
const emails=email.value;
console.log("I love you  "+ textsave+" " +email);
 docRef.set({
  name:textsave,
  email:emails
 }).then(function(){
     console.log("status Saved!");
 }).catch(function(error){
 console.log("Got an  error:",error);
 });
  })
  load.addEventListener("click",function(){
      docRef.get().then(function(doc){
          if(doc && doc.exists){
              const mydata=doc.data();
              status.innerText="I love you  "+ mydata.name +" "+mydata.email;
          }
      }).catch(function(error){
          console.log("Got an  error:",error);
      });
  })
//   getRealTimeUpates=function(){
//     docRef.onSnapshot(function(doc){
//         if(doc && doc.exists){
//             const mydata=doc.data();
//             status.innerText="I love you  "+ mydata.name+" "+mydata.email;
//         }
//     });
//   }
//   getRealTimeUpates();
