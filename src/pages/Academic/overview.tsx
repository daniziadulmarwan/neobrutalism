import AbstractImage from "@/assets/contact-abstract.png";

function Overview() {
  return (
    <section id="overview" className="mt-[60px] custom-shadow-black">
      <div className="border-2 border-secondary-600 rounded-xl w-full h-auto xl:h-[485px] bg-white relative flex flex-col xl:flex-row items-center px-[30px] xl:px-[120px] py-[50px] xl:py-0">
        <div>
          <img
            src={AbstractImage}
            alt="abstract image"
            className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] absolute left-0 top-0"
          />
        </div>

        <div className="w-full xl:w-1/2 xl:mt-0 text-center xl:text-start">
          <div className="border-2 border-secondary-600 rounded-lg py-[10px] px-5 font-medium text-sm xl:text-lg text-secondary-400 inline-block">
            Academics
          </div>

          <h3 className="font-raleway text-3xl xl:text-5xl font-bold mt-4 text-center xl:text-start">
            Nurturing Young Minds for Success
          </h3>
        </div>

        <div className="w-full xl:w-1/2">
          <p className="text-base xl:text-xl font-medium text-secondary-400 mt-5 xl:mt-0 text-center xl:text-start">
            Welcome to our Academics page, where we take pride in providing a
            comprehensive and stimulating educational experience for your child.
            Our kindergarten school's academic program is thoughtfully designed
            to foster a love for learning while building a strong foundation of
            essential skills and knowledge. From language arts and mathematics
            to science and social studies, our curriculum is carefully crafted
            to spark curiosity and encourage active exploration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
