import { FiCheck, FiDownload, FiUser, FiDollarSign, FiGift, FiZap, FiLock, FiSmartphone, FiAward, FiHelpCircle, FiEye, FiStar, FiHeadphones, FiShield, FiAward as FiTrophy, FiCreditCard, FiSmile, FiHeart, FiInfo, FiRefreshCw, FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function HomeContent() {
  const [isClient, setIsClient] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const cardGames = [
    "Rummy", "Poker", "Teen Patti", "Teen Patti 20-20", "Blackjack", "Baccarat", "Dragon vs Tiger"
  ];
  
  const rouletteGames = [
    "Classic Roulette", "Zoo Roulette", "Car Roulette"
  ];
  
  const slotArcadeGames = [
    "Sweet Bonanza", "Fruit Line", "Mines", "Crash", "7 Up Down", "777 Bingo", "Spin of Fortune", "Bingo 90"
  ];
  
  const otherGames = [
    "Domino", "Rattling Gems", "Dynamite Wild", "Video Poker", "Video Poker 2", "God of Fortune", "Variation", "Wow Slots", "Ludo", "Double", "10 Cards", "Wild Energy"
  ];

  const faqs = [
    {
      question: "Is Card Rummy APK safe to use?",
      answer: "Yes! The app ensures secure transactions and fair gaming."
    },
    {
      question: "Can I play on iOS?",
      answer: "Currently, Card Rummy APK is only available for Android devices."
    },
    {
      question: "Can I really earn money playing Card Rummy?",
      answer: "Absolutely! You can withdraw your earnings via JazzCash, Easypaisa, or bank transfer."
    },
    {
      question: "What Android version do I need?",
      answer: "Card Rummy works on Android 5.0 (Lollipop) and above. Android 8.0+ is recommended for the best experience."
    },
    {
      question: "How often is the app updated?",
      answer: "The app receives updates approximately every 2-3 weeks with bug fixes and new features."
    },
    {
      question: "Is there a limit on withdrawals?",
      answer: "The minimum withdrawal is Rs. 100, and the maximum is Rs. 50,000 per day."
    }
  ];

  const otherFeatures = [
    "The app is safe and trustworthy",
    "Games are played in a fair environment",
    "Has fast performance",
    "No lags and bugs"
  ];

  const paymentMethods = [
    { name: "JazzCash", processingTime: "Instant to 24 hours", minDeposit: "Rs. 20", maxWithdrawal: "Rs. 100,000" },
    { name: "Easypaisa", processingTime: "Instant to 24 hours", minDeposit: "Rs. 20", maxWithdrawal: "Rs. 100,000" }
  ];

  const successStories = [
    { name: "Ahmed", amount: "Rs. 25,000", game: "Teen Patti" },
    { name: "Fatima", amount: "Rs. 15,000", game: "Roulette" },
    { name: "Imran", amount: "Rs. 40,000", game: "Poker" }
  ];

  const deviceRequirements = [
    "Android 5.0 (Lollipop) or higher",
    "RAM: 2GB minimum (4GB recommended)",
    "Storage: 100MB free space",
    "Stable internet connection"
  ];

  const recentUpdates = [
    { version: "1.206", date: "March 2025", feature: "Added new Spin Wheel rewards" },
    { version: "1.205", date: "December 2024", feature: "Introduced Teen Patti 20-20 mode" },
    { version: "1.204", date: "August 2024", feature: "Enhanced security features" }
  ];

  const responsibleGamingTips = [
    "Set daily time limits for gameplay",
    "Establish a budget before you start playing",
    "Take regular breaks between gaming sessions",
    "Never chase losses by increasing your stakes"
  ];

  const renderDownloadButton = () => {
    if (isClient === null) {
      return <div className="h-14 w-64 mx-auto bg-[#0a1535] border-2 border-[#00e1ff] rounded-full"></div>;
    }
    
    return (
      <a
        href="https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000"
        className="relative inline-flex items-center justify-center px-6 pr-16 sm:pr-20 py-3 sm:py-4 bg-[#0a1535] border-2 border-[#00e1ff] rounded-full hover:opacity-90 transition-all shadow-lg text-base sm:text-xl text-white font-bold"
      >
        <span className="tracking-wider mr-2">DOWNLOAD CARD RUMMY</span>
        <div className="absolute right-0 bg-[#ff9800] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <FiChevronDown className="text-white" size={20} />
        </div>
      </a>
    );
  };

  return (
    <section className="py-16 bg-[#0a1535] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg mb-6 text-left">
              Are you Looking for the best way to enjoy your favorite card games and earn real money at the same time? You are at the right place.
            </p>
            <p className="text-lg mb-6 text-left">
              Card Rummy APK is the perfect app for Pakistani players who want fun, rewards, and secure withdrawals all in one place!
            </p>
          </div>

          <div className="mb-12 bg-[#0f172a] p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-left flex items-center">
              <FiSmartphone className="mr-3 text-[#fbbf24]" size={24} />
              What is Card Rummy APK?
            </h3>
            <p className="mb-4 text-left">
              Card Rummy is a popular application designed for Android users in Pakistan. It offers a huge collection of classic and desi card games, slot machines, fishing games, and dice games. Players can enjoy popular games like Teen Patti, Poker, and Blackjack, while earning real cash rewards that can be easily withdrawn via JazzCash, Easypaisa, or bank accounts.
            </p>
            <div className="my-6">
              <img 
                src="/images/card-rummy-apk-pakistan.png" 
                alt="Card Rummy APK Pakistan" 
                className="rounded-lg shadow-lg w-full h-auto border-2 border-[#fbbf24]/30"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiAward className="mr-3 text-[#fbbf24]" size={24} />
              Key Features of Card Rummy APK
            </h3>
            <p className="mb-6 text-left">
              Let's explore what makes this Card Rummy app stand out from the rest:
            </p>
            
            <div className="bg-[#132044] p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <FiCheck className="text-[#fbbf24] mr-3" size={20} />
                <h4 className="text-xl font-bold">Wide Gaming Collection</h4>
              </div>
              <p className="mb-4 text-left">
                Whether you want to play classic card games like poker, roulette, and blackjack or want to enjoy the South Asian version of cards like Teen Patti, this app has it all. Moreover, there are some other easy sides to enjoy like Mines, crash, and Ludo.
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-left">Card Games:</h5>
                <div className="flex flex-wrap gap-2">
                  {cardGames.map((game, index) => (
                    <span key={index} className="bg-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-left">Roulette Games:</h5>
                <div className="flex flex-wrap gap-2">
                  {rouletteGames.map((game, index) => (
                    <span key={index} className="bg-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-left">Slot & Arcade Games:</h5>
                <div className="flex flex-wrap gap-2">
                  {slotArcadeGames.map((game, index) => (
                    <span key={index} className="bg-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-left">Other Favorites:</h5>
                <div className="flex flex-wrap gap-2">
                  {otherGames.map((game, index) => (
                    <span key={index} className="bg-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="mt-4 text-left">
                Every game is designed with vibrant visuals and smooth gameplay to keep players entertained for hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiGift className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Get Bonuses</h4>
                </div>
                <p className="text-left">
                  Want to get some free chips? Players who register on the app get an instant bonus of 10 rupees. It's a good way to start your gaming journey without any real investment and play games for free.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiStar className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Other Rewards</h4>
                </div>
                <p className="text-left">
                  Boost your gameplay with daily free spins to win coins and prizes. Plus, earn Rs. 300 when friends join and make their first deposit of Rs. 3000 through the refer-and-earn program.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiAward className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">VIP Club</h4>
                </div>
                <p className="text-left">
                  Want to get a loyalty bonus? Join a VIP membership and get a daily VIP bonus. There are some other features and benefits that VIP members can also avail themselves of. Moreover, priority customer support is offered in case of any issue.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiEye className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">High Quality Visuals</h4>
                </div>
                <p className="text-left">
                  What's better than an app that gives a space for an immersive experience? This app is known for its best visuals and colors. As there are different themed games, the quality of these colors matters a lot. And this app has proven to be the best in this aspect.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiDollarSign className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Withdraw Money</h4>
                </div>
                <p className="text-left">
                  Another best feature of this app is the ability to withdraw money whenever you want. Earn your money playing the games and through different prizes and then withdraw through the e-wallets.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiHeadphones className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Supportive Team</h4>
                </div>
                <p className="text-left">
                  A customer support team is always ready to help players in case of any problem. Feedback and reviews are also welcomed regarding the app. Players can use live chat, WhatsApp message, or Email.
                </p>
              </div>
            </div>
            
            <div className="bg-[#132044] p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                  <FiShield className="text-[#fbbf24]" size={20} />
                </div>
                <h4 className="text-xl font-bold">Other Features</h4>
              </div>
              <div className="my-4 flex justify-center">
                <img 
                  src="/card rummy apk.webp" 
                  alt="Card Rummy APK Features" 
                  className="rounded-lg shadow-lg max-w-full h-auto border-2 border-[#fbbf24]/30"
                />
              </div>
              <ul className="space-y-3">
                {otherFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-[#fbbf24] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New Section: Security & Fair Play */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiLock className="mr-3 text-[#fbbf24]" size={24} />
              Security & Fair Play
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiShield className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Advanced Encryption</h4>
                </div>
                <p className="text-left">
                  User data and transactions are protected with 256-bit SSL encryption. This is the same security level used by major banks worldwide, ensuring personal and financial information stays private.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiZap className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Random Number Generator</h4>
                </div>
                <p className="text-left">
                  All games use certified Random Number Generators (RNG) that ensure completely random and fair results. The systems are regularly audited by independent testing agencies to maintain the highest standards of fairness.
                </p>
              </div>
            </div>
          </div>

          {/* New Section: Game Tutorials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiInfo className="mr-3 text-[#fbbf24]" size={24} />
              Quick Game Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-left">Teen Patti Basics</h4>
                <p className="text-left mb-3">
                  Teen Patti (Three Cards) is a popular South Asian card game. Players are dealt three cards each, and the goal is to have the highest-ranking hand.
                </p>
                <p className="text-left">
                  Basic hands from lowest to highest: High Card, Pair, Straight, Flush, Straight Flush, Three of a Kind. Start with small bets until you're comfortable with the game.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-left">Rummy Strategies</h4>
                <p className="text-left mb-3">
                  In Rummy, your goal is to form sets and sequences with your cards. Always discard high-value cards early (K, Q, J, A) unless they're part of a sequence you're building.
                </p>
                <p className="text-left">
                  Watch which cards your opponents pick and discard. This gives clues about what they're collecting and helps you avoid discarding cards they need.
                </p>
              </div>
            </div>
          </div>

          {/* New Section: Community Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiTrophy className="mr-3 text-[#fbbf24]" size={24} />
              Community & Tournaments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiTrophy className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Weekly Tournaments</h4>
                </div>
                <p className="text-left">
                  Join weekly tournaments with prize pools of up to Rs. 100,000! Tournaments are held every Friday to Sunday, with buy-ins starting as low as Rs. 50. Win big and see your name on the global leaderboards.
                </p>
              </div>
              
              <div className="bg-[#132044] p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#fbbf24]/20 p-3 rounded-full mr-3">
                    <FiUser className="text-[#fbbf24]" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Private Tables</h4>
                </div>
                <p className="text-left">
                  Create private tables to play exclusively with friends and family! Set your own stakes, game rules, and time limits. Share a unique code to invite others to your table for a personalized gaming experience.
                </p>
              </div>
            </div>
          </div>

          {/* New Section: Payment Methods Details */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiCreditCard className="mr-3 text-[#fbbf24]" size={24} />
              Payment Methods Details
            </h3>
            <div className="bg-[#132044] p-6 rounded-lg mb-6">
              <p className="text-left mb-4">
                Card Rummy supports multiple secure payment methods for deposits and withdrawals. All transactions are processed securely with industry-standard encryption.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-[#0f172a] rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left">Payment Method</th>
                      <th className="px-4 py-3 text-left">Processing Time</th>
                      <th className="px-4 py-3 text-left">Min Deposit</th>
                      <th className="px-4 py-3 text-left">Max Withdrawal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e3a8a]">
                    {paymentMethods.map((method, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">{method.name}</td>
                        <td className="px-4 py-3">{method.processingTime}</td>
                        <td className="px-4 py-3">{method.minDeposit}</td>
                        <td className="px-4 py-3">{method.maxWithdrawal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* New Section: Device Compatibility */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiSmartphone className="mr-3 text-[#fbbf24]" size={24} />
              Device Compatibility
            </h3>
            <div className="bg-[#132044] p-6 rounded-lg mb-6">
              <p className="text-left mb-4">
                Card Rummy APK is optimized to work on a wide range of Android devices. Check if your device meets these requirements:
              </p>
              <ul className="space-y-3">
                {deviceRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-[#fbbf24] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-left">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New Section: App Updates & Version History */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiRefreshCw className="mr-3 text-[#fbbf24]" size={24} />
              Latest Updates
            </h3>
            <div className="bg-[#132044] p-6 rounded-lg mb-6">
              <p className="text-left mb-4">
                Card Rummy APK receives regular updates to improve performance, add new features, and enhance security. Here are the recent updates:
              </p>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#fbbf24]/20 p-2 rounded-full mr-3 flex-shrink-0">
                      <span className="text-[#fbbf24] text-sm font-bold">{update.version}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{update.date}</p>
                      <p className="text-left">{update.feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left">Common Issues and Solutions</h3>
            <div className="bg-[#132044] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2 text-left">IP Limit Exceeds:</h4>
              <p className="text-left">
                If you see an "IP Limit Exceeds" message during registration, simply install a free VPN like Proton VPN, connect, and then open Card Rummy APK again to continue.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left flex items-center">
              <FiDownload className="mr-3 text-[#fbbf24]" size={24} />
              How to Download Card Rummy APK
            </h3>
            <p className="mb-4 text-left">
              Getting started is simple! Follow these steps to download and install Card Rummy APK on your Android device:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2 mb-4">
              <li className="text-left">Click the Download button on this page.</li>
              <li className="text-left">Go to your device&apos;s Settings &gt; Security &gt; Unknown Sources and enable installation.</li>
              <li className="text-left">Locate the downloaded APK file in your Downloads folder.</li>
              <li className="text-left">Tap the file and follow the installation prompts.</li>
              <li className="text-left">Open the app, register, and start playing!</li>
            </ol>
            <div className="mt-6 mb-8 flex justify-center">
              {renderDownloadButton()}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left flex items-center">
              <FiUser className="mr-3 text-[#fbbf24]" size={24} />
              How to Register and Bind Your Account
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li className="text-left">Open the app and tap Continue as Guest.</li>
              <li className="text-left">Tap on your User ID at the top left corner.</li>
              <li className="text-left">Select Bind and fill in your email, captcha, and tap Get OTP.</li>
              <li className="text-left">Check your email (including spam) for the OTP code and enter it.</li>
              <li className="text-left">Create a strong password, add your phone number, and confirm.</li>
            </ol>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left flex items-center">
              <FiDollarSign className="mr-3 text-[#fbbf24]" size={24} />
              How to Deposit and Withdraw Money
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#132044] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-left">Deposit:</h4>
                <div className="my-4 flex justify-center">
                  <img 
                    src="/card rummy add money.webp" 
                    alt="Card Rummy Add Money" 
                    className="rounded-lg shadow-lg max-w-full h-auto border-2 border-[#fbbf24]/30"
                  />
                </div>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-left">Tap Buy and select your desired coin package (minimum Rs. 20).</li>
                  <li className="text-left">Choose JazzCash or Easypaisa, enter your details, and confirm the transaction.</li>
                </ol>
              </div>
              <div className="bg-[#132044] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-left">Withdraw:</h4>
                <div className="my-4 flex justify-center">
                  <img 
                    src="/card rummy withdraw money.webp" 
                    alt="Card Rummy Withdraw Money" 
                    className="rounded-lg shadow-lg max-w-full h-auto border-2 border-[#fbbf24]/30"
                  />
                </div>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-left">Tap Withdraw in the app.</li>
                  <li className="text-left">Enter the amount you want to withdraw.</li>
                  <li className="text-left">Choose your e-wallet or bank account, and confirm.</li>
                  <li className="text-left">Your winnings will be transferred securely and quickly.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left">Tips for Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="text-left">Start with low-stakes games to understand the rules.</li>
                  <li className="text-left">Use your welcome bonus and daily spins to play without spending real money.</li>
                  <li className="text-left">Refer friends to earn extra rewards.</li>
                  <li className="text-left">Stay active and practice to improve your skills and earnings.</li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src="/card rummy refferal.webp" 
                  alt="Card Rummy Referral Program" 
                  className="rounded-lg shadow-lg max-w-full h-auto border-2 border-[#fbbf24]/30"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiSmile className="mr-3 text-[#fbbf24]" size={24} />
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-[#132044] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#fbbf24]/20 h-16 w-16 rounded-full flex items-center justify-center">
                      <FiUser className="text-[#fbbf24]" size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-center">{story.name}</h4>
                  <p className="text-center mb-1">Won {story.amount}</p>
                  <p className="text-center text-gray-400">Playing {story.game}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400">
              *Actual results may vary. These stories represent some of the top winners.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-left flex items-center">
              <FiHeart className="mr-3 text-[#fbbf24]" size={24} />
              Responsible Gaming
            </h3>
            <div className="bg-[#132044] p-6 rounded-lg mb-6">
              <p className="text-left mb-4">
                Card Rummy promotes responsible gaming. Players are encouraged to enjoy the games in a balanced and responsible manner.
              </p>
              <ul className="space-y-3">
                {responsibleGamingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-[#fbbf24] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-left">{tip}</span>
                  </li>
                ))}
              </ul>
              <p className="text-left mt-4">
                If you feel you may have a gambling problem, please contact the support team for assistance with account restrictions or seek professional help.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left flex items-center">
              <FiHelpCircle className="mr-3 text-[#fbbf24]" size={24} />
              FAQs
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#132044] p-6 rounded-lg border border-[#2a3f73]/50 hover:border-[#fbbf24]/50 transition-all transform hover:-translate-y-1 hover:shadow-md">
                  <h4 className="text-xl font-bold mb-2 text-left flex items-center">
                    <span className="bg-[#fbbf24]/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-[#fbbf24]">Q</span>
                    {faq.question}
                  </h4>
                  <div className="pl-11">
                    <p className="text-left text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-4.html" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white rounded-lg border border-[#2a3f73] hover:border-[#fbbf24] transition-all">
                <FiHelpCircle className="mr-2" size={20} />
                <span>Get More Help</span>
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-left">Why Choose Card Rummy APK?</h3>
            <p className="text-left mb-4">
              With its vast game selection, real cash rewards, smooth performance, and secure transactions, Card Rummy APK is the go-to Card Rummy app for players in Pakistan.
            </p>
            <div className="bg-[#132044] p-4 rounded-lg text-center font-bold text-xl">
              {renderDownloadButton()}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-left">Conclusion</h3>
            <p className="text-lg text-left mb-6">
              If you're looking for an exciting and rewarding gaming experience, Card Rummy APK is the perfect choice. With a huge selection of games, generous bonuses, and easy withdrawals, it's never been easier to have fun and earn money at the same time. Don't wait—download Card Rummy APK today and start your journey to winning big!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 