import React from 'react';

// Certifications array
const certifications = [
    {
        title: "Google Cybersecurity Professional",
        issuer: "Google",
        image: "/Coursera G79440YO1A5G_page-0001.jpg",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/G79440YO1A5G", // <-- Add your actual link here
      },
  {
    title: "Learn the Art of Hacking Through Programming (LAHTP)",
    issuer: "Selfmade Ninja Academy",
    image: "certificate.png",
    link: "https://github.com/ganeshprime-Tech/Certificate/blob/main/LAHTP-LEGACY.png", // <-- Add your actual link here
  },
  
  {
    title: "Cybersecurity Threat Hunting for SOC Analysts",
    issuer: "Udemy",
    image: "UC-cc9a2275-e4ab-459c-828d-37735050a4f3.jpg",
    link: "https://www.udemy.com/certificate/UC-cc9a2275-e4ab-459c-828d-37735050a4f3/", // <-- Add your actual link here
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "nativeva",
    image: "CEH.jpg",
    link: "https://github.com/ganeshprime-Tech/Certificate/blob/main/CEH.jpg", // <-- Add your actual link here
  },
  {
    title: "Linux",
    issuer: "Udemy",
    image: "UC-ad095dc3-1a93-4241-8de7-9ab904bd5b76.jpg",
    link: "https://www.udemy.com/certificate/UC-ad095dc3-1a93-4241-8de7-9ab904bd5b76/", // <-- Add your actual link here
  },
  {
    title: "SQL",
    issuer: "Udemy",
    image: "UC-74b73cde-7a27-4a4d-9beb-05ff76c3c899.jpg",
    link: "https://www.udemy.com/certificate/UC-74b73cde-7a27-4a4d-9beb-05ff76c3c899/", // <-- Add your actual link here
  },
];

// Component
const CertificatePortfolio = () => {
  return (
    <div id='certificate' className="min-h-screen  bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl text-[#fe5617] font-bold text-center mb-10">My Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificatePortfolio;
