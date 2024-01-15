import React from 'react';

function MagazineCard({ imageUrl, title, category, year, pdfUrl }) {
  const handleView = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `Magazine-${title}.pdf`;
    link.click();
  };

  return (
    <div className="magazine-card">
      <img src={imageUrl} alt={title} className="magazine-image" />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Year: {year}</p>
      <button className="btn btn-primary" onClick={handleView}>View</button>
      <button className="btn btn-success" onClick={handleDownload}>Download</button>
    </div>
  );
}

export default MagazineCard;
