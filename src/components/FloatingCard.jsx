import React, { useRef, useState } from 'react';

const FloatingCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = cardRef.current;

    const centerX = offsetLeft + offsetWidth / 2;
    const centerY = offsetTop + offsetHeight / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const rotateX = (deltaY / offsetHeight) * 20; // Adjust multiplier for intensity
    const rotateY = -(deltaX / offsetWidth) * 20; // Adjust multiplier for intensity

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-1/3 h-auto p-4 bg-white text-black rounded-xl shadow-lg transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default FloatingCard;