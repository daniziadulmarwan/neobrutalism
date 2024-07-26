import Enriching from "./enriching";
import Extracuricular from "./extracuricular";
import Events from "./events";
import Support from "./support";
import MainLayout from "@/layouts/main";

function StudentLife() {
  return (
    <MainLayout>
      <div id="overview" className="xl:mx-13">
        <Enriching />
      </div>
      <div id="main-wrapper" className="xl:container xl:mx-auto w-full">
        <Extracuricular />
        <Events />
        <Support />
      </div>
    </MainLayout>
  );
}

export default StudentLife;
