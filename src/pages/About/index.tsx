import Achievement from "./achievement";
import VisionMission from "./vision-mission";
import History from "./history";
import Teachers from "./teachers";
import MainLayout from "@/layouts/main";
import Overview from "./overview";

export default function AboutPage() {
  return (
    <MainLayout>
      <div id="overview" className="xl:mx-13">
        <Overview />
      </div>
      <div id="main-wrapper" className="xl:container xl:mx-auto w-full">
        <VisionMission />
        <Achievement />
        <History />
        <Teachers />
      </div>
    </MainLayout>
  );
}
