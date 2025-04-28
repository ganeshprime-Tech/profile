const About = () => {
  return (
    <div id="about" className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-16">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-800 text-center leading-relaxed px-4">
  I’m <span className="font-bold text-[#fe5617]">Ganesh Kumar</span>, a
  passionate cybersecurity enthusiast with hands-on experience in 
  <span className="font-bold text-[#fe5617]"> SOC operations</span>, 
  including log analysis, threat detection, and vulnerability assessment. 
  I’ve completed security projects using tools like 
  <span className="font-bold text-[#fe5617]"> Nessus, Wazuh (FIM)</span>, and 
  mapped threats using the <span className="font-bold text-[#fe5617]">MITRE ATT&CK</span> framework. 
  I also developed a <span className="font-bold text-[#fe5617]">firewall using Bash</span> 
  and a <span className="font-bold text-[#fe5617]">keylogger using Python</span> for educational purposes. 
  Currently, I’m a final-year B.Tech student in Computer Science Engineering,
  aiming to build a strong career as a <span className="font-bold text-[#fe5617]">SOC Analyst</span>.
</p>


        {/* Skills Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#fe5617]">
          Skill Set
        </h1>

        {/* Skill Grid */}

{/* Skill Grid */}
<div className="grid grid-cols-12 gap-6 px-4">
  
  {/* Operating Systems */}
  <div className="col-span-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">🖥️</span>
    <h3 className="text-xl font-bold mt-2">Operating Systems</h3>
    <p className="text-sm mt-2">
      <br />
      Linux Core Fundamentals,User and Group Management, File System Management, Process & Service Management
    </p>
  </div>

  {/* React & Next.js */}
  {/* <div className="col-span-3 bg-gray-200 text-gray-800 font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">⚛️</span>
    <h3 className="text-xl font-bold mt-2">React & Next.js</h3>
  </div>

  {/* Tailwind CSS */}
  {/* <div className="col-span-3 bg-gray-200 text-gray-800 font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">🎨</span>
    <h3 className="text-xl font-bold mt-2">Tailwind CSS</h3>
  </div> */} 

  {/* Log Analysis & SIEM */}
  <div className="col-span-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">📊</span>
    <h3 className="text-xl font-bold mt-2">Log Analysis & SIEM</h3>
    <p className="text-sm mt-2">
      Splunk, Wazuh, OSSEC , Suspicious logins , Threat Intelligence Integration , Alerting and Incident Response <br />
      Writing detection rules, analyzing logs , virus tool , static & dynamic malware analysis 
    </p>
  </div>

  {/* Network Security */}
  <div className="col-span-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">🌐</span>
    <h3 className="text-xl font-bold mt-2">Network Security</h3>
    <p className="text-sm mt-2">
      TCP/IP, OSI Model, Ports & Protocols <br />
      DNS, DHCP , VPNs, Firewalls, IDS/IPS 
    </p>
  </div>

  {/* Vulnerability Management */}
  

  {/* Threat Intelligence & OSINT */}
  <div className="col-span-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-center p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <span className="text-3xl">🔍</span>
    <h3 className="text-xl font-bold mt-2">Threat Intelligence & OSINT</h3>
    <p className="text-sm mt-2">
      MITRE ATT&CK Framework, IOC tracking
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
