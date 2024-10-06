// import React from 'react';
// import { useParams } from 'react-router-dom';

// // Example blog content for demonstration
// const blogContent = {
//   'networking-guide': {
//     title: "The Ultimate Guide to Networking at Events",
//     image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
//     content: `
//       Networking at events is one of the most valuable opportunities available to professionals. Whether you’re attending an industry conference, a trade show, or a networking mixer, 
//       knowing how to approach people and form genuine connections is crucial. This guide will provide tips on how to build relationships that last.
      
//       Start by approaching people with a genuine interest, ask open-ended questions, and listen actively. Carry business cards or connect on LinkedIn 
//       to follow up post-event. And don't forget the power of a smile!
//     `,
//   },
//   'event-budget-tips': {
//     title: "How to Organize a Memorable Event on a Budget",
//     image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800",
//     content: `
//       Organizing a successful event on a limited budget is absolutely possible with the right strategies. Start by prioritizing the elements that will make the most impact.
//       Allocate more budget to what attendees will value the most – whether it’s the venue, entertainment, or catering.
      
//       You can also save costs by negotiating with vendors, partnering with sponsors, and using social media marketing instead of paid ads. Planning well ahead and getting creative with resources will help you pull off a memorable event without overspending.
//     `,
//   },
//   // Add more blog content as needed...
// };

// const BlogDetail = () => {
//   const { blogId } = useParams();
//   const blog = blogContent[blogId];

//   if (!blog) {
//     return <div className="text-center text-2xl py-20">Blog post not found</div>;
//   }

//   return (
//     <div className="bg-gray-100 py-10 px-4 md:px-16 lg:px-24">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
//         <div className="p-8">
//           <h1 className="text-4xl font-bold text-teal-600 mb-6">{blog.title}</h1>
//           <p className="text-gray-700 text-lg">{blog.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import React from 'react';
import { useParams } from 'react-router-dom';

// Example blog content for demonstration
const blogContent = {
  'networking-guide': {
    title: "The Ultimate Guide to Networking at Events",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Networking at events is one of the most valuable opportunities available to professionals. Whether you’re attending an industry conference, a trade show, or a networking mixer, 
      knowing how to approach people and form genuine connections is crucial. This guide will provide tips on how to build relationships that last.
      
      Start by approaching people with a genuine interest, ask open-ended questions, and listen actively. Carry business cards or connect on LinkedIn 
      to follow up post-event. And don't forget the power of a smile!
    `,
  },
  'event-budget-tips': {
    title: "How to Organize a Memorable Event on a Budget",
    image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Organizing a successful event on a limited budget is absolutely possible with the right strategies. Start by prioritizing the elements that will make the most impact.
      Allocate more budget to what attendees will value the most – whether it’s the venue, entertainment, or catering.
      
      You can also save costs by negotiating with vendors, partnering with sponsors, and using social media marketing instead of paid ads. Planning well ahead and getting creative with resources will help you pull off a memorable event without overspending.
    `,
  },
  'hybrid-events-trends': {
    title: "The Future of Hybrid Events: Trends to Watch",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Hybrid events are becoming increasingly popular, especially post-pandemic. They allow a mix of in-person and virtual attendance, providing flexibility for organizers and attendees.
      Here are the trends you need to watch in hybrid events: advanced streaming technology, immersive experiences, and more interactive virtual elements.
    `,
  },
  'top-event-venues': {
    title: "Top Event Venues in 2024: Your Ultimate Guide",
    image: "https://images.pexels.com/photos/3078746/pexels-photo-3078746.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Finding the right venue is crucial to the success of any event. In 2024, venues that offer flexibility, hybrid event support, and sustainability features are in demand. 
      Discover the top event venues, ranging from luxury spaces to eco-friendly outdoor locations.
    `,
  },
  'top1-event-venues': {
    title: "Top Event Venues in 2024: Your Ultimate Guide",
    image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      Finding the right venue is crucial to the success of any event. In 2024, venues that offer flexibility, hybrid event support, and sustainability features are in demand. 
      Discover the top event venues, ranging from luxury spaces to eco-friendly outdoor locations.
    `,
  },
};

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogContent[blogId];

  if (!blog) {
    return <div className="text-center text-2xl py-20">Blog post not found</div>;
  }

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-6">{blog.title}</h1>
          <p className="text-gray-700 text-lg whitespace-pre-line">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
