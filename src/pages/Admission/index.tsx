import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Overview from "./admission";
import Process from "./process";
import Footer from "@/components/ui/Footer";
import Structure from "./structure";

export default function AdmissionPage() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
        <Overview />
        <div className="xl:mx-[162px]">
          <Process />
          <Structure />
        </div>
      </div>
      <Footer />
    </main>
  );
}
