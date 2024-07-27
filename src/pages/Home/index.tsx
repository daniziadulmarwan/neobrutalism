import Hero from "./hero";
import Testimony from "./testimony";
import Navigates from "./navigates";
import Question from "./question";
import Benefits from "./benefits";
import MainLayout from "@/layouts/main";

export default function HomePage() {
  return (
    <MainLayout>
      <div id="main-wrapper" className="xl:container xl:mx-auto w-full">
        <Hero />
        <Benefits />
        <Testimony />
        <Question />
        <Navigates />
      </div>
    </MainLayout>
  );
}
