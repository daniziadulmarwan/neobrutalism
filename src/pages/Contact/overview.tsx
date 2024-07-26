import ContactCard from "@/components/atoms/ContactCard";
import { Clock, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import AbstractImage from "@/assets/contact-abstract.png";

function Overview() {
  return (
    <section id="connect-with-us" className="mt-[60px] custom-shadow-black">
      <div className="border-2 border-secondary-600 rounded-xl w-full h-auto xl:h-[594px] bg-white relative flex flex-col xl:flex-row items-center px-[30px] xl:px-[120px] py-[50px] xl:py-0">
        <div>
          <img
            src={AbstractImage}
            alt="abstract image"
            className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] absolute left-0 top-0"
          />
        </div>

        <div className="w-full xl:w-1/2 xl:mt-0 text-center xl:text-start">
          <div className="border-2 border-secondary-600 rounded-lg py-[10px] px-5 font-medium text-sm xl:text-lg text-secondary-400 inline-block">
            Contact us
          </div>

          <h3 className="font-raleway text-3xl xl:text-5xl font-bold mt-4 text-center xl:text-start">
            Feel Free To Connect With Us
          </h3>
        </div>

        <div className="w-full xl:w-1/2">
          <p className="text-base xl:text-xl font-medium text-secondary-400 mt-5 xl:mt-0 text-center xl:text-start">
            We value open communication and are eager to assist you with any
            inquiries. Feel free to reach out to us through any of the following
            contact methods
          </p>
          <div className="mt-[30px] xl:mt-[50px] grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
            <ContactCard
              icon={<Envelope size={24} />}
              title="hello@littlelearners.com"
            />
            <ContactCard icon={<Phone size={24} />} title="+91 91813 23 2309" />
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
      </div>
    </section>
  );
}

export default Overview;
