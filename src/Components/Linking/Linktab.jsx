import React, { useState } from 'react';

function Linktab({ linkName }) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return 'rgba(0, 119, 181, 0.78)';
      case 'twitter':
        return 'rgba(0, 0, 0, 1)';
      case 'github':
        return 'rgba(0, 0, 0, 0.8)';
      case 'figma':
        return 'rgba(32, 48, 200, 0.8)';
      case 'leetcode':
        return 'rgba(222, 192, 52, 0.8)';
      default:
        return 'rgba(17, 25, 40, 0.78)';
    }
  };

  const getLinkUrl = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return 'https://www.linkedin.com/in/shubhmehrotra19/';
      case 'twitter':
        return 'https://twitter.com/ShubhMehro40210';
      case 'github':
        return 'https://github.com/ShubhMehrotra19';
      case 'figma':
        return 'https://figma.com/@shubhmehrotra';
      case 'leetcode':
        return 'https://leetcode.com/Shubh_Mehrotra2003/';
      default:
        return '/';
    }
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <a
      href={getLinkUrl(linkName)}
      className='w-full text-center md:text-lg text-md text-blue-gray-600 h-fit py-3 font-["Poppins"] cursor-pointer hover:scale-[102%] hover:text-white hover:text-lg md:hover:text-xl transition-all duration-300 ease-in-out rounded-md hover:shadow-lg active:scale-90'
      style={{
        backdropFilter: 'blur(16px) saturate(200%)',
        WebkitBackdropFilter: 'blur(16px) saturate(200%)',
        backgroundColor: isHovered ? getBackgroundColor(linkName) : 'rgba(17, 25, 40, 0.78)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {linkName}
    </a>
  );
}

export default Linktab;
