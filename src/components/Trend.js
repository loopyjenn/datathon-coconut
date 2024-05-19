import React, { useState } from 'react';
import ageImage from '../img/age.png';
import sexImage from '../img/sex trend.png';
import raceImage from '../img/race.png';
import typeImage from '../img/drug type.png';

const images = {
  age: ageImage,
  sex: sexImage,
  race: raceImage,
  type: typeImage,
};

export function OverdoseTrends() {
  const [selectedFeature, setSelectedFeature] = useState('age');

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  return (
    <section className="tab-content active">
      <div className="dropdown">
        <label htmlFor="feature-select">Select feature that you want to see the trend:</label>
        <select id="feature-select" value={selectedFeature} onChange={handleFeatureChange}>
          <option value="age">Age</option>
          <option value="sex">Sex</option>
          <option value="race">Race</option>
          <option value="type">Drug Type</option>
        </select>
      </div>
      <div className="chart">
        <img src={images[selectedFeature]} alt={selectedFeature} />
      </div>
      <div className="report">
        <h2>Analysis Report</h2>
        <p>dhef-fehfdhdfhd</p>
      </div>
    </section>
  );
}
