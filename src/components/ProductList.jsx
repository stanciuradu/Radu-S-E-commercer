// am de facut o lista de productItem => fac o componenta productList
// primeste un vecotr de produse, itereaza prin el de atatea ori si afiseaza itemuri de ;a productItem

// aceasta lsta de produse vreau sa fie afisata cate trei pe rand
import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const { products } = props;
  return (
    <div className="container">
      <div className="row">
        {products
          ? products.map((product) => {
              return (
                <ProductItem
                  name={product.name}
                  price={product.price}
                  currency={product.currency}
                  image={product.image}
                  key={product.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ProductList;
