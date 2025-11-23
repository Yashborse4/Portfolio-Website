import React from 'react';
import { Link } from 'react-scroll';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-slate-900">
      <h1 className="text-9xl font-bold text-blue-600 font-sora">404</h1>
      <p className="text-2xl mb-8 font-poppins">Page Not Found</p>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold cursor-pointer hover:scale-105 transition-transform"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
