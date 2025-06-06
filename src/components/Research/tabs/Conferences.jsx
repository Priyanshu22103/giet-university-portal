// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import { useEffect } from "react";
const Conferences = () => {
  useEffect(() => {
        document.title = 'Conferences-GIET University | Odisha | Gunupur'; 
    },[])
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "359px",color:'black' }}>
        Conferences
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        style={{ textAlign: "justify", fontSize: "18px", lineHeight: "30px" }}
      >
        Conferences are a way for people to discuss or have a discussion about a
        particular topic. Conferences form the heart of GIET University and they
        are conducted from time to time to encourage innovative ideas,
        discussions and gathering new information and knowledge from experts in
        the form of exchange.
        <br />
        <br />
        The Academic Conferences have been supporting the Academic Community of
        GIET University for many years now. It is a gathering of scientists or
        academicians where the research findings are presented and or a workshop
        is conducted.
        <br />
        <br />
        Participation of students, teachers and community members in live events
        is a central component of GIET University experience. Conferences,
        discussion panels, convocations, lectures, concerts, sporting events,
        non-credit and community programs, symposia, and performances are
        conduced regularly in GIET University that provides opportunities to
        share important perspectives, commemorate experiences, find
        commonalities with others, create meaningful networks between members of
        our community, and strengthen bonds of the students with the university
        and university life.
      </div>
      <div
        style={{ fontSize: "18px", textAlign: "justify", lineHeight: "30px" }}
      >
        <ul style={{ paddingLeft: "18px" }}>
          <li>
            Connecting, learning, experiencing and finding gratification through
            these shared processes and experiences contribute greatly to the
            academic and mental health of our community at GEIT University.
          </li>
          <li>
            The University offers many discipline-centered specific professional
            meetings and conferences that invite students to share their works
            and experience as short presentations.
          </li>
          <li>
            The conferences held at GIET are a great venue to share the work of
            teachers and students in a comfortable atmosphere with fellow
            faculty, students and community members. Students of GIET University
            are allowed access to a number of Technology spaces to prepare and
            practice their presentation.
          </li>
        </ul>
      </div>
      <div style={{ backgroundColor: "darkblue" }}>
        <h2 style={{ paddingLeft: "140px" }}>
          DEPT. OF ELECTRONICS AND COMMUNICATION ENGG.
        </h2>
      </div>
      <div
        style={{ backgroundColor: "yellow", height: "6px", marginTop: "-20px" }}
      ></div>
      <br />
      <br />
      <div style={{ overflowX: "auto", margin: "0 20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
                      fontSize: "18px",
        
          }}
        >
          <thead style={{ backgroundColor: "#1a1a1a", color: "white" }}>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Sl No
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Academic Year
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Name of the National /International Conference
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>1</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2020–2021
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on Next Generation of Internet of
                Things (ICNGIoT-2021)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                05 – 06 February 2021
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>2</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2020–2021
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International E-Conference on COVID-19: Emergence, Resurgence
                and its Control – The Way Forward
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                8th & 9th January 2021
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>3</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2020–2021
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                AICTE Sponsored Two Days National Conference
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                6th & 8th Nov 2020
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>4</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2020–2021
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on Computer Science, Engineering and
                Applications (ICCSEA 2020)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                March 13 – 14, 2020
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>5</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2020–2021
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                IEEE International Symposium on Sustainable Energy, Signal
                Processing & Cyber Security
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                16th to 17th Dec 2020
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>6</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2019–2020
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on Innovations in Bio-Inspired
                Computing and Applications
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                17th Dec to 18th Dec 2019
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>7</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2019–2020
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on “Advancement of Biotechnology in
                Healthcare, Bioproducts and Environmental Research”
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                from 13th Dec to 14th Dec 2019
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>8</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2019–2020
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                10th International Conference on “Innovations in Bio-Inspired
                Computing and Applications (IBICA-2019)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                16th to 18th December 2019
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>9</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2019–2020
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                9th World Congress on Information and Communication Technologies
                (WICT-2019)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                16th to 18th December 2019
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>10</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2018–2019
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on Future Trends in Engineering,
                Management, Science and Technologies (ICFTEMST-2019)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                5th and 6th January 2019
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>11</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2017–2018
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                Second International Conference on Communication Control and
                Instrumentation (ICCCI-2018)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                18th and 19th January 2018
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>12</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2016–2017
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                International Conference on Communication Control and
                Instrumentation (ICCCI-2017)
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                21st to 22nd January 2017
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>13</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                2015–2016
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                Two Days National Seminar on Communication Control and
                Instrumentation
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                7th and 8th November 2015
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Conferences;
