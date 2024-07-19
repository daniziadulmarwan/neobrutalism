import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "./hero";
import Testimony from "./testimony";
import Navigates from "./navigates";
import Question from "./question";
import Benefits from "./benefits";

export default function HomePage() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
      </div>
      <div className="xl:container xl:mx-auto w-full">
        <Hero />
        <Benefits />
        <Testimony />
        <Question />
        <Navigates />
      </div>
      <Footer />
    </main>
  );
}
