import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBaIBNZESLWv2HvwVnKF2yWRMbsnsz6fxw",
  authDomain: "netflix-clone-d03fd.firebaseapp.com",
  databaseURL: "https://netflix-clone-d03fd.firebaseio.com",
  projectId: "netflix-clone-d03fd",
  storageBucket: "netflix-clone-d03fd.appspot.com",
  messagingSenderId: "69145501351",
  appId: "1:69145501351:web:a4a4b38de32d571ac30582"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };