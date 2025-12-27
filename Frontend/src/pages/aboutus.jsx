import React from 'react'
import imgImage7 from '../assets/image7.svg'
import imgWeb1445355921 from '../assets/web_1445355921.svg'
const Aboutus = () => {
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

      <section className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="font-['Roboto:Regular',sans-serif] font-normal text-white text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Why choose FactiScan?
          </h3> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-[#1d5a5e] opacity-50 rounded-3xl p-4 md:p-6 h-auto md:h-[200px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-base">Feature Card</p>
              </div>
            </div>

            <div className="bg-[#1d5a5e] rounded-3xl p-4 md:p-6 h-auto md:h-[260px] flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-3 flex items-center justify-center">
                <img alt="Source verification icon" className="w-full h-full object-cover" src={imgWeb1445355921} />
              </div>
              <h4 className="font-['Roboto:Bold',sans-serif] font-bold text-white text-xl md:text-2xl mb-2 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                Source Verification
              </h4>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-base md:text-lg text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                Cross reference trusted database
              </p>
            </div>

            <div className="bg-[#1d5a5e] opacity-50 rounded-3xl p-4 md:p-6 h-auto md:h-[200px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-base">Feature Card</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <div className="relative max-w-[1000px] mx-auto bg-[rgba(7,120,143,0.04)] border-[#7ce9ff] border-4 md:border-8 border-solid rounded-3xl md:rounded-[40px] p-6 md:p-8 lg:p-10">
          <h3 className="font-['Roboto:Regular',sans-serif] font-normal text-white text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-3 rounded-full overflow-hidden bg-[#D9D9D9] flex items-center justify-center">
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#0b090d] text-lg md:text-xl" style={{ fontVariationSettings: "'wdth' 100" }}>
                  pic here
                </p>
              </div>
              <h4 className="bg-clip-text bg-gradient-to-b font-['Roboto:Regular',sans-serif] font-normal from-[#ffffff] from-[1.042%] to-[#7ce9ff] text-lg md:text-xl mb-1" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
                Devika Jain
              </h4>
              <p className="bg-clip-text font-['Roboto:Regular',sans-serif] font-normal text-base md:text-lg mb-2" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(-1.25707deg, rgb(124, 233, 255) 61.14%, rgb(74, 140, 153) 164.46%)" }}>
                Product Designer
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-xs md:text-sm" style={{ fontVariationSettings: "'wdth' 100" }}>
                A product designer with a strong focus on creating intuitive, user-centered digital experiences. She combines visual design, UX research, and problem-solving to translate complex ideas into clean, functional products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-3 rounded-full overflow-hidden bg-[#D9D9D9]">
              </div>
              <h4 className="bg-clip-text bg-gradient-to-b font-['Roboto:Regular',sans-serif] font-normal from-[#ffffff] from-[1.042%] to-[#7ce9ff] text-lg md:text-xl mb-1" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
                Team Member
              </h4>
              <p className="bg-clip-text font-['Roboto:Regular',sans-serif] font-normal text-base md:text-lg mb-2" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(-1.25707deg, rgb(124, 233, 255) 61.14%, rgb(74, 140, 153) 164.46%)" }}>
                Role
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-xs md:text-sm" style={{ fontVariationSettings: "'wdth' 100" }}>
                Description
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-3 rounded-full overflow-hidden bg-[#D9D9D9]">
              </div>
              <h4 className="bg-clip-text bg-gradient-to-b font-['Roboto:Regular',sans-serif] font-normal from-[#ffffff] from-[1.042%] to-[#7ce9ff] text-lg md:text-xl mb-1" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}>
                Team Member
              </h4>
              <p className="bg-clip-text font-['Roboto:Regular',sans-serif] font-normal text-base md:text-lg mb-2" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "linear-gradient(-1.25707deg, rgb(124, 233, 255) 61.14%, rgb(74, 140, 153) 164.46%)" }}>
                Role
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-white text-xs md:text-sm" style={{ fontVariationSettings: "'wdth' 100" }}>
                Description
              </p>
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