// parte de setup din DOCUMENTATIE-NU LE TIN MINTE PE DEROST-SUNT DIN DOCUMENTATIE
// ESTE PARTE DE CONFIGURARE

// in acest fisier includ  toata logica de firebase
import firebase from "firebase/app";
// folosesc autentificare cu firebase
import "firebase/auth";
import firebaseConfig from "../configs/firebase";
firebase.initializeApp(firebaseConfig);
// crearea provider-ului
const provider = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

// in momentul cand folosesc functioa asta, firebase se autentifica folosind un anumit provider, care este un Google provider
// functie pentru logare
export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(provider);
}
// functie pentru delogare
export function signOut() {
  return firebase.auth().signOut();
}

// functie pentru logarea cu Facebook
export function signInWithFacebook() {
  return firebase.auth().signInWithPopup(providerFacebook);
}

// functie pentru delogare cu Facebook
export function signOutWithFacebook() {
  return firebase.auth().signOut();
}
