import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI: Trends to Watch in 2026',
      excerpt: 'Explore the key AI trends that will shape the industry this year, from autonomous agents to enterprise AI solutions.',
      category: 'AI Trends',
      date: 'January 15, 2026',
      author: 'Rajesh Kumar'
    },
    {
      id: 2,
      title: 'Building Enterprise-Grade AI Systems',
      excerpt: 'Learn best practices for building scalable, secure, and reliable AI systems for enterprise applications.',
      category: 'Enterprise',
      date: 'January 10, 2026',
      author: 'Priya Sharma'
    },
    {
      id: 3,
      title: 'Voice AI: Transforming Customer Interactions',
      excerpt: 'Discover how voice-enabled AI assistants are revolutionizing customer service and engagement strategies.',
      category: 'Voice AI',
      date: 'January 5, 2026',
      author: 'Amit Patel'
    },
    {
      id: 4,
      title: 'Machine Learning in Production: Challenges & Solutions',
      excerpt: 'Navigate the complexities of deploying machine learning models at scale with comprehensive strategies.',
      category: 'ML Ops',
      date: 'December 28, 2025',
      author: 'Neha Singh'
    },
    {
      id: 5,
      title: 'Responsible AI: Building Ethical Systems',
      excerpt: 'Explore frameworks and practices for developing AI systems that are fair, transparent, and accountable.',
      category: 'Ethics',
      date: 'December 20, 2025',
      author: 'Vikram Gupta'
    },
    {
      id: 6,
      title: 'AI and Data Privacy: Compliance in Focus',
      excerpt: 'Understand the intersection of AI innovation and data privacy regulations in the modern enterprise.',
      category: 'Privacy',
      date: 'December 15, 2025',
      author: 'Anjali Reddy'
    }
  ];

  return (
    <>
      <Head>
        <title>Rajora.ai Blog - AI Insights and Industry News</title>
        <meta name="description" content="Read the latest articles, insights, and news about AI, machine learning, and enterprise technology from Rajora.ai." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Blog & Insights</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and news about AI, machine learning, and enterprise technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-all overflow-hidden group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-green-400 bg-green-500 bg-opacity-10 px-3 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-400">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-sm text-slate-500">By {post.author}</span>
                    <a href="#" className="text-green-400 hover:text-green-300 transition-colors font-semibold">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
