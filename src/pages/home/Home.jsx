import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid" id="homePage">
        <div id="homeBox">
          <h1>
            Experience Nature's Refreshment,
            <br /> Crafted with Care,
            <br /> Served with Sunshine.
          </h1>
          <p>
            
            Each sip is a burst of natural goodness, carefully nurtured from
            orchard to bottle. Our commitment to quality and taste ensures that
            every glass of juice delivers pure refreshment, straight from
            nature's bounty.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
