import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { Link } from "wouter";

const books = [
  {
    id: 1,
    title: "[Book Title 1]",
    author: "[Author Name 1]",
    description: "A compelling read that explores themes of consciousness and awakening.",
    amazonLink: "[AMAZON_LINK_1_HERE]",
    reviewLink: "/book-review-1",
    coverImage: "/api/placeholder/200/300" // Replace with actual book cover
  },
  {
    id: 2,
    title: "[Book Title 2]", 
    author: "[Author Name 2]",
    description: "An insightful journey into the depths of human potential and transformation.",
    amazonLink: "[AMAZON_LINK_2_HERE]",
    reviewLink: "/book-review-2",
    coverImage: "/api/placeholder/200/300" // Replace with actual book cover
  }
];

export default function BooksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-teal-500" />
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent"
          >
            Recommended Reading
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Discover transformative books from visionary authors who share our commitment to consciousness evolution
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {books.map((book) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="flex justify-center">
                  <div className="w-48 h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                    <p className="text-slate-400 text-center text-sm">
                      Book Cover<br />
                      {book.title}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-500 mb-2">{book.title}</h3>
                    <p className="text-lg text-slate-300">by {book.author}</p>
                  </div>
                  
                  <p className="text-slate-400">{book.description}</p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      onClick={() => window.open(book.amazonLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Buy on Amazon
                    </Button>
                    
                    <Link href={book.reviewLink}>
                      <Button variant="outline" className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                        Read Our Review
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}