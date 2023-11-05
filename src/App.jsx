import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contact.scss";
import "./Styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
