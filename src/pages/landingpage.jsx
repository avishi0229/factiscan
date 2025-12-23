import React from 'react'
import imgWeb144535591 from "../assets/web_144535591.svg";
import imgClock179390401 from "../assets/clock_179390401.svg";
import imgArtificialIntelligence1 from "../assets/artificial-intelligence1.svg";
import imgImage6 from "../assets/image6.svg";
import svgPaths from '../assets/svgassets.js'
import { Link } from 'react-router-dom';
import imageshield from '../assets/imageshield.svg'
import mrfactiscan  from '../assets/Ellipse28.svg'

const Landingpage = () => {
  const steps = [
    { number: '1', label: 'Paste URL or Text', description: 'Copy and paste the news article URL or text content' },
    { number: '2', label: 'AI Analysis', description: 'Our AI analyzes the content using advanced algorithms' },
    { number: '3', label: 'Verify Sources', description: 'Cross-reference with trusted news databases' },
    { number: '4', label: 'Get Results', description: 'Receive credibility score and detailed report' }
  ];
  return (
    <div>

      <>
        <div
          // 1. Position matches Figma X/Y
          // 2. Width/Height matches Figma's visual dimensions (swapped because we aren't rotating)
          className="absolute left-[-237px] top-[-155px] w-[1033px] h-[331px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible" // overflow-visible prevents the glow from cutting off
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
                {/* Matches Figma blur */}
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
                {/* Matches Figma Gradient Colors */}
                <stop offset="0.90" stopColor="#07788F" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* We swapped rx/ry here to make it horizontal by default.
           rx = 516 (half of 1032 width)
           ry = 165 (half of 330 height)
        */}
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

        {/* Top right glow 1 */}
        <div
          // 1. Position from Figma Screenshot 2 (X: 732, Y: 116)
          // 2. Width/Height based on the visual bounding box (753px x 616px)
          className="absolute left-[800px] top-[116px] w-[753px] h-[616px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible" // overflow-visible is crucial for the heavy blur
            viewBox="0 0 753 616"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-fact-check"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-fact-check"
                x1="0"
                y1="308"
                x2="753"
                y2="308"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.90" stopColor="#07788F" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* ellipse logic:
           cx = 376.5 (half of 753 width)
           cy = 308   (half of 616 height)
           rx = 376.5 (x-radius)
           ry = 308   (y-radius)
        */}
            <ellipse
              cx="376.5"
              cy="308"
              rx="376.5"
              ry="308"
              fill="url(#grad-fact-check)"
              filter="url(#glow-fact-check)"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Top right glow 2 */}


        {/* Features left glow */}
        <div
          // Shifted right by 30px: -55px + 30px = -25px
          className="absolute left-[15px] top-[917px] w-[443px] h-[540px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 443 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-features-left"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-features-left"
                x1="221.5"
                y1="0"
                x2="221.5"
                y2="540"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.29" stopColor="#07788F" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <ellipse
              cx="221.5"
              cy="270"
              rx="221.5"
              ry="270"
              fill="url(#grad-features-left)"
              filter="url(#glow-features-left)"
              opacity="1"
            />
          </svg>
        </div>
        {/* Features center glow */}
        <div
          // Shifted right by 30px: 434px + 30px = 464px
          className="absolute left-[475px] top-[917px] w-[440px] h-[540px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 440 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-features-center"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-features-center"
                x1="220"
                y1="0"
                x2="220"
                y2="540"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.29" stopColor="#07788F" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <ellipse
              cx="220"
              cy="270"
              rx="220"
              ry="270"
              fill="url(#grad-features-center)"
              filter="url(#glow-features-center)"
              opacity="1"
            />
          </svg>
        </div>
        {/* Features right glow */}
        <div
          // Shifted right by 30px: 895px + 30px = 925px
          className="absolute left-[935px] top-[915px] w-[431px] h-[540px] pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 431 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="glow-features-right"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="grad-features-right"
                x1="215.5"
                y1="0"
                x2="215.5"
                y2="540"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.29" stopColor="#07788F" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <ellipse
              cx="215.5"
              cy="270"
              rx="215.5"
              ry="270"
              fill="url(#grad-features-right)"
              filter="url(#glow-features-right)"
              opacity="1"
            />
          </svg>
        </div>
      </>

      <section className="relative px-6 pt-8 md:pt-12 pb-12 md:pb-20 select-none">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pt-12">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-2 md:mb-4"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Verify News in
            </h2>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 md:mb-8 bg-clip-text"
              style={{
                fontFamily: "'Roboto', sans-serif",
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(110.832deg, rgb(124, 233, 255) 23.322%, rgb(7, 120, 143) 81.022%)'
              }}
            >
              Seconds
            </h2>

            <p
              className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8 md:mb-12 max-w-[576px]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-6">
              <Link
                to="/FakeNewsdetector">
                <button
                  className="bg-[#1d5a5e] rounded-[20px] px-6 md:px-8 py-2.5 md:py-3 cursor-pointer text-lg md:text-xl lg:text-2xl text-white hover:bg-[#2a7a7f] transition-all duration-300"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Analyze Now
                </button>
              </Link>
              <Link
                to="/aboutus">
                <button
                  className="border-2 md:border-[3px] lg:border-[5px] cursor-pointer border-[#1d5a5e] rounded-[20px] px-6 md:px-8 py-2.5 md:py-3 text-lg md:text-xl lg:text-2xl text-white hover:bg-[#1d5a5e]/20 transition-all duration-300"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="relative pt-6">
            <img
              src={imgImage6}
              alt="Fake news detection illustration"
              className="w-full h-auto max-w-[851px] mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="relative py-12 md:py-20 select-none px-6" id="features">
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-16 md:mb-24 lg:mb-32 bg-clip-text mx-auto"
            style={{
              fontFamily: "'Roboto', sans-serif",
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(180.262deg, rgb(255, 255, 255) 2.5377%, rgb(124, 233, 255) 98.588%)'
            }}
          >
            Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  select-none gap-8 lg:gap-12 max-w-[1200px] mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6 md:mb-8">
                <img
                  src={imgClock179390401}
                  alt="Real-time analysis"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[117px] lg:h-[117px] object-contain rotate-[179.647deg]"
                />
              </div>
              <h3
                className="text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-6"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Real-time analysis
              </h3>
              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Instant feedback on news article
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6 md:mb-8">
                <img
                  src={imgWeb144535591}
                  alt="Source Verification"
                  className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[137px] lg:h-[137px] object-contain"
                />
              </div>
              <h3
                className="text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-6"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Source Verification
              </h3>
              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Cross reference trusted database
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-6 md:mb-8">
                <img
                  src={imgArtificialIntelligence1}
                  alt="AI accuracy rating"
                  className="w-[80px] h-[80px] md:w-[95px] md:h-[95px] lg:w-[113px] lg:h-[113px] object-contain"
                />
              </div>
              <h3
                className="text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-6"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                AI accuracy rating
              </h3>
              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Advanced machine learning model
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-12  select-none md:py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-12 md:mb-24 bg-clip-text mx-auto"
            style={{
              fontFamily: "'Roboto', sans-serif",
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(180.277deg, rgb(255, 255, 255) 19.454%, rgb(124, 233, 255) 74.199%)'
            }}
          >
            How it Works
          </h2>
          <div className="relative max-w-[1062px] mx-auto mb-8 md:mb-12">
            <div className="h-[150px] md:h-[203px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1063 204">
                <g id="Group 8">
                  <path d={svgPaths.pf3c6b80} fill="url(#paint0_linear_1_80)" fillOpacity="0.91" id="Ellipse 12" />
                  <path d={svgPaths.p1a17e580} fill="url(#paint1_linear_1_80)" fillOpacity="0.91" id="Ellipse 18" />
                  <path d={svgPaths.p37ccac00} fill="url(#paint2_linear_1_80)" fillOpacity="0.91" id="Ellipse 19" />
                  <path d={svgPaths.p124100} fill="url(#paint3_linear_1_80)" fillOpacity="0.91" id="Ellipse 20" />
                  <path d={svgPaths.p121b7000} fill="white" id="Arrow 1" />
                  <path d={svgPaths.p1d80e00} fill="white" id="Arrow 2" />
                  <path d={svgPaths.p2a794d80} fill="white" id="Arrow 3" />

                  {/* Step Numbers - centered in circles */}
                  <text x="114.5" y="115" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Roboto', sans-serif">1</text>
                  <text x="394.5" y="115" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Roboto', sans-serif">2</text>
                  <text x="684.5" y="115" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Roboto', sans-serif">3</text>
                  <text x="973.5" y="115" fill="white" fontSize="52" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Roboto', sans-serif">4</text>
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_80" x1="285.5" x2="-56" y1="-11.0001" y2="-11.0001">
                    <stop offset="0.35975" stopColor="#7CE9FF" />
                    <stop offset="0.841327" stopColor="#07788F" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_80" x1="565.5" x2="224" y1="-11.0001" y2="-11.0001">
                    <stop offset="0.35975" stopColor="#7CE9FF" />
                    <stop offset="0.841327" stopColor="#07788F" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_80" x1="855.5" x2="514" y1="-11.0001" y2="-11.0001">
                    <stop offset="0.35975" stopColor="#7CE9FF" />
                    <stop offset="0.841327" stopColor="#07788F" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_80" x1="1144.5" x2="803" y1="-11.0001" y2="-11.0001">
                    <stop offset="0.35975" stopColor="#7CE9FF" />
                    <stop offset="0.841327" stopColor="#07788F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Step Descriptions - aligned with circles */}
          <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-[1062px] mx-auto px-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <h3
                  className="text-sm md:text-base lg:text-xl xl:text-2xl text-[#7ce9ff] mb-1 md:mb-2"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {step.label}
                </h3>
                <p
                  className="text-xs md:text-sm lg:text-base text-white/80 leading-relaxed"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen text-white flex items-center justify-center p-6 md:p-12 overflow-hidden relative">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="relative flex justify-center items-center min-h-[700px]">
          
          
          <div 
           
            className="absolute left-[180px] top-[120px] -translate-x-1/2 -translate-y-1/4 w-[600px] h-[500px] lg:w-[1000px] lg:h-[1000px] pointer-events-none"
          >
            <svg
              className="block w-full h-full opacity-90 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1743 2432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1_46)" opacity="0.9">
                <ellipse cx="860" cy="1200" rx="517" ry="860" fill="url(#paint0_linear_1_46)" />
              </g>
              <defs>
                <filter
                  id="filter0_f_1_46"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1_46" />
                </filter>
                <linearGradient
                  id="paint0_linear_1_46"
                  x1="1207.25"
                  y1="268.152"
                  x2="420.469"
                  y2="1858.28"
                  gradientUnits="userSpaceOnUse"
                >
                 
                  <stop offset="0.829909" stopColor="#07788F" stopOpacity="0.54" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <img 
            src={imageshield}
            alt="FactiScan Shield Logo" 
            className="relative z-10 w-full max-w-[1000px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col space-y-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <img 
                src={mrfactiscan}
                alt="Mr. Factiscan" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 tracking-wide">
              Mr. Factiscan
            </h3>
          </div>

          <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-4 font-light">
            <p>
              Misinformation doesn’t just mislead—it shapes opinions, decisions, and realities.
            </p>
            <p>
              <strong className="text-cyan-400 font-semibold">FactiScan</strong> is an AI-driven verification bot designed to challenge what you read before you believe it.
            </p>
            <p>
              From detecting fake news to identifying manipulated or AI-generated media, <strong className="text-cyan-400 font-semibold">FactiScan</strong> empowers users with verified insights, ensuring that truth is no longer lost in the noise.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Landingpage
