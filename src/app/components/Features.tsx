import { FiUsers, FiAward, FiSmartphone, FiShield } from 'react-icons/fi';

const features = [
  {
    title: 'Multiplayer Experience',
    description: 'Play with friends or match with players around the world in real-time.',
    icon: FiUsers,
  },
  {
    title: 'Tournaments & Prizes',
    description: 'Compete in daily and weekly tournaments to win exciting prizes.',
    icon: FiAward,
  },
  {
    title: 'Cross-Platform',
    description: 'Play on your browser or download our mobile app for iOS and Android.',
    icon: FiSmartphone,
  },
  {
    title: 'Secure Gameplay',
    description: 'Advanced security measures ensure fair play and protection of your information.',
    icon: FiShield,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a1535] to-[#0d1b3a]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Our Card Rummy Game?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-[#fbbf24]/20 p-4 rounded-full mb-4">
                  <Icon size={32} className="text-[#fbbf24]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 