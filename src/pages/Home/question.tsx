import Collapse from "@/components/elements/Collapse";

function Question() {
  return (
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
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </p>
        </div>
      </div>

      <div className="mt-[50px] xl:mt-[100px] flex flex-col xl:flex-row gap-[20px] xl:gap-[50px]">
        <div className="flex flex-col gap-5 xl:gap-[30px]">
          <Collapse
            id={1}
            title="What are the school hours at Little Learners Academy?"
          >
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
          <Collapse
            id={2}
            title="How do you handle food allergies and dietary restrictions?"
          >
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
          <Collapse id={3} title="Is there a uniform policy for students?">
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
        </div>
        <div className="flex flex-col gap-5 xl:gap-[30px]">
          <Collapse
            id={4}
            title="What is the teacher-to-student at Little Learners Academy?"
          >
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
          <Collapse
            id={5}
            title="What extracurricular activities are available for students?"
          >
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
          <Collapse
            id={6}
            title="How do you handle discipline and behavior management?"
          >
            Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We
            also offer extended care options for parents who need early drop-off
            or late pick-up.
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Question;
