import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF] min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-8">
      {/* Left Section (Centered Text with Adjusted Spacing) */}
      <div className="px-8 md:px-16 flex-1 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          I’m <span className="text-[#fe5617]">Ganesh Kumar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold flex gap-2 justify-center md:justify-start">
          <span className="text-[#fe5617]">I’m a</span>
          <Typewriter
            options={{
              strings: [
                "Blue Teamer.",
                "Linux Administrator.",
                "Cybersecurity Enthusiast.",
                "Defender.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-lg leading-relaxed">
          I am a final-year student interested in cybersecurity, actively seeking job opportunities.
        </p>

        {/* Contact Information with Adjusted Spacing */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:gap-8 text-lg md:text-xl font-semibold">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-[#fe5617]" size={20} />
            <span>Sivakasi</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#fe5617]" size={20} />
            <span>8525806498</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#fe5617]" size={20} />
            <span>theganeshkumar00@gmail.com</span>
          </div>
        </div>

        {/* Button (Centered with Better Padding) */}
        <div className="bg-[#fe5617] px-6 py-3 rounded-2xl font-bold text-white inline-block">
          <a href="\Ganeshkumar__.pdf" download>Download CV</a>
        </div>
      </div>

      {/* Right Section (Optimized Image Size & Positioning) */}
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-36 sm:w-44 md:w-52 lg:w-60 rounded-lg object-contain mx-auto"
          src="/profile.jpg"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
