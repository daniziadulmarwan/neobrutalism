import AcademicEventCard from "@/components/elements/AcademicEventCard";
import { AcademicLearnType, learns } from "@/datas/academic-data";

function Learn() {
  return (
    <section className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Features
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          What Students Learn
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            At Little Learners Academy, we strive to cultivate a love for
            learning and equip children with essential skills for their future
            success. Our academic programs cover a wide range of subjects,
            allowing students to develop a strong foundation and discover their
            interests. Some key areas of learning include.
          </p>
        </div>
      </div>

      <div className="mt-[50px] xl:mt-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-[50px]">
          {learns.map((learn: AcademicLearnType) => (
            <AcademicEventCard
              key={learn.id}
              id={learn.id}
              image={learn.image}
              title={learn.title}
              desc={learn.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learn;
