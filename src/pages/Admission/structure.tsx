import { fees, FeeType, services, ServiceType } from "@/datas/fee-data";
import { dollar } from "@/utils/currency";

function Structure() {
  return (
    <section id="structure" className="mt-20 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center px-4 xl:px-0">
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
      <div className="mt-[60px] xl:mt-[100px] w-screen xl:w-full">
        {/* Fee Tables */}
        <div className="my-10 border-2 border-secondary-600 bg-white rounded-xl w-full xl:w-auto custom-shadow-black overflow-auto">
          <div className="flex flex-col py-5 xl:py-[60px] px-0 xl:px-[60px]">
            <div className="xl:-m-1.5 overflow-x-auto">
              <div className="pl-5 pr-8 xl:p-1.5 min-w-full inline-block align-middle">
                {/* Start: Tables Head */}
                <div className="border-2 border-secondary-600 rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="divide-x-2 flex items-center justify-between divide-secondary-600 bg-primary-200">
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                        >
                          Program
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                        >
                          Age Group
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                        >
                          Annual Tuition
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                        >
                          Registration Fee
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                        >
                          Actifity Fee
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                {/* End: Tables Head */}

                {/* Start: Table Body */}
                <div className="border-2 border-secondary-600 rounded-xl overflow-hidden mt-[30px]">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y-2 divide-secondary-600">
                      {fees.map((fee: FeeType) => (
                        <tr
                          className="divide-x-2 flex items-center justify-between divide-secondary-600 bg-white"
                          key={fee.id}
                        >
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                          >
                            {fee.program}
                          </td>
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                          >
                            {fee.age}
                          </td>
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                          >
                            {dollar(fee.tuition)}
                          </td>
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                          >
                            {dollar(fee.registration)}
                          </td>
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-52 xl:w-1/5"
                          >
                            {dollar(fee.activity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End: Table Body */}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Tables */}
        {/* Fee Tables */}
        <div className="my-10 border-2 border-secondary-600 bg-white rounded-xl w-full xl:w-auto custom-shadow-black overflow-auto">
          <div className="flex flex-col py-5 xl:py-[60px] px-0 xl:px-[60px]">
            <div className="xl:-m-1.5 overflow-x-auto">
              <div className="pl-5 pr-8 xl:p-1.5 min-w-full inline-block align-middle">
                {/* Start: Tables Head */}
                <div className="border-2 border-secondary-600 rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="divide-x-2 flex items-center justify-between divide-secondary-600 bg-primary-200">
                        <th
                          scope="col"
                          className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-full"
                        >
                          Additional Services
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                {/* End: Tables Head */}

                {/* Start: Table Body */}
                <div className="border-2 border-secondary-600 rounded-xl overflow-hidden mt-[30px]">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y-2 divide-secondary-600">
                      {services.map((service: ServiceType) => (
                        <tr
                          className="divide-x-2 flex items-center justify-between divide-secondary-600 bg-white"
                          key={service.id}
                        >
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-80 xl:w-1/2"
                          >
                            {service.title}
                          </td>
                          <td
                            scope="col"
                            className="px-8 py-0 h-[63px] xl:h-auto flex items-center xl:py-[25px] text-start text-lg xl:text-xl font-medium text-secondary-600 text-nowrap w-80 xl:w-1/2"
                          >
                            {service.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End: Table Body */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Structure;
