import TeacherCard from "@/components/elements/TeacherCard";
import TeacherImage from "@/assets/teacher.png";

function Teachers() {
  return (
    <section id="teachers" className="mt-10 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Teachers With Experties
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Team Members
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            At Little Learners Academy, our teaching team is the heart of our
            educational journey. We take great pride in employing highly
            qualified and passionate educators who possess a deep understanding
            of early childhood development. Our teachers create a warm and
            engaging atmosphere, encouraging curiosity, instilling confidence,
            and fostering a love for learning.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[100px]">
        <div className="grid grid-cols-2 gap-[50px]">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <TeacherCard
              key={i}
              id={i}
              image={TeacherImage}
              name="Ms. Sarah Anderson"
              qualification="Bachelor's Degree in Early Childhood Education"
              desc="Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
