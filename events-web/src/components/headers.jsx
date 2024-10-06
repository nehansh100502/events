// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import {FaUserCircle } from 'react-icons/fa'; // React Icons

// function Headers() {
//   const [active, setActive] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [theme, setTheme] = useState("light-theme");
//   const [userProfile, setUserProfile] = useState(null); // State for user profile data

//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.className = theme;

//     const storedUserName = localStorage.getItem('userName');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, [theme]);

//   useEffect(() => {
//     if (dropdownOpen) {
//       fetchUserProfile();
//     }
//   }, [dropdownOpen]);

//   function toggleTheme() {
//     setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
//   }

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   async function fetchUserProfile() {
//     const storedData = JSON.parse(localStorage.getItem('userToken'));
//     const token = storedData?.token; // Retrieve token as a string

//     try {
//       const response = await fetch('http://localhost:4001/api/v1/profile', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`, // Use token string directly
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Server Error:', errorData);
//         alert('Error: ' + errorData.message);
//       } else {
//         const data = await response.json();
//         console.log('Profile data:', data);
//         setUserProfile(data); // Update state with the profile data
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   const handleLogout = async () => {
//     const token = localStorage.getItem('userToken');

//     if (!token) {
//       console.error('No token found');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:4001/api/v1/logout', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Logout Error:', errorData);
//         alert('Error: ' + errorData.error || 'Unknown error occurred');
//       } else {
//         console.log('Logout successful');
//         localStorage.removeItem('userToken'); // Clear token from storage
//         localStorage.removeItem('userName');  // Clear user name from storage
//         setUserName(''); // Clear the user name state
//         setUserProfile(null); // Clear the user profile data
//         navigate('/'); // Redirect to the home page
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto text-[#217c90] bg-white flex items-center justify-around hover:bg-[#f1efefde] gap-4">
//         {/* User Icon with Dropdown */}
//         <div className='relative'>
//           <button onClick={toggleDropdown} className='flex items-center focus:outline-none'>
//             <FaUserCircle className='text-white h-8 w-8 ml-5' />
//             {userName && <span className='ml-2 font-semibold'>{userName.toUpperCase()}</span>} {/* Display user name in uppercase */}
//           </button>
//           {dropdownOpen && (
//             <div
//               className='absolute mt-2 w-56 h-64 bg-[#100f0df1] border rounded-md shadow-lg'
//               onMouseLeave={closeDropdown}
//             >
//               {/* Display user profile details */}
//               {userProfile ? (
//                 <div className='p-3'>
//                   <p className='text-white text-lg bg-slate-600 hover:text-green-300 p-2'>{userProfile.username.toUpperCase()}</p> {/* Username in uppercase */}
//                   <p className='text-white bg-slate-500 p-2'><strong></strong> {userProfile.email}</p> {/* Email in uppercase */}
//                   {/* You can add more fields as per your user profile data */}
//                 </div>
//               ) : (
//                 <div className='p-4 text-[#20b6d7]'>
//                   <p>Loading profile...</p>
//                 </div>
//               )}
//               <Link to='/SignUp'>
//                 <div className='text-center text-lg text-[#20b6d7] font-sans hover:text-yellow-600'>
//                   SignUp
//                 </div>
//               </Link>
//               <Link to='/LogIn'>
//                 <div className='text-center text-lg text-[#20b6d7] font-sans hover:text-yellow-400'>
//                   LogIn
//                 </div>
//               </Link>
//               <Link to='/Event'>
//                 <div className='text-center text-lg text-[#20b6d7] font-sans hover:text-yellow-500'>
//                   Events
//                 </div>
//               </Link>
//               <Link to='/About'>
//                 <div className='text-center text-lg text-[#20b6d7] font-sans hover:text-yellow-500'>
//                   About Us
//                 </div>
//               </Link>
//               <button
//                 className='block px-4 py-2 text-[#20b6d7] hover:bg-gray-600 w-full text-left'
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       <Link className="no-underline font-semibold" to="/BlogList" onClick={() => setActive(!active)}>Blog</Link>
//         <Link className="no-underline font-semibold" to="/Event" onClick={() => setActive(!active)}>Events</Link>
//         <Link className="no-underline font-semibold" to="/About" onClick={() => setActive(!active)}>AboutUs</Link>
//         <h3 className="relative heading font-bold text-2xl mb-5 mt-5 mr-14 ml-9 text-[#1e6a77]">Events_Hub</h3>
//         <Link className="no-underline font-semibold ml-80" to="/logIn" onClick={() => setActive(!active)}>Login</Link>
//         <Link className="no-underline font-semibold" to="/signUp" onClick={() => setActive(!active)}>SignUp</Link>

//         <ul className={active ? "nav-ul flex gap-7 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>

//           <li>
//             <button
//               className="text-white bg-[#157a77] px-3 py-1 rounded-full text-xs hover:bg-[#0f0f0f] hover:text-[#c3c1c1] font-sans h-14 w-14 mr-3"
//               onClick={toggleTheme}
//             >
//               {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Headers;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // React Icons

function Headers() {
  const [active, setActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [userProfile, setUserProfile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;

    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [theme]);

  useEffect(() => {
    if (dropdownOpen) {
      fetchUserProfile();
    }
  }, [dropdownOpen]);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu
  };

  async function fetchUserProfile() {
    const storedData = JSON.parse(localStorage.getItem("userToken"));
    const token = storedData?.token;

    try {
      const response = await fetch("http://localhost:4001/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        alert("Error: " + errorData.message);
      } else {
        const data = await response.json();
        console.log("Profile data:", data);
        setUserProfile(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleLogout = async () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/v1/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout Error:", errorData);
        alert("Error: " + errorData.error || "Unknown error occurred");
      } else {
        console.log("Logout successful");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        setUserName("");
        setUserProfile(null);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-[#ffffff]  flex items-center justify-between px-3 py-2 shadow-md md:px-8">
        <h3 className="text-2xl font-bold text-[#1e6a77]">CrowdHive</h3>
        <button
          className="text-2xl text-[#c87720] md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${menuOpen ? "block" : "hidden"
            } absolute md:static top-16 w-full  md:flex md:items-center md:w-auto font-semibold bg-[white]`}
        >
          <li className="ml-64">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/FindEvent"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li className="">
            <Link
              className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/About"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/Login"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
          </li>
          <li className="">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/SignUp"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>


        {/* User Profile and Theme Toggle */}
        <div className="flex items-center space-x-4">

          {/* User Icon with Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center font-semibold">
              <FaUserCircle className="text-[#1a8533] h-7 w-7 " />
              <span className=" ml-2 font-medium">  My Account</span>
              {userName && (
                <span className="ml-2 font-semibold">

                  {userName.toUpperCase()}
                </span>
              )}
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-7 w-44 bg-white border rounded-md shadow-lg pl-4 "
                onMouseLeave={closeDropdown}
              >
                {/* User Profile Info */}
                {userProfile ? (
                  <div className="p-3">
                    <p className="text-lg bg-[#ffffffce] text-[black] hover:text-green-700 p-2">
                      {userProfile.username.toUpperCase()}
                    </p>

                  </div>
                ) : (
                  <div className=" text-[#1a8533] pt-4">
                    <p>Loading profile...</p>
                  </div>
                )}
                <ul>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100  hover:text-black"
                      to="/About"
                      onClick={() => setMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 hover:text-black"
                      to="/BlogList"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 hover:text-black"
                      to="/createEvent"
                      onClick={() => setMenuOpen(false)}
                    >
                      CreateEvent
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className="py-2 px-4 text-[#1a8533] hover:bg-gray-100  hover:text-black"
                      to="/Event"
                      onClick={() => setMenuOpen(false)}
                    >
                      Find-Events
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:text-red-600"
                      to="/deleteEvent"
                      onClick={() => setMenuOpen(false)}
                    >
                      Delete Events
                    </Link>
                  </li>
                </ul>
                <button
                  className="px-4 py-2 text-[#d82448] w-full text-left mb-6"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;

