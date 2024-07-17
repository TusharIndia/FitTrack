import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div className='h-10 bg-gray-950 text-white font-semibold text-center p-2'> Made by 

    // - <Link to='https://github.com/TusharIndia'>Tushar Jindal</Link>. All rights reserved.</div>
    <footer className="bg-black text-white py-8 text-center">
        <div className="container">
          <p className="text-sm text-muted-foreground">
            Made by <Link to='https://github.com/TusharIndia'>Tushar Jindal</Link>. All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer