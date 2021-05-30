// // ce state modiifca reducers? State-ul din cart(din pagina de cos de produse)

// // reducer-ul trebuie sa aibe un state initial care este tot un obiect
// // in cart se modifica produsele, deoarece la click pe buton se adauga un produs in cos
// const initialState = {
//     // reprezinta produsele din cart, care la inceput sunt zero. Este state-ul initial iar la click pe buton in acest state se vor adauga produsele
//     products: [],
//   };
  
//   // o functie basic de reducer este o functie care primeste ca parametru un state initial si o actiune si returneaza state-ul initial
//   function cartReducer(state = initialState, action) {
//     // adauga continut pe baza a ce spune actiunea, practic enumaram tipurile de actiune din actions care se vor trasmite catre reducers
//     // ininteriorul unui rducer intotdeauna voi avea niste cazuri, sau tipuri de actiuni care se pot intampla
//     // pun ca aparametru action.type-tipul actiunii pe care vrau sa o evaluez
//     switch (action.type) {
//       case "ADD_TO_CART":
//         // state-ul de produse este state.products
//         // NU MUTATI/MODIIFICATI STATE-UL PRIMIT CA PARAMETRU!!!!!
//         const product = action.payload;
//         // state.products.push(product);
//         // push modifica array-ul pe care e aplicat
  
//         // vreau sa construesct un nou state, pornind de la state-ul primit ca parametru fara a-l modifica, deci newState va contine produse modificate
//         const newState = {
//           // trebuie sa ma asigur ca newState este o copie a state-ului initial cu campul products
//           // ...state=continutul state-ului primit ca parametru, adica al array-ului anterior
//           ...state,
//           products: [
//             // la produsele adaugate anterior vreau sa adaug noul produs accesibil prin action.payload
//             ...state.products,
//             product,
//           ],
//         };
//         // return state modificat
//         return newState;
//       case "REMOVE_FROM_CART":
//         const productRemove = action.payload;
//         const productsFilter = state.products.filter(
//           (product) => product.id !== productRemove.id
//         );
//         const newStateRemove = {
//           ...state,
//           products: productsFilter,
//         };
//         // return state modificat
//         return newStateRemove;
//       // pe cazul defalutl nu intra niciun tip de actiune deci returneaza state-ul primit
//       default:
//         return state;
//     }
//   }
  
//   export default cartReducer;