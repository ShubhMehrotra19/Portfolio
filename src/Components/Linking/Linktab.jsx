import React, { useState } from 'react';

function Linktab({ linkName }) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return 'rgba(0, 119, 181, 0.78)';
      case 'twitter':
        return 'rgba(29, 161, 242, 0.78)';
      default:
        return 'rgba(17, 25, 40, 0.78)';
    }
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className='w-full text-center text-lg text-slate-400 h-fit py-3 font-["Poppins"] cursor-pointer hover:scale-[102%] hover:text-white hover:text-xl transition-all duration-300 ease-in-out rounded-md hover:shadow-lg active:scale-90'
      style={{
        backdropFilter: 'blur(16px) saturate(200%)',
        WebkitBackdropFilter: 'blur(16px) saturate(200%)',
        backgroundColor: isHovered ? getBackgroundColor(linkName) : 'rgba(17, 25, 40, 0.78)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        transition: 'background-color 0.3s', // Add a smooth transition
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {linkName}
    </div>
  );
}

export default Linktab;
