import AdmissionProcessCard from "@/components/elements/AdmissionProcessCard";

function Process() {
  return (
    <section id="vision-mision" className="mt-20 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Process
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Admission Process
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Embark on a remarkable educational journey with us! Our Admission
            and Enrollment process is the gateway to providing your child with
            an exceptional learning experience at our kindergarten school.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[50px] xl:mt-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-[50px]">
          <AdmissionProcessCard
            id={1}
            number={"01"}
            title="Inquiry"
            desc="Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
            last={false}
          />
          <AdmissionProcessCard
            id={2}
            number={"02"}
            title="School Tour"
            desc="Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
            last={false}
          />
          <AdmissionProcessCard
            id={3}
            number={"03"}
            title="Application Form"
            desc="Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
            last={false}
          />
          <AdmissionProcessCard
            id={4}
            number={"04"}
            title="Parent Interview"
            desc="We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
            last={false}
          />
          <AdmissionProcessCard
            id={5}
            number={"05"}
            title="Student Assessment"
            desc="For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
            last={false}
          />
          <AdmissionProcessCard
            id={6}
            number={"06"}
            title="Acceptance"
            desc="Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
            last={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
