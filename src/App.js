import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Protfolio from "./components/Protfolio/Protfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Protfolio />
      <Testimonial />
      <Contacts />
      <Footer />
    </Fragment>
  );
}

export default App;
