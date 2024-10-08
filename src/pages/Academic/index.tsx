import MainLayout from "@/layouts/main";
import Overview from "./overview";
import Features from "./features";
import Learn from "./learn";
import Gallery from "./gallery";

function AcademicPage() {
  return (
    <MainLayout>
      <div id="overview" className="xl:mx-13">
        <Overview />
      </div>
      <div id="main-wrapper" className="xl:container xl:mx-auto w-full">
        <Features />
        <Learn />
        <Gallery />
      </div>
    </MainLayout>
  );
}

export default AcademicPage;
