import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiCheckCircle, FiHelpCircle, FiDownload } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How To Play | Card Rummy Pakistan Rules & Strategy',
  description: 'Learn how to play Card Rummy with this comprehensive rules and strategy guide. Master the basics and advanced techniques to improve your game.',
  keywords: ['card rummy rules', 'how to play rummy', 'rummy strategy', 'card game tutorial', 'rummy gameplay'],
  openGraph: {
    title: 'How To Play | Card Rummy Pakistan Rules & Strategy',
    description: 'Master the classic card game of Rummy with this comprehensive rules and strategy guide.',
    images: [
      {
        url: '/images/how-to-play-rummy.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Play Card Rummy',
      }
    ],
    type: 'website',
  }
};

export default function HowToPlayPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              How to Play <Link href="/" className="text-[#fbbf24] hover:underline">Card Rummy</Link>
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-center mb-8 text-white">
              Learn the rules, strategies, and tips to master the classic card game of rummy.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b border-gray-200 pb-3">Card Rummy Winning Tips</h2>
                
                <div className="mb-8">
                  <p className="mb-4 text-gray-700">
                    <Link href="/" className="text-[#fbbf24] hover:underline font-medium">Card Rummy</Link> is not just about luck; strategy and smart moves can significantly increase your chances of winning. Understanding a few tips and tricks can give you an edge over your opponents.
                  </p>
                  <p className="mb-6 text-gray-700">
                    For the best experience, we recommend playing on a larger screen to better analyze patterns. Check out our guide on <Link href="/blog/card-rummy-for-pc" className="text-[#fbbf24] hover:underline font-medium">Card Rummy for PC</Link> to learn how you can play on your computer.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Tips to Win at Rummy</h3>
                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary mb-6">
                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                      <li><strong>Arrange Your Cards:</strong> Immediately organize your cards into potential sets or sequences to visualize your next move clearly.</li>
                      <li><strong>Discard High-Value Cards:</strong> If high-value cards don't fit into any set or sequence, discard them quickly to reduce your point burden.</li>
                      <li><strong>Observe Your Opponents:</strong> Pay attention to the cards your opponents are picking and discarding to gain insights into their strategy.</li>
                      <li><strong>Use Jokers Wisely:</strong> Save your joker cards to complete difficult sets or sequences, but don't waste them on natural sequences.</li>
                      <li><strong>Prioritize Sequences:</strong> Always aim to form at least one pure sequence (without jokers) as early as possible.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Game Variations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-gray-800 mb-2">Teen Patti</h4>
                      <p className="text-gray-700">Start with small bets, learn to read your opponents, and know when to use the side show option.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-gray-800 mb-2">Andar Bahar</h4>
                      <p className="text-gray-700">Understand the odds, start with small bets, and track previous rounds to look for patterns.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-gray-800 mb-2">Dragon vs Tiger</h4>
                      <p className="text-gray-700">Bet on Dragon more often, avoid tie bets, and watch the distribution of high cards.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-gray-800 mb-2">Roulette</h4>
                      <p className="text-gray-700">Prefer outside bets like red/black for better odds, and set clear win/loss limits.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Smart Bankroll Management</h3>
                  <p className="mb-4 text-gray-700">
                    Across all card games, proper bankroll management is crucial:
                  </p>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li><strong>Set Limits:</strong> Decide how much you're willing to spend before you start playing.</li>
                    <li><strong>Start Small:</strong> Begin with smaller bets until you're comfortable with the game.</li>
                    <li><strong>Don't Chase Losses:</strong> If you're on a losing streak, take a break instead of increasing your bets.</li>
                    <li><strong>Know When to Quit:</strong> Set a win target and step away when you reach it to secure your profits.</li>
                    <li><strong>Stay Disciplined:</strong> Emotional decisions often lead to mistakes - play with a clear mind.</li>
                  </ol>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Personal Experience</h3>
                  <p className="text-gray-700 italic">
                    "I've found that card games like Rummy require a perfect blend of strategy, patience, and self-discipline. While luck plays a role, understanding game mechanics and applying smart strategies makes the real difference. The key is knowing when to be aggressive and when to step back, making calculated moves rather than relying purely on chance."
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Essential Tips</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start p-3 bg-primary/5 rounded-lg">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-700">Form a pure sequence early to improve your winning chances.</p>
                    </li>
                    <li className="flex items-start p-3 bg-primary/5 rounded-lg">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-700">Discard high-value cards that aren't forming combinations.</p>
                    </li>
                    <li className="flex items-start p-3 bg-primary/5 rounded-lg">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-700">Watch what other players pick and discard to predict their strategy.</p>
                    </li>
                    <li className="flex items-start p-3 bg-primary/5 rounded-lg">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-700">Save jokers for completing difficult sets instead of wasting them.</p>
                    </li>
                    <li className="flex items-start p-3 bg-primary/5 rounded-lg">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-700">Set a budget and stick to it - never chase losses.</p>
                    </li>
                  </ul>
                  
                  <div className="mt-8 bg-secondary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Ready to Play?</h3>
                    <p className="mb-4 text-gray-700">
                      Download the Card Rummy app and start applying these winning strategies today!
                    </p>
                    <a 
                      href="https://cardrummypk.org/?from_gameid=5784509&channelCode=100000" 
                      className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all w-full"
                    >
                      <FiDownload className="mr-2" />
                      Download Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Play?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
              Now that you know the rules, it's time to put your skills to the test. Download the app or play online today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://cardrummypk.org/?from_gameid=5784509&channelCode=100000" className="bg-white text-primary px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center">
                <FiDownload className="mr-2" />
                Download App
              </a>
              <Link href="/" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all transform hover:-translate-y-1">
                Play Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 