import { Hero } from "./_components/hero";
import { Courses } from "./_components/courses"
import { Advantages } from "./_components/advantages";
import { Testimonials } from "./_components/testimonials";
import { AboutUs } from "./_components/uboutUs";
import { ContactUs } from "./_components/contactUs";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <main>
      <Hero/>
      <Courses/>
      <Advantages/>
      <Testimonials/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}