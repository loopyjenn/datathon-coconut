import React, { useState } from 'react';
import recentImage from '../img/year_2018.png';
import allImage from '../img/overyear.png';

const images = {
  recent: recentImage,
  all: allImage
};

const analysisReports = {
  recent: '',
  all: '.',
};

export function ConcernMetric() {
  const [selectedFeature, setSelectedFeature] = useState('recent');

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  return (
    <section className="tab-content active">
      <div className="dropdown">
        <label htmlFor="feature-select">Select years that you want to see the metric:</label>
        <select id="feature-select" value={selectedFeature} onChange={handleFeatureChange}>
          <option value="recent">Concern Metric for Recent Year Drug Overdose Types</option>
          <option value="all">Concern Metric Across All Years for Drug Overdose Types</option>
        </select>
      </div>
      <div className="chart">
        <img src={images[selectedFeature]} alt={`${selectedFeature} trend`} />
      </div>
      <div className="report">
        <h2>Analysis Report</h2>
        <p>{analysisReports[selectedFeature]}</p>
      </div>
    </section>
  );
}