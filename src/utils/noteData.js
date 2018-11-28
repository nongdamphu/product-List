import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyDBC3LqIaQ7LUyPpVmqV6Hz87jt1r8dtCY",
    authDomain: "phu-project.firebaseapp.com",
    databaseURL: "https://phu-project.firebaseio.com",
    projectId: "phu-project",
    storageBucket: "phu-project.appspot.com",
    messagingSenderId: "575637417587"
};
firebase.initializeApp(config);

export default function noteData(endpoint) {
    return firebase.database().ref(`${endpoint}`)
}
