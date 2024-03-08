// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , push , serverTimestamp , remove } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl6ylquNXctAP7y85UacLDdvGhq7yRm08",
  authDomain: "passes-94e69.firebaseapp.com",
  projectId: "passes-94e69",
  storageBucket: "passes-94e69.appspot.com",
  messagingSenderId: "1306077280",
  appId: "1:1306077280:web:00bcbefb35952710e13b05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
// Function to add a new user to the database
export function addUser(email, password , battery) {
    // Get a reference to the database
    const database = getDatabase();
  
    // Generate a unique key for the new user (optional, but not necessary in Realtime Database)
    // const newUserKey = ref(database, 'users/').push().key;
  
    // Create an object with user data
    const userData = {
      email: email,
      password: password , 
      chargerInfo : battery,
      serverTimestamp:serverTimestamp()
    };
  
    // Set the data for the new user under a known key
    set(ref(database, 'users/' + generateRandomID()), userData)
      .then(() => {
        console.log("User added successfully!");
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
  }
  
  function generateRandomID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
    const idLength = 8;
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters[randomIndex];
    }
  
    return randomID;
  }



  // Function to delete a user from the database
  export function deleteUser(userID) {
      // Get a reference to the database
      const database = getDatabase();
  
      // Construct the path to the user's data
      const userRef = ref(database, 'users/' + userID);
  
      // Remove the user's data from the database
      remove(userRef)
          .then(() => {
              console.log("User deleted successfully!");
          })
          .catch((error) => {
              console.error("Error deleting user: ", error);
          });
  }
  


  export     const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // console.log('Text copied to clipboard');
      })
      .catch(err => {
        // console.error('Unable to copy text: ', err);
      });
  };
