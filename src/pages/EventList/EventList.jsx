import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard.jsx";
import { fetchEvents } from "../../utils/Api"; // Import API function
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Current starting index of visible items
  const itemsPerPage = 3; // Number of items to show per page

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, events.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const renderVisibleEvents = () => {
    return events.slice(currentIndex, currentIndex + itemsPerPage).map(({ id, date, heading, location, img }) => (
      <EventCard
        key={id}
        id={id}
        date={date}
        heading={heading}
        location={location}
        img={img}
      />
    ));
  };

  return (
    <div className="events">
      <Navigation />
        <div className="event-list-container">
      <h1 className="event-list-title">Events</h1> 
      <div className="event-list-wrapper">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <p className="error">{error}</p>

        ) : events.length > 0 ? (
          <div className="slider-wrapper">
            <button className="nav-button left" onClick={handlePrev} disabled={currentIndex === 0}>
              &#8249;
            </button>
            <div className="event-grid">{renderVisibleEvents()}</div>
            <button
              className="nav-button right"
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= events.length}
            >
              &#8250;
            </button>
          </div>
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default EventList;
