import React from 'react';
import './MagazineCard.css';
function MagazineCard({ image, title, year, pdf }) {
  const handleView = () => {
    window.open(pdf, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = `Magazine-${title}.pdf`;
    link.click();
  };

  return (
    <div className="magazine-card">
      <img src={image} alt={title} className="magazine-image" />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <button className="btn btn-primary" onClick={handleView}>View</button>
      <button className="btn btn-success" onClick={handleDownload}>Download</button>
    </div>
  );
}

export default MagazineCard;
