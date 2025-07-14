import React from 'react';
import './AboutMe.css';
import profile from '@/assets/profile.png';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import Contact from '../Contact/Contact';

const AboutMe = () => {
  const education = [
    {
      title: 'President University',
      subtitle: 'Bachelor of Informatics, Concentration in Cyber Security',
      date: 'Aug 2023 - Present',
      details: [
        'GEMASTIK Participant – Smart Device, Embedded System & IoT Category',
        'House of Technology 7.0 – Capture The Flag Participant',
        'Liaison Officer – COMPSHERE 2024',
        'Liaison Officer – Interact 2024',
        'Liaison Officer – Student Awarding Night 2024',
        'Event Organizer – Social Project 2024',
        'Multimedia and Design Digital – COOL Matriculation 2024',
      ],
    },
    {
      title: 'SMKN 2 Banjarbaru',
      subtitle: 'Computer and Network Engineering',
      date: 'Jun 2020 - May 2023',
    },
  ];

  const experience = [
    {
      title: 'President University',
      subtitle: 'Student Ambassador',
      date: 'Sep 2024 - Present',
      details: [
        'Introduced campus to over 300 students and parents from Samarinda.',
        'Introduced campus to over 250 students and parents from SMK St. Mikael.',
        'Collaborated to promote Faculty of Medicine to several schools.',
        'Delivered presentations at 3 high schools in Java.',
      ],
    },
    {
      title: 'BPMHP Banjarbaru',
      subtitle: 'Network Engineer', 
      date: 'Jan 2022 - Jul 2022',
      details: [
        'Helped resolve network issues by installing and configuring TP-Link TL-WA850RE.',
        'Maintained the existing office network infrastructure.',
      ],
    },
  ];

  return (
    <div className="about-me">
      <div className="square">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-social-wrapper">
            <img src={profile} alt="Profile" className="about-img" />
            <div className="social-spread">
              <a href="https://www.linkedin.com/in/anggela" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Legna10" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="about-text-wrapper">
            <div className="about-text">
              <p className="about-text">
                A graduate of a Vocational High School majoring in{' '}
                <span className="highlight">Computer and Network Engineering</span>, currently pursuing a Bachelor's degree in{' '}
                <span className="highlight">Informatics</span> with a concentration in{' '}
                <span className="highlight">Cybersecurity</span>. Experienced in network services and certified. Has the ability to work well in a team and communicate effectively.
              </p>
            </div>
            <div className="about-extras-inline">
              <a href="/CV.pdf" className="download-btn"
                download rel="noopener noreferrer">
                Download CV </a>
              <a href="/Contact" className="download-btn">
                Contact Me </a>
            </div>
          </div>
        </div>
      </div>
      <div className="square">
        <div className="dual-timeline-container">
          <div className="timeline-column">
            <h2 className="timeline-title"> Education</h2>
            <div className="timeline-list">
              {education.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.title}</h3>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.subtitle}</p>
                    {item.details && (
                      <ul className="experience-details">
                        {item.details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}

              <div className="dot end-dot" />
            </div>
          </div>

          <div className="timeline-column">
            <h2 className="timeline-title"> Experience</h2>
            <div className="timeline-list">
              {experience.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.title}</h3>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.subtitle}</p>
                    {item.details && (
                      <ul className="experience-details">
                        {item.details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
              <div className="dot end-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
