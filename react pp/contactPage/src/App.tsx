import "./App.css";
import ContactHeading from "./components/ContactHeading/ContactHeading";
import { ContactPage } from "./components/ContactPage/ContactPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ContactHeading />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
