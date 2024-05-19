import React from 'react';
import introImage from '../drug.jpg'; // Ensure the correct path to your image

function Introduction(props) {
  return (
    <section className="tab-content active">
      <img src={introImage} alt="Introduction" className="IntroImage" />
      <div className="Introduction">
        <h2>Introduction</h2>
        <p>
          Drug overdose is not just a statistic—it's a devastating reality that plagues communities across the United States. Behind each number lies a story of loss, of shattered dreams, and of futures cut tragically short. Central to our exploration are three key questions:
        </p>
        <ol>
          <li>What are the trends in drug overdose death rates over time? Highlight any significant changes or patterns in the death rates over the years.</li>
          <li>What formula would you use for a metric to rank and label the concern the government should have for different drug overdose types? What would the resulting ranking be when you use this formula?</li>
          <li>Develop a predictive model to forecast future drug overdose death rates for each demographic group.</li>
        </ol>
        <p>
          Given that we are dealing with real-life tragedies, we have a responsibility to protect the privacy of victims and those affected. We used a dataset for data analysis and machine learning to address these questions.
        </p>
      </div>
    </section>
  );
}

export default Introduction;
