import React, { useState } from 'react';
import recentImage from '../img/year_2018.png';
import allImage from '../img/overyear.png';

const images = {
  recent: recentImage,
  all: allImage
};

const analysisReports = {
  recent: 'For this Concern Metric, focusing on the most recent year (2018) to get a snapshot of the current state. Sort the data for 2018 by the concern metric to identify the most critical drug overdose types. Then, Create a bar chart to display the Concern Metric for each drug type in 2018. Compared with the whole year, focusing on the latest year allows us to capture the most current trends and emerging issues, making it easier to allocate resources effectively to the most pressing problems. The bar chart provides a clear view of the Government Concern Metric for various drug overdose types in the year 2018. Each bar represents a different drug overdose type, and the length of the bar indicates the concern metric value. Also, the highest concern metric is observed for drug overdose deaths involving other synthetic opioids (excluding methadone). This indicates a significant concern for synthetic opioids in 2018. Drug overdose deaths involving heroin also show a high concern metric, highlighting the critical impact of heroin on public health in 2018. However, Drug overdose deaths involving methadone, natural and semisynthetic opioids, and all drug overdose deaths have lower concern metrics compared to synthetic opioids and heroin. The 2018-specific analysis provides a snapshot of the most urgent issues, whereas the all-years analysis offers a long-term view of trends. The latest year analysis is crucial for immediate action and resource allocation, highlighting which drug types require the most attention right now. Analyzing all years is also important for understanding overall trends and identifying consistent problems, but it may dilute the focus on the most recent and pressing issues. By combining both approaches, policymakers can make informed decisions that balance immediate needs with long-term strategies.',
  all: [
    'To rank and label the concern the government should have for specific drug overdose types, I developed a metric called the "Concern Metric." This metric combines two key factors: the absolute number of overdose deaths (ESTIMATE) and the growth rate of these deaths over time. The formula used is Concern Metric = 0.5 * ESTIMATE + 0.5 * Growth Rate, where both the number of deaths and the growth rate are given equal weights (w1 and w2 are both 0.5).',

    'The process starts by loading the relevant data from the dataset and filtering it to focus on the total population data. Then, I calculate the growth rate for each drug type by determining the percentage change in the number of deaths from the previous year. Missing values in the growth rate are filled with the mean growth rate to ensure that no data is excluded due to missing values.',

    'Next, I transform the growth rates into absolute values to account for both increases and decreases in deaths. The Concern Metric is then calculated by averaging the absolute number of deaths and the growth rate, which provides a balanced view of both the current severity and the trend of the problem.',

    'After computing the Concern Metric, I sort the data by year and concern metric to identify the most critical drug overdose types each year. To effectively communicate the results, I create a stacked area chart that displays the Concern Metric for each drug type over the years. This visualization allows for a clear understanding of long-term trends and helps identify which drug types have been the most concerning over time.',

    'Visualization Analysis: The stacked area chart provides a comprehensive view of the Government Concern Metric for various drug overdose types from 1999 to 2018. Each colored area represents a different drug overdose type, and the total height of the stacked areas at any point in time represents the overall concern metric.',

    'Key Observations: There is a significant peak in the concern metric around the year 2000, followed by a sharp decline. This indicates the early 2000s saw a peak in overdose death concerns, followed by a period of stability. From 2000 to 2010, the overall concern metric remains relatively stable, with minor fluctuations. During this period, the contributions from different drug types are more evenly distributed.',

    'Starting around 2012, there is a noticeable increase in the concern metric, peaking around 2016. This suggests a rising concern for drug overdose deaths in recent years. The brown area, representing deaths involving other synthetic opioids (excluding methadone), becomes increasingly significant, especially post-2015. This indicates a growing concern for synthetic opioids. Natural and Semisynthetic Opioids in the purple area also show a steady increase, indicating a consistent concern over time.',

    'This analysis provides valuable insights for policymakers, indicating where resources and attention should be focused to address the most pressing issues related to drug overdoses. The rising trend in synthetic opioid-related deaths, in particular, calls for targeted interventions to mitigate this growing threat.'
  ]
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