// cod de configurare- de creare a store-ului
// se impota functia createStore din Redux și un reducer
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import reducer-ul din fisierul cart
import cartReducer from "./cart/cartReducers";
import { userReducer } from './user/userReducers';


const rootReducer = combineReducers({ cart: cartReducer, user: userReducer })
// am creat store-ul pe baza unui cartReducer
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;