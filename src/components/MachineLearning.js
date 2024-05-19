import React, { useState } from 'react';
import ageImage1 from '../img/agem1.png';
import ageImage2 from '../img/agem2.png';
import sexImage1 from '../img/sex trend.png';
import sexImage2 from '../img/sex predict.png';
import raceImage1 from '../img/race1.png';
import raceImage2 from '../img/race2.png';

const images = {
  age: [ageImage1, ageImage2],
  sex: [sexImage1, sexImage2],
  race: [raceImage1, raceImage2],
};

export function MachineLearning() {
  const [selectedFeature, setSelectedFeature] = useState('age');

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  return (
    <section className="tab-content active">
      <div className="dropdown">
        <label htmlFor="feature-select">Select feature that you want to see the prediction:</label>
        <select id="feature-select" value={selectedFeature} onChange={handleFeatureChange}>
          <option value="age">Age</option>
          <option value="sex">Sex</option>
          <option value="race">Race</option>
        </select>
      </div>
      <div className="chart">
        {images[selectedFeature].map((image, index) => (
          <img key={index} src={image} alt={`${selectedFeature}-${index}`} />
        ))}
      </div>
      <div className="report">
        <h2>Analysis Report</h2>
        {/* Add analysis report content here */}
      </div>
    </section>
  );
}

