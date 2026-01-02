import { motion } from 'framer-motion';
import { Cloud, Heart, ExternalLink, Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Join Us', href: '#social' }
  ];

  const resources = [
    { name: 'AWS Documentation', href: 'https://docs.aws.amazon.com/' },
    { name: 'AWS Training', href: 'https://aws.amazon.com/training/' },
    { name: 'AWS Certification', href: 'https://aws.amazon.com/certification/' },
    { name: 'AWS Free Tier', href: 'https://aws.amazon.com/free/' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-aws-blue via-gray-900 to-purple-900 dark:from-gray-900 dark:via-black dark:to-gray-800 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Logo and Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="AWS Cloud Club Logo" 
                className="h-10 w-10 rounded-lg shadow-md object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-white">AWS Cloud Club</h3>
                <p className="text-aws-orange text-sm">Sharda University</p>
              </div>
            </div>
            
            <p className="text-gray-400 dark:text-gray-300 text-sm max-w-md">
              Empowering students with cloud computing knowledge through workshops and community collaboration.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {[
              { icon: Twitter, href: 'https://x.com/awscloudclubsu' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/aws-cloud-club-sharda-university' },
              { icon: Instagram, href: 'https://www.instagram.com/aws_cloud_club_su/' },
              { icon: Mail, href: 'mailto:awscloudclub.sharda.univeristy@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 dark:bg-gray-700/50 rounded-lg text-gray-400 dark:text-gray-300 hover:text-aws-orange hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-400 dark:text-gray-300 text-xs">
            © 2025 AWS Cloud Club Sharda University. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>by AWS Cloud Club Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
