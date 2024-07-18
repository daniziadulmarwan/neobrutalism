import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/ui/Footer";

import Achievement from "./achievement";
import VisionMission from "./vision-mission";
import Overview from "./overview";
import History from "./history";

export default function AboutPage() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
        <Overview />
        <div className="mx-[162px]">
          <VisionMission />
          <Achievement />
          <History />
        </div>
      </div>
      <Footer />
    </main>
  );
}
