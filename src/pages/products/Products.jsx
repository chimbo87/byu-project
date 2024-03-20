import React from "react";
import "./Products.css";
import Juice01 from "../../assets/juice06.jpeg";
import Juice02 from "../../assets/juice04.jpeg";
import Juice03 from "../../assets/juice01.jpeg";

function Products() {
  return (
    <>
      <div className="container-fluid" id="productPage">
        <h1>Our Products</h1>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice02} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice03} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice02} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice03} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice02} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-4">
            <div id="productCard">
              <div id="productInnerCard">
                <img src={Juice03} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
              <div id="productInnerCardB">
                <img src={Juice01} />
                <h5>Tropical Juice</h5>
                <div id="productInnerCardText">
                  <small id="productInnerCardTextSmall">Ingredients:</small>
                  <small>
                    Apples,Oranges, Water, Citric Acid, Sugar, water
                  </small>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
