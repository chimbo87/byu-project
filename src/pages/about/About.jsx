import React from "react";
import "./About.css";
import user01 from "../../assets/user03.jpg";
import user02 from "../../assets/user01.jpeg";
import user03 from "../../assets/user02.jpeg";
import user04 from "../../assets/user03.jpg";
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
              <h5 id="teamName">Archford Nhanga</h5>
              <h5 id="teamTitle">Technical Manager</h5>
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
              <h5 id="teamName">Archford Nhanga</h5>
              <h5 id="teamTitle">Technical Manager</h5>
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
              <img src={user01} />
              <h5 id="teamName">Archford Nhanga</h5>
              <h5 id="teamTitle">Technical Manager</h5>
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

              <h5 id="teamName">Archford Nhanga</h5>
              <h5 id="teamTitle">Technical Manager</h5>
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
            Empowering wellness, one sip at a time. At Mukuyu Juice, we're
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
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
            
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
            
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
