import AcademicGalleryCard from "@/components/elements/AcademicGalleryCard";

import ClassroomImage1 from "@/assets/academic/gallery-classroom-1.jpg";
import ClassroomImage2 from "@/assets/academic/gallery-classroom-2.jpg";
import ClassroomImage3 from "@/assets/academic/gallery-classroom-3.jpg";
import ClassroomImage4 from "@/assets/academic/gallery-classroom-4.jpg";

import LibraryImage1 from "@/assets/academic/gallery-library-1.jpg";
import LibraryImage2 from "@/assets/academic/gallery-library-2.jpg";
import LibraryImage3 from "@/assets/academic/gallery-library-3.jpg";
import LibraryImage4 from "@/assets/academic/gallery-library-4.jpg";
import { useSearchParams } from "react-router-dom";

const classrooms = [
  ClassroomImage1,
  ClassroomImage2,
  ClassroomImage3,
  ClassroomImage4,
];

const libraries = [LibraryImage1, LibraryImage2, LibraryImage3, LibraryImage4];

function Gallery() {
  const [params] = useSearchParams();
  console.log(params.get("cat"));

  const handleFilter = (value: number) => {
    console.log(value);
  };

  return (
    <section id="academic-gallery" className="mt-20 xl:mt-17">
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Gallery
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Rooms Gallery
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Step into our Gallery and immerse yourself in a visual journey of
            cherished moments and unforgettable experiences at our kindergarten
            school.
          </p>
        </div>
      </div>

      {/* Start: Gallery */}
      <div className="mt-13 xl:mt-15">
        {/* Start: Tabs */}
        <nav className="flex gap-[10px] xl:gap-x-[15px] justify-center">
          <button
            onClick={() => handleFilter(1)}
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-primary-200 py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            All
          </button>
          <button
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-white py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            Classrooms
          </button>
          <button
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-white py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            Library
          </button>
          <button
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-white py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            Science Lab
          </button>
          <button
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-white py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            Computer Lab
          </button>
          <button
            type="button"
            className="border-2 border-secondary-600 rounded-lg bg-white py-[10px] xl:py-[14px] px-4 xl:px-5 text-base xl:text-xl font-semibold text-secondary-500 inline-block"
          >
            Garden and Nature Area
          </button>
        </nav>
        {/* End: Tabs */}
      </div>

      {/* Start: Body */}
      <div className="mt-[220px] xl:mt-[320px] flex flex-col gap-60">
        <AcademicGalleryCard
          id={1}
          images={classrooms}
          title="Classrooms"
          desc="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire."
        />
        <AcademicGalleryCard
          id={2}
          images={libraries}
          title="Library"
          desc="Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        />
      </div>
      {/* End: Body */}
    </section>
  );
}

export default Gallery;
