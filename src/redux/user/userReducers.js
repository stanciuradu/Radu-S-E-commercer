
// creezz un reducer pentru user
// logarea user-ului este ASINCRONA, DECI AM UN LOADING SI O EROARE
const initialState = {
    // datele despre user care initial sunt nule
    data: null,
    // pana sa se logheze user-ul, avem loading false
    loading: false,
    // eraorea este la inceput null
    error: null,
  };
  
  export function userReducer(state = initialState, action) {
    switch (action.type) {
      case "START_LOADING":
        return {
          // iau campurile anterioroe din state si pun loading pe true (fac toggle la un boolean)
          ...state,
          loading: true,
        };
      case "UPDATE_USER_DATA":
        return {
          // iau state-ul anterior
          ...state,
          // iau datele din action.payload
          data: action.payload,
          // odata ce au venit datele, loading este pe false
          loading: false,
          error: null,
        };
      case "UPDATE_USER_ERROR":
        return {
          ...state,
          // iau eroarea din action.payload
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }