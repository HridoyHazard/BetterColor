import React from "react";
import colorContrast from "color-contrast";
import { AiFillFacebook } from "react-icons/ai";
import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      {/* Header App */}
      <Nav />
      <Header />
      {/* Main App */}
      <Main />
      {/* Footer App */}
      <Footer />
    </>
  );
}
