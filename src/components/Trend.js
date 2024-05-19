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

const analysisReports = {
  age: [
    'In this analysis, we examine the trend of drug overdose death rates by age group from 2000 to 2018. The graph visualizes death rates per 100,000 individuals for various age groups, revealing several critical patterns. The general trend indicates a significant increase in drug overdose death rates across most age groups over the observed period, highlighting a worsening epidemic. Notably, young adults aged 25-34 years exhibit a sharp rise in death rates, especially in the latter part of the period. By the end of the timeframe, this group shows one of the highest death rates among all age groups. Middle-aged adults (35-44, 45-54, and 55-64 years) also experience substantial increases, with the 45-54 age group particularly affected. Although older adults (65+ years) show increases, their rates remain lower compared to younger and middle-aged adults. The group under 15 years has the lowest and relatively stable death rates throughout the period.',
    'The most striking feature of the graph is the sharp rise in death rates from around 2013 onwards, affecting nearly all age groups but most pronounced in younger and middle-aged adults. This surge highlights the broader impact of the opioid crisis and other drug-related issues on younger populations. The data suggests that younger and middle-aged adults are disproportionately affected, necessitating targeted public health interventions. The increasing trends underscore the need for comprehensive strategies, including better access to treatment, prevention programs, and education on the risks of drug use. Addressing the drug overdose crisis through age-specific interventions is crucial to mitigating the rising death rates and providing support to those most at risk.'
  ],
  sex: [
    'In this section we present the changes in drug overdose death rates per 100,000 population for men and women from 1999 to 2022. Both sexes exhibit a steady growth, with a more noticeable increase beginning from 2010. Throughout the time, males have far greater death rates than girls, and after 2010 the difference widened noticeably. The sharp rise in male death rates starts from 2013 and peaks at about 12 deaths per 100,000 by 2017, whereas female death rates peak at about 6 deaths per 100,000.',
    'The general increasing tendency for both sexes is unaffected by the little decline in male rates following their peak, which emphasizes the urgent need for focused efforts to deal with this growing public health issue.'
  ],
  race: [
    'The analysis examines trends in drug overdose death rates across different races in the United States from 1999 to 2017, using data from the CDC. The data was filtered to include Whites, Black or African Americans, American Indian or Alaska Natives, and Asian or Pacific Islanders. It was then aggregated by year and race to calculate the average death rate per 100,000 population. The visualization created using line plots reveals significant racial disparities, with Whites and Black or African Americans experiencing the highest increases in death rates, particularly from 2013 onwards. This trend underscores the need for targeted public health interventions to address the specific challenges faced by these communities. The death rate of the race of Asian or Pacific Islanders remains the most stable and lowest level over time.  The stability and relatively low levels of drug overdose deaths among Asian or Pacific Islanders compared to other ethnic groups can be attributed to several factors. Cultural attitudes towards drug use in many Asian and Pacific Islander communities often emphasize avoiding drug use, which may reduce the prevalence of drug use.',
    ' In addition, family and community structures in these groups can provide strong social support networks that deter substance abuse. In addition, public health initiatives and interventions targeting these communities may be more effective in preventing substance abuse and providing timely support and treatment. Overall, drug abuse death rates have roughly increased over time across all races, suggesting that governments need to be vigilant, strengthen drug abuse monitoring and communicate the right information to the public.'
  ],
  type: [
    'The line plot illustrates the trends in drug overdose death rates from 1999 to 2018, broken down by various drug types. The overall trend shows an alarming increase in drug overdose deaths, particularly from opioids. First, the death rate for all drug overdose deaths has steadily risen, peaking around 2017, before showing a slight decline in 2018. Drug overdose deaths involving any opioid have shown a marked increase, reflecting the opioid crisis. This category also peaks around 2017.',
    'Also, Overdose deaths involving synthetic opioids, other than methadone, have sharply increased since 2013, with a notable spike in recent years. For Heroin, the death rates involving it have increased significantly since 2010, peaking around 2016. These trends underscore the need for targeted interventions focusing on the most affected drug types, especially synthetic opioids and heroin.'
  ],
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
        <img src={images[selectedFeature]} alt={`${selectedFeature} trend`} />
      </div>
      <div className="report">
        <h2>Analysis Report</h2>
        <p>{analysisReports[selectedFeature]}</p>
      </div>
    </section>
  );
}