import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/ui/Footer";

import Achievement from "./achievement";
import VisionMission from "./vision-mission";
import Overview from "./overview";
import History from "./history";
import Teachers from "./teachers";

export default function AboutPage() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
        <Overview />
        <div className="xl:mx-[162px]">
          <VisionMission />
          <Achievement />
          <History />
          <Teachers />
        </div>
      </div>
      <Footer />
    </main>
  );
}
