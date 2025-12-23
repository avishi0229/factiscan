import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import { Navbar } from "./components/navbar";
import Aboutus from "./pages/aboutus";
import ContactPage from "./pages/contactus";
import AiMedia from "./pages/aimedia";
import FakeNewsdetector from "./pages/fakenewsdetector";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#000002] text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<ContactPage/>}/>
          <Route path="/ai-media" element= {<AiMedia/>}/>
          <Route path="/FakeNewsdetector" element={<FakeNewsdetector/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
