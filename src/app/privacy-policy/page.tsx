import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Card Rummy Pakistan',
  description: 'Learn about how we collect, use, and protect your personal information when you use Card Rummy Pakistan.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="py-12 bg-[#0a1535] text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="bg-[#132044] p-6 md:p-8 rounded-lg shadow-lg space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">1. Introduction</h2>
              <p className="mb-3">
                At Card Rummy Pakistan, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website or use our mobile application and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This Privacy Policy was last updated on May 1, 2024.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">2. Data We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Demographic information (Age, gender, location)</li>
                <li>Device information (Device type, operating system, IP address)</li>
                <li>Game statistics and preferences</li>
                <li>Payment information (when applicable)</li>
                <li>Communications between you and our customer service team</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">3. How We Use Your Data</h2>
              <p className="mb-3">We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To process payments and prevent fraudulent transactions</li>
                <li>To send you promotional communications (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">4. Data Security</h2>
              <p className="mb-3">
                We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
              <p>
                We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption of personal data, the ability to ensure ongoing confidentiality, integrity, availability and resilience of processing systems and services, and regular testing and evaluation of the effectiveness of our security measures.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">5. Cookies and Tracking</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="mb-3">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
              <p>
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies: Necessary for the basic functions of the website/application</li>
                <li>Analytics cookies: Help us understand how you use our service</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
                <li>Advertising cookies: Help provide relevant advertisements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">6. Third-Party Services</h2>
              <p className="mb-3">
                Our service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.
              </p>
              <p>
                We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">7. Your Rights</h2>
              <p className="mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">8. Children's Privacy</h2>
              <p>
                Our service is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If we discover that a child under 18 has provided us with personal information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#fbbf24]">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at support@cardrummypk.org or through the contact form on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 