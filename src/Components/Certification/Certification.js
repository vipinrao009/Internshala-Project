import React from 'react';
import './Certification.css';
import LOGO from '../../Assets/Badge.png'; 

function Certification() {
  return (
    <div className="certification">
        <div className="containor">
            <h1 className="cert-title">AI<sup>+</sup> Ethical Hacker<sup>TM</sup></h1>
            <p className="cert-number">CERTIFICATION NUMBER: 1100ABCD</p>
            <p className="cert-description">
                The AI<sup>+</sup> Ethical Hacker certification delves into the intersection of cybersecurity and artificial intelligence, a pivotal juncture in our era of rapid technological progress. Tailored for budding ethical hackers and cybersecurity experts, it offers comprehensive insights into AI's transformative impact on digital offense and defense strategies. Unlike conventional ethical hacking courses, this program harnesses AI's power to enhance cybersecurity approaches. It caters to tech enthusiasts eager to master the fusion of cutting-edge AI methods with ethical hacking practices amidst the swiftly evolving digital landscape. The curriculum encompasses four key areas, from course objectives and prerequisites to anticipated job roles and the latest AI technologies in Ethical Hacking.
            </p>
            <div className="buttons">
                <button className="btn">Buy Exam Bundle</button>
                <button className="btn">Download Blueprint</button>
                <button className="btn">Find a Training Provider</button>
            </div>
        </div>

        <div className='logo-container'>
            <img src={LOGO} alt="" />
        </div>
    </div>
  );
}

export default Certification;
