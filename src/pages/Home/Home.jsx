import heroImage from "../../assets/images/hero-education.svg";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Categories from "../../components/home/Categories";
import FeaturedCourses from "../../components/home/FeaturedCourses";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <FeaturedCourses />
    </>
  );
}

export default Home;