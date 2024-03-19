import React from "react";
import "./Home.css";
import Offer01 from "../../assets/offer01.png";
import Offer02 from "../../assets/offer02.png";
import Offer03 from "../../assets/offer03.png";
import Offer04 from "../../assets/offer04.png";
import banner from "../../assets/banner06.jpeg";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <>
      <div className="container-fluid" id="homePage">
        <div className="container">
          <div id="homeBox">
            <h1>
              Experience Nature's Refreshment,
              <br /> Crafted with Care,
              <br /> Served with Sunshine.
            </h1>
            <p>
              Each sip is a burst of natural goodness, carefully nurtured from
              orchard to bottle. Our commitment to quality and taste ensures
              that every glass of juice delivers pure refreshment, straight from
              nature's bounty.
            </p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="homeOfferBox">
          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div id="offerCard">
                <img src={Offer01} alt="" />
                <h4>Fast Delivery</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div id="offerCard">
                <img src={Offer02} alt="" />
                <h4>Fresh</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div id="offerCard">
                <img src={Offer03} alt="" />
                <h4>Nutritious</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div id="offerCard">
                <img src={Offer04} alt="" />
                <h4>Affordable</h4>
              </div>
            </div>
          </div>
          <div id="newsLetterBox">
            <h4>Please subscribe to our news letters</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div id="newsLetterBoxCard">
              <input type="email" placeholder="Email Address" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div class="row" id="homeAboutBox">
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutBoxCard">
              <h4>Who Are We ?</h4>
              <p>
                Welcome to Muonde Juice, where the passion for pure, refreshing
                fruit juices meets community spirit! Founded by a group of
                neighbors with a shared love for wholesome living, our journey
                began right in our own backyard. What started as a small
                initiative has blossomed into a thriving venture, spreading the
                joy of fresh fruit goodness beyond our neighborhood borders.
                Committed to quality and authenticity, we handpick the finest
                fruits and craft them into delightful juices that capture the
                essence of nature's bounty. As we continue to grow, our mission
                remains unchanged: to bring the taste of our orchard to towns
                far and wide, nurturing health and happiness one sip at a time.
                Join us on this flavorful expedition and experience the true
                essence of Muonde Juice.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutBoxCard">
              <img src={banner} />
            </div>
          </div>
        </div>

        <div class="row" id="homeProduct">
          <div class="col-lg-4 col-md-4">
            <div id="homeProductCard">
              <div id="homeProductCardHead">
                <h5>Natural Ingredients</h5>
              </div>
              <div id="homeProductCardText">
                <p>
                  {" "}
                  Immerse yourself in the essence of nature with our commitment
                  to using only the freshest and most wholesome ingredients.
                  Each sip of our juices is a celebration of purity, crafted
                  from handpicked fruits straight from the orchard. Experience
                  the goodness of nature, bottled just for you
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="homeProductCardA">
              <div id="homeProductCardHead">
                <h5>Fresh & Refreshing</h5>
              </div>
              <div id="homeProductCardText">
                <p>
                  Quench your thirst with our irresistibly fresh and endlessly
                  refreshing juices. Bursting with vibrant flavors and crisp
                  textures, each sip is a revitalizing experience for your taste
                  buds. Whether you're lounging by the pool or on-the-go, our
                  juices are the perfect companion for every moment, keeping you
                  cool, hydrated, and fully alive.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="homeProductCardB">
              <div id="homeProductCardHead">
                <h5>Detoxify</h5>
              </div>
              <div id="homeProductCardText">
                <p>
                  Elevate your well-being with our detoxifying blends, carefully
                  crafted to rejuvenate your body and invigorate your senses.
                  Packed with nutrients and antioxidants, our juices offer a
                  refreshing escape from the stresses of modern life. Embrace a
                  healthier lifestyle and embark on a journey to cleanse,
                  revitalize, and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
