import Hero from "./hero";
import Testimony from "./testimony";
import Navigates from "./navigates";
import Question from "./question";
import Benefits from "./benefits";
import MainLayout from "@/layouts/main";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Benefits />
      <Testimony />
      <Question />
      <Navigates />
    </MainLayout>
  );
}
