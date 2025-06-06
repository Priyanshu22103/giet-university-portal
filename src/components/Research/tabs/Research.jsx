import React, { lazy, Suspense, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Research.css";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";

const ResearchOverview = lazy(() => import("./ResearchOverview"));
const FundedProjects = lazy(() => import("./FundedProjects"));
const Patents = lazy(() => import("./Patents"));
const BooksAndChapters = lazy(() => import("./BooksAndChapters"));
const Publications = lazy(() => import("./Publications"));
const Facilities = lazy(() => import("./Facilities"));
const MoUs = lazy(() => import("./MoUs"));
const Conferences = lazy(() => import("./Conferences"));
const Consultancy = lazy(() => import("./Consultancy"));
const Gallery = lazy(() => import("./Gallery"));

const tabRoutes = [
  { key: "research", label: "Research", component: <ResearchOverview /> },
  { key: "funded-projects", label: "Funded Projects", component: <FundedProjects /> },
  { key: "patents", label: "Patents", component: <Patents /> },
  { key: "books-chapters", label: "Books & Chapters", component: <BooksAndChapters /> },
  { key: "publications", label: "Publications", component: <Publications /> },
  { key: "facilities", label: "Facilities", component: <Facilities /> },
  { key: "mous", label: "MoUs", component: <MoUs /> },
  { key: "conferences", label: "Conferences", component: <Conferences /> },
  { key: "consultancy", label: "Consultancy", component: <Consultancy /> },
  { key: "gallery", label: "Gallery", component: <Gallery /> },
];

const Research = () => {
  const [activeTab, setActiveTab] = useState("research");

  const currentTab = tabRoutes.find(tab => tab.key === activeTab);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="research-page" style={{ backgroundColor: 'white', color: 'black' }}>
        <div style={{ marginTop: '-30px' }}>
        </div>
        <h1 className="title" style={{ marginTop: '90px', marginLeft: '34px' }}>RESEARCH</h1>
        <div className="divider" style={{ marginLeft: "795px", width: '90px' }}>
          <div className="blue-bar"></div>
          <div className="orange-bar"></div>
        </div>

        {/* Sectional Navbar */}
        <div className="about-nav-container">
          <nav className="about-nav">
            {tabRoutes.map((tab) => (
              <button
                key={tab.key}
                className={
                  activeTab === tab.key
                    ? "about-nav-link active-link"
                    : "about-nav-link"
                }
                onClick={() => setActiveTab(tab.key)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <Suspense
          fallback={
            <div className="loader-container">
              <ClipLoader color="#36d7b7" loading={true} size={60} />
            </div>
          }
        >
          <div className="tab-content">{currentTab.component}</div>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Research;