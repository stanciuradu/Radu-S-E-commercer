// import { signInWithGoogle } from "../../apis/firbase";
// import { signInWithFacebook } from "../../apis/firbase";
// import { signOut } from "../../apis/firbase";
// // FUUNCTII PENTRU REQUEST-UL ASINCRON

// // modelez cele trei stari din reducer
// // deci am 3 actiuni -pentru a actualiza strea de loading, de eraore ;i pentru a actualiza datele despre user

// export function startLoading() {
//   return {
//     type: "START_LOADING",
//   };
// }

// export function updateUserData(payload) {
//   // primeste payoad pentru ca este nevoie sa se stie ce tip de date se actualizeaza
//   return {
//     type: "UPDATE_USER_DATA",
//     payload: payload,
//   };
// }

// export function updateUserError(payload) {
//   // primeste payload pentru ca trebuie sa se stie ce fel de eroare se returneaza
//   return {
//     type: "UPDATE_USER_ERROR",
//     payload: payload,
//   };
// }

// // REDUX NU SUPORTA OPERATII ASINCRONE
// // REDUX-THUNK-ESTE UN PACHET SIMPLU CONCEPTUAL SI CEA MAI POPULARA VARIANTA
// // CU REDUX-THUNK, ACTIUNILE POT FI FUNCTII CARE RETURNEAZA ALTE FUNCTII

// export function signInWithGoogleAction() {
//   return function (dispatch) {
//     // dispatch este o functie care primeste ca parametru rezultatul unei actiuni si o trimite catre reducer

//     // am dat click pe buton, a inceput startLoading
//     dispatch(startLoading());

//     // in functie vreau sa fac request-ul asincron
//     // signInWithGoogle returneaza un PROOMISE, deci am un.then și un .cath
//     signInWithGoogle()
//       .then((response) => {
//         const userData = response.user;
//         // dupa loading vin datele despre user
//         dispatch(updateUserData(userData));
//       })
//       .catch((error) => {
//         dispatch(updateUserError(error));
//       });
//   };
// }

// // functie pentru logarea cu Facebook
// export function signInWithFacebookAction() {
//   return function (dispatch) {
//     // dispatch este o functie care primeste ca parametru rezultatul unei actiuni si o trimite catre reducer

//     // am dat click pe buton, a inceput startLoading
//     dispatch(startLoading());

//     // in functie vreau sa fac request-ul asincron
//     // signInWithGoogle returneaza un PROOMISE, deci am un.then și un .cath
//     signInWithFacebook()
//       .then((response) => {
//         const userData = response.user;
//         // dupa loading vin datele despre user
//         dispatch(updateUserData(userData));
//       })
//       .catch((error) => {
//         dispatch(updateUserError(error));
//       });
//   };
// }

// // este o functie asincrona deci returneeaza o fucntie
// export function signOutAction() {
//   return function (dispatch) {
//     // dispatch este o functie care primeste ca parametru rezultatul unei actiuni si o trimite catre reducer

//     // am dat click pe buton, a inceput startLoading
//     dispatch(startLoading());
//     // fac requst-ul asincron
//     signOut()
//       .then(() => {
//         // pun null pentru ca nu mai am vreun user dupa delogare
//         dispatch(updateUserData(null));
//       })
//       .catch((error) => {
//         dispatch(updateUserError(error));
//       });
//   };
// }