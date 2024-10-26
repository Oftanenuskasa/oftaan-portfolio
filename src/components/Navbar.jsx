
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const location = useLocation(); // To detect the current URL path

  // Function to handle scrolling to a section if already on the home page
  const handleScrollTo = (id) => {
    if (location.pathname === '/') {
      scroll.scrollTo(document.getElementById(id).offsetTop - 70); // Adjust the offset for the navbar
    }
  };

  return (
    <nav className='bg-gray text-black px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>
          <Link to="/">Oftanenus</Link> {/* Navigate to the home page */}
        </div>
        <div className='space-x-6'>
          {/* Use ScrollLink if on homepage, else use regular Link */}
          {location.pathname === '/' ? (
            <>
              <ScrollLink to="home" smooth={true} offset={-70} className='hover:text-gray-400 cursor-pointer'>Home</ScrollLink>
              <ScrollLink to="about" smooth={true} offset={-70} className='hover:text-gray-400 cursor-pointer'>About Me</ScrollLink>
              <ScrollLink to="service" smooth={true} offset={-70} className='hover:text-gray-400 cursor-pointer'>Services</ScrollLink>
              <ScrollLink to="project" smooth={true} offset={-70} className='hover:text-gray-400 cursor-pointer'>Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} offset={-70} className='hover:text-gray-400 cursor-pointer'>Contact</ScrollLink>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => handleScrollTo('home')} className='hover:text-gray-400'>Home</Link>
              <Link to="/" onClick={() => handleScrollTo('about')} className='hover:text-gray-400'>About Me</Link>
              <Link to="/" onClick={() => handleScrollTo('service')} className='hover:text-gray-400'>Services</Link>
              <Link to="/" onClick={() => handleScrollTo('project')} className='hover:text-gray-400'>Projects</Link>
              <Link to="/" onClick={() => handleScrollTo('contact')} className='hover:text-gray-400'>Contact</Link>
            </>
          )}
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
