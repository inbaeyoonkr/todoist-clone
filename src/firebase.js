import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCkgznXRe4jI2lnrvMGgSbANl-dia5LByI',
  authDomain: 'todoist-clone-e2813.firebaseapp.com',
  databaseURL: 'https://todoist-clone-e2813.firebaseio.com',
  projectId: 'todoist-clone-e2813',
  storageBucket: 'todoist-clone-e2813.appspot.com',
  messagingSenderId: '560911886284',
  appId: '1:560911886284:web:910b3944fbd70b4b'
});

export { firebaseConfig as firebase };
