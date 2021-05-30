import React from "react";
import Layout from "../../components/layout/Layout";
import "./About.css";

function About() {
  return (
    <div className="container">
      <Layout>
        <h1 className="title">About</h1>
        <p className="paragraf-about">
          Acest E-commerce reprezintă un magazin online realizat cu tehnologii
          avansate dedicat pasionaților de cumpărături!
        </p>
        <div className="logo-cumparaturi">
          <img
            src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
            alt=""
            className="w-50"
          />
        </div>
      </Layout>
    </div>
  );
}

export default About;
