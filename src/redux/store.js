// cod de configurare- de creare a store-ului
// se impota functia createStore din Redux și un reducer
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import reducer-ul din fisierul cart
import cartReducer from "./cart/cartReducers";
import { userReducer } from './user/userReducers';
import favoriteReducer from './favorite/favoriteReducers';


const rootReducer = combineReducers({ cart: cartReducer, user: userReducer, favorite:favoriteReducer})
// am creat store-ul pe baza unui cartReducer
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;