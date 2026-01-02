import { motion } from 'framer-motion';
import { Users, ExternalLink } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Utkarsh Gaur",
      role: "AWS Cloud Club Captain",
      profileLink: "https://www.linkedin.com/in/ugaur",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGT4oX0eQ0AJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724436326288?e=1760572800&v=beta&t=RkM2KWu5Of5onZ5UH56xKs3Pnu1kbKM84t10oSXHowQ"
    },
    {
      id: 1,
      name: "Vidit Gupta",
      role: "Sponsorship Executive",
      profileLink: "https://www.linkedin.com/in/vidit-gupta-55774a2b2",
      image: "https://media.licdn.com/dms/image/v2/D5603AQF2GpGnHUhLLQ/profile-displayphoto-crop_800_800/B56ZlJZ0DYJwAI-/0/1757873129243?e=1760572800&v=beta&t=H6x7pNs1iJnLoACcPiYwdUi8nhq2nD1ZplVTgfF0Sq0"
    },
    {
      id: 2,
      name: "Shweta",
      role: "Marketing and Outreach Executive",
      profileLink: "https://www.linkedin.com/in/shwetarx",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH2Nszb49sQhQ/profile-displayphoto-shrink_400_400/B56ZTP3o2rHQAg-/0/1738654260298?e=1760572800&v=beta&t=x8Rn62CYKKMvjJqE3YXsWKhfvisky_dF60IrFemAwOQ"
    },
    {
      id: 3,
      name: "Vashu Kaushik",
      role: "Events Executive",
      profileLink: "https://www.linkedin.com/in/vashukaushik/",
      image: "https://media.licdn.com/dms/image/v2/D4E35AQG04gjlaJ9_LA/profile-framedphoto-shrink_400_400/B4EZkVBQKtIIAc-/0/1756994274283?e=1758470400&v=beta&t=cdYr0xUpteuENCe2wMUCNCJqGQ2IarrSu_mvgwPKAcA"
    },
    {
      id: 4,
      name: "Deepak",
      role: "Technical Executive",
      profileLink: "https://www.linkedin.com/in/phoenixdev100",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGf1eSsXlSFVQ/profile-framedphoto-shrink_400_400/B56ZUx15_QHQAc-/0/1740297969967?e=1758470400&v=beta&t=7tjMOSwhJOJuXHAZGV2xOMT8KL9n8TXR4hfRfqYb8vI"
    },
    {
      id: 5,
      name: "Ayush Harsh",
      role: "Technical Executive",
      profileLink: "https://www.linkedin.com/in/ayush13harsh",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFbv7t9JP_t4g/profile-displayphoto-shrink_400_400/B56ZOz4FfBHIAg-/0/1733889645705?e=1760572800&v=beta&t=aPnqxkyUyCox71xUwv4zZu233FReNHZ0ur_kyzzIqNQ"
    },
    {
      id: 6,
      name: "Mohammad Sameer",
      role: "Public Relation Executive",
      profileLink: "https://www.linkedin.com/in/connect-to-sam-xyz/",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGutRl-yjY3fw/profile-framedphoto-shrink_400_400/B56ZfGcH2hG0Ao-/0/1751380951867?e=1758474000&v=beta&t=gfkuRExCNWwKkPAenvJ45N2Ic3HmuK4J_qm0bmDYk84"
    },
    {
      id: 7,
      name: "Aditya Maheshwari",
      role: "Logistics Executive",
      profileLink: "https://www.linkedin.com/in/aditya-maheshwari-7566582bb",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEs5GQkcpGQew/profile-displayphoto-scale_400_400/B4DZlLpObRJgAg-/0/1757910724302?e=1760572800&v=beta&t=u2c1knBfoWu1YyM0N9o8J6XatGOLJU1d2RJmQA2pJuQ"
    },
    {
      id: 8,
      name: "Sanskriti Verma",
      role: "Community Engagement Executive",
      profileLink: "https://www.linkedin.com/in/sanskriti-verma-241030345/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEPZaMYvSmrVQ/profile-displayphoto-shrink_800_800/B4EZXGO9Q6GwAc-/0/1742787565643?e=1760572800&v=beta&t=x48J5q358tytFWnGeTEAnPaUuKVQM9_qQNxlRjYqf6I"
    }
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="gradient-text">Meet the Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate students driving cloud innovation and building the future of technology at Sharda University
          </p>
        </motion.div>

        {/* Team Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Avatar */}
              <div className="relative mb-4 mx-auto">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-aws-orange to-aws-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-aws-orange to-aws-blue rounded-lg flex items-center justify-center ${member.image ? 'hidden' : ''}`}>
                      <span className="text-white font-bold text-sm sm:text-lg md:text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {member.role}
                </p>

                {/* View Profile Link */}
                <motion.a
                  href={member.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-2 transition-colors"
                >
                  View LinkedIn
                  <ExternalLink className="h-3 w-3 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
