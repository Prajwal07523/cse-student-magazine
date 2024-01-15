
import React, { useState } from 'react';
import MagazineCard from './MagazineCard';
import { useNavigate } from "react-router-dom";

function MagazineSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const magazines = [
        // Dummy data for magazines
        { imageUrl: 'https://th.bing.com/th/id/OIP.QFiyjl-EOcsWWUnVrNpIGwHaKj?w=186&h=266&c=7&r=0&o=5&dpr=1.4&pid=1.7' ,title: 'CS Association Magazine 2023', category: 'Sports', year: '2023' },
        {imageUrl: 'https://th.bing.com/th/id/OIP.ZZ-9_Jc7JhB30rHfXPhKLAHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.4&pid=1.7' , title: 'CS Association Magazine 2022', category: 'Events', year: '2022' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.suxgSnb6ikYkz77KJ1-5gQHaJl?w=186&h=241&c=7&r=0&o=5&dpr=1.4&pid=1.7' ,title: 'CS Association Magazine 2021', category: 'Events', year: '2021' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.5eXTgM896Fwtp1CUn50yQAAAAA?w=186&h=241&c=7&r=0&o=5&dpr=1.4&pid=1.7' ,title: 'CS Association Magazine 2020', category: 'Events', year: '2020' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.pcMFWvhFKQsA8gnsESgarwHaJ1?w=186&h=248&c=7&r=0&o=5&dpr=1.4&pid=1.7' ,title: 'CS Association Magazine 2019', category: 'Events', year: '2019' },
        { imageUrl: 'https://th.bing.com/th/id/OIP.TVV2Q0fRqseCwtqBjGqjPAHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.4&pid=1.7' ,title: 'CS Association Magazine 2018', category: 'Events', year: '2018' },
        // Add more magazines here
  ];

  const filteredMagazines = magazines.filter(magazine =>
    magazine.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate=useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // Corrected path
    };

  return (
    
    <div className="container">
      <div className="search-bar1">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
      <button className="butt" onClick={handleLoginClick}>AdminLogin</button>
      </div>
      <div className="row">
        {filteredMagazines.map((magazine, index) => (
          <div key={index} className="col-md-4 magazine-hover">
            <MagazineCard
            imageUrl={magazine.imageUrl}
              title={magazine.title}
              category={magazine.category}
              year={magazine.year}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default MagazineSection;

