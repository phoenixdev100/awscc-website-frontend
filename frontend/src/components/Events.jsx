import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, Award, Code, Presentation } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Hackathon Mentorship Program',
      date: 'Sept 15, 2025',
      time: '2-week virtual program',
      location: 'Online Sessions',
      attendees: 'SIH & AWS Hackathon Teams',
      type: 'Mentorship',
      icon: Users,
      color: 'from-aws-orange to-yellow-500',
      description: 'Expert guidance for SIH 2025 & AWS AI Global Hackathon participants',
      highlights: ['Industry expert sessions', 'AI/ML & cloud integration', 'Pitch refinement', 'Certificates for 80%+ attendance']
    }
  ];

  const pastEvents = [
    {
      title: 'Campus to Cloud: The AWS Cloud Club',
      date: 'Aug 6, 2025',
      attendees: '49',
      type: 'Club Launch',
      description: 'Official launch event introducing the AWS Cloud Club and its mission to students'
    },
    {
      title: 'Code to Cloud',
      date: 'Oct 5, 2024',
      attendees: '158',
      type: 'Workshop',
      description: 'Hands-on workshop covering the journey from code development to cloud deployment'
    },
    {
      title: 'Cloud Skill-Up: Summer Training Camp',
      date: 'Jun 10, 2024',
      attendees: '154',
      type: 'Training Camp',
      description: 'Intensive summer training program focused on building essential cloud computing skills'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
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
            <span className="gradient-text">Events & Activities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our regular workshops, seminars, and hands-on sessions to enhance your cloud computing skills
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <Calendar className="w-6 h-6 text-aws-orange mr-3" />
            Upcoming Events
          </h3>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className={`h-2 bg-gradient-to-r ${event.color} mb-4`}></div>

                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                  {/* Top Section - Icon and Type (Mobile) / Left Section (Desktop) */}
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="flex items-center justify-between lg:flex-col lg:items-start gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 lg:p-3 rounded-xl bg-gradient-to-r ${event.color}`}>
                          <event.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <span className="px-2 lg:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs lg:text-sm rounded-full font-medium">
                          {event.type}
                        </span>
                      </div>
                      {/* CTA Button - Mobile Top */}
                      <div className="lg:hidden">
                        <motion.a
                          href="https://www.meetup.com/aws-cloud-club-at-sharda-university/events/311032068/?eventOrigin=group_upcoming_events"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-aws-orange to-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                        >
                          <span>Register</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section - Main Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{event.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-aws-orange flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-aws-orange flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 sm:col-span-2 lg:col-span-1">
                        <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-aws-orange flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-sm font-medium">{event.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs lg:text-sm font-semibold text-gray-800 dark:text-white mb-2">Program Highlights:</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                        {event.highlights?.map((highlight, idx) => (
                          <div key={idx} className="flex items-start text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-aws-orange rounded-full mt-1.5 lg:mt-2 mr-2 lg:mr-3 flex-shrink-0"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Section - CTA Button (Desktop) */}
                  <div className="hidden lg:flex flex-shrink-0">
                    <motion.a
                      href="https://www.meetup.com/aws-cloud-club-at-sharda-university/events/311064712/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-aws-orange to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-aws-orange mr-3" />
            Past Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{event.title}</h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Users className="w-4 h-4 mr-2 text-aws-orange" />
                  <span>{event.attendees} participants</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-aws-orange mr-3" />
            Recent Activities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Weekly Study Groups & Discussion Sessions',
              'AWS Certification Preparation Sessions',
              'Industry Expert Guest Lectures',
              'Hands-on Lab Sessions & Projects',
              'Cloud Architecture Design Challenges',
              'Technical Presentation Competitions'
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2 h-2 bg-aws-orange rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-aws-orange to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="mb-6 text-lg">
              Stay updated with our latest events and workshops. Join our community to get notified.
            </p>
            <motion.a
              href="#social"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-aws-orange px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Join Community</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
