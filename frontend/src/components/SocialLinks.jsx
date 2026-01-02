import { motion } from 'framer-motion';
import {
  Mail,
  Calendar,
  MessageCircle,
  MessageSquare,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:awscloudclub.sharda.univeristy@gmail.com',
      icon: Mail,
      color: 'from-red-500 to-red-600',
      description: 'Get in touch with us'
    },
    {
      name: 'Meetup',
      url: 'https://www.meetup.com/aws-cloud-club-at-sharda-university',
      icon: Calendar,
      color: 'from-red-400 to-pink-500',
      description: 'Join our events'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/Eys77mrks5',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      description: 'Chat with community'
    },
    {
      name: 'WhatsApp',
      url: 'https://chat.whatsapp.com/IVxC3m2QF3t3W66dEswyyJ',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      description: 'Quick updates'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/awscloudclubsu',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      description: 'Follow our updates'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/aws-cloud-club-sharda-university',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      description: 'Professional network'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aws_cloud_club_su/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      description: 'Visual updates'
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="gradient-text">Connect With Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our vibrant community across multiple platforms and stay updated with the latest in cloud technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-gray-50 dark:bg-gray-900 shadow-lg"
            >

              {/* Icon */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${link.color} mb-4`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4">
                  {link.description}
                </p>

                {/* External Link Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                    Click to join
                  </span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 dark:border-gray-700/30">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Start Your Cloud Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join hundreds of students already learning and building with AWS cloud technologies
            </p>
            <motion.a
              href="https://www.meetup.com/aws-cloud-club-at-sharda-university"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-aws-orange to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Register for Events</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
