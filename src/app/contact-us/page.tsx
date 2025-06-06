import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle, FiUsers, FiHelpCircle, FiExternalLink } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contact | Card Rummy Pakistan',
  description: 'Contact the Card Rummy support team for help with the game, account issues, or feedback. All inquiries receive responses within 24 hours.',
  keywords: ['card rummy contact', 'rummy support', 'card game help', 'contact form', 'rummy customer service'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Contact | Card Rummy Pakistan',
    description: 'Get in touch with the Card Rummy team for support, feedback, or partnership inquiries.',
    images: [
      {
        url: '/images/contact-card-rummy.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Card Rummy',
      }
    ],
    type: 'website',
  }
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Contact <span className="text-accent">Card Rummy</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
                Have questions or feedback? The team is here to help with any inquiries about the <Link href="/" className="text-[#fbbf24] hover:underline">Card Rummy</Link> game.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiMail className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">Email</p>
                  <p className="text-gray-600">support@cardrummy.com</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiPhone className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">Phone</p>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiMessageCircle className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">Response Time</p>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0a1535] p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3">Get In Touch</h2>
              
              <p className="mb-8 text-lg">
                The Card Rummy team values player feedback and is always ready to assist with any questions or concerns. Fill out the form and they'll get back to you as soon as possible.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-[#132044] p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold mb-5 border-b border-[#2a3f73] pb-2">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiMail className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-300">support@cardrummy.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiPhone className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-300">+92 300 1234567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiMapPin className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-gray-300">Lahore, Pakistan</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiExternalLink className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Pakistan Support Portal</p>
                          <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-4.html" target="_blank" rel="noopener noreferrer" className="text-[#fbbf24] hover:underline">Visit Support Portal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#132044] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-5 border-b border-[#2a3f73] pb-2">Common Inquiries</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiHelpCircle className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Technical Support</p>
                          <p className="text-gray-300">For game issues, bugs, or technical difficulties</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-4">
                          <FiUsers className="text-[#fbbf24]" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Account Help</p>
                          <p className="text-gray-300">For login problems, account recovery, or profile issues</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="bg-[#132044] p-8 rounded-lg shadow-lg border border-[#2a3f73]">
                    <h3 className="text-xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3">Send a Message</h3>
                    
                    <div className="mb-5">
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-3 bg-[#0a1535] border border-[#2a3f73] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div className="mb-5">
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-4 py-3 bg-[#0a1535] border border-[#2a3f73] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="mb-5">
                      <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        className="w-full px-4 py-3 bg-[#0a1535] border border-[#2a3f73] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all appearance-none"
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
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={6} 
                        className="w-full px-4 py-3 bg-[#0a1535] border border-[#2a3f73] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-[#fbbf24] text-[#0a1535] py-4 px-6 rounded-lg font-medium hover:bg-[#fbbf24]/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Here For You</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              The dedicated support team is available to assist with any questions or concerns about Card Rummy.
              All inquiries receive responses within 24 hours.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a href="#" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                Visit FAQ
              </a>
              <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-4.html" target="_blank" rel="noopener noreferrer" className="bg-[#fbbf24] text-[#0f172a] px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#fbbf24]/90 transition-all transform hover:-translate-y-1">
                Pakistan Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 