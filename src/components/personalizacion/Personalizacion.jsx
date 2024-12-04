import React, { useState } from 'react';
import './Personalizacion.css';

const Personalizacion = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setImage(URL.createObjectURL(file));
    } else {
      alert('Please upload a .jpg or .png file');
    }
  };

  return (
    <div className="personalizacion-container">
      <div className="personalizacion">
        <h2>Personaliza tu Mousepad</h2>
        <div className="input-group">
          <label>Texto:</label>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
        <div className="input-group">
          <label>Color:</label>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
        <div className="input-group">
          <label>Subir Imagen:</label>
          <input type="file" accept=".jpg, .png" onChange={handleImageChange} />
        </div>
        <div className="preview" style={{ backgroundColor: color }}>
          {image && <img src={image} alt="Preview" className="preview-image" />}
          <p>{text}</p>
        </div>
        <div className="button-container">
          <button>Guardar Personalización</button>
        </div>
      </div>
    </div>
  );
};

export default Personalizacion;


