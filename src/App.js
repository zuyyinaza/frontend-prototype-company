import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import OurValues from "./OurValues";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OurValues />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
