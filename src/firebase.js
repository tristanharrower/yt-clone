import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC5AhymIE_LGErew7D5IC0uCdXDwrX737Q",
    authDomain: "th-yt-clone.firebaseapp.com",
    projectId: "th-yt-clone",
    storageBucket: "th-yt-clone.appspot.com",
    messagingSenderId: "201352065433",
    appId: "1:201352065433:web:48c7b4a7a037b351f8e308"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()