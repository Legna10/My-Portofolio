import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import './Projects.css';
import TP1 from '../../assets/Project/TP1.png'
import P1 from '../../assets/Project/P1.png'
import TP2 from '../../assets/Project/TP2.png'
import P2 from '../../assets/Project/P2.png'
import TP3 from '../../assets/Project/TP3.png'
import P3 from '../../assets/Project/P3.png'
import TP4 from '../../assets/Project/TP4.png';
import P4 from '../../assets/Project/P4.png'
import TP5 from '../../assets/Project/TP5.png';
import P5 from '../../assets/Project/P5.png'
import TP6 from '../../assets/Project/TP6.png';
import P6 from '../../assets/Project/P6.png'
import P7 from '../../assets/Project/P7.png'
import TP8 from '../../assets/Project/TP8.png'
import P8 from '../../assets/Project/P8.png'
import TP9 from '../../assets/Project/TP9.png';
import TP10 from '../../assets/Project/TP10.png'
import P10 from '../../assets/Project/P10.png'
import TP11 from '../../assets/Project/TP11.png';
import P11 from '../../assets/Project/P11.png';
import TP12 from '../../assets/Project/TP12.png';
import P12 from '../../assets/Project/P12.png';
import stay from '../../assets/Project/stay.png';
import conf from '../../assets/Project/confidential.png'

const projectData = [
  {
    id: 1,
    title: 'Netboxed',
    thumbnail: TP1,
    image: P1,
    description: 'NetBoxed is a web application that fuses Netflix, is a streaming platform concept with Letterboxd is social features for movie enthusiasts. The application enables users to browse movies, maintain watchlists, rate films, write reviews, search for content, and connect with other users through a social following system.',
    githublink: 'https://github.com/kunospw/NetBoxed',
    doclink: 'https://docs.google.com/document/d/1HuYefbrj8Pw0wqMb7ss3n30F0bMSd-TmTLoW44eGWmY/edit?usp=sharing',
    tags: ['ReactJS',, 'TMDB API', 'BcryptHash']
  },
  {
    id: 2,
    title: 'K-Review',
    thumbnail: TP3,
    image: P3,
    description: 'K-Review is a web-based application designed for K-pop fans to discover, review, and manage information about their favorite albums and artists. Built with PHP and MySQL, this platform implements CRUD (Create, Read, Update, Delete).',
    githublink: 'https://github.com/Legna10/K-Review',
    doclink: 'https://docs.google.com/document/d/1DisruWKliQVoC87qT02JFF79MjbFPvNa/edit?usp=sharing&ouid=102828231638890615006&rtpof=true&sd=true',
    tags: ['PHP', 'CRUD', 'SQL']
  },
  
  {
    id: 3,
    title: 'K-Hype',
    thumbnail: TP5,
    image: P5,
    description: 'K-HYPE is a web-based platform inspired by the vibrant world of K-Pop music and culture. Its name is derived from HYBE Entertainment, reflecting the concept of a fictional K-Pop agency. This site gathers everything related to the agency—from company profile and artist information to news, events, concerts, comebacks, and complete discography. The website is designed not only to share our passion for K-Pop, but also to serve as a 24/7 hub for fans to access updated content about their favorite idols.',
    githublink: 'https://github.com/Legna10/K-Hype',
    doclink: 'https://docs.google.com/document/d/1UijgrIObTex65wn5sNL0sK-3EWQ-5Nce5552QOh72es/edit?usp=sharing',
    tags: ['HTML', 'CSS', 'Bootstrap']
  },

  {
    id: 4,
    title: 'Checkie by AngPhie',
    thumbnail: TP10,
    image: P10,
    description: 'Checkie by AngPhie is a productivity web app that helps users manage their tasks and notes efficiently. It features two main pages: Task and Stikies. The Task page allows users to add, track, and organize their to-dos. Meanwhile, the Stikies page mimics the look and feel of physical sticky notes, where users can write quick notes and freely drag them around the screen, offering a flexible, visual way to manage thoughts or reminders. The intuitive drag-and-drop interface on the Stikies page enhances interactivity and makes note-taking feel natural and engaging.',
    githublink: 'https://github.com/Legna10/Checkie-by-AngPhie',
    doclink:'',
    tags: ['ReactJS', 'CRUD', ]
  },
    {
    id: 5,
    title: 'tokopari',
    thumbnail: TP2,
    image: P2,
    description: 'Tokopari is an Android-based e-commerce application inspired by Tokopedia, developed using Java, SQLite, and Firebase. This application allows users to browse products, manage shopping carts, and perform basic transactions. SQLite is used for product data storage, while Firebase handles user authentication.',
    githublink: 'https://github.com/Legna10/tokopari-2.0',
    doclink: '',
    tags: ['Android', 'Java' , 'SQLite', 'Firebase']
  },
  {
    id: 6,
    title: 'Pneumonia Detection',
    thumbnail: TP4,
    image: P4,
    description: 'Pneumonia Detection is an AI-based project that utilizes a Convolutional Neural Network (CNN) to identify pneumonia from chest X-ray images. CNNs are particularly well-suited for this task due to their ability to automatically extract spatial features such as lung opacities and abnormal textures, which are key indicators of pneumonia. Unlike traditional machine learning methods, CNNs eliminate the need for manual feature engineering by learning patterns directly from raw image data. This model includes preprocessing steps such as grayscale conversion, image resizing, and labeling into two categories: PNEUMONIA and NORMAL. It consists of convolutional layers, pooling layers, and fully connected layers, with ReLU and sigmoid activation functions used for feature learning and binary classification. The model is trained using the Adam optimizer and binary crossentropy loss function, and evaluated with metrics such as accuracy, precision, recall, and confusion matrix. This solution aims to support healthcare professionals by reducing diagnostic time and increasing the accuracy of pneumonia detection in medical imaging.',
    githublink: 'https://github.com/Legna10/Pneumonia-Detection',
    doclink: 'https://docs.google.com/document/d/1NRAD9kh9Q2vbv3QDzswzUoJ2jSODCufIzSPfDmh-M-A/edit?usp=sharing',
    tags: ['Python', 'CNN', 'Flask']
  },
  {
    id: 7,
    title: 'Case X',
    thumbnail: conf,
    image: P7,
    description: 'Case X is a digital forensic investigation focused on identifying and analyzing electronic evidence from a suspect is disk image, suspected of involvement in human trafficking through the dark web. Analysis was conducted using Autopsy to examine the file system structure, uncover hidden files, and extract relevant digital artifacts. Network evidence from a provided PCAP file was examined using Wireshark and NetworkMiner, revealing communication with hidden services and anonymous servers. Steganography techniques were detected using QuickStego, while encrypted files were decrypted with the help of CyberChef and John the Ripper was used for password cracking. The collected evidence helped reconstruct the sequence of events and link the suspect is digital activity to illegal operations on the dark web.',
    githublink: '',
    doclink:'',
    tags: ['Digital Forensics', 'Autopsy', 'Wireshark']
  },
  {
    id: 8,
    title: 'RiskAnalyze',
    thumbnail: TP8,
    image: P8,
    description: 'RiskAnalyze is a web-based cybersecurity risk assessment platform designed to help organizations identify, evaluate, and mitigate digital threats using the OCTAVE Allegro framework. It features an interactive dashboard, dynamic assessment forms, and AI-assisted threat detection through VirusTotal API, allowing real-time URL analysis with data from over 70 antivirus engines. Integrated with Firebase for secure authentication and database management, the system supports compliance with regulations such as GDPR, ISO 27001, and NIST 800-53. RiskAnalyze enables users to assess risks based on business impact, visualize threat levels, and generate actionable reports, offering a comprehensive and scalable solution for modern cybersecurity risk management.',
    githublink: 'https://github.com/coenflour/Security-Risk-Assessment',
    doclink:'https://docs.google.com/document/d/1up1SXJFKDv3zO9NN0hqIvYGJb06GKLAA/edit?usp=sharing&ouid=102828231638890615006&rtpof=true&sd=true',
    tags: ['ReactJS', 'Firebase', 'VirusTotal API', 'Flask']
  },
  {
    id: 9,
    title: 'CTF PU',
    thumbnail: TP12,
    image: P12,
    description: 'This is a write-up of a Capture The Flag (CTF) challenge created for the Ethical Hacking & Digital Forensic course. The challenge features various categories, including Forensics, Web Exploitation, Cryptography, OSINT, and Miscellaneous, designed to test student is skills in analyzing digital evidence, exploiting web vulnerabilities, decrypting encoded messages, conducting open-source investigations, and solving unique puzzles. It encourages participants to apply ethical hacking techniques and digital forensic methods in a hands-on environment that simulates real-world scenarios.',
    githublink: '',
    doclink: 'https://docs.google.com/document/d/1zKPs4Q9F36npwQG9-k6jm0qEwKnRTILNF-5ybWW97s8/edit?usp=sharing',
    tags: ['CTF', 'Forensics', 'Cryptography', 'OSINT']
  },
  {
    id: 10,
    title: 'This website',
    thumbnail: TP9,
    image: TP9,
    description: 'This Website Portfolio is a personal portfolio website built using React and hosted on Netlify. It displays my background, projects, certifications, and achievements in a structured and visually engaging layout. The site includes interactive features such as modal pop-ups for project details, dark and light mode support, and organized sections for easy navigation. This website was created as a digital space to represent my professional journey and make my work accessible to potential collaborators, employers, and anyone interested in what I do.',
    githublink: 'https://github.com/Legna10/',
    doclink:'',
    tags: ['ReactJS', 'Nodemailer', 'reCAPTCHA v2', 'Netlify',]
  },
  {
    id: 11,
    title: 'Stay143',
    thumbnail: TP11,
    image: P11,
    description: 'A K-pop-themed CTF challenge site built with React, Firebase, and Netlify. Solve fun and tricky puzzles inspired by BlackPink, Stray Kids, and more!',
    githublink: 'https://github.com/Legna10/Stay143',
    doclink:'',
    tags: ['React', 'Firebase', 'Netlify']
  },
  {
    id: 12,
    title: 'SudoAngela',
    thumbnail: TP6,
    image: P6,
    description: 'SudoAngela is a web-based Sudoku puzzle game designed to solve 9×9 number grids either manually or automatically. Built using HTML, CSS, and JavaScript, this application incorporates several data structures to support its core features. The Undo feature uses a Stack data structure, which follows the Last In, First Out (LIFO) principle—ideal for reversing the most recent changes made by the user. The Hint feature utilizes a Queue, following the First In, First Out (FIFO) principle to ensure hints are delivered in the order they are generated. The Solve functionality is powered by a Dynamic Array that enables flexible updates during the solving process using a backtracking algorithm, making it easy to explore and revert values while following Sudoku rules. Meanwhile, the game grid is represented by a 2D Array, effectively organizing the rows and columns for easy access and display. With this structure, SudoAngela not only provides an engaging logic puzzle experience but also demonstrates practical applications of data structures in game development.',
    githublink: 'https://github.com/Legna10/K-Review',
    doclink: 'https://docs.google.com/document/d/1uC5OhaMGhDIye6tGJrwlIp-4EVw83K5cNZhU5h3Gl6k/edit?usp=sharing',
    tags: ['HTML','CSS','JS', 'Array', 'Stack', 'Queue']
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const galleryRef = useRef();

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    const grid = galleryRef.current;
    const items = grid.querySelectorAll('.project-thumb');

    items.forEach(item => {
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
      const contentHeight = item.getBoundingClientRect().height;

      const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
      item.style.setProperty('--row-span', rowSpan);
    });
  }, []);

  return (
    <div className="projects-section">
      <div className="highlight-project">
        <img src={stay} alt="Highlight Project" />
        <div className="highlight-overlay">
          <h2>Stay143</h2>
          <p>some challenges that u might like? Just bite it!</p>
          <a href="https://stay.anggelafelayni.site" className="highlight-btn" target="_blank" rel="noopener noreferrer">
            Visit Site </a>
        </div>
      </div>
      <div className="project-gallery" ref={galleryRef}>
        {projectData.map(project => (
          <div key={project.id} className="project-thumb" onClick={() => openProject(project)}>
            <img src={project.thumbnail} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="thumb-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <div className="modal-header-inside">
              <h3>{selectedProject.title}</h3>
              <button className="close-btn" onClick={closeProject}>✖</button>
            </div>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
              <div className="modal-links">
                {selectedProject.githublink && (
                  <p>
                    <a href={selectedProject.githublink} target="_blank" rel="noopener noreferrer">
                    GitHub
                    </a>
                  </p>
                )}

                {selectedProject.doclink && (
                  <p>
                    <a href={selectedProject.doclink} target="_blank" rel="noopener noreferrer">
                      Docs
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;