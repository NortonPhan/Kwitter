
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBXuXf_8G7OkVEqWTEMXMHu-qbhNjvnIAU",
      authDomain: "kwitter-24c8c.firebaseapp.com",
      databaseURL: "https://kwitter-24c8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-24c8c",
      storageBucket: "kwitter-24c8c.appspot.com",
      messagingSenderId: "814086389910",
      appId: "1:814086389910:web:0ce53a3b210e748f56c2b7",
      measurementId: "G-4XNJE7CRRY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addroom()
    {
          room_name = document.getElementById("room_input").value;
    
          firebase.database().ref("/").child(room_name).update({     purpose : "adding room name"   });
    
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function logout()
{
      localStorage.removeItem("user_name", user_name);
      localStorage.removeItem("room_name", room_name);
      
      window.location = "index.html";
}




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

