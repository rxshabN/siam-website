import Navbar from "../components/navbar";
import EventsPageContent from "../components/events-page-content";

const EventsPage = () => {
  return (
    <>
      <div className="z-[999] sm:fixed absolute w-full">
        <Navbar />
      </div>
      <EventsPageContent />
    </>
  );
};

export default EventsPage;
