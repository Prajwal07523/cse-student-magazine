

import React, { useState, useEffect } from 'react';
import MagazineCard from './MagazineCard';
import { useNavigate } from "react-router-dom";
import './MagazineSection.css'; 
import axios from 'axios';

function MagazineSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [magazines, setMagazines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-magazines');
        const data = response.data.data;
        setMagazines(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredMagazines = magazines.filter(magazine => {
    const title = magazine.title || '';
    
  
    return (
      (title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       magazine.year.toString().includes(searchTerm)) &&
      (filterYear ? magazine.year.toString() === filterYear : true)
    );
    
  });
  

  const resetFilters = () => {
    setFilterYear('');
    setSearchTerm('');
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLoginClick1 = () => {
    navigate("/add");
  };

  return (
    <div className="container">
           <div className="toolbar">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setFilterYear(e.target.value)}>
          <option value="">Filter by Year</option>
          {Array.from(new Set(magazines.map(mag => mag.year)))
            .sort().reverse()
            .map(year => (
              <option key={year} value={year}>{year}</option>
          ))}
        </select>


        <button onClick={resetFilters}>Reset Filters</button>
        <button className="butt" onClick={handleLoginClick}>Admin Login</button>
        <button className="butt1" onClick={handleLoginClick1}>Add Magazine</button>
      </div>
      <div className="row">
        {filteredMagazines.map((magazine, index) => (
          <div key={index} className="col-md-4 magazine-hover">
            <MagazineCard
              image={magazine.imageUrl || magazine.image} // Use imageUrl or image based on your data structure
              title={magazine.title}
              year={magazine.year}
              pdf={magazine.pdfUrl || magazine.pdf} // Use pdfUrl or pdf based on your data structure
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MagazineSection;

