import React from "react";
import "./InternationalAlumni.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";

const InternationalAlumni = () => {
  return (
    <>
      <TopNavbar />
      <AboutNavbar />
      <div className="international-alumni-container">
        <h2 className="aic-title">
         INTERNATIONAL ALUMNI
        <span className="underline"></span>
        </h2>

        <div className="content-card">
          <h2>INTERNATIONAL ALUMNI</h2>
          <p>Once a GIETian, always a GIETian. Near or far.</p>
          <p>
            On this page, you’ll find updates from our global alumni
            communities, as well as information on how to join the GIETU global
            alumni network.
          </p>
          <p>
            A GIETian is a GIETian for life, no matter how far apart they are
            from each other. So, we are happy to have graduates from all over
            the world. Our goal is to keep you linked to GIETU long after you
            leave Odisha and help you carry the university spirit with you
            wherever you go.
          </p>
          <p>
            Our international alumni volunteers are among the most active and
            engaged alumni, giving significantly both financially and in terms
            of their time. In addition, our overseas alumni can become involved
            in various ways, including joining a local GIETU Club or gifting to
            the university.
          </p>
          <p>
            There are numerous methods to join the GIETU international alumni
            network. You can begin by contacting your local Alumni Ambassador or
            Committee. Whether you’re an alumnus going to another country, a
            current student wanting to leave India after graduation, or a
            prospective student seeking advice from local graduates, they’d love
            to hear from you.
          </p>
        </div>

        <div className="content-card">
          <h2>ALUMNI COMMITTEES</h2>
          <p>
            Former GIETU students give their time to serve on alumni committees.
            The committees allow alumni to stay in touch with the university and
            one another. In addition, members of the committee help plan events,
            volunteer as mentors, provide a work placement opportunity and
            assist with recruitment efforts.
          </p>
          <p>
            The GIETU network’s reach is ever-expanding and formidable. So
            please stay in touch! We’d want to recognise your achievements, so
            please let us know about your future activities. We enjoy seeing
            photos and learning about your attendance. Send us your success
            stories, and we’ll post them on the Alumni Interaction and
            Achievements page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternationalAlumni;
