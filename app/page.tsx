import Navbar from "@/app/components/Navbar";
import HeroSlider from "./components/HeroSlider";
import LookingForSection from "./components/LookingForSection";
import VideoShowcase from "./components/VideoShowcase";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/Wcu";
import Licen from "./components/licen";
import StoryNumbers from './components/StoryNumbers';
import Testimonials from "./components/Testimonials";
import FAQPremium from "./components/Faq";
import ShortCoursesSlider from "./components/ShortCoursesSlider";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <FeaturedCourses/>
        <StoryNumbers/>

{/* <VideoShowcase/> */}
<ShortCoursesSlider/>

  <WhyChooseUs/>
<VideoShowcase/>

<LookingForSection/>
{/* <OutcomesCareerRoles/> */}
      {/* Rest of page */}
  <Licen/>
  <Testimonials/>
  <FAQPremium/>
    </main>
  );
}
