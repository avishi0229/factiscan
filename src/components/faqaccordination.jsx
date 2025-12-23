import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the Fake News Detector work?',
    answer: 'Our AI-powered system analyzes news content using advanced natural language processing and cross-references information with verified sources to detect potential misinformation.'
  },
  {
    question: 'Is my data secure when I submit news for verification?',
    answer: 'Yes, we take data security seriously. All submissions are encrypted and processed securely. We do not store personal information or share your data with third parties.'
  },
  {
    question: 'How accurate is the detection system?',
    answer: 'Our system has a 95% accuracy rate in identifying fake news. However, we always recommend using critical thinking and verifying information from multiple trusted sources.'
  },
  {
    question: 'Can I use this service for free?',
    answer: 'Yes! Our basic verification service is completely free. We also offer premium features for organizations and power users who need advanced analytics and reporting.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#d9d9d9]/20 backdrop-blur-sm border border-white/10 rounded-[15px] overflow-hidden transition-all hover:bg-[#d9d9d9]/30"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full min-h-[70px] px-8 py-4 flex items-center justify-between text-white transition-colors cursor-pointer"
          >
            <span className="text-lg text-left font-medium">{faq.question}</span>
            <ChevronDown
              className={`w-6 h-6 transition-transform flex-shrink-0 ml-4 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-8 pb-6 text-white/90 text-base leading-relaxed border-t border-white/10 pt-4">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}