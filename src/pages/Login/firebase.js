
import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkCYbeYGIyzceRu5M6QQohea4h1npyXC8",
  authDomain: "project-crm-3f9f4.firebaseapp.com",
  projectId: "project-crm-3f9f4",
  storageBucket: "project-crm-3f9f4.appspot.com",
  messagingSenderId: "800429539563",
  appId: "1:800429539563:web:aa30627c683eb1dec93eae"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;