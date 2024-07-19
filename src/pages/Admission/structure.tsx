import { fees, FeeType, services, ServiceType } from "@/datas/fee-data";

function Structure() {
  return (
    <section id="structure" className="mt-20 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Features
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Fee Structure
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Our fee structure is transparent, and we strive to keep our fees
            competitive within the education sector. The fees vary based on the
            program, age group, and any additional services chosen.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[60px] xl:mt-[100px]">
        <div className="card bg-white p-[60px]">
          {/* Start: Header   */}
          <div className="border-2 border-secondary-600 rounded-xl bg-primary-200 flex h-20 justify-between">
            <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
              Program
            </div>
            <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
              Age Group
            </div>
            <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
              Annual Tuition
            </div>
            <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
              Registration Fee
            </div>
            <div className="border-r-0 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
              Activity Fee
            </div>
          </div>
          {/* End: Header   */}

          {/* Start: Fee Table */}
          <div className="mt-[30px]">
            <div className="border-2 border-secondary-600 rounded-xl">
              {fees.map((item: FeeType) => {
                return (
                  <div
                    className={`flex h-20 justify-between ${
                      item.id === fees[fees.length - 1].id
                        ? "border-b-0"
                        : "border-b-2"
                    } border-secondary-600`}
                    key={item.id}
                  >
                    <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                      {item.program}
                    </div>
                    <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                      {item.age}
                    </div>
                    <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                      {item.tuition}
                    </div>
                    <div className="border-r-2 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                      {item.registration}
                    </div>
                    <div className="border-r-0 border-secondary-600 w-1/5 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                      {item.activity}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End: Fee Table */}
        </div>

        <div className="card bg-white p-[60px] mt-20">
          {/* Start: Header   */}
          <div className="border-2 border-secondary-600 rounded-xl bg-primary-200 flex items-center  justify-between h-20 px-[34px]">
            <h5 className="text-[30px] text-secondary-500 font-raleway font-bold">
              Additional Services
            </h5>
          </div>
          {/* End: Header   */}

          {/* Start: Fee Table */}
          <div className="mt-[30px]">
            <div className="border-2 border-secondary-600 rounded-xl">
              {services.map((service: ServiceType) => (
                <div
                  className={`flex h-20 justify-between  border-secondary-600 ${
                    service.id === services[services.length - 1].id
                      ? "border-b-0"
                      : "border-b-2"
                  }`}
                  key={service.id}
                >
                  <div className="border-r-2 border-secondary-600 w-1/2 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                    {service.title}
                  </div>
                  <div className="border-r-2 border-secondary-600 w-1/2 flex items-center px-[34px] text-xl font-medium text-secondary-600">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End: Fee Table */}
        </div>
      </div>
    </section>
  );
}

export default Structure;
