import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Networking at Events",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Networking is one of the main reasons people attend events. Learn how to make the most out of your next event by building meaningful connections and expanding your professional network.",
    link: "/blog/networking-guide"
  },
  {
    id: 2,
    title: "How to Organize a Memorable Event on a Budget",
    image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Organizing an event can be expensive, but with the right planning, you can create an unforgettable experience without breaking the bank. Here's how to make it happen.",
    link: "/blog/event-budget-tips"
  },
  {
    id: 3,
    title: "The Future of Hybrid Events: Trends to Watch",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Hybrid events are becoming more popular as they offer flexibility and wider reach. Discover the key trends shaping the future of hybrid events.",
    link: "/blog/hybrid-events-trends"
  },
  {
    id: 4,
    title: "Top Event Venues in 2024: Your Ultimate Guide",
    image: "https://images.pexels.com/photos/3078746/pexels-photo-3078746.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Looking for the perfect venue for your next event? Check out our list of the top event venues in 2024, including everything from luxury spaces to unique off-beat locations.",
    link: "/blog/top-event-venues"
  },
  {
    id: 5,
    title: "Top Event Venues in 2024: Your Ultimate Guide",
    image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Looking for the perfect venue for your next event? Check out our list of the top event venues in 2024, including everything from luxury spaces to unique off-beat locations.",
    link: "/blog/top1-event-venues"
  },
];

const BlogList = () => {
  return (
    
  <>
  
  <Link to='/' className='text-blue-800 mr-[400px] flex flex-wrap ml-3'>Home<BsChevronRight className='h-7 w-5'/>Blog</Link>
   

   <div className="bg-gray-100 py-10 px-4 md:px-16 lg:px-24">
       
     <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">Event Insights & Tips</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
       {blogs.map((blog) => (
         <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
           <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
           <div className="p-6">
             <h3 className="text-2xl font-semibold mb-3 text-gray-800">{blog.title}</h3>
             <p className="text-gray-600 mb-4">{blog.excerpt}</p>
             <Link to={blog.link}>
               <button className="text-teal-600 hover:text-teal-800 font-semibold">Read More</button>
             </Link>
           </div>
         </div>
       ))}
     </div>
   </div>
  </>
  );
};

export default BlogList;
