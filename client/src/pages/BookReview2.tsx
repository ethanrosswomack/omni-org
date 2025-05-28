import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BookReview2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Review - [Author Name 2] | Omniversal Media</title>
        <meta 
          name="description" 
          content="Read our detailed review of [Book Title 2] by [Author Name 2] and watch our video discussion." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-teal-500 hover:text-teal-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Book Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            {/* Replace with actual book cover image */}
            <div className="w-64 h-96 bg-slate-800 rounded-lg flex items-center justify-center">
              <p className="text-slate-400 text-center">Book Cover Image<br />Add your book cover here</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-teal-500">[Book Title 2]</h1>
              <p className="text-xl text-slate-300">by [Author Name 2]</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                [Add a brief description of the second book here]
              </p>
              
              <Button className="bg-teal-600 hover:bg-teal-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                <a href="[AMAZON_LINK_2_HERE]" target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-500">Our Review</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed">
              [Write your detailed review of the second book here. You can add multiple paragraphs, 
              discuss themes, characters, and your personal thoughts about this book.]
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              [Add more review content here. Talk about what you liked, 
              what resonated with you, and why you recommend this second book.]
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-teal-500">Video Review</h3>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <p className="text-slate-400 mb-4">Video review coming soon!</p>
              <p className="text-sm text-slate-500">
                Replace this section with your video embed code
              </p>
              {/* 
              Replace this placeholder with your video embed:
              <iframe 
                width="100%" 
                height="400" 
                src="YOUR_VIDEO_URL_HERE"
                title="Book Review Video"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}