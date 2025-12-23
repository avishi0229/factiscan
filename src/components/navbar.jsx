import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="relative z-50  select-none px-6 pt-6 pb-4">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
       <Link to='/'> <h1 
          className="text-2xl md:text-3xl lg:text-4xl text-[#b4f3ff]"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          FACTISCAN
        </h1>
        </Link>
        <div className="flex gap-4 lg:gap-6">
          <Link 
            to="/"
            className="text-sm md:text-base lg:text-lg text-white hover:text-[#7ce9ff] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Home
          </Link>
          <Link 
            to="/ai-media"
            className="text-sm md:text-base lg:text-lg text-white hover:text-[#7ce9ff] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            AI media
          </Link>
          <Link 
            to="/aboutus"
            className="text-sm md:text-base lg:text-lg text-white hover:text-[#7ce9ff] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            About us
          </Link>
          <Link 
            to="/contactus"
            className="text-sm md:text-base lg:text-lg text-white hover:text-[#7ce9ff] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}