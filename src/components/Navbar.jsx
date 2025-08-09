import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo/logo-h-white.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Coimbatore");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleLocationModal = () => {
    setLocationModalOpen(!locationModalOpen);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setLocationModalOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 space-x-4">
              <img className="h-14 w-15 object-contain" src={logo} alt="Logo" />
              <span className="text-2xl font-bold tracking-tight"></span>
            </div>
            <div>
              <span
                className="text-lg font-medium cursor-pointer"
                onClick={toggleLocationModal}
              >
                📍 {selectedLocation}
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-8">
              <li><a href="#home" className="text-lg font-medium">Home</a></li>
              <li><a href="#about" className="text-lg font-medium">About</a></li>
              <li><a href="#plans" className="text-lg font-medium">Plans</a></li>
              <li><a href="#contact" className="text-lg font-medium">Contact</a></li>
              <li><a href="#complaints" className="text-lg font-medium">Complaints</a></li>
              <li><a href="#review" className="text-lg font-medium">Review</a></li>
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-500 animate-flip">
            <h2 className="text-xl font-bold mb-4 text-center text-black">Choose Your Location</h2>
            <ul className="space-y-4">
              {["Coimbatore", "Pollachi", "Kinathukadavu", "Tiruppur", "Udumalpet"].map((location) => (
                <li
                  key={location}
                  className="cursor-pointer text-center text-lg font-medium text-gray-800 hover:underline"
                  onClick={() => selectLocation(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={toggleLocationModal}
            >
            
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
