const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Wazuh Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              SIEM-TOOL (Wazuh)
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Monitor and detect unauthorized changes to system files using Wazuh's file integrity monitoring feature. 
              Wazuh compares files against baselines and alerts on modifications, additions, or deletions of critical files.
              Detect brute force attempts by monitoring failed login attempts with Wazuh. Identify system vulnerabilities by integrating Wazuh with vulnerability scanning tools.
            </p>
            <a
              href="https://github.com/ganeshprime-Tech/wazuh-project/tree/main"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Nessus Vulnerability Scanner Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Nessus Vulnerability Scanner
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Nessus Vulnerability Scanner to identify, assess, and prioritize vulnerabilities across IT infrastructure.
              Automated vulnerability scanning across network assets, real-time vulnerability assessment with detailed risk ratings, and customizable scan policies for different environments.
            </p>
            <a
              href="https://github.com/ganeshprime-Tech/nessus-vulnerability-management"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Keylogger Project */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Keylogger
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A keylogger tool designed to monitor and capture keystrokes on target systems. 
              It provides real-time logging of keyboard inputs, making it ideal for detailed tracking 
              of user activities. This tool operates in the background and can be customized for 
              different environments and use cases.
            </p>
            <a
              href="https://github.com/ganeshprime-Tech/keylogger"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
