import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-white mb-2 ml-1 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full h-[50px] px-4 text-sm bg-[#d9d9d9] text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1d5a5e] rounded-lg transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2 ml-1 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
          className="w-full h-[50px] px-4 text-sm bg-[#d9d9d9] text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1d5a5e] rounded-lg transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2 ml-1 text-sm font-medium">
          Message
        </label>
        {/* UPDATED: Added h-[140px] to match the Address box height */}
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          className="w-full h-[140px] p-4 text-sm bg-[#d9d9d9] text-black placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-[#1d5a5e] rounded-lg transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitted}
        className="w-full h-[50px] bg-[#1d5a5e] hover:bg-[#144245] transition-colors rounded-xl text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-md font-medium cursor-pointer"
      >
        <span className="text-lg">
          {isSubmitted ? 'Message Sent!' : 'Send Message'}
        </span>
        {!isSubmitted && <Send className="w-5 h-5" />}
      </button>
    </form>
  );
}