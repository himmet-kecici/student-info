import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const fbConfig = {
    apiKey: "AIzaSyClhzP10v4XU25-NE8vO6i1VHEKqkL0_JU",
    authDomain: "student-info-f4698.firebaseapp.com",
    projectId: "student-info-f4698",
    storageBucket: "student-info-f4698.appspot.com",
    messagingSenderId: "501636680653",
    appId: "1:501636680653:web:98a35c9fa9e526e8ea1284",
    measurementId: "G-0QL3SBFGNR"
}


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore()
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools())

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store