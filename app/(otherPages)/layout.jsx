//Components
import Navbar from "./Navbar";
import HearFromThem from "../components/HearFromThem";
import AskedQuestions from "../components/AskedQuestions";
import Register from "../components/Register";
import Footer from "../components/Footer";

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Navbar />
      {children}
      <div>
        <HearFromThem />
        {/* <AskedQuestions /> */}
        <Register />
      </div>
      <Footer />
    </section>
  );
}
