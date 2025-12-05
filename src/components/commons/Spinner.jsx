import React from 'react'

function Spinner({ show = false, fullscreen = true }) {
    if (!show) return null;

  return (
    <div
      className={`${
        fullscreen
          ? "fixed inset-0 flex justify-center items-center"
          : "flex justify-center items-center"
      }`}
      style={{
        backgroundColor: fullscreen ? "rgba(255, 255, 255, 0.45)" : "transparent",
        backdropFilter: fullscreen ? "blur(6px)" : "none",
        zIndex: 2000,
      }}
    >
      <div className="premium-loader"></div>

      <style>
        {`
          .premium-loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color: #6a4dfc;
            border-right-color: #b983ff;
            animation: spin 0.8s linear infinite;
            box-shadow: 0 0 14px rgba(106, 77, 252, 0.4);
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Spinner
