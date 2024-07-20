import AbstractImage from "@/assets/contact-abstract.png";

function Enriching() {
  return (
    <section id="enriching" className="mt-[60px] custom-shadow-black">
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
            Enriching Student Life
          </div>

          <h3 className="font-raleway text-3xl xl:text-5xl font-bold mt-4 text-center xl:text-start">
            Embracing Learning with Discovery and Joy
          </h3>
        </div>

        <div className="w-full xl:w-1/2">
          <p className="text-base xl:text-xl font-medium text-secondary-400 mt-5 xl:mt-0 text-center xl:text-start">
            Welcome to our Student Life page, where the magic of childhood comes
            alive through the enriching experiences and adventures that our
            students embark on each day. At our kindergarten school, we believe
            that learning goes beyond textbooks, and we strive to create a
            holistic and engaging environment that nurtures every aspect of a
            child's development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Enriching;
