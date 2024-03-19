import React from "react";
import "./About.css";
import user01 from "../../assets/user03.jpg";

function About() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <h2>About Us</h2>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="aboutUsCard">
              <h4>Who Are We ?</h4>
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
                <i class='bx bxl-linkedin'></i>
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
                <i class='bx bxl-linkedin'></i>
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
                <i class='bx bxl-linkedin'></i>
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
                <i class='bx bxl-linkedin'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
