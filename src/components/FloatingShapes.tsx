import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <style jsx>{`
        .shape1 {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #ff6347, transparent);
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }
        .shape2 {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, #00bfff, transparent);
          bottom: 10%;
          right: 15%;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default FloatingShapes;
