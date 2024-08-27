import React from 'react';
import img from "./Images/404.png";

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0, // Remove default margin
        backgroundColor: '#f0f0f0', // Optional: add a background color for better contrast
      }}
    >
      <img
        src={img}
        alt="error 404"
        style={{
          maxWidth: '100%',
          height: 'auto',
          maxHeight: '80vh', // Optional: ensure the image does not exceed viewport height
        }}
      />
    </div>
  );
}

export default NotFound;
