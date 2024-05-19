// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="tabs">
      <ul className="tab-list">
        <li className="tab-list-item"><Link to="/" aria-label="home">Introduction</Link></li>
        <li className="tab-list-item"><Link to="/overdose-trends" aria-label="overdose trends">Overdose Trends</Link></li>
        <li className="tab-list-item"><Link to="/concern-metric" aria-label="concern metric">Concern Metric</Link></li>
        <li className="tab-list-item"><Link to="/machine-learning" aria-label="machine learning">Machine Learning</Link></li>
        <li className="tab-list-item"><Link to="/conclusion" aria-label="conclusion">Conclusion</Link></li>
      </ul>
    </nav>
  );
}
