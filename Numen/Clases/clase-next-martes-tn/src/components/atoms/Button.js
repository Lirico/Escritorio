import React from "react";

const Button = (props) => {
  return (
    <>
      <button>Comprar</button>
      <style jsx>{`
        button {
          color: white;
          background-color: ${props.bgColor};
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1.1rem; 
          text-transform: uppercase;
          border: 0;
          transition: 0.3s
        }
        button:hover {
          opacity: .5
        }
      `}</style>
    </>
  );
};

export default Button;
