import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

// Import your components
import LandingPage from './components/LandingPage/landingPage.jsx';
import LogIn from './components/LogIn/login.jsx';
import About from './components/AboutUs/about.jsx';
import SignUp from './components/SignUp/signup.jsx';
import Event from './components/EventsHandler/event.jsx';
import Header from './components/headers.jsx';
import BlogList from './components/Blog/blog.jsx';
import BlogDetail from './components/Blog/blogDetails.jsx';
import CreateEvent from './components/Events/createEvent.jsx';
import FindEvent from './components/Events/findEvent.jsx';
import EventDetail from './components/Events/eventDetails'; 
import  DeleteEvent from './components/Delete/deleteEvent.jsx';
import Contact from './components/LandingPage/contact.jsx';
import TicketBooking from './components/BookingTicket/bookTicket.jsx';

const router = createBrowserRouter([

      {
          path: '/',
         element: <LandingPage />,
              },
              {
                path: '/headers',
               element: <Header />,
                    },
              {
                path: '/LogIn',
                element: <LogIn />,
              },
              {
                path: '/About',
                element: <About />,
              },
              {
                path: '/SignUp',
                element: <SignUp />,
              },
              {
                path: '/Event',
                element: <Event />,
              },
              {
                path: '/BlogList',
                element: <BlogList />,
              },
              {
                path: '/blog/:blogId',
                element: <BlogDetail />,
              },
              {
                path: '/createEvent',
                element: <CreateEvent />,
              },
      
              {
                path: '/FindEvent',
                element: <FindEvent />,
              },
              {
                path: '/events/:id',
                element: <EventDetail />,
              },
              {
                path: '/deleteEvent',
                element: <DeleteEvent />,
              },
              {
                path: '/contact',
                element: <Contact />,
              },
              {
                path: '/TicketBook',
                element: <TicketBooking />,
              },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
