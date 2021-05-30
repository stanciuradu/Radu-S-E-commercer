// aceasta pagina este cea ce Cart(adica pagina de produse selectate de user la click pe buton)
import React from "react";
import Layout from "../../components/layout/Layout";
import { connect } from "react-redux";
import "./Cart.css";
// import actiunea in pagina de cart
import { removeFromCart } from "../../redux/cart/cartActions";
import { Link } from "react-router-dom";

function Cart(props) {
  const { removeFromCartWithDispatch } = props;
  return (
    // Nu uitam de Layout, pentru a avea Header si Footer
    <Layout>
      <div className="container">
        {
          // Daca avem produse in cart, le afisam.
          // PRODUSELE sunt venite din store si salvate in props prin functia mapStateToProps!!
          props.products.length ? (
            <div className="row">
              {/* Numele coloanelor ce vor fi afisate. */}

              {
                // Afisam produsele din cart.
                props.products.map((product) => {
                  return (
                    <div className="col-12 col-md-4 mb-4">
                      <img src={product.image} alt="Produs" className="w-100" />
                      <div className="cart">
                        <p>{product.name}</p>
                        <p>
                            {product.price} {product.currency}
                        </p>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => {
                            removeFromCartWithDispatch({
                              id: product.id,
                            });
                          }}
                        >
                          Sterge produsul
                        </button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          ) : (
            // Daca nu avem produse in cart afisam un mesaj si un buton care duce la Home.
            <div className="footer-bottom d-flex flex-column align-items-center">
              <p className="h3">Nu ai produse in cart!</p>
              <Link to="/">
                <button className="btn btn-outline-dark">Înapoi la Home</button>
              </Link>
            </div>
          )
        }
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    // itemurile din cart sunt produsele din state
    products: state.cart.products,
  };
}

// functia de mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return {
    // metoda care apeleaza actiunea si o trimite catre store
    removeFromCartWithDispatch: (product) => {
      // rezulttul actiunii in momentul in care este apelata
      const actionResult = removeFromCart(product);
      // vreau sa ajunga rezultatul actinii catre reducer cu dispatch
      // iar reducer-ul va modofica store-ul
      dispatch(actionResult);
    },
  };
}
// am nevoie de mapStateToProps ca sa ma abonez la cart si sa afisez produsele si de mapDispatchToProps pentru a modifica state-ul
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
