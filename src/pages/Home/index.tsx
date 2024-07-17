import Admision from "@/components/elements/Admision";
import Navbar from "@/components/elements/Navbar";
import Benefit from "@/components/elements/Benefit";
import {
  Crown,
  FaceMask,
  Flag,
  GraduationCap,
  Lifebuoy,
  Users,
} from "@phosphor-icons/react";
import Collapse from "@/components/elements/Collapse";
import Navigate from "@/components/elements/Navigate";
import Footer from "@/components/ui/Footer";
import Hero from "./hero";
import Testimony from "./testimony";

export default function HomePage() {
  return (
    <main className="w-screen px-4 xl:px-0">
      <div className="xl:mx-[50px]">
        <Admision />
        <Navbar />
      </div>

      <div className="xl:container xl:mx-auto w-full">
        <Hero />

        <section id="benefit" className="mt-20 xl:mt-[200px]">
          <div className="text-center">
            <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
              Children Deserve Bright Future
            </div>

            <h3 className="mt-5 font-raleway font-bold text-[58px]">
              Our Benefits
            </h3>
            <div className="flex justify-center">
              <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
                With a dedicated team of experienced educators, state-of-the-art
                facilities, and a comprehensive curriculum, we aim to lay a
                strong foundation for your child's future.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-0 xl:gap-x-10 grid-rows-2 gap-y-20 xl:gap-y-20 mt-[100px]">
            <Benefit
              id={1}
              icon={
                <GraduationCap className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />
              }
              title="Holistic Learning Approach"
              description=" Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
            />

            <Benefit
              id={2}
              icon={<Crown className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
              title="Experienced Educators"
              description="Our passionate and qualified teachers create a supportive and stimulating learning environment."
            />

            <Benefit
              id={3}
              icon={<FaceMask className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
              title="Nurturing Environment"
              description="We prioritize safety and provide a warm and caring atmosphere for every child."
            />

            <Benefit
              id={4}
              icon={<Flag className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
              title="Play-Based Learning"
              description="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
            />

            <Benefit
              id={5}
              icon={<Lifebuoy className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
              title="Individualized Attention"
              description="Our small class sizes enable personalized attention, catering to each child's unique needs."
            />

            <Benefit
              id={6}
              icon={<Users className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
              title="Parent Involvement"
              description="We foster a strong parent-school partnership to ensure seamless communication and collaboration."
            />
          </div>
        </section>

        <Testimony />

        <section id="question" className="mt-20 xl:mt-[200px]">
          <div className="text-center">
            <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
              Solutions For The Doubts
            </div>

            <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
              Frequently Asked Questions
            </h3>
            <div className="flex justify-center">
              <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
                Find all the essential information you need in our FAQ section,
                designed to address the most frequently asked questions and help
                you make informed decisions for your child's education.
              </p>
            </div>
          </div>

          <div className="mt-[50px] xl:mt-[100px] flex flex-col xl:flex-row gap-[20px] xl:gap-[50px]">
            <div className="flex flex-col gap-5 xl:gap-[30px]">
              <Collapse
                id={1}
                title="What are the school hours at Little Learners Academy?"
              >
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
              <Collapse
                id={2}
                title="How do you handle food allergies and dietary restrictions?"
              >
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
              <Collapse id={3} title="Is there a uniform policy for students?">
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
            </div>
            <div className="flex flex-col gap-5 xl:gap-[30px]">
              <Collapse
                id={4}
                title="What is the teacher-to-student at Little Learners Academy?"
              >
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
              <Collapse
                id={5}
                title="What extracurricular activities are available for students?"
              >
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
              <Collapse
                id={6}
                title="How do you handle discipline and behavior management?"
              >
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday.
                We also offer extended care options for parents who need early
                drop-off or late pick-up.
              </Collapse>
            </div>
          </div>
        </section>

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
                Your gateway to discovering a wealth of valuable information
                about our kindergarten school, Feel free to explore and learn
                more about the enriching experiences that await your child at
                our kindergarten school
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
      </div>

      <Footer />
    </main>
  );
}
