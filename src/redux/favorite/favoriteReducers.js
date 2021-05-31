// pentru reduceri, initializam un state initial
const initialState = {
  // reprezinta produsele din pagina de favorite, care la inceput sunt zero. Este state-ul initial iar la click pe buton in acest state se vor adauga produsele favorite
  products: [],
};

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      const product = action.payload;
      const newState = {
        // trebuie sa ma asigur ca newState este o copie a state-ului initial cu campul products
        // ...state=continutul state-ului primit ca parametru, adica al array-ului anterior
        ...state,
        products: [
          // la produsele adaugate anterior vreau sa adaug noul produs accesibil prin action.payload
          ...state.products,
          product,
        ]
      };
      // return state modificat
      return newState;
    default:
      return state;
  }
}
export default favoriteReducer;
