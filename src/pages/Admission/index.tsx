import Overview from "./admission";
import Process from "./process";
import Structure from "./structure";
import MainLayout from "@/layouts/main";

function AdmissionPage() {
  return (
    <MainLayout>
      <div id="overview" className="xl:mx-13">
        <Overview />
      </div>
      <div id="main-wrapper" className="xl:container xl:mx-auto w-full">
        <Process />
        <Structure />
      </div>
    </MainLayout>
  );
}

export default AdmissionPage;
