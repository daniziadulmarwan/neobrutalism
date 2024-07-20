import EventCard from "@/components/elements/EventCard";
import { events, EventType } from "@/datas/event-data";

function Events() {
  return (
    <section id="benefit" className="mt-20 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Features
        </div>

        <h3 className="mt-[10px] xl:mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Events & Celebrations
        </h3>
        <div className="flex justify-center">
          <p className="mt-[10px] xl:mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            At Little Learners Academy, we celebrate every milestone and create
            cherished memories for our students. Throughout the year, we host a
            variety of events and celebrations that bring the entire school
            community together. Some of our memorable events include.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[50px] xl:mt-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-[50px]">
          {events.map((event: EventType) => (
            <EventCard
              key={event.id}
              id={event.id}
              image={event.image}
              title={event.title}
              desc={event.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
