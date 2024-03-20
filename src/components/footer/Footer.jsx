import React from "react";
import "./Footer.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Footer() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Absolutely love the fresh flavors! A burst of sunshine in every sip{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C, Zimbabwe ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Refreshing and delicious! Perfect for a pick-me-up anytime.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          John Doe, USA C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          My new go-to for natural hydration. Simply delightful!{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Trish G, Brazil ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Incredible taste, and I feel great knowing it's all-natural{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Travor S ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Best fruit juices I've ever tasted. Pure perfection!{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Lylod P, S Africa C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Every flavor is a masterpiece. Truly a treat for the senses.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Tatenda B, Mozambique C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          So glad I discovered these juices. Pure bliss in a bottle!{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Healthy never tasted so good! These juices are a game-changer.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          My family can't get enough! Thank you for keeping us refreshed{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          From the first sip to the last drop, these juices are pure happiness!{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <div className="container-fluid" id="footerPage">
      <div className="container" id="footerPageBox">
        <div id="footerTextTop">
          <div className="container" id="theParterPageSection">
            <h2>Testimonials</h2>
            <h4>What our clients say about us</h4>
            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay
              disableButtonsControls={true}
              disableDotsControls={false}
              infinite={true}
              autoPlayInterval={3000}
              responsive={responsive}
            />
          </div>
        </div>

        <div class="row" id="footerTextBottom">
          <div class="col-lg-8 col-md-4">
            <div id="footerTextBottomCard">
              {" "}
              <h2>GET IN TOUCH !</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="footerTextBottomCard">
              {" "}
              <p>
                <i class="bx bxs-phone"></i> +123 4567 789
              </p>
              <p>
                <i class="bx bxs-map"></i> 123 Mars Street , Mars Planet
              </p>
              <p>
                <i class="bx bxs-envelope"></i> example@mars.com
              </p>
            </div>
          </div>
          <div id="footerRightCard">
            <small>
              {" "}
              &copy; Mauyu Juices 2024. Developed by{" "}
              <a href="https://wa.me/27677366141" target="_blank">
                CHIMBO
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
