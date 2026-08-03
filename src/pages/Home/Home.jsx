import heroImage from "../../assets/images/hero-education.svg";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Categories from "../../components/home/Categories";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import { FaBookOpen, FaChalkboardTeacher, FaMoneyBillWave } from "react-icons/fa";
import TopMentors from "../../components/home/TopMentors";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";
import FAQ from "../../components/home/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <FeaturedCourses />
      <TopMentors />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}

export default Home;