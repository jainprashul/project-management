import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD7ADrDj7Di0ArVB_u48U_sAJPTChWS1iA",
    authDomain: "xpjain-marioplan.firebaseapp.com",
    databaseURL: "https://xpjain-marioplan.firebaseio.com",
    projectId: "xpjain-marioplan",
    storageBucket: "xpjain-marioplan.appspot.com",
    messagingSenderId: "249885021827"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase