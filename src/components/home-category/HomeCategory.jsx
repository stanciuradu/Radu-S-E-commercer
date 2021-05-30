import React from "react";
import { Link } from "react-router-dom";
import "./HomeCategory.css";

function HomeCategory(props) {
  // de la back-edn imi vine 3 props-uri
  const { image, title, description, routeName } = props;
  return (
    // mut toata stilizarea lui col-6 in Home Category
    <div className="col-12 col-md-6 mb-4">
      <Link to={`/category/${routeName}`} id="link">
        {/* nu stim inca ce imagine si ce date vom primi de la back-end */}
        {/* tocmai de aceea iau ceva fictiv si pun pentru a testa, iar in primul pas nu tin cont de props */}
        {/* vreau ca imaginea sa ocupe jumatate din sectiunea de pe ecran, adica sa aibe latimea de 100% */}

        {/* in momentul de fata props-urile nu sunt pasate pentru a fi fi afisate */}
        <img className="w-100" src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default HomeCategory;
