// in Header pun niste Linkuri pentru SPA. Pun Link adaptat pentru SPA, DIN PACHETUL react-router
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/emblemă-magazin.png';
import './Header.css';
import { ReactComponent as Login } from '../../assets/Icons/login.svg';
import { ReactComponent as Cart } from '../../assets/Icons/cart.svg';
import { ReactComponent as Favorite } from '../../assets/Icons/favorite-icon.svg';
import { connect } from "react-redux";
import { signOutAction } from '../../redux/user/userActions';


function Header(props) {
    const { numberOfProducts, user, signOutWithDispatch, numberOfProductsFavorite } = props;

    function signOutUser() {
        signOutWithDispatch();
    }

    return (
        // adau din bosstrap clasa container pentrua elimina spatiile si pentru a centra headeru-ul cu produsele
        <div className='header container'>
            <Link to="/">
                <img src={logo} alt="text-logo" />
            </Link>
            <div className='login'>
                {/* aici o sa punem un operator ternar */}
                {/* campul displayName sugereaza titlul utilizatorului */}

                <Login id='icon' />
                {/* daca user-u este logat afiseaza numele lui și butonul de delogare, altfel, afiseaza link-ul pentru logare */}
                {
                    user
                        ? <div>
                            <p>{user.displayName}</p>
                            <button
                                className='btn btn-outline-dark'
                                onClick={() => signOutUser()}
                            >Sign Out</button>
                        </div>
                        : <Link to="/login" className='link'>Sign in</Link>
                }
                <Link to='/cart'>
                    <Cart />
                </Link>
                <p className='ml-2'>{numberOfProducts}</p>
                <Link to='/favorite'>
                    <Favorite/>
                </Link>
                <p className='ml-2'>{numberOfProductsFavorite}</p>
            </div>
        </div>
    );
}


// mapStateToProps este o functie care returneaza un obiect si o pasez ca parametru cand vreau sa ma conectez
// primeste ca parametru intregul state existent in store
function mapStateToProps(state) {
    return {
        // extrag din store nr de produse, dar acum sunt din cart
        numberOfProducts: state.cart.products.length,
        numberOfProductsFavorite:state.favorite.products.length,
        user: state.user.data
    };
}
// cand creez o actiune vreau sa mi se modifice store-ul, deci fac mapDispatchToProps
function mapDispatchToProps(dispatch) {
    return {
        signOutWithDispatch: () => {
            // apelez actiunea si o trimit catre rducer cu dispatch
            const actionResult = signOutAction();
            dispatch(actionResult);
        }
    }
}

// vreau doar sa ma abonez la store, deci pun mapStateToProps
// connect este un HOC care injecteaza props-uri la componente
export default connect(mapStateToProps, mapDispatchToProps)(Header);
