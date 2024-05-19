import React from 'react';
import NavBar from './NavBar.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Routes, Route } from 'react-router-dom';
import Introduction from './Introduction.js';
import {OverdoseTrends} from './Trend.js'

import '../index.css'

function App(props) {
  return (
    <div>
    <NavBar />
    <Header />
    <Routes>
        <Route path="/" element={<Introduction /> } />
        <Route path="/overdose-trends" element={<OverdoseTrends />} />
        {/*<Route path="/concern-metric" element={ConcernMetric} /> */}
        {/*<Route path="/machine-learning" element={MachineLearning} />*/}
        {/*<Route path="/conclusion" element={Conclusion} />*/}
   </Routes>
   <Footer />
   </div>
  );
}

export default App;