import Admision from "@/components/ui/Admision";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout(props: Props) {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div id="admision-and-navbar-wrapper" className="xl:mx-13">
        <Admision />
        <Navbar />
      </div>
      <div id="main-wrapper">{props.children}</div>
      <div id="footer-wrapper">
        <Footer />
      </div>
    </main>
  );
}

export default MainLayout;
