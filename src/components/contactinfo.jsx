import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6 w-full max-w-lg mx-auto">
      
      {/* Email Field */}
      <div>
        <label className="block text-white mb-2 ml-1 text-sm font-medium">
          Email
        </label>
        <div className="w-full h-[50px] px-4 bg-[#d9d9d9] rounded-lg flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <Mail className="w-5 h-5 text-[#1d5a5e]" />
          <a href="mailto:support@factiscan.com" className="text-sm text-black hover:text-[#1d5a5e] font-medium">
            support@factiscan.com
          </a>
        </div>
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-white mb-2 ml-1 text-sm font-medium">
          Phone
        </label>
        <div className="w-full h-[50px] px-4 bg-[#d9d9d9] rounded-lg flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <Phone className="w-5 h-5 text-[#1d5a5e]" />
          <a href="tel:+1234567890" className="text-sm text-black hover:text-[#1d5a5e] font-medium">
            +1 (234) 567-890
          </a>
        </div>
      </div>

      {/* Address Field (Taller to fit text) */}
      <div>
        <label className="block text-white mb-2 ml-1 text-sm font-medium">
          Address
        </label>
        <div className="w-full min-h-[100px] p-4 bg-[#d9d9d9] rounded-lg flex items-start gap-3 transition-transform hover:scale-[1.02] cursor-pointer select-none">
          <MapPin className="w-5 h-5 text-[#1d5a5e] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-black leading-relaxed">
            123 Truth Avenue, San Francisco<br />
            CA 94102, United States
          </p>
        </div>
      </div>

    </div>
  );
}