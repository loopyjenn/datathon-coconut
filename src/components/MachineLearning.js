import React, { useState } from 'react';
import ageImage1 from '../img/agem1.png';
import ageImage2 from '../img/agem2.png';
import sexImage1 from '../img/error.png';
import sexImage2 from '../img/sex predict.png';
import raceImage1 from '../img/race1.png';
import raceImage2 from '../img/race2.png';

const images = {
  age: [ageImage1, ageImage2],
  sex: [sexImage1, sexImage2],
  race: [raceImage1, raceImage2],
};

const analysisReports = {
  age: 'Age-related prediction content goes here.',
  sex: 'Sex-related prediction content goes here.',
  race: 'Race-related prediction content goes here.',
};

export function MachineLearning(props) {
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
          <img id='ml' key={index} src={image} alt={`${selectedFeature}-${index}`} />
        ))}
      </div>
      <div className="report">
        <h2>Analysis Report</h2>
        <p>{analysisReports[selectedFeature]}</p>
      </div>
    </section>
  );
}
