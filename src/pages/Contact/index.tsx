import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import ContactIconCard from "@/components/atoms/ContactIconCard";
import MainLayout from "@/layouts/main";
import Overview from "./overview";
import Form from "./form";

export default function Contact() {
  return (
    <MainLayout>
      <div className="xl:mx-13">
        <Overview />
      </div>

      <section
        id="contact-form"
        className="mx-0 xl:mx-[162px] mt-20 xl:mt-[200px]"
      >
        <div className="text-center">
          <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
            Contact Form
          </div>

          <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
            Student Information
          </h3>

          <div className="flex justify-center">
            <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400 text-center">
              If you have specific questions or wish to request more information
              about Little Learners Academy, please complete the contact form
              below. Kindly provide the following details to help us better
              understand your needs
            </p>
          </div>
        </div>

        <div className="mt-[100px]">
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

          <Form />
        </div>
      </section>
    </MainLayout>
  );
}
