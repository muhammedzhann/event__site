// import React, { useState, useEffect } from "react";
// import Navigation from "../../components/Navigation/Navigation";
// import { createEvent } from "../../utils/Api.js";
// import { generateDataOptions, months, years } from "../../utils/DataRender.jsx";
// import "./CreatEvent.css";

// const CreateEvent = () => {
//   const [event, setEvent] = useState({
//     heading: "",
//     date: { year: "", month: "" },
//     location: "",
//     description: "",
//     img: "",
//     time: "", // New field for time
//     day: "",  // New field for day of the week
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Function to get the day of the week from the date
//   const getDayOfWeek = (year, month) => {
//     if (!year || !month) return ""; // If year or month is not selected yet

//     const date = new Date(year, month - 1, 1); // Date object for the 1st day of the selected month and year
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return daysOfWeek[date.getDay()]; // Return the day of the week
//   };

//   useEffect(() => {
//     // Update the day when year or month changes
//     const day = getDayOfWeek(event.date.year, event.date.month);
//     setEvent((prevEvent) => ({ ...prevEvent, day }));
//   }, [event.date.year, event.date.month]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "year" || name === "month") {
//       setEvent((prev) => ({
//         ...prev,
//         date: {
//           ...prev.date,
//           [name]: value,
//         },
//       }));
//     } else {
//       setEvent((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!event.heading || !event.date.year || !event.date.month || !event.time) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await createEvent({
//         ...event,
//         date: `${event.date.year}-${event.date.month}`,
//       });

//       alert(`Event created successfully! ID: ${response.id}`);

//       setEvent({
//         heading: "",
//         date: { year: "", month: "" },
//         location: "",
//         description: "",
//         img: "",
//         time: "",
//         day: "",
//       });
//     } catch {
//       setError("Failed to create event. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <Navigation />
//       <div className="create__events">
//         <form onSubmit={handleSubmit} className="create-event-form">
//           {error && <p className="error">{error}</p>}
//           <div>
//             <label>Event Name:</label>
//             <input
//               type="text"
//               name="heading"
//               value={event.heading}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Year:</label>
//             <select
//               name="year"
//               value={event.date.year}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select a year
//               </option>
//               {generateDataOptions(years)}
//             </select>
//           </div>
//           <div>
//             <label>Month:</label>
//             <select
//               name="month"
//               value={event.date.month}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select a month
//               </option>
//               {generateDataOptions(months)}
//             </select>
//           </div>
//           {/* Add Time Input */}
//           <div>
//             <label>Time:</label>
//             <input
//               type="time"
//               name="time"
//               value={event.time}
//               onChange={handleChange}
//               required
//             /><div>
//             <label>Dat:</label>
//             <input
//               type="day"
//               name="day"
//               required
//             />
//           </div>
//           </div>
//           {/* Display Day of the Week */}
//           {event.day && (
//             <div>
//               <label>Day of the Week:</label>
//               <input type="text" value={event.day} readOnly />
//             </div>
//           )}
//           <div>
//             <label>Location:</label>
//             <input
//               type="text"
//               name="location"
//               value={event.location}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={event.description}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label>Image URL:</label>
//             <input
//               type="text"
//               name="img"
//               value={event.img}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? <span className="spinner"></span> : "Create Event"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;import React, { useState, useEffect } from "react";

// import React, { useState, useEffect } from "react";
// import Navigation from "../../components/Navigation/Navigation";
// import { createEvent } from "../../utils/Api.js";
// import { generateDataOptions, months, years } from "../../utils/DataRender.jsx";
// import "./CreatEvent.css";
// import closeImage from "../../assets/image.png";


// const CreateEvent = () => {
//   const [event, setEvent] = useState({
//     heading: "",
//     date: { year: "", month: "" },
//     location: "",
//     description: "",
//     img: "",
//     time: "",
//     day: "",
//     price: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const getDayOfWeek = (year, month) => {
//     if (!year || !month) return "";
//     const date = new Date(year, month - 1, 1);
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return daysOfWeek[date.getDay()];
//   };

//   useEffect(() => {
//     const day = getDayOfWeek(event.date.year, event.date.month);
//     setEvent((prevEvent) => ({ ...prevEvent, day }));
//   }, [event.date.year, event.date.month]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "year" || name === "month") {
//       setEvent((prev) => ({
//         ...prev,
//         date: {
//           ...prev.date,
//           [name]: value,
//         },
//       }));
//     } else {
//       setEvent((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!event.heading || !event.date.year || !event.date.month || !event.time || !event.price) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await createEvent({
//         ...event,
//         date: `${event.date.year}-${event.date.month}`,
//       });

//       alert(`Event created successfully! ID: ${response.id}`);

//       setEvent({
//         heading: "",
//         date: { year: "", month: "" },
//         location: "",
//         description: "",
//         img: "",
//         time: "",
//         day: "",
//         price: "",
//       });
//       setShowModal(false);
//     } catch {
//       setError("Failed to create event. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//    <div className="container__creat">
//       <Navigation />
//      <div className="container">
//       <button className="create-event-button" onClick={toggleModal}>
//         + Create
//       </button>

//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//           <button className="close-modal" onClick={toggleModal} aria-label="Close Modal">
//   <span>
//     <img className="close__image" src={closeImage} alt="Close" />
//   </span>
// </button>

//             <form onSubmit={handleSubmit} className="create-event-form">
//               {error && <p className="error">{error}</p>}
//               <div>
//                 <label>Event Name:</label>
//                 <input
//                   type="text"
//                   name="heading"
//                   value={event.heading}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Year:</label>
//                 <select
//                   name="year"
//                   value={event.date.year}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select a year
//                   </option>
//                   {generateDataOptions(years)}
//                 </select>
//               </div>
//               <div>
//                 <label>Month:</label>
//                 <select
//                   name="month"
//                   value={event.date.month}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select a month
//                   </option>
//                   {generateDataOptions(months)}
//                 </select>
//               </div>
//               <div>
//                 <label>Time:</label>
//                 <input
//                   type="time"
//                   name="time"
//                   value={event.time}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Price:</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={event.price}
//                   onChange={handleChange}
//                   required
//                   min="0"
//                   placeholder="Enter price"
//                 />
//               </div>
//               {event.day && (
//                 <div>
//                   <label>Day of the Week:</label>
//                   <input type="text" value={event.day} readOnly />
//                 </div>
//               )}
//               <div>
//                 <label>Location:</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={event.location}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Description:</label>
//                 <textarea
//                   name="description"
//                   value={event.description}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//               </div>
//               <button type="submit" disabled={loading}>
//                 {loading ? <span className="spinner"></span> : "Create Event"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//    </div>
//   );
// };

// export default CreateEvent;
import Navigation from "../../components/Navigation/Navigation";
import { createEvent } from "../../utils/Api.js";
import { generateDataOptions, months, years } from "../../utils/DataRender.jsx";
import "./CreatEvent.css";
import React, { useState, useEffect } from "react";
import "./CreatEvent.css";
const CreateEvent = () => {
  const [event, setEvent] = useState({
    heading: "",
    date: { year: "", month: "" },
    location: "",
    description: "",
    img: "",
    time: "",
    day: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const getDayOfWeek = (year, month) => {
    if (!year || !month) return "";
    const date = new Date(year, month - 1, 1);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
  };

  useEffect(() => {
    const day = getDayOfWeek(event.date.year, event.date.month);
    setEvent((prevEvent) => ({ ...prevEvent, day }));
  }, [event.date.year, event.date.month]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "year" || name === "month") {
      setEvent((prev) => ({
        ...prev,
        date: {
          ...prev.date,
          [name]: value,
        },
      }));
    } else {
      setEvent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!event.heading || !event.date.year || !event.date.month || !event.time || !event.price) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await createEvent({
        ...event,
        date: `${event.date.year}-${event.date.month}`,
      });

      alert(`Event created successfully! ID: ${response.id}`);

      setEvent({
        heading: "",
        date: { year: "", month: "" },
        location: "",
        description: "",
        img: "",
        time: "",
        day: "",
        price: "",
      });
      setShowModal(false); // Close the modal after successful submission
    } catch {
      setError("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container">
      <Navigation />
      <button className="create-event-button" onClick={toggleModal}>
        + Create
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <form onSubmit={handleSubmit} className="create-event-form">
              {error && <p className="error">{error}</p>}
              <div>
                <label>Event Name:</label>
                <input
                  type="text"
                  name="heading"
                  value={event.heading}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Year:</label>
                <select
                  name="year"
                  value={event.date.year}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a year
                  </option>
                  {generateDataOptions(years)}
                </select>
              </div>
              <div>
                <label>Month:</label>
                <select
                  name="month"
                  value={event.date.month}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a month
                  </option>
                  {generateDataOptions(months)}
                </select>
              </div>
              <div>
                <label>Time:</label>
                <input
                  type="time"
                  name="time"
                  value={event.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={event.price}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="Enter price"
                />
              </div>
              {event.day && (
                <div>
                  <label>Day of the Week:</label>
                  <input type="text" value={event.day} readOnly />
                </div>
              )}
              <div>
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={event.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={event.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  name="img"
                  value={event.img}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? <span className="spinner"></span> : "Create Event"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;