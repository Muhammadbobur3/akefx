import CourseDescription from "./components/course-description";
import CourseStatistics from "./components/course-statistics";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Pricing from "./components/pricing-section";
import TestimonialsSection from "./components/testimonials";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <CourseStatistics />
      <CourseDescription />
      <TestimonialsSection />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
