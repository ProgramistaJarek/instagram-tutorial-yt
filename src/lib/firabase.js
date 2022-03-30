import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDE-cTBZPl5sZpL1zbHfBMD9gBAj_SAVZg",
  authDomain: "instagram-67c23.firebaseapp.com",
  projectId: "instagram-67c23",
  storageBucket: "instagram-67c23.appspot.com",
  messagingSenderId: "248713865520",
  appId: "1:248713865520:web:75e434304bbb1a238cc0f5",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
