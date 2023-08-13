/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./pricing.css";
import Image1 from "../../Assets/pricing1.png";
import Image2 from "../../Assets/pricing2.png";
import Image3 from "../../Assets/pricing3.png";

const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">A simple option but great to begin with for your business.</p>
          <p className="pricing__support">Email support</p>
          <h3 className="price">
            <em>Rs.</em> 199 <span>Month</span>
          </h3>
          <a href="" className="btn">Select Plan</a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Get access to all the features available and more.</p>
          <p className="pricing__support">Mon-Fri support</p>
          <h3 className="price">
            <em>Rs.</em> 499 <span>Month</span>
          </h3>
          <a href="" className="btn">Select Plan</a>
        </div>

        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">A great option used by our client for handling large scale business and individuals </p>
          <p className="pricing__support">24/7 support</p>
          <h3 className="price">
            <em>Rs.</em> 999 <span>Month</span>
          </h3>
          <a href="" className="btn">Select Plan</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing