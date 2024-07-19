import Navigate from "@/components/elements/Navigate";

function Navigates() {
  return (
    <section id="navigate" className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Explore More
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Navigate through our Pages
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Your gateway to discovering a wealth of valuable information about
            our kindergarten school, Feel free to explore and learn more about
            the enriching experiences that await your child at our kindergarten
            school
          </p>
        </div>
      </div>

      <div className="mt-[50px] xl:mt-[100px] grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
        <Navigate
          id={1}
          title="About Us"
          description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        />
        <Navigate
          id={2}
          title="Academics"
          description="Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
        />
        <Navigate
          id={3}
          title="Student Life"
          description="Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
        />
        <Navigate
          id={4}
          title="Admissions"
          description="Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        />
      </div>
    </section>
  );
}

export default Navigates;
