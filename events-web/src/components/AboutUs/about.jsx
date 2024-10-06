import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

function about() {
  return (
    <>

      <div className='pl-14 pr-14 border-4 border-green-700 border-double m-4'>
        <Link to='/' className='text-blue-700 mr-[400px] flex flex-wrap mt-10 ml-11'>Home<BsChevronRight className='h-7 w-5' />About Us</Link>
        <div className='text-orange-800 text-4xl pt-10 text-center font-bold font-serif'>
          About Us
        </div>
        <div className='p-11 text-xl pb-20 text-[#2a96a4]'>
          Welcome to Events-Hub, where innovation, inspiration, and collaboration come to life.
          At events, we believe in the power of bringing people together to create extraordinary experiences
          that resonate beyond the event itself. Our mission is to provide a platform where individuals from diverse
          backgrounds and industries can connect, learn, and grow.
        </div>

        <h2 className='text-3xl text-orange-800 text-center font-serif font-bold'>
          Who We Are
        </h2>
        <div className='p-11 text-xl font-mono font-semibold text-[#27919f]' >
          Events-Hub is more than just an event; it's a movement.
          Our team comprises passionate professionals dedicated to curating unforgettable
          experiences that foster creativity, knowledge sharing, and meaningful connections.
          We are driven by the desire to create a space where ideas are exchanged, partnerships
          are formed, and new possibilities are discovered. With years of experience in event
          planning and management,
          we have the expertise to deliver an event that exceeds expectations.
        </div>

        <h2 className='text-3xl text-orange-800 text-center font-serif font-bold'>
          What We Do
        </h2>
        <div className='p-11 text-xl font-mono font-semibold text-[#227f8b]' >
          We specialize in creating dynamic and immersive events that
          cater to a wide range of audiences. Whether it's a conference,
          seminar, workshop, or networking event,Events-Hub is designed
          to inspire and engage participants. Our events are meticulously
          planned to offer the perfect blend of learning, entertainment,
          and networking opportunities. From thought-provoking keynote speakers
          to interactive sessions and hands-on workshops, we ensure that every aspect
          of our event is geared toward providing value to our attendees.
        </div>

        <h2 className='text-3xl text-orange-800 text-center font-serif font-bold'>
          Why Choose Us
        </h2>
        <div className='p-11 text-xl font-mono font-semibold text-[#1b7b87]' >
          At Events_Hub, we understand that the success of an event lies in the details.
          That's why we go above and beyond to ensure that every element of our event is executed
          flawlessly. Our commitment to excellence is reflected in everything we do, from selecting
          the right venue to curating a diverse lineup of speakers and ensuring a seamless experience
          for all participants. We take pride in creating an
          inclusive environment where everyone feels welcome and valued.
        </div>

        <h2 className='text-3xl text-orange-800 text-center font-serif font-bold'>
          Our Vision
        </h2>
        <div className='p-11 text-xl font-mono font-semibold text-[#2397a7]' >
          Our vision is to become a leading force in the event industry,
          known for our innovative approach and commitment to delivering exceptional experiences.
          We aim to inspire and empower individuals by providing them with the tools, knowledge,
          and connections they need to succeed in their respective fields. As we continue to grow
          and evolve, our focus remains on creating events that leave a
          lasting impact on our attendees and the communities we serve.
        </div>

        <h2 className='text-3xl text-orange-800 text-center font-serif font-bold'>
          Join Us
        </h2>
        <div className='p-11 text-xl font-mono font-semibold text-[#1c8a98]' >
          We invite you to join us at Events-Hub and be part of a community that
          celebrates creativity, innovation, and collaboration.
          Together, let's create something extraordinary.
        </div>
      </div>
    </>

  )
}

export default about