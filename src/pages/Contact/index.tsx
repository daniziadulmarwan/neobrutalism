import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";

import AbstractImage from "@/assets/contact-abstract.png";
import ContactCard from "@/components/atoms/ContactCard";
import {
  Clock,
  Envelope,
  FacebookLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";
import TextInput from "@/components/atoms/TextInput";
import SelectInput from "@/components/atoms/SelectInput";
import Footer from "@/components/ui/footer";
import ContactIconCard from "@/components/atoms/ContactIconCard";

export default function Contact() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />

        {/* Connect With Us */}
        <section
          id="connect-with-us"
          className="mt-[60px] custom-shadow-black "
        >
          <div className="border-2 border-secondary-600 rounded-xl w-full h-auto xl:h-[594px] bg-white relative flex flex-col xl:flex-row items-center px-[30px] xl:px-[120px] py-[50px] xl:py-0">
            {/* Start: Abstract */}
            <div>
              <img
                src={AbstractImage}
                alt="abstract image"
                className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] absolute left-0 top-0"
              />
            </div>
            {/* End: Abstract */}

            {/* Start: Left */}
            <div className="w-full xl:w-1/2 xl:mt-0 text-center xl:text-start">
              <div className="border-2 border-secondary-600 rounded-lg py-[10px] px-5 font-medium text-sm xl:text-lg text-secondary-400 inline-block">
                Contact us
              </div>

              <h3 className="font-raleway text-3xl xl:text-5xl font-bold mt-4 text-center xl:text-start">
                Feel Free To Connect With Us
              </h3>
            </div>
            {/* End: Left */}

            {/* Start: Right */}
            <div className="w-full xl:w-1/2">
              <p className="text-base xl:text-xl font-medium text-secondary-400 mt-5 xl:mt-0 text-center xl:text-start">
                We value open communication and are eager to assist you with any
                inquiries. Feel free to reach out to us through any of the
                following contact methods
              </p>
              <div className="mt-[50px] grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
                <ContactCard
                  icon={<Envelope size={24} />}
                  title="hello@littlelearners.com"
                />
                <ContactCard
                  icon={<Phone size={24} />}
                  title="+91 91813 23 2309"
                />
                <ContactCard
                  icon={<MapPin size={24} />}
                  title="Somewhere in the World"
                />
                <ContactCard
                  icon={<Clock size={24} />}
                  title="Office Hours - 9am - 6 pm"
                />
              </div>
            </div>
            {/* End: Right */}
          </div>
        </section>

        {/* Form */}
        <section
          id="contact-form"
          className="mx-0 xl:mx-[162px] mt-20 xl:mt-[200px]"
        >
          {/* Start: Title */}
          <div className="text-center">
            <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
              Contact Form
            </div>

            <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
              Student Information
            </h3>

            <div className="flex justify-center">
              <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400 text-center">
                If you have specific questions or wish to request more
                information about Little Learners Academy, please complete the
                contact form below. Kindly provide the following details to help
                us better understand your needs
              </p>
            </div>
          </div>
          {/* End: Title */}

          {/* Start: Form */}
          <div className="mt-[100px]">
            {/* Start: Little Card */}
            <div className="flex gap-5 justify-center relative">
              <ContactIconCard
                id={1}
                icon={<FacebookLogo className="w-[34px] h-[34px]" />}
              />
              <ContactIconCard
                id={2}
                icon={<TwitterLogo className="w-[34px] h-[34px]" />}
              />
              <ContactIconCard
                id={3}
                icon={<LinkedinLogo className="w-[34px] h-[34px]" />}
              />
            </div>
            {/* End: Little Card */}

            {/* Start: Big Card */}
            <div className="border-2 border-secondary-600 rounded-xl bg-white -mt-10">
              <form className="pt-20 xl:pt-[120px] pb-10 xl:pb-[100px] px-[30px] xl:px-[100px] flex flex-col gap-[30px] xl:gap-[50px]">
                {/* First */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Parent Name
                    </label>
                    <TextInput placeholder="Enter Parent Name" />
                  </div>
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Email Address
                    </label>
                    <TextInput placeholder="Enter Email Address" />
                  </div>
                </div>

                {/* Second */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Phone Number
                    </label>
                    <TextInput placeholder="Enter Phone Number" />
                  </div>
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Student Name
                    </label>
                    <TextInput placeholder="Enter Student Name" />
                  </div>
                </div>

                {/* Third */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Student Age
                    </label>
                    <TextInput placeholder="Enter Student Age" />
                  </div>
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Program of Intrest
                    </label>
                    <SelectInput />
                  </div>
                </div>

                {/* Fourth */}
                <div className="grid grid-cols-1 gap-[50px]">
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="text-[#4C4C4C] font-semibold text-[22px]"
                    >
                      Student Age
                    </label>
                    <textarea
                      className="border-2 border-secondary-600 rounded-lg bg-[#FFFCFA] w-full p-[30px] mt-4 placeholder:text-xl placeholder:text-[#59595A] placeholder:font-medium"
                      placeholder="Enter Your Message"
                      rows={8}
                    ></textarea>
                  </div>
                </div>

                {/* Fifth */}
                <div className="grid grid-cols-1 gap-[50px]">
                  <button
                    type="submit"
                    className="bg-primary-500 border-2 border-secondary-600 rounded-xl py-[30px] font-medium text-2xl text-secondary-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* End: Big Card */}
          </div>
          {/* End: Form */}
        </section>

        {/* Footer */}
        <div className="mt-[200px]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
