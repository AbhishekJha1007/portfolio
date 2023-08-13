/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./services.css";
import Image1 from "../../Assets/coding.jpg";

const data = [
  {
  id:1,
  image: Image1,
  title: "Web Development",
  description: "I build responsive websites",
  },
];

const Services = () => {
  return (
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
  );
};

export default Services;