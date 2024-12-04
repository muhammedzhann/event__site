import { useState, useEffect, useCallback } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import Navigation from "../../components/Navigation/Navigation";
import EventCard from "../../components/EventCard/EventCard";
import { fetchEvents } from "../../utils/Api";
import "./FilterEvents.css";

const FilterEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null,
  });

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const response = await fetchEvents();
        setEvents(response);
        setFilteredEvents(response);
      } catch {
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  useEffect(() => {
    if (monthYear.selectedMonth && monthYear.selectedYear) {
      const filtered = events.filter((event) => {
        const [year, month] = event.date.split("-");
        return (
          year === String(monthYear.selectedYear) &&
          month === monthYear.selectedMonth
        );
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [monthYear, events]);

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    setMonthYear({ selectedMonth, selectedYear });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        <div className="event-list-wrapper">
          <div className="event-list">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  date={event.date}
                  heading={event.heading}
                  location={event.location}
                  img={event.img}
                />
              ))
            ) : (
              <p>No events match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterEvents;
