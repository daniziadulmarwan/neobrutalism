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
      <div className="mt-[60px] xl:mt-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] xl:gap-[50px]">
          <AdmissionProcessCard id={1} number={"01"} />
          <AdmissionProcessCard id={2} number={"02"} />
          <AdmissionProcessCard id={3} number={"03"} />
        </div>
      </div>
    </section>
  );
}

export default Process;
