import React, { useState } from 'react';
import './CertificationModules.css';

function CertificationModules() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="certification-modules-container">
      <h1>Certification Modules</h1>
      <div className="module-list">
        {modules.map((module, index) => (
          <div key={index} className="module">
            <div className="module-header" onClick={() => toggleModule(index)}>
              <span>{activeIndex === index ? '-' : '+'}</span> {module.title}
            </div>
            {activeIndex === index && (
              <div className="module-content">
                <ul>
                  {module.contents.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const modules = [
  {
    title: 'Module 1: Foundation of Ethical Hacking Using Artificial Intelligence (AI)',
    contents: [
      '1.1 Introduction to Ethical Hacking',
      '1.2 Ethical Hacking Methodology',
      '1.3 Legal and Regulatory Framework',
      '1.4 Hacker Types and Motivations',
      '1.5 Information Gathering Techniques',
      '1.6 Footprinting and Reconnaissance',
      '1.7 Scanning Networks',
      '1.8 Enumeration Techniques'
    ]
  },
  {
    title: 'Module 2: Introduction to AI in Ethical Hacking',
    contents: []
  },
  {
    title: 'Module 3: AI Tools and Technologies in Ethical Hacking',
    contents: []
  },
  {
    title: 'Module 4: AI-Driven Reconnaissance Techniques',
    contents: []
  },
  {
    title: 'Module 5: AI in Vulnerability Assessment and Penetration Testing',
    contents: []
  },
  {
    title: 'Module 6: Machine Learning for Threat Analysis',
    contents: []
  },
  {
    title: 'Module 7: Behavioral Analysis and Anomaly Detection for System Hacking',
    contents: []
  },
  {
    title: 'Module 8: AI Enabled Incident Response Systems',
    contents: []
  }
  , {
    title: 'Module 9: AI For Identify and Access Management (IAM)',
    contents: []
  },
  {
    title: 'Module 10: Securing AI System',
    contents: []
  },
  {
    title: 'Module 11: Ethics in AI and Cybercecurity',
    contents: []
  },
  {
    title: 'Module 12: Capstone project',
    contents: []
  }
];

export default CertificationModules;
