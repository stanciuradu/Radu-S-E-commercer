import React from "react";
import Layout from "../../components/layout/Layout";
import "../Favorite/Favorite.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorite.css";

function Favorite(props) {
  const { products } = props;
  return (
    <Layout>
      <div className="container">
        {products.length ? (
          <div className="row">
            {/* Numele coloanelor ce vor fi afisate. */}

            {
              // Afisam produsele din pagina de Favorite
              products.map((product) => {
                return (
                  <div className="col-12 col-md-4 mb-4">
                    <img src={product.image} alt="Produs" className="w-100" />
                    <div className="cart">
                      <p>{product.name}</p>
                      <p>
                        {product.price} {product.currency}
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        ) : (
          // Daca nu avem produse in pagina de Favorite afisam un mesaj si un buton care duce la Home.
          <div className="footer-bottom-favorite d-flex flex-column align-items-center">
            <p className="h3-favorite">Nu ai produse adăugate la favorite!</p>
            <Link to="/">
              <button className="btn btn-danger">Înapoi la Home</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    products: state.favorite.products,
  };
}
// folosesc mapStatToProps pentru a lua din store produsele si a ale afisa pe ecran
export default connect(mapStateToProps)(Favorite);
