'use client';

import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      // In a real implementation, you would send the form data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <FiCheckCircle className="text-green-500" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. The Card Rummy team will respond to your inquiry within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Send a Message</h3>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
      
      <div className="mb-5">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
        <select 
          id="subject" 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
          required
        >
          <option value="">Select a subject</option>
          <option value="technical">Technical Support</option>
          <option value="account">Account Help</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={6} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center text-white py-4 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark transition-all'}`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FiSend className="mr-2" size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
} 