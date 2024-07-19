import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Overview from "./admission";
import Process from "./process";

export default function AdmissionPage() {
  return (
    <main className="w-screen px-4 xl:px-0 pb-60">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
        <Overview />
        <div className="xl:mx-[162px]">
          <Process />
        </div>
      </div>
    </main>
  );
}
