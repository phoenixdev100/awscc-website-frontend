import { motion } from 'framer-motion';
import { Mic, HandHeart, ArrowRight, Users, Award } from 'lucide-react';

const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
            <span className="gradient-text">Support Our Community</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us grow and make a bigger impact by contributing your expertise or supporting our initiatives
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Speaker Proposal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Speaker Proposal</h3>
                <p className="text-gray-600 dark:text-gray-300">Share your expertise with our community</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">What we're looking for:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Industry professionals with AWS expertise
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Technical talks on cloud computing topics
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Career guidance and mentorship sessions
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Workshop facilitation and hands-on training
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Users className="w-5 h-5 mr-2" />
                <span>Reach 700+ students</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Award className="w-5 h-5 mr-2" />
                <span>Certificate provided</span>
              </div>
            </div>

            <motion.a
              href="https://forms.gle/jGAXP1ogHuMqLLNp7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Apply as Speaker</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Sponsorship Proposal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-aws-orange to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sponsorship Proposal</h3>
                <p className="text-gray-600 dark:text-gray-300">Partner with us to support student growth</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Sponsorship benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-aws-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Brand visibility across all our events
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-aws-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Direct access to talented students
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-aws-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Social media promotion and recognition
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-aws-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Opportunity for recruitment partnerships
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Users className="w-5 h-5 mr-2" />
                <span>700+ active members</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Award className="w-5 h-5 mr-2" />
                <span>Multiple events yearly</span>
              </div>
            </div>

            <motion.a
              href="mailto:awscloudclub.sharda.university@gmail.com?subject=Sponsorship Proposal - AWS Cloud Club&body=Hello AWS Cloud Club Team,%0D%0A%0D%0AWe are interested in sponsoring your events and supporting your community.%0D%0A%0D%0ACompany Name:%0D%0AContact Person:%0D%0APhone Number:%0D%0ASponsorship Type (Event/Workshop/General):%0D%0AProposed Contribution:%0D%0AExpected Benefits:%0D%0AAdditional Requirements:%0D%0A%0D%0APlease share your sponsorship packages and let us discuss how we can support your amazing work.%0D%0A%0D%0ABest regards"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-aws-orange to-yellow-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Become a Sponsor</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-aws-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="mb-6 text-lg">
              Join us in building the next generation of cloud professionals. Your contribution matters!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:awscloudclub.sharda.university@gmail.com?subject=General Inquiry - AWS Cloud Club"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <span>Get in Touch</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>Learn More</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
