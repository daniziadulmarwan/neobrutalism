import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/ui/Footer";
import Enriching from "./enriching";
import Extracuricular from "./extracuricular";
import Events from "./events";
import Support from "./support";

export default function StudentLife() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
        <Enriching />
        <div className="xl:mx-[162px]">
          <Extracuricular />
          <Events />
          <Support />
        </div>
      </div>
      <Footer />
    </main>
  );
}
