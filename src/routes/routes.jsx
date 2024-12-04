import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import CreatEvent from "../components/CreatEvent/CreatEvent";
import LoginSignup from "../components/LoginSign/LoginSignup"; 
import ProfilePage from "../components/ProfilePage/ProfilePage";
import Contact from "../components/Contact/Contact";
import HomePage from  "../components/HomePage/HomePage";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
  { path: "/event-details/:paymentId/:eventId", element: <EventDetail /> }, // Новый маршрут
  { path: "/creat-event", element: <CreatEvent /> },
  { path: "/login-sign", element: <LoginSignup /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile-page", element: <ProfilePage /> },
  { path: "/home-page", element: <HomePage /> },
];

