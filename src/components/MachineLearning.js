import React, { useState } from 'react';
import ageImage1 from '../img/agem1.png';
import ageImage2 from '../img/agem2.png';
import ageImage3 from '../img/agesum.png';
import sexImage1 from '../img/error.png';
import sexImage2 from '../img/sex predict.png';
import sexImage3 from '../img/sexsum.png';
import raceImage1 from '../img/race1.png';
import raceImage2 from '../img/race2.png';
import raceImage3 from '../img/racecal.png';


const images = {
  age: [ageImage1, ageImage2, ageImage3],
  sex: [sexImage1, sexImage2, sexImage3],
  race: [raceImage1, raceImage2, raceImage3]
};

const analysisReports = {
  age: [
    'This section, as the graph shows, involved a thorough investigation utilizing polynomial regression to forecast future drug overdose fatality rates across different age groups. The graph skillfully presents historical data together with anticipated rates through 2025, highlighting real historical rates and expected trends for various age groups. The much smaller margin of error seen with polynomial models supported the choice to choose them over simpler linear models. The sophisticated, non-linear patterns shown in the overdose data are skillfully captured by these models; patterns that linear models frequently find difficult to portray because of their inherent simplicity.',
    'Carefully preparing the data—including managing missing values—and creating polynomial characteristics based on the past patterns of each age group were part of the analysis. Through the application of cross-validation, we reduced the margin of error by optimizing the polynomial degree for every demographic group, so improving the accuracy and predictive capacity. This meticulous process of selection made sure that the models were robust in their capacity to generalize across various data sets and tailored to capture the particular dynamics of each age group. The graph acts as an illustration of the accuracy of these models by showing a notable difference between the predicted and real data points, so emphasizing how well the polynomial method captures the complex dynamics of drug overdose trends.',
    'The overdose death rates by age group, wherein each demographic follows a different trajectory, are graphically shown in the graph that is provided. The projections for age groups like 25–34 and 35–44 years highlight a serious worry about the growing drug abuse in these generations. The comparatively steady lines for the very young (those under 15) and very old (those 85 years of age and above) on the other hand, point to less variation in these categories. The graph skillfully shows the possible future problems if current trends go unchecked by using dashed lines to distinguish forecasts from actual historical data.',
    'Planning and drafting of public health policies depend on an examination of these trends. Realizing that middle-aged persons are expected to have the biggest increases in overdose death rates makes focused programs meant to prevent and treat these populations necessary. This knowledge can guide the distribution of resources, such money for educational initiatives and addiction treatment centers, which are geared especially at the most vulnerable groups. In order to slow down this concerning trend and enhance public health outcomes, legislators and medical experts should proactively address the growing issues of drug overdose by predicting these patterns.'
  ],
  sex: [
    'In this part, we analyze the predicted male drug overdose death rates from a linear regression model, which show a steep initial decline followed by a gradual decrease and eventual stabilization, starting at approximately 7 and dropping to around 2 by the end of the forecast period.',
    'Both linear regression and random forest models indicate a decline in drug overdose death rates for both genders over the next five years, with linear regression demonstrating a more stable, consistent decline, whereas random forest models exhibit more fluctuations, suggesting a nuanced understanding of trends.',
    'We also evaluate these two models. And in general, the Linear Regression model shows higher R^2 values for both genders, indicating better overall accuracy compared to the Random Forest model. However, the Random Forest model, with its lower RMSE and consistent margins of error, captures the nuanced fluctuations in the data more effectively.',
    'However, linear regression fails to capture the variability in the data for both genders, showing a poor fit, while random forest provides a better fit by capturing more actual trends but still misses some peaks and troughs. The analysis suggests that gender may not be a strong predictor of drug overdose death rates, indicating that other factors might be more significant in determining future rates.',
    'Future analysis should consider including additional variables such as age and drug types involved to enhance prediction accuracy and better capture the complexity of drug overdose trends.'
  ],
  race: [
    'In this part, we use two different machine learning models, Linear Regression and Polynomial Regression, to predict the future drug overdose death rates from 2019 to 2028 based on the feature of races in demographic.',
    'Linear Regression Model: For forecasting future drug overdose death rates by race, we firstly implemented a linear regression model. Initially, we defined a range of future years to forecast, extending 10 years from the last available year in the dataset. For each race, we split the historical data into training and test sets, ensuring that 20% of the data was reserved for testing. A linear regression model was then trained on the training set to learn the relationship between the years and the drug overdose death rates. Predictions were made on the test set to evaluate the model’s performance, and the standard error of the predictions was calculated. Using a 95% confidence interval, we computed the margin of error for the predictions to provide an indication of their accuracy. The trained model was subsequently used to predict drug overdose death rates for the defined future years, and the predicted future rates along with their margins of error were stored for each race.',
    'Polynomial Regression Model: To capture more complex relationships in the data and potentially improve the accuracy of our forecasts, we secondly implemented a polynomial regression model. This approach involves finding the best polynomial degree that minimizes the Root Mean Squared Error (RMSE). We defined a function to perform cross-validation and evaluate the model\'s performance for polynomial degrees ranging from 1 to n. For each race, the historical data was split into training and test sets, and the optimal polynomial degree was determined using the defined function. A polynomial regression model with the best degree was then trained on the training set. The model\'s performance was assessed by making predictions on the test set and calculating the standard error and margin of error. The trained polynomial regression model was used to forecast future drug overdose death rates for the next 10 years. The predicted rates and their margins of error were stored and compared with the linear regression results to evaluate the improvement in forecast accuracy.'
  ],
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
