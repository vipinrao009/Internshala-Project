import React from 'react';
import './LearningPage.css';
import { FaCheckCircle } from 'react-icons/fa';

const LearningPage = () => {
  const topics = [
    {
      title: "AI-Integrated Cybersecurity Techniques",
      description: "Learners will develop the ability to integrate AI tools and technologies into cybersecurity practices. This includes using AI for ethical hacking tasks such as reconnaissance, vulnerability assessments, penetration testing, and incident response."
    },
    {
        title: "Threat Analysis and Anomaly Detection",
        description: "Students will gain skills in applying machine learning algorithms to detect unusual patterns and behaviors that indicate potential security threats. This skill is crucial for preemptively identifying and mitigating risks before."
    },
    {
      title: "Automated Security Protocol Optimization",
      description: "Students will be equipped to utilize AI to dynamically adjust and optimize security protocols based on real-time data analysis and threat assessment. Learners will explore how AI algorithms can predict and respond to potential security breaches by automatically tweaking firewall rules, security configurations, and other protective measures."
    },
    
    {
      title: "AI for Identity and Access Management (IAM)",
      description: "Learners will understand how to apply AI to enhance IAM systems, crucial for maintaining secure access to resources within an organization. This involves using AI to improve authentication processes and manage user permissions more dynamically and securely."
    }
  ];

  return (
    <div className="learning-page">
      <h1>What will you Learn?</h1>
      <div className="topics-container">
        {topics.map((topic, index) => (
          <div className="topic" key={index}>
            <div className="icon-container">
              <FaCheckCircle className="icon" />
            </div>
            <div className="content">
              <h4>{topic.title}</h4>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPage;
