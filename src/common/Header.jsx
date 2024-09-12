import { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineHeart, HiOutlineUser, HiMenu, HiX } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className={`relative ${sticky ? "header py-1 sticky !bg-black/50 !text-white top-0 z-50 shadow-xl" : ""}`}>
      {
        !sticky && (
          <>
          <div className="flex py-2 text-sm text-gray-600 px-10 items-center justify-between">
      <Link className="active link-hover transition-all" >
      Free shipping for orders over $59!
              </Link>
              <div className="space-x-3">
                <Link to='/faq' className="active link-hover transition-all" >
                Faq
              </Link>
              <Link className="active link-hover transition-all" >
               Contact
              </Link></div>
      </div>
        <hr />
        </>
        )
      }
    
        <div className="flex justify-between items-center w-11/12 m-auto py-4">
        <Link to='/'>
          <div className="text-xl font-bold font-playwrite">funiture</div>
          </Link>
         

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {navbar.map((nav, key) => (
              <Link key={key} className="active link-hover transition-all" to={nav.path}>
                {nav.nav}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/wishlist" className="text-2xl">
              <HiOutlineHeart />
            </Link>
            <Link to="/profile" className="text-2xl">
              <HiOutlineUser />
            </Link>
            <div onClick={toggleSidebar} className="relative text-2xl">
              <MdOutlineShoppingBag />
              <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">
                {totalItems}
              </div>
            </div>

              {/* Mobile menu button */}
        
            <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-3xl">
              {isMobileMenuOpen ? '' : <HiMenu />}
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-1/2 h-full fixed transition-all delay-150 duration-200 top-0 z-[99] bg-white text-black/90 ">
          <div className="flex items-center justify-between px-5 ">
          <div className="text-xl font-bold font-playwrite  my-5 ">funiture</div>
          <span className="text-[1.5rem]" onClick={toggleMobileMenu}><HiX /></span>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {navbar.map((nav, key) => (
              <Link key={key} className="text-xl" to={nav.path} onClick={toggleMobileMenu}>
                {nav.nav}
              </Link>
            ))}
            <Link to="/wishlist" className="text-xl flex items-center space-x-2" onClick={toggleMobileMenu}>
              <HiOutlineHeart />
              <span>Wishlist</span>
            </Link>
            <Link to="/profile" className="text-xl flex items-center space-x-2" onClick={toggleMobileMenu}>
              <HiOutlineUser />
              <span>Profile</span>
            </Link>
            <div onClick={toggleSidebar} className="relative text-2xl">
              <MdOutlineShoppingBag />
              <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">
                {totalItems}
              </div>
            </div>
          </div>
          
        </div>
      )}

      {/* Sidebar for the cart */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
