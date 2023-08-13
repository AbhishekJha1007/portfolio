/* eslint-disable no-unused-vars */
import React from 'react';
import Payment from "../../Assets/payment.gif";
import Movie from "../../Assets/movie.gif";
import Event from "../../Assets/event.gif"

const Menu = [
  {
    id:1,
    image: Payment,
    title: "Payment Page",
    subtitle:"A payment page created for EDYODA which serves as a payment gateway for users to enroll in online courses. This project utilizes frameworks like Create React App along with tools like Figma for UI Design.",
    category: "Website",
  },
  {
    id:2,
    image: Movie,
    title: "Movie App",
    subtitle: "Experience the ultimate movie discovery and tracking experience with our Vue.js web application. Our app is built with Node.js and seamlessly taps into IMDb’s API to provide you with a captivating and user-friendly interface. Unleash your passion for movies and discover new favorites today !",
    category: "Website",
  },
  {
    id:3,
    image: Event,
    title: "Event Management Platform",
    subtitle: "Our carefully chosen tools and frameworks enable a streamlined event planning process,ensuring a seamless experience for all. An event management website built with WordPress empowers users to effortlessly plan and book weddings, birthdays, and corporate events.",
  },
];
export default Menu