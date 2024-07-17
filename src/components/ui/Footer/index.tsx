import BrandImage from "@/assets/brand.png";
import Card from "@/components/atoms/Card";
import FooterCard from "@/components/atoms/FooterCard";
import {
  Envelope,
  FacebookLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="custom-shadow-black mt-20 xl:mt-[200px] xl:mx-[50px] border-2 border-secondary-600 rounded-xl px-[30px] xl:px-[113px] bg-white mb-[50px]">
      {/* Brand */}
      <div className="mt-[60px] xl:mt-[100px] mb-10 flex flex-col xl:flex-row justify-between gap-10 xl:gap-32">
        <div>
          <div
            id="brand"
            className="flex items-center justify-center xl:justify-start gap-2"
          >
            <img
              src={BrandImage}
              alt="brand-image"
              className="w-[50px] h-[50px]"
            />
            <h4 className="text-secondary-600 text-2xl font-semibold">
              Little Learners
            </h4>
          </div>

          <p className="mt-5 xl:w-[519px] font-medium text-base xl:text-xl text-[#4C4C4D] text-center xl:text-start">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>

          <div className="mt-[50px] space-y-6">
            <Card
              id={1}
              icon={<Envelope size={24} />}
              title="hello@littlelearners.com"
            />
            <Card id={2} icon={<Phone size={24} />} title="+91 91813 23 2309" />
            <Card
              id={3}
              icon={<MapPin size={24} />}
              title="Somewhere in the World"
            />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-[50px] xl:grid-cols-4">
          {/* Start: Home */}
          <div>
            <h5 className="font-semibold text-base xl:text-xl text-secondary-600">
              Home
            </h5>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Our Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Start: About Us */}
          <div>
            <h5 className="font-semibold text-base xl:text-xl text-secondary-600">
              About Us
            </h5>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Our Vission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Awards and Recognitions
                </a>
              </li>
            </ul>
          </div>

          {/* Start: Academic */}
          <div>
            <h5 className="font-semibold text-base xl:text-xl text-secondary-600">
              Academics
            </h5>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Special Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Teachers
                </a>
              </li>
            </ul>
          </div>

          {/* Start: Contact Us */}
          <div>
            <h5 className="font-semibold text-base xl:text-xl text-secondary-600">
              Contact Us
            </h5>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  Map & Direction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-base xl:text-lg text-secondary-400"
                >
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[50px] border-y-[1px] border-secondary-600 py-4 xl:py-[30px] flex flex-col xl:flex-row justify-between gap-5 xl:gap-0">
        <ul className="flex items-center gap-4">
          <li className="border-r-2 border-secondary-600 pr-4">
            <a
              href=""
              className="text-sm xl:text-lg font-medium text-secondary-400"
            >
              Terms of Service
            </a>
          </li>
          <li className="border-r-2 border-secondary-600 pr-4">
            <a
              href=""
              className="text-sm xl:text-lg font-medium text-secondary-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm xl:text-lg font-medium text-secondary-400"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
        <div className="flex gap-4 justify-center">
          <FooterCard
            id={1}
            icon={<FacebookLogo className="w-5 h-5 xl:w-8 xl:h-8" />}
          />
          <FooterCard
            id={1}
            icon={<TwitterLogo className="w-5 h-5 xl:w-8 xl:h-8" />}
          />
          <FooterCard
            id={1}
            icon={<LinkedinLogo className="w-5 h-5 xl:w-8 xl:h-8" />}
          />
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-4 xl:mt-[30px] mb-10 text-center text-sm xl:text-lg font-medium text-[#656567]">
        Copyright © [{new Date().getFullYear()}] Little Learners Academy. All
        rights reserved.
      </p>
    </footer>
  );
}
