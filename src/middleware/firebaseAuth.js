// useAuth.js
import { ref } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';

// Import your Firebase configuration
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const user = ref(null);

// Firebase authentication functions
const signIn = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    user.value = response.user;
  } catch (error) {
    console.error(error.message);
  }
};

const signOut = async () => {
  try {
    await firebase.auth().signOut();
    user.value = null;
  } catch (error) {
    console.error(error.message);
  }
};

// Auth state observer
firebase.auth().onAuthStateChanged((authUser) => {
  user.value = authUser;
});

const isAuthenticated = () => {
  return user.value !== null;
};

export { user, signIn, signOut, isAuthenticated };