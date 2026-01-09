import React, { useEffect, useState } from 'react'
import imgImage7 from '../assets/image7.svg'
import imgWeb1445355921 from '../assets/web_1445355921.svg'
import rocketIcon from '../assets/rocket_2075411.png';
import usersIcon from '../assets/check_147246761.png';
import devicesIcon from '../assets/mobile_157148241.png';
import devikaImg from '../assets/devikajain.jpeg';
import aniketImg from '../assets/aniket.png';
import rayyanImg from '../assets/Rayyan_The_Great.jpg'
const Aboutus = () => {
  const features = [
    {
      title: "Source Verification",
      description: "Cross reference trusted database",
      icon: imgWeb1445355921,
    }, {
      title: "Built for Speed & Scale",
      description: "Optimized to handle high volumes of content without compromising performance.",
      icon: rocketIcon,
    },
    {
      title: "User-Friendly Experience",
      description: "Clean, intuitive design that makes verification easy for everyone.",
      icon: usersIcon,
    },
    {
      title: "Cross-Platform Support",
      description: "Verify information from websites, social media, and digital platforms in one place.",
      icon: devicesIcon,
    },
  ];
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);
  return (
    <div className='select-none'>
      <>
        <div
          className="absolute left-[-237px] top-[-155px] w-[1033px] h-[331px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1033 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-horizontal"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-horizontal"
                x1="0"
                y1="165.5"
                x2="1033"
                y2="165.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.90" stopColor="#07788F" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <ellipse
              cx="516.5"
              cy="165.5"
              rx="516.5"
              ry="165.5"
              fill="url(#grad-horizontal)"
              filter="url(#glow-horizontal)"
              opacity="0.9"
            />
          </svg>
        </div>
        <div
          className="absolute left-[-143px] top-[935px] w-[1654px] h-[843px] pointer-events-none"
        >
          <svg
            className="w-full h-[700px] overflow-visible"
            viewBox="0 0 1654 843"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-why-choose"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-why-choose"
                x1="0"
                y1="421.5"
                x2="1654"
                y2="421.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.29" stopColor="#07788F" stopOpacity="0.54" />
              </linearGradient>
            </defs>

            <ellipse
              cx="827"
              cy="421.5"
              rx="827"
              ry="421.5"
              fill="url(#grad-why-choose)"
              filter="url(#glow-why-choose)"
              opacity="0.9"
            />
          </svg>
        </div>
      </>
      <section className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="bg-clip-text font-['Roboto:Regular',sans-serif] font-normal text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(180.119deg, rgb(255, 255, 255) 2.5377%, rgb(124, 233, 255) 98.588%)" }}>
            About FactiScan
          </h2>
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-sm md:text-base lg:text-lg max-w-[800px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
            We stands out by combining real-time fake news detection with transparent, evidence-backed verification in a single workflow. The project goes beyond flagging misinformation by clearly explaining why content is false, building user trust and digital awareness.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <div className="relative max-w-[1000px] mx-auto bg-[rgba(124,233,255,0.74)] opacity-90 rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="text-center lg:text-left">
              <h3 className="font-['Roboto:Regular',sans-serif] font-normal text-white text-2xl md:text-3xl lg:text-4xl mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                Our mission
              </h3>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-sm md:text-base lg:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                Our mission at FactiScan is to safeguard the digital world from misinformation and manipulated content. We aim to empower individuals with the ability to verify what they see, read, and share online. By leveraging advanced artificial intelligence, we strive to detect fake news with speed, accuracy, and transparency. FactiScan is built to promote responsible information consumption in an age of overwhelming digital noise. We believe truth should be accessible, not buried beneath viral falsehoods. Our platform is designed to support informed decision-making for individuals, communities, and institutions alike. We are committed to ethical AI practices and unbiased verification methods. Through continuous innovation, we seek to stay ahead of evolving misinformation tactics. FactiScan works to strengthen trust in digital media ecosystems. Above all, our mission is to make truth resilient in the face of deception.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img alt="Mission illustration" className="max-w-full h-auto w-full max-w-[300px] object-cover rounded-lg" src={imgImage7} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12">
        <div className="max-w-[1100px] mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-center mb-10">Why choose FactiScan?</h3>
          <div className="relative flex justify-center items-center h-[280px]">
            {features.map((item, index) => {
              const total = features.length;
              const leftIndex = (active - 1 + total) % total;
              const rightIndex = (active + 1) % total;
              let pos = index === active ? "center" : index === leftIndex ? "left" : index === rightIndex ? "right" : "hidden";

              return (
                <div key={index} className={`absolute transition-all duration-500 ease-in-out w-[320px] h-[230px] p-6 rounded-2xl border border-[rgba(124,233,255,0.3)] backdrop-blur-xl bg-[rgba(15,76,85,0.45)] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(124,233,255,0.15)]
                  ${pos === "center" ? "scale-110 opacity-100 z-20" : pos === "left" ? "-translate-x-[340px] scale-95 opacity-40 blur-sm z-10" : pos === "right" ? "translate-x-[340px] scale-95 opacity-40 blur-sm z-10" : "opacity-0 scale-90"}`}>
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4 object-contain" />
                  <h4 className="text-lg font-semibold mb-2 text-center">{item.title}</h4>
                  <p className="text-sm text-center opacity-80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12">
        <div className="relative max-w-[1100px] mx-auto">
          <div
            className="relative p-[15px] rounded-[86px]"
            style={{
              background:
                "linear-gradient(180deg, #7CE9FF 29%, #1D5A5E 94%)",
            }}
          >
            {/* Inner Container */}
            <div className="bg-[#050B0F] rounded-[66px] px-6 py-12 md:px-10">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl text-center mb-10">
                Meet Our Team
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[180px] h-[120px] md:w-[180px] md:h-[150px] mb-4 rounded-full  flex items-center justify-center text-black">
                    <img
                      src={devikaImg}
                      alt="Devika Jain"
                     className='w-[180px] h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center mb-4 rounded-full '
                    />
                  </div>
                  <h4 className="text-xl font-medium text-white">Devika Jain</h4>
                  <p className="text-[#7CE9FF] mb-2 font-medium">
                    Product Designer
                  </p>
                  <p className="text-xs text-white/70  text-left leading-relaxed px-2">
                    A product designer with a strong focus on creating intuitive, user-centered digital experiences. She combines visual design, UX research, and problem-solving to translate complex ideas into clean, functional products.
                  </p>
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[180px] h-[120px] md:w-[180px] md:h-[150px] mb-4 rounded-full  flex items-center justify-center text-black">
                    <img
                      src={aniketImg}
                      alt="Aniket Meena"
                     className='w-[180px] h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center mb-4 rounded-full '
                    />
                  </div>
                  <h4 className="text-xl font-medium text-white">Aniket Meena</h4>
                  <p className="text-[#7CE9FF] mb-2 font-medium">
                    Full Stack Developer
                  </p>
                  <p className="text-xs text-white/70 text-left leading-relaxed px-2">
                    A full stack developer with a strong focus on building scalable, end-to-end web applications. They combine front-end engineering, back-end development, and system integration to transform product requirements into reliable, high-performance digital solutions.
                  </p>
                </div>

                {/* Member 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-[18px] h-[120px] md:w-[180px] md:h-[150px] mb-4 rounded-full flex items-center justify-center text-black">
                    <img
                      src={rayyanImg}
                      alt="Rayyan Ahmad"
                     className='w-[180px] h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center mb-4 rounded-full '
                    />
                  </div>
                  <h4 className="text-xl font-medium text-white">Rayyan Ahmad</h4>
                  <p className="text-[#7CE9FF] mb-2 font-medium">
                    AI/ML Engineer
                  </p>
                  <p className="text-xs text-white/70 text-left leading-relaxed px-2">
                    An AI/ML engineer with a strong focus on developing intelligent systems for data-driven decision making. They combine machine learning, natural language processing, and computer vision techniques to convert complex data into accurate, actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 pb-12 md:pb-16">
        <div className="relative max-w-[1000px] mx-auto bg-[rgba(124,233,255,0.74)] opacity-90 rounded-2xl p-6 md:p-8 lg:p-10">
          <h2 className="bg-clip-text font-['Roboto:Regular',sans-serif] font-normal text-3xl md:text-4xl lg:text-5xl text-center mb-6" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(180.119deg, rgb(255, 255, 255) 2.5377%, rgb(124, 233, 255) 98.588%)" }}>
            Technologies used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-white">
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">React.js</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Frontend framework for building dynamic user interfaces</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">Python</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Backend development and AI model integration</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">TensorFlow</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Machine learning framework for fake news detection</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">Natural Language Processing</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Text analysis and content verification</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">MongoDB</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Database for storing verified sources and results</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-lg md:text-xl mb-2">REST API</h4>
              <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base">Communication between frontend and backend services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Aboutus