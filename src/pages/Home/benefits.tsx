import Benefit from "@/components/elements/Benefit";
import {
  Crown,
  FaceMask,
  Flag,
  GraduationCap,
  Lifebuoy,
  Users,
} from "@phosphor-icons/react";

function Benefits() {
  return (
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
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-0 xl:gap-x-10 grid-rows-2 gap-y-20 xl:gap-y-20 mt-[100px]">
        <Benefit
          id={1}
          icon={<GraduationCap className="w-6 h-6 xl:w-[42px] xl:h-[42px]" />}
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
  );
}

export default Benefits;
