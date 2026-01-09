import { useState } from "react";
import svgPaths from "../assets/svgassets";
const PerformanceGraph = ({ data }) => {
  const width = 420;
  const height = 220;
  const padding = 30;

  const points = data
    .map((d, i) => {
      const x =
        padding +
        (i * (width - padding * 2)) / Math.max(data.length - 1, 1);
      const y =
        height -
        padding -
        (d / 100) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="mx-auto">
      {/* Axis */}
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#7ce9ff" />
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#7ce9ff" />

      {/* Line */}
      <polyline
        fill="none"
        stroke="#00FF99"
        strokeWidth="3"
        points={points}
      />

      {/* Dots */}
      {data.map((d, i) => {
        const x =
          padding +
          (i * (width - padding * 2)) / Math.max(data.length - 1, 1);
        const y =
          height -
          padding -
          (d / 100) * (height - padding * 2);
        return <circle key={i} cx={x} cy={y} r="4" fill="#00FF99" />;
      })}
    </svg>
  );
};

const FakeNewsdetector = () => {
  const [articleLink, setArticleLink] = useState('');
  const [articleText, setArticleText] = useState('');
   const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleVerify = async () => {
    if (!articleText) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: articleText }),
      });

      const data = await res.json();
      setResult(data);

      setHistory((prev) => [
        ...prev,
        Math.round(data.confidence * 100),
      ]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const confidence = result ? Math.round(result.confidence * 100) : 0;
  return (
    <div>
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
      className="absolute left-1/2 top-[100px] -translate-x-1/2 w-[2000px] h-[700px] pointer-events-none"
    >
      <svg
        className="block w-full h-full opacity-90 overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 1743 2432"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_46)" opacity="0.9">
          <ellipse cx="871.342" cy="1215.68" rx="521.342" ry="865.683" fill="url(#paint0_linear_1_46)" />
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
      </>
      <section className="px-4 lg:px-8 py-4 lg:py-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl lg:text-4xl text-center mb-6 lg:mb-8 bg-gradient-to-b from-white to-[#7ce9ff] bg-clip-text"
            style={{ WebkitTextFillColor: 'transparent' }}
          >
            Verification in progress
          </h2>

          <div className="space-y-4">
            <div className="bg-[#0b090d]/60 backdrop-blur-sm p-4 lg:p-6 rounded-2xl">
              <label className="block text-white text-base lg:text-lg mb-2">
                Article/News link
              </label>
              <input
                type="url"
                value={articleLink}
                onChange={(e) => setArticleLink(e.target.value)}
                className="w-full bg-[#d9d9d9]/30 rounded-2xl px-4 py-2 text-white text-sm outline-none focus:bg-[#d9d9d9]/40 transition-colors"
                placeholder="Enter article URL"
              />
            </div>

            <div className="bg-[#0b090d]/60 backdrop-blur-sm p-4 lg:p-6 rounded-2xl">
              <label className="block text-white text-base lg:text-lg mb-2">
                Article/News Text or Headline
              </label>
              <textarea
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                className="w-full bg-[#d9d9d9]/30 rounded-2xl px-4 py-2 text-white text-sm outline-none focus:bg-[#d9d9d9]/40 transition-colors min-h-[120px] resize-none"
                placeholder="Enter article text or headline"
              />
            </div>

            <button onClick={handleVerify}
            className="w-full bg-[#1d5a5e] hover:bg-[#1d5a5e]/80 transition-colors text-white text-lg lg:text-2xl py-3 rounded-3xl">
              Start Verification
            </button>
          </div>
        </div>
      </section>
       {result && (
      <section className="px-4 lg:px-8 py-4 lg:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl text-center text-white mb-8 lg:mb-10">
            Live Stats
          </h2>

          <div className="relative flex justify-center mb-8 lg:mb-10">
            <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] rounded-full bg-[#00FF61]/33 blur-3xl" />
              </div>

              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 500 500">
                <path
                  d={svgPaths.pee92800}
                  fill={result.label === "Fake" ? "#ff2525" : "#00FF99"}
                  fillOpacity="0.91"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-3xl lg:text-4xl font-['Inter',sans-serif]">{confidence}%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="bg-[#00FF99]/91 rounded-[20px] py-2 lg:py-3 px-4 text-center">
              <p className="text-white text-sm lg:text-lg font-['Inter',sans-serif]">Verified</p>
            </div>
            <div className="bg-[#838080] rounded-[20px] py-2 lg:py-3 px-4 text-center">
              <p className="text-white text-sm lg:text-lg font-['Inter',sans-serif]">Unverified</p>
            </div>
            <div className="bg-[#ed9200] rounded-[20px] py-2 lg:py-3 px-4 text-center">
              <p className="text-white text-sm lg:text-lg font-['Inter',sans-serif]">Misinformation</p>
            </div>
            <div className="bg-[#ff2525] rounded-[20px] py-2 lg:py-3 px-4 text-center">
              <p className="text-white text-sm lg:text-lg font-['Inter',sans-serif]">Fake</p>
            </div>
          </div>
        </div>
      </section>)}
      
    </div>
  )
}

export default FakeNewsdetector
