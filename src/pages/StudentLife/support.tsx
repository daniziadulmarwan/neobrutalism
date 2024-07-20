import Benefit from "@/components/elements/Benefit";
import SupportCard from "@/components/elements/SupportCard";
import {
  BookOpenText,
  LightbulbFilament,
  UsersThree,
} from "@phosphor-icons/react";

function Support() {
  return (
    <section id="support" className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Achievements
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Student Support
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            At Little Learners Academy, we are committed to providing a
            supportive and nurturing environment that meets the unique needs of
            each student. Our student support services include.
          </p>
        </div>
      </div>

      <div className="mt-[50px] xl:mt-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 xl:gap-10">
          <SupportCard
            id={1}
            icon={<LightbulbFilament size={34} />}
            title="Counseling"
            description="Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
          />
          <SupportCard
            id={2}
            icon={<BookOpenText size={34} />}
            title="Learning Support"
            description="Our educators provide additional assistance to students who may require extra support in their academic journey."
          />
          <SupportCard
            id={3}
            icon={<UsersThree size={34} />}
            title="Parent-Teacher Collaboration"
            description="We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
          />
        </div>
      </div>
    </section>
  );
}

export default Support;
