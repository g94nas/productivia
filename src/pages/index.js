import React from "react";
import Header from "../components/header/Header";
import MainSection from "../components/mainsection/MainSection";
import MainFeatures from "../components/mainfeatures/MainFeatures";
import Footer from "../components/footer/Footer";
import { mainSection1, mainSection2 } from "../components/mainsection/Data";

const Home = () => {
  return (
    <>
      <Header />
      <MainSection {...mainSection1} />
      <MainFeatures />
      <MainSection {...mainSection2} />
      <Footer />
    </>
  );
};

export default Home;
