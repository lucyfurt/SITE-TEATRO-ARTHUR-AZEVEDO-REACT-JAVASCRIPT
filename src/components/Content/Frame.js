import React from 'react';

const mapStyle = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '56.25%', // Proporção de aspecto 16:9 (ajuste de acordo com suas necessidades)
};

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

function Map() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9322008938943!2d-44.3050561259277!3d-2.529032438245369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ee5fb3ba277%3A0x3f66c06359ed1621!2sTeatro%20Arthur%20Azevedo!5e0!3m2!1spt-BR!2sbr!4v1684798082286!5m2!1spt-BR!2sbr"; 

  return (
    <div style={mapStyle}>
      <iframe
        title="Google Maps"
        src={mapSrc}
        frameBorder="0"
        style={iframeStyle}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
