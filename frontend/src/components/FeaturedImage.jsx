import { motion } from 'framer-motion';
import { Award, Users, Calendar, TrendingUp } from 'lucide-react';

const FeaturedImage = () => {
  const achievements = [
    {
      icon: Users,
      number: "700+",
      label: "Active Members",
      color: "text-blue-400"
    },
    {
      icon: Calendar,
      number: "5+",
      label: "Mega Events Conducted",
      color: "text-green-400"
    },
    {
      icon: Award,
      number: "3+",
      label: "Workshops",
      color: "text-yellow-400"
    },
    {
      icon: TrendingUp,
      number: "25+",
      label: "Chit Chat Sessions",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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
            <span className="gradient-text">Our Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building the future of cloud computing education at Sharda University
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/featured_image.jpg"
                alt="AWS Cloud Club Featured Event"
                className="w-full h-[400px] sm:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 bg-aws-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Featured Event
              </motion.div>
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">AWS Workshop Series</h3>
                <p className="text-sm opacity-90">Hands-on cloud computing training for students</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-aws-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Empowering Cloud Excellence
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Our AWS Cloud Club has been at the forefront of cloud education, providing 
                students with practical experience and industry-relevant skills. Through 
                workshops, certifications, and hands-on projects, we're building the next 
                generation of cloud professionals.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Join us in our mission to democratize cloud computing knowledge and create 
                opportunities for students to excel in the rapidly evolving tech landscape.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                    <span className={`text-xl font-bold ${achievement.color}`}>
                      {achievement.number}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs font-medium">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#events"
                className="bg-gradient-to-r from-aws-orange to-yellow-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                View Our Events
              </a>
              <a
                href="#contact"
                className="border-2 border-aws-orange text-aws-orange dark:text-aws-orange px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-aws-orange hover:text-white transition-all duration-300 text-center"
              >
                Join Our Community
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
