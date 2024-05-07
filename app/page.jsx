import AskedQuestions from "./components/AskedQuestions";
import Footer from "./components/Footer";
import HearFromThem from "./components/HearFromThem";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Package from "./components/Package";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";
import WhySection from "./components/WhySection";

export default function page() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Intro />
        <WhySection />
        <Package />
        <Testimonials />
        <HearFromThem />
        {/* <AskedQuestions /> */}
        <Register />
      </main>
      <Footer />

      {/* <main className=" max-sm:pl-[1.87rem]">
        <Intro />
        <WhySection />
        <Package />
        <Testimonials />
        <HearFromThem />
        <AskedQuestions />
        <Register />
      </main>
      <Footer /> */}
    </div>
  );
}
