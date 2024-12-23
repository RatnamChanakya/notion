import { motion } from 'framer-motion';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const SUCCESS_STORIES = [
  {
    name: 'Sarah Chen',
    role: 'Started with Zero Experience',
    revenue: '$1.8M+',
    avatar: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67683f91fb63bc54aa6bfb4b.jpeg',
    image: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67516bf26c55b5c31fe1236a.png',
    period: '1 month',
    quote: "I had no audience, no tech skills, nothing. Now I'm making more in a month than my old yearly salary. The craziest part? These templates practically sell themselves."
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Ex-Restaurant Manager',
    revenue: '$76,000+',
    avatar: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67683f917e621127f5b0c7e6.jpeg',
    image: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67516bf22896f65f1859f5e1.png',
    period: '1 month',
    quote: "Last year I was working 80-hour weeks. Now I work 5 hours a week and make 6 figures monthly. If you're on the fence, just do it - this opportunity won't last forever."
  },
  {
    name: 'Jennifer Parker',
    role: 'Digital Marketing Consultant',
    revenue: '$3.8M+',
    avatar: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67683f912fc19543094a9396.jpeg',
    image: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67516bf2fc9c337c0bf2ddd7.png',
    period: '1 month',
    quote: "These templates revolutionized my business. I went from struggling to find clients to having a waitlist. The ROI is absolutely incredible."
  },
  {
    name: 'Michael Chang',
    role: 'Former Software Engineer',
    revenue: '$56,000+',
    avatar: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67683f91e3599e34a0b6d866.jpeg',
    image: 'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/675177c7fc9c3319f6f2ecab.png',
    period: '1 month',
    quote: "I was skeptical at first, but the results speak for themselves. These templates helped me build a 7-figure business faster than I ever thought possible."
  }
];

export function SuccessStories() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-2 gap-6 md:gap-8"
    >
      {SUCCESS_STORIES.map((story, index) => (
        <motion.div
          key={index}
          variants={item}
          layout
          className="relative group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative">
            <div className="flex items-start gap-4 mb-4 relative">
              <Avatar className="w-12 h-12 relative aspect-square">
                <AvatarImage src={story.avatar} alt={story.name} />
                <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold text-white">{story.name}</h4>
                <p className="text-sm text-gray-400">{story.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-300 mb-4">{story.quote}</blockquote>
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-pink-500/20">
                <img
                  src={story.image}
                  alt={`${story.name}'s Revenue Screenshot`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-pink-400">{story.revenue}</span>
                <span className="text-gray-500">in {story.period}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}