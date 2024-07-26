import Admision from "@/components/ui/Admision";
import Navbar from "@/components/ui/Navbar";
import Overview from "./admission";
import Process from "./process";
import Footer from "@/components/ui/Footer";
import Structure from "./structure";

export default function AdmissionPage() {
  return (
    <main className="w-screen">
      <div className="px-4 xl:px-0">
        <div className="xl:mx-[50px]">
          <Admision />
          <Navbar />
          <Overview />
          <div className="xl:mx-[162px]">
            <Process />
          </div>
        </div>
      </div>
      <div className="xl:mx-[162px]">
        <Structure />
      </div>
      <div className="px-4 xl:px-0">
        <Footer />
      </div>
    </main>
  );
}
