import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Omniversal Media transformed our brand story into a cinematic experience that resonated deeply with our audience. Their creative vision and technical execution exceeded our expectations.",
    author: "Jessica Dorn",
    title: "Marketing Director, TechVision",
    initials: "JD"
  },
  {
    quote: "The immersive VR experience they created for our museum exhibit has been our most popular installation to date. Their ability to blend education with entertainment is unmatched.",
    author: "Marcus Reid",
    title: "Curator, Science Center",
    initials: "MR"
  },
  {
    quote: "Their livestreaming solution for our global conference connected thousands of participants seamlessly. The production quality made remote attendees feel like they were right there with us.",
    author: "Amara Khan",
    title: "Events Director, Global Innovations",
    initials: "AK"
  }
];

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Hear what our clients have to say about working with Omniversal Media.
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-foreground italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
