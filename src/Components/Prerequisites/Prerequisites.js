import React from 'react';
import './Prerequisites.css';

function Prerequisites() {
  return (
    <div className='vipin'>
      
      <div className="prerequisites">
      <hr className='horizontal'></hr>
      <ul className="tabs">
        <li>Prerequisites</li>
        <li>Exam Details</li>
        <li>Modules</li>
        <li>Skills</li>
        <li>Opportunities</li>
      </ul>
      <hr className='horizontal'></hr>
      <div className="content">
        <h1>Prerequisites</h1>
        <ul className="prereq-list">
          <li>Programming Proficiency: Knowledge of Python, Java, C++, etc for automation and scripting.</li>
          <li>Networking Fundamentals: Understanding of networking protocols, subnetting, firewalls, and routing.</li>
          <li>Cybersecurity Basics: Familiarity with fundamental cybersecurity concepts, including encryption, authentication, access controls, and security protocols.</li>
          <li>Operating Systems Knowledge: Proficiency in using Windows and Linux operating systems.</li>
          <li>Machine Learning Basics: Understanding of machine learning concepts, algorithms, and basic implementation.</li>
          <li>Web Technologies: Understanding of web technologies, including HTTP/HTTPS protocols, and web servers.</li>
        </ul>
      </div>
      
    </div>
    </div>
  );
}

export default Prerequisites;
