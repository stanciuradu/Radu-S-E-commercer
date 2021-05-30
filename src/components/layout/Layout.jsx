// componenta Layout are Header si footer care ii sunt pasate ca propsu-rui pentru sunt copii ei
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
