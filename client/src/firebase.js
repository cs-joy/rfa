import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.RFA_FIREBASE_AUTH_KEY,
    authDomain: process.env.RFA_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.RFA_FIREBASE_PROJECT_ID,
    storageBucket: process.env.RFA_FIREBASE_STORAGE_BUKCET,
    messagingSenderId: process.env.RFA_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.RFA_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig)

export const auth = app.auth()
export default app