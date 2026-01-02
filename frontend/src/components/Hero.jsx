import { motion } from 'framer-motion';
import { Cloud, Users, Zap, Globe, ArrowRight, Server, Database, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  const floatingElements = [
    { icon: Cloud, delay: 0, x: 100, y: 50, color: 'text-aws-orange' },
    { icon: Server, delay: 0.5, x: -80, y: 80, color: 'text-blue-400' },
    { icon: Database, delay: 1, x: 120, y: -60, color: 'text-green-400' },
    { icon: Shield, delay: 1.5, x: -100, y: -40, color: 'text-purple-400' },
    { icon: Cpu, delay: 2, x: 50, y: -80, color: 'text-yellow-400' },
    { icon: Globe, delay: 2.5, x: -120, y: 60, color: 'text-cyan-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-aws-blue via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.1,
              scale: 1,
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              delay: element.delay,
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute hidden sm:block"
            style={{ 
              left: `calc(50% + ${element.x}px)`, 
              top: `${50 + element.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <element.icon className={`w-12 h-12 sm:w-16 sm:h-16 ${element.color}`} />
          </motion.div>
        ))}
      </div>

      {/* AWS Cloud Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 1400,
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            style={{
              top: `${5 + (i * 7)}%`,
            }}
          >
            <div className={`flex items-center space-x-2 bg-gradient-to-r ${i % 2 === 0 ? 'from-aws-orange/20 to-yellow-500/20' : 'from-blue-500/20 to-purple-500/20'} rounded-full px-3 py-1 whitespace-nowrap`}>
              <Cloud className="w-3 h-3 text-white flex-shrink-0" />
              <span className="text-white text-xs font-medium">
                {['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront', 'DynamoDB', 'EKS', 'API Gateway','Workshops','certifications','chit chat','opportunities'][i]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-8 mt-24"
          >
            {/* AWS Logo Style */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-white/20">
                <img 
                  src="/logo.jpg" 
                  alt="AWS Cloud Club Logo" 
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AWS Cloud Club
              </span>
            </h1>

            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="h-1 w-6 sm:w-8 md:w-12 bg-aws-orange rounded"></div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-aws-orange">
                Sharda University
              </span>
              <div className="h-1 w-6 sm:w-8 md:w-12 bg-aws-orange rounded"></div>
            </div>

            <p className="text-lg text-gray-300 font-medium">
              Student Developer Community
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 dark:border-gray-600/30">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white dark:text-gray-100 leading-relaxed text-center">
                Empowering the next generation of
                <span className="text-aws-orange font-bold"> cloud professionals</span> through
                <span className="text-blue-400 font-bold"> hands-on learning</span>,
                <span className="text-green-400 font-bold"> community building</span>, and
                <span className="text-purple-400 font-bold"> innovation</span>
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
                {['AWS Certified', 'Cloud Computing', 'DevOps', 'Serverless'].map((tag, index) => (
                  <span key={index} className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-aws-orange/20 dark:bg-aws-orange/30 text-aws-orange dark:text-aws-orange rounded-full text-xs sm:text-sm font-medium border border-aws-orange/30 dark:border-aws-orange/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4"
          >
            <motion.a
              href="#social"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-aws-orange to-yellow-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md text-white dark:text-gray-100 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-white/20 dark:border-gray-600/30 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explore AWS</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
