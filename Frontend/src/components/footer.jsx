import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="px-4 lg:px-8 py-8 lg:py-12  select-none mt-8 border-t border-[#07788F]/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* About Section */}
              <div>
                <h3 className="text-[#b4f3ff] text-lg mb-4">About</h3>
                <p className="text-white/70 text-sm">
                  AI-powered fake news detection system helping you verify information and combat misinformation.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-[#b4f3ff] text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Home</Link></li>
                  <li><Link to="/ai-media" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">AI Media</Link></li>
                  <li><Link to="/about" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">About Us</Link></li>
                  <li><Link to="/contact" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-[#b4f3ff] text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/documentation" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Documentation</Link></li>
                  <li><Link to="/api" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">API</Link></li>
                  <li><Link to="/blog" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Blog</Link></li>
                  <li><Link to="/help-center" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Help Center</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-[#b4f3ff] text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:info@fakenewsdetector.com" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">info@fakenewsdetector.com</a></li>
                  <li><Link to="/privacy-policy" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-white/70 hover:text-[#b4f3ff] transition-colors text-sm">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-[#07788F]/20 text-center">
              <p className="text-white/50 text-sm">
                © 2025 Fake News Detector. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
