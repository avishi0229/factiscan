import React, { useState } from "react";
import {
  Upload,
  X,
  Link as LinkIcon,
  FileVideo,
  Image as ImageIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

function MediaUploadSection() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [headline, setHeadline] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/quicktime",
    ];

    if (validTypes.includes(file.type)) {
      setUploadedFile(file);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      alert("Please upload a valid image or video file");
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setUploadedFile(null);
    setPreviewUrl(null);
  };

  // Add these new states to your MediaUploadSection
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert("Please upload a file first");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", uploadedFile); // 'file' matches request.files['file'] in Flask

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data); // data contains {label, confidence}
      } else {
        alert(data.error || "Analysis failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to the backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 select-none sm:px-4 lg:px-6 py-4 lg:py-6">
      {/* Category badges */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/60">
        <div className="flex-1 text-center">
          <span className="text-white text-sm sm:text-base lg:text-lg">
            AI generated
          </span>
        </div>
      </div>

      {/* Upload Section */}
      <div className="space-y-4">
        {/* File Upload or URL Input */}
        <div>
          <label className="block text-white text-base sm:text-lg lg:text-xl mb-2">
            Video/Image Upload
          </label>

          {!uploadedFile ? (
            <div>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-6 sm:p-8 lg:p-10 transition-all ${
                  isDragging
                    ? "border-[#7ce9ff] bg-[#7ce9ff]/10"
                    : "border-white/30 bg-[#d9d9d9]/10 hover:border-white/50"
                }`}
              >
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*,video/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                />

                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white/60 mb-2" />
                  <p className="text-white/80 text-center text-sm sm:text-base mb-1">
                    Drag and drop your image or video here
                  </p>
                  <p className="text-white/60 text-center text-xs sm:text-sm mb-2">
                    or click to browse
                  </p>
                  <p className="text-white/40 text-xs text-center">
                    Supports: JPG, PNG, GIF, WebP, MP4, WebM, MOV
                  </p>
                </label>
              </div>

              {/* URL Input Alternative */}
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-2">
                  <LinkIcon className="w-4 h-4 text-white/60" />
                  <span className="text-white/80 text-xs sm:text-sm">
                    Or paste a URL
                  </span>
                </div>
                <input
                  type="url"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full bg-[#d9d9d9]/20 border border-white/30 rounded-lg px-3 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#7ce9ff] transition-colors"
                />
              </div>
            </div>
          ) : (
            <div className="bg-[#d9d9d9]/10 border border-white/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                {/* Preview */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-black/30 rounded-lg overflow-hidden">
                  {previewUrl &&
                    (uploadedFile.type.startsWith("image/") ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={previewUrl}
                        className="w-full h-full object-cover"
                      />
                    ))}
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {uploadedFile.type.startsWith("image/") ? (
                      <ImageIcon className="w-4 h-4 text-[#7ce9ff]" />
                    ) : (
                      <FileVideo className="w-4 h-4 text-[#7ce9ff]" />
                    )}
                    <p className="text-white font-medium truncate text-sm">
                      {uploadedFile.name}
                    </p>
                  </div>
                  <p className="text-white/60 text-xs">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={removeFile}
                  className="flex-shrink-0 p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Headline/Description Input */}
        <div>
          <label className="block text-white text-base sm:text-lg lg:text-xl mb-2">
            Video/Image Text or Headline
          </label>
          <textarea
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Enter the text, headline, or context from the media..."
            rows={4}
            className="w-full bg-[#d9d9d9]/10 border border-white/30 rounded-xl px-3 sm:px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#7ce9ff] transition-colors resize-none"
          />
        </div>

        {/* Analyze Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleAnalyze}
            className="bg-[#1d5a5e] hover:bg-[#236b70] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors text-base sm:text-lg font-medium"
          >
            Analyze Media
          </button>
          {/* Inside MediaUploadSection Return, after the button */}
          {loading && (
            <p className="text-[#7ce9ff] text-center mt-4">
              Analyzing patterns...
            </p>
          )}

          {result && (
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-[#7ce9ff]/30 text-center">
              <h4 className="text-white text-lg">Analysis Result</h4>
              <p className="text-2xl font-bold text-[#7ce9ff] mt-2">
                {result.label}
              </p>
              <p className="text-white/60 text-sm">
                Confidence: {(result.confidence * 100).toFixed(2)}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AiMedia() {
  return (
    <div className="select-none">
      <>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            // 👇 CHANGED: Reduced top from 800px to 400px to move it up
            className="absolute left-1/2 top-[320px] -translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] pointer-events-none"
          >
            <svg
              className="block w-full h-full opacity-90 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1743 2432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1_46)" opacity="0.9">
                <ellipse
                  cx="871.342"
                  cy="1215.68"
                  rx="521.342"
                  ry="865.683"
                  fill="url(#paint0_linear_1_46)"
                />
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
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="175"
                    result="effect1_foregroundBlur_1_46"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_46"
                  x1="1207.25"
                  y1="268.152"
                  x2="420.469"
                  y2="1858.28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.829909"
                    stopColor="#07788F"
                    stopOpacity="0.54"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute left-[-237px] top-[-155px] w-[1033px] h-[331px] pointer-events-none">
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
                  <feGaussianBlur
                    stdDeviation="175"
                    result="effect1_foregroundBlur"
                  />
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
        </div>
      </>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="text-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 bg-clip-text"
            style={{
              WebkitTextFillColor: "transparent",
              fontVariationSettings: "'wdth' 100",
              backgroundImage:
                "linear-gradient(180.119deg, rgb(255, 255, 255) 2.5377%, rgb(124, 233, 255) 98.588%)",
            }}
          >
            AI Media
          </h2>

          <p
            className="text-white text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Our AI Media feature analyzes images and videos to detect whether
            they are AI-generated or manipulated. By combining advanced forensic
            signals with transparent results, it helps users quickly assess
            media authenticity and avoid visual misinformation.
          </p>
        </section>

        {/* Upload Section */}
        <MediaUploadSection />

        {/* CTA Section */}
        <section className="text-center px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12 mt-6 sm:mt-8 lg:mt-12">
          <h3
            className="text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3 font-medium"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Want to learn more?
          </h3>

          <p
            className="text-white text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Get in touch with our team or translator today
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/contactus">
              <button
                className="bg-[#1d5a5e] hover:bg-[#236b70] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-colors text-sm sm:text-base w-full sm:w-auto"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Contact us
              </button>
            </Link>
            <Link to="/FakeNewsdetector">
              <button
                className="bg-[#1d5a5e] hover:bg-[#236b70] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-colors text-sm sm:text-base w-full sm:w-auto"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Try FactiScan Now
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
