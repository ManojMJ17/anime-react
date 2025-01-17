import React from "react";
import "../components/Navbar.css"; // Ensure TypeScript knows how to handle this
import Container from "../components/Container";
import Search from "../components/Search";
import Sideimg from "../components/Sideimage";
import Finalbutton from "../components/Finalbutoon";

// Define the component as React.FC
const Frontpage: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <div className="min-content">
          <div className="left">
            <Container />
            <Search />
          </div>
          <div className="right">
            <Sideimg />
          </div>
        </div>
      </div>
      <div>
        <Finalbutton />
      </div>
    </>
  );
};

export default Frontpage;
