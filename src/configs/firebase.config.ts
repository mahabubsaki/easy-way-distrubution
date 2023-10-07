
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('email');
facebookProvider.addScope('public_profile');
// have to create test app and use the same fb account which used on developer account

const githubProvider = new GithubAuthProvider();



const twitterProvider = new TwitterAuthProvider();

// While creating the twitter app give any website link like https://www.google.com/ on required site link

const microsoftProvider = new OAuthProvider('microsoft.com');

// Choose third option and select web and take client secret value not id

const yahooProvider = new OAuthProvider('yahoo.com');




export { auth, googleProvider, facebookProvider, githubProvider, twitterProvider, microsoftProvider, yahooProvider };