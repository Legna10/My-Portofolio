import React, { useState, useRef, useEffect } from 'react'
import './SkillsnTools.css'
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaDatabase, FaReact, FaNetworkWired, FaSearch, FaClipboardCheck, FaShieldAlt, FaUserFriends, FaBrain ,
  FaSyncAlt, FaLaravel, FaBootstrap, 
} from 'react-icons/fa'
import {
  SiCplusplus, SiFlask, SiFirebase, SiCisco, SiMikrotik
} from 'react-icons/si'

const skills = [
  {
    category: "Programming & Scripting",
    items: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 85 },
      { name: "C++", icon: <SiCplusplus />, level: 80 },
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 90 },
      { name: "SQL", icon: <FaDatabase />, level: 85 },
      { name: "NoSQL", icon: <SiFirebase />, level: 85 },
      { name: "Flask", icon: <SiFlask />, level: 85 },
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "Laravel", icon: <FaLaravel />, level: 85 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
    ]
  },
  {
    category: "Networking",
    items: [
      { name: "Cisco (Routing, Switching, VLAN, DHCP, OSPF)", icon: <SiCisco />, level: 95 },
      { name: "Mikrotik (Installation, Configuration)", icon: <SiMikrotik />, level: 95 },
      { name: "Network Config, Management, and Troubleshooting", icon: <FaNetworkWired />, level: 90 }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Digital Forensics", icon: <FaSearch />, level: 90},
      { name: "Security Compliance & Audit", icon: <FaClipboardCheck /> , level: 85},
      { name: "Security Risk Management", icon: <FaShieldAlt />, level: 83 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Teamwork", icon: <FaUserFriends />, level: 95 },
      { name: "Problem Solving", icon: <FaBrain />, level: 90 },
      { name: "Adaptable", icon: <FaSyncAlt />, level: 93 }
    ]
  }
]

const tools = [
  {
    category: "Programming & Scripting",
    items: [
      { name: "VSCode" },
      { name: "Jupyter Notebook" },
      { name: "Google Colab" },
      { name: "Android Studio" },
      { name: "Eclipse" },
    ]
  },
  {
    category: "Networking",
    items: [
      { name: "Cisco Packet Tracer" },
      { name: "Mikrotik Winbox" },
      { name: "Nmap" },
      { name: "Traceroute" },
      { name: "Netcat" },
      { name: "PuTTY" },
      { name: "FileZilla" }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Autopsy" },
      { name: "Wireshark" },
      { name: "NetworkMiner" },
      { name: "Burp Suite" },
      { name: "FoxyProxy" },
      { name: "Metasploit" },
      { name: "CyberChef" },
      { name: "Linux (Kali, Ubuntu, Debian)" },
    ]
  },
  ,
  {
    category: "DevOps & Deployment",
    items: [
      { name: "Docker" },
      { name: "Github" },
      { name: "Firebase" },
      { name: "Netlify" },
      { name: "XAMPP" },
    ]
  },
  {
  category: "DevOps & Deployment",
  items: [
    { name: "Docker" },
    { name: "GitHub" },
    { name: "Firebase Hosting"},
    { name: "Netlify" },
  ]
  },
  {
    category: "Others",
    items: [
      { name: "Google Workspace" },
      { name: "Figma" },
      { name: "Canva" },
      { name: "Notion" },
      { name: "Jira" }
    ]
  }
]

const SkillsnTools = () => {
  const [skillFilter, setSkillFilter] = useState("All")
  const [toolFilter, setToolFilter] = useState("All")
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredSkills = skillFilter === "All" ? skills : skills.filter(s => s.category === skillFilter)
  const filteredTools = toolFilter === "All" ? tools : tools.filter(t => t.category === toolFilter)

  return (
    <div ref={sectionRef} className={`skills-tools fade-in ${visible ? 'visible' : ''}`}>
      {/* SKILLS BOX */}
      <div className="square">
        <h2>My Skills</h2>
        <div className="filter-buttons">
          {['All', 'Programming & Scripting', 'Networking', 'Cybersecurity', 'Soft Skills'].map(btn => (
            <button
              key={btn}
              className={skillFilter === btn ? 'active' : ''}
              onClick={() => setSkillFilter(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        {filteredSkills.map((cat, idx) => (
          <div key={idx} className="skill-block">
            <h3>{cat.category}</h3>
            <div className="skill-list">
              {cat.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="icon">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TOOLS BOX */}
      <div className="square">
        <h2>Tools I Used</h2>
        <div className="filter-buttons">
          {['All', 'Programming & Scripting', 'Networking', 'Cybersecurity', 'Others'].map(btn => (
            <button
              key={btn}
              className={toolFilter === btn ? 'active' : ''}
              onClick={() => setToolFilter(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        {filteredTools.map((cat, idx) => (
          <div key={idx} className="tool-block">
            <h3>{cat.category}</h3>
            <div className="tool-list">
              {cat.items.map((tool, i) => (
                <div key={i} className="tool-item">
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsnTools
