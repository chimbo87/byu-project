import React from "react";
import "./About.css";
import user01 from "../../assets/adrian01.png";
import user02 from "../../assets/archie.jpg";
import user03 from "../../assets/prosper01.png";
import user04 from "../../assets/natasha.jpg";
import Footer from "../../components/footer/Footer";

function About() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <h2>About Us</h2>
      </div>
      <div className="container">
        <div class="row" id="aboutUsBox">
          <h4>Who Are We ?</h4>
          <div class="col-lg-6 col-md-4">
            <div id="aboutUsCard">
              <p>
                Welcome to <b>ALLZ JUICE</b>, where the passion for pure, refreshing
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
                essence of <b>ALLZ JUICE</b>.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="aboutUsCard">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div class="row" id="ourTeamBox">
          <h4>Meet Our Team</h4>
          <div class="col-lg-3 col-md-4">
            <div id="ourTeamCard">
              <img src={user01} />
              <h5 id="teamName">Adrian Oliphant</h5>
              <h5 id="teamTitle">Supply & Operations</h5>
              <div id="ourTeamIcons">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-whatsapp"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="ourTeamCard">
              <img src={user02} />
              <h5 id="teamName">Archford Nhanga</h5>
              <h5 id="teamTitle">Sales & Marketing</h5>
              <div id="ourTeamIcons">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-whatsapp"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="ourTeamCard">
              <img src={user03} />
              <h5 id="teamName">Prosper</h5>
              <h5 id="teamTitle">Analytics & Sales Forecasting</h5>
              <div id="ourTeamIcons">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-whatsapp"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="ourTeamCard">
              <img src={user04} />

              <h5 id="teamName">Natashia</h5>
              <h5 id="teamTitle">Finance & Cost Management</h5>
              <div id="ourTeamIcons">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-whatsapp"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div id="aboutVision">
          <h4>
            Empowering wellness, one sip at a time. At ALLZ JUICE, we're
            dedicated to crafting delicious fruit juices that refresh the body,
            invigorate the spirit, and inspire a healthier lifestyle. Join us on
            a journey of vitality and joy.
          </h4>
        </div>

        <div class="accordion" id="accordionPanelsStayOpenExample">
          <h4>Why Choose Us ?</h4>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                  Premium Quality Ingredients
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                We source only the finest, ripest fruits to create our juices,
                ensuring every bottle is bursting with natural goodness and
                unbeatable flavor. Experience the difference that quality
                ingredients make with every refreshing sip.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
             Variety of Flavors
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                From classic favorites to unique blends, we offer an extensive
                range of fruit juices to tantalize your taste buds and suit
                every craving. Discover new and exciting flavor combinations
                that will keep you coming back for more
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
             Health and Wellness Focus
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Our juices are not only delicious but also packed with essential
                nutrients, vitamins, and antioxidants to support your overall
                well-being. With every sip, you're nourishing your body and
                revitalizing your senses, making healthy living a breeze.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Commitment to Sustainability
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                We're dedicated to protecting the planet as much as we are to
                creating great-tasting juices. That's why we strive to minimize
                our environmental footprint by using eco-friendly packaging and
                implementing sustainable practices throughout our production
                process.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                Customer Satisfaction Guaranteed
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                We take pride in delivering exceptional customer service and
                ensuring your satisfaction with every purchase. If for any
                reason you're not completely happy with your experience, our
                friendly team is here to make it right. Your happiness is our
                top priority.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
