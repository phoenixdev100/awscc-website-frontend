import { motion } from 'framer-motion';
import { Cloud, Users, Target, Award, BookOpen, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Learn AWS services and cloud architecture through hands-on projects'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded students and industry professionals'
    },
    {
      icon: BookOpen,
      title: 'Workshops',
      description: 'Regular technical workshops and certification preparation sessions'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Guidance and support for AWS certification exams'
    }
  ];

  const stats = [
    { number: '700+', label: 'Active Members' },
    { number: '5+', label: 'Mega Events Conducted' },
    { number: '3+', label: 'Workshops' },
    { number: '25+', label: 'Chit Chat sessions' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="gradient-text">About Our Club</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AWS Cloud Club at Sharda University is a student-driven community focused on 
            cloud computing education, hands-on learning, and professional development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift"
            >
              <div className="text-3xl font-bold text-aws-orange mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Join Us Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            <span className="gradient-text">Why Join Us?</span>
          </h3>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-aws-orange to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                To create a vibrant community of cloud enthusiasts who learn, build, and innovate 
                together. We bridge the gap between academic learning and industry requirements 
                through practical AWS training and real-world projects.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-aws-orange" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Skill Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-aws-orange" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Innovation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-aws-orange to-yellow-500 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Join Us Today!</h4>
                <p className="mb-6">
                  Start your cloud journey with us and become part of the next generation 
                  of cloud professionals.
                </p>
                <motion.a
                  href="#social"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white text-aws-orange px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  <span>Join Community</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
