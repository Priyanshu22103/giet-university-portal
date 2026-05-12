import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/Home/ScrollToTop';

import SeasonalAnimation from "./components/Home/SeasonalAnimation";
import Navbar from "./components/Home/Navbar";
import HeaderVideo from "./components/Home/HeaderVideo";
import ScrollDown from "./components/Home/ScrollDown";
import AwardSection from "./components/Home/AwardSection";
import AboutSection from "./components/Home/AboutSection";
import StatsSection from "./components/Home/StatsSection";
import WhyGietSection from "./components/Home/WhyGietSection";
import Research from "./components/Research/tabs/Research";
import ApplyNow from "./components/Research/ApplyNow";
import LifeAtGiet from "./components/Home/LifeAtGiet";
import LifeDetail from "./components/Home/LifeDetail";
import ProgrammesSection from "./components/Home/ProgrammesSection";
import TrainingPlacements from "./components/Home/TrainingPlacements";
import SocialBar from "./components/Home/SocialBar";
import Footer from "./components/Home/Footer";
import TestimonialCard from "./components/Home/TestimonialCard";
import CallbackSection from "./components/Home/CallbackSection";
import HighlightsSection from "./components/Home/HighlightsSection";

//Home HighlightSection
import CulturalNights from "./components/Home/CulturalNights";
import International from "./components/Home/International.jsx";
import Convocation from "./components/Home/Convocation.jsx";
import BestUniversity from "./components/Home/BestUniversity.jsx";
import TeamGladiator from "./components/Home/TeamGladiator.jsx";



import ContactUs from "./components/ContactUs/ContactUs";
import NAAC from "./components/NAAC/NAAC";
import NIRF from "./components/NIRF/NIRF";
import Criteria11 from "./components/Criteria-1/Criteria11.jsx";
import Criteria12 from "./components/Criteria-1/Criteria12.jsx";
import Criteria13 from "./components/Criteria-1/Criteria13.jsx";
import Criteria21 from "./components/Criteria-2/Criteria21.jsx";
import Criteria22 from "./components/Criteria-2/Criteria22.jsx";
import Criteria23 from "./components/Criteria-2/Criteria23.jsx";
import Criteria31 from "./components/Criteria-3/Criteria31.jsx";
import Criteria32 from "./components/Criteria-3/Criteria32.jsx";
import Criteria33 from "./components/Criteria-3/Criteria33.jsx";
import Criteria41 from "./components/Criteria-4/Criteria41.jsx";
import Criteria42 from "./components/Criteria-4/Criteria42.jsx";
import Criteria43 from "./components/Criteria-4/Criteria43.jsx";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm.jsx"; 

//Placements
import PlacementTabs from "./components/Placements/PlacementTabs.jsx";

//Alumni
import AboutNavbar from "./components/AboutGIET/Navbar.jsx"; 
import AboutAlumni from "./components/Alumni/AboutGIETU.jsx";
import OurAlumni from "./components/Alumni/OurAlumni.jsx";
import AlumniMeet from "./components/Alumni/AlumniMeet.jsx";
import InteractionDetail from "./components/Alumni/InteractionDetail.jsx";
import InternationalAlumni from "./components/Alumni/InternationalAlumni.jsx";
import Achievements from "./components/Alumni/Achievements.jsx";
import AlumniInteraction from "./components/Alumni/AlumniInteraction.jsx";
import AlumniTestimonials from "./components/Alumni/AlumniTestimonials.jsx";

//Programmes
import VisionMission from './components/Programmes/VisionMission.jsx';
import Layout from './components/Programmes/Layout.jsx';
import Programmes from './components/Programmes/Programmes.jsx';
import School from './components/Programmes/School.jsx';
import SchoolDetail from './components/Programmes/SchoolDetail.jsx';
import Authorities from './components/Programmes/Authorities.jsx';
// import SoePage from './components/Programmes/SoePage.jsx';
import Innovation from './components/Programmes/Innovation.jsx';
import Iqac from './components/Programmes/IQAC.jsx';
import AcademicIntegrityCommittee from './components/Programmes/AcademicIntegrityCommittee.jsx';

//admission
import AdmLayout from './components/Admissions/Layout.jsx';
import AdmOverview from './components/Admissions/Overview.jsx';
import AdmGIETEE from './components/Admissions/GIETEE.jsx';
import ProgrammesFeeStructure from './components/Admissions/ProgrammesFeeStructure.jsx';
import OnlinePayment from './components/Admissions/OnlinePayment.jsx';
import AdmissionAssistance from './components/Admissions/AdmissionAssistance.jsx';
import FAQ from './components/Admissions/FAQ.jsx';
import AdmApplyOnline from './components/Admissions/ApplyOnline.jsx';
import AdmApplicationProcess from './components/Admissions/ApplicationProcess.jsx';
import HdfcForm from './components/Admissions/HdfcForm.jsx'; 

//academics
// import AcadNavbar from "./components/AcademicsAdditional/Navbar.jsx"
// import LearningAndPedagogy from "./components/Academics/LearningAndPedagogy";
import StudentClubs from "./components/Academics/StudentClubs";
import Downloads from "./components/Academics/Downloads";
import InnovationAndIncubation from "./components/Academics/InnovationAndIncubation";
import KnowledgePartners from "./components/Academics/KnowledgePartners";
import StudentSupport from "./components/Academics/StudentSupport";
import PhysicalFacilities from "./components/Academics/PhysicalFacilities";
import MandatoryDisclosures from "./components/Academics/MandatoryDisclosures";
import AcademicIntegrity from "./components/Academics/AcademicIntegrity";
import AcadMoUs from "./components/Academics/MoUs";
import CentralLibrary from "./components/Academics/CentralLibrary";
import ProctorMechanism from "./components/Academics/ProctorMechanism";
import Incubatex from "./components/Academics/Incubatex";
import AcadAuthorities from "./components/Academics/Authorities";
import AcademicRegulations from "./components/Academics/AcademicRegulations";
import Faculty from "./components/Academics/Faculty";
import AcademicCalendar from "./components/Academics/AcademicCalendar";
import Syllabus from "./components/Academics/Syllabus";

//happenings
// import HppnNavbar from "./components/Navbar";
import HppnEvents from "./components/Happenings/Events";
import HppnAchievements from "./components/Happenings/Achievements";
import HppnConferenceVideos from "./components/Happenings/ConferenceVideos";
import HppnNews from "./components/Happenings/News";
import HppnMedia from "./components/Happenings/Media";
import HppnNotices from "./components/Happenings/Notices";
import HppnAnnouncements from "./components/Happenings/Announcements";
import HppnCampusFlash from "./components/Happenings/CampusFlash";
// import HppnLifeAtGIETU from "./components/Happenings/LifeAtGIETU";

//Examinations
import Notice from './components/Examinations/Notice';
import ExamDownloads from './components/Examinations/Downloads';
import Instruction from './components/Examinations/Instruction';
import CGPACalculator from './components/Examinations/CGPACalculator';
import DocumentVerification from './components/Examinations/DocumentVerification';
import ExamContactUs from "./components/Examinations/ContactUs.jsx";
function App() {
  return (
    <>
      <Router>
        <SocialBar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <SeasonalAnimation /> */}
                <Navbar />
                <HeaderVideo />
                <ScrollDown />
                <AwardSection />
                <AboutSection />
                <StatsSection />
                <WhyGietSection />
                <LifeAtGiet />
                <ProgrammesSection />
                <TrainingPlacements />
                <HighlightsSection />
                <TestimonialCard />
                <CallbackSection />
                <Footer />
              </>
            }
          />
          
          <Route path="/life-at-giet/:id" element={<LifeDetail />} />
          <Route path="/cultural-nights" element={<CulturalNights />} />
          <Route path="/international-alumni" element={<International />} />
          <Route path="/convocation" element={<Convocation />} />
          <Route path="/best-university" element={<BestUniversity />} />
          <Route path="/team-gladiators" element={<TeamGladiator />} />



          <Route path="/criteria-1.1" element={<Criteria11 />} />
          <Route path="/criteria-1.2" element={<Criteria12 />} />
          <Route path="/criteria-1.3" element={<Criteria13 />} />
          <Route path="/criteria-2.1" element={<Criteria21 />} />
          <Route path="/criteria-2.2" element={<Criteria22 />} />
          <Route path="/criteria-2.3" element={<Criteria23 />} />
          <Route path="/criteria-3.1" element={<Criteria31 />} />
          <Route path="/criteria-3.2" element={<Criteria32 />} />
          <Route path="/criteria-3.3" element={<Criteria33 />} />
          <Route path="/criteria-4.1" element={<Criteria41 />} />
          <Route path="/criteria-4.2" element={<Criteria42 />} />
          <Route path="/criteria-4.3" element={<Criteria43 />} />
          <Route path="/research" element={<Research />} />
          <Route path="/applynow" element={<ApplyNow />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/naac" element={<NAAC />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/placements" element={<PlacementTabs />} />
          <Route path="/about-gietu" element={<AboutNavbar />} />

          <Route path="/overview" element={<AboutAlumni/>}/>
          <Route path="/ouralumni" element={<OurAlumni />} />
          <Route path="/alumnimeet" element={<AlumniMeet />} />
          <Route path="/alumnitestimonials" element={<AlumniTestimonials />} />
          <Route path="/alumniinteraction" element={<AlumniInteraction />} />
          <Route path="/alumniinteraction/:id" element={<InteractionDetail />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/internationalalumni" element={<InternationalAlumni />} />

          <Route path="/programmes" element={<Layout><Programmes /></Layout>} />
          <Route path="/vision-mission" element={<Layout><VisionMission /></Layout>} /> 
          <Route path="/school" element={<Layout><School /></Layout>} />
          <Route path="/school/:id" element={<Layout><SchoolDetail /></Layout>} />
          <Route path="/authorities" element={<Layout><Authorities /></Layout>} />
          <Route path="/innovations" element={<Layout><Innovation /></Layout>} />
          <Route path="/iqac" element={<Layout><Iqac /></Layout>} />
          <Route path="/academic-integrity-committee" element={<Layout><AcademicIntegrityCommittee /></Layout>} />
          
           <Route path="/acad-overview" element={<AdmLayout><AdmOverview /></AdmLayout>} />
           <Route path="/gietee" element={<AdmLayout><AdmGIETEE/></AdmLayout>} />
           <Route path="/application-process" element={<AdmLayout><AdmApplicationProcess /></AdmLayout>} />
           <Route path="/programmes-fee-structure" element={<AdmLayout><ProgrammesFeeStructure /></AdmLayout>} />
           <Route path="/online-payment" element={<AdmLayout><OnlinePayment /></AdmLayout>} />
           <Route path="/admission-assistance" element={<AdmLayout><AdmissionAssistance /></AdmLayout>} />
           <Route path="/faq" element={<AdmLayout><FAQ /></AdmLayout>} />
           <Route path="/apply-online" element={<AdmLayout><AdmApplyOnline /></AdmLayout>} />
           <Route path="/hdfc-form" element={<AdmLayout><HdfcForm /></AdmLayout>} />

        <Route path="/student-clubs" element={<StudentClubs />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/innovation-incubation" element={<InnovationAndIncubation />} />
        <Route path="/knowledge-partners" element={<KnowledgePartners />} />
        <Route path="/student-support" element={<StudentSupport />} />
        <Route path="/physical-facilities" element={<PhysicalFacilities />} />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />} />
        <Route path="/academic-integrity" element={<AcademicIntegrity />} />
        <Route path="/mous" element={<AcadMoUs />} />
        <Route path="/central-library" element={<CentralLibrary />} />
        <Route path="/proctor-mechanism" element={<ProctorMechanism />} />
        <Route path="/incubatex" element={<Incubatex />} />
        <Route path="/acad-authorities" element={<AcadAuthorities />} />
        <Route path="/academic-regulations" element={<AcademicRegulations />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/syllabus" element={<Syllabus />} />
          
        {/* happenings */}
        <Route path="/events" element={<HppnEvents />} />
        <Route path="/announcements" element={<HppnAnnouncements />} />
        <Route path="/news" element={<HppnNews />} />
        <Route path="/hppn-achievements" element={<HppnAchievements />} />
        <Route path="/media" element={<HppnMedia />} />
        <Route path="/notices" element={<HppnNotices />} />
        {/* <Route path="/life-at-gietu" element={<HppnLifeAtGIETU />} /> */}
        <Route path="/campus-flash" element={<HppnCampusFlash />} />
        <Route path="/conference" element={<HppnConferenceVideos />} />

          {/* Examinations */}
          <Route path="/Notice" element={<Notice />} />
          <Route path="/exam-Downloads" element={<ExamDownloads />} />
          <Route path="/Instruction" element={<Instruction />} />
          <Route path="/CGPACalculator" element={<CGPACalculator />} />
          <Route path="/DocumentVerification" element={<DocumentVerification />} />
          <Route path="/exam-contactUs" element={<ExamContactUs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

