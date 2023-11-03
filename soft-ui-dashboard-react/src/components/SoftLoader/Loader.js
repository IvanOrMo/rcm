// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <img src="https://cdn.worldvectorlogo.com/logos/walmart-star-1.svg" className="logo" />
      </div>
    </div>
  );
}

export default Loader;

// CSS dentro del mismo archivo
const styles = `
  .loader {
    width: 100px;
    height: 100px;
    animation: spin 4s linear infinite;
  }

  .spinner {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .logo {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    animation: fadeInOut 4s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

// Importa tus estilos
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(styles));
document.head.appendChild(styleTag);
