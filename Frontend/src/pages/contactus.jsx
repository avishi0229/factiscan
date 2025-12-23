import { Link } from "react-router-dom";
import ContactForm from "../components/contactform";
import ContactInfo from "../components/contactinfo";
import FAQAccordion from "../components/faqaccordination";


export default function ContactPage() {
  return (
    <div className="select-none">
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
    </>
    <div className="min-h-screen w-full overflow-x-hidden relative pb-20">
           
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7ce9ff] opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1d5a5e] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl space-y-24">
        
        {/* --- Section 1: Contact Grid --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column: Message Form */}
          <div className="bg-[rgba(124,233,255,0.74)]/90 backdrop-blur-sm rounded-[30px] p-8 md:p-12 shadow-lg h-full flex flex-col justify-center">
            <h2 className="font-sans text-4xl md:text-5xl text-center text-white mb-8 font-normal">
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right Column: Contact Info */}
          <div className="bg-[rgba(124,233,255,0.74)]/90 backdrop-blur-sm rounded-[30px] p-8 md:p-12 h-full shadow-lg flex flex-col justify-center">
            <h2 className="font-sans text-4xl md:text-5xl text-center text-white mb-8 font-normal">
              Contact Information
            </h2>
            <ContactInfo />
          </div>
        </div>

        {/* --- Section 2: FAQ --- */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <h2 className="font-sans text-4xl md:text-6xl text-center text-white mb-12 font-normal">
            Frequently Asked Questions
          </h2>
          <div className="w-full">
            <FAQAccordion />
          </div>
        </div>

        {/* --- Section 3: CTA --- */}
        <div className="bg-white rounded-[30px] p-12 md:p-16 text-center shadow-xl max-w-5xl mx-auto">
          <h3 className="font-sans text-4xl  md:text-6xl text-[#07788f] mb-6">
            Ready to start verifying?
          </h3>
          <p className="font-sans text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto">
            Join thousands of users who trust FactiScan to verify news and combat misinformation.
          </p>
          <Link to='/FakeNewsdetector'>
          <button className="bg-[#1d5a5e] hover:bg-[#2a7176] transition-all transform hover:scale-105 h-[60px] w-2xl px-12 rounded-[20px] text-white text-2xl font-normal shadow-md cursor-pointer">
            Try FactiScan Now
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}