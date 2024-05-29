import React from 'react';
import './ExamDetails.css';

function ExamDetails() {
  return (
    <div className="exam-details-container">
      <h1>Exam Details</h1>
      <div className="exam-details-content">
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Introduction to AI+ Ethical Hacker" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="details-grid">
          <div className="detail-box">Module <span>12</span></div>
          <div className="detail-box highlighted">Examination <span>1</span></div>
          <div className="detail-box">50 MCQs <span>90 Minutes</span></div>
          <div className="detail-box">Passing Score <span>70%</span></div>
        </div>
      </div>
    </div>
  );
}

export default ExamDetails;
