import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Learn: React.FC = () => {
  const resources = [
    {
      id: 1,
      category: 'Getting Started',
      title: 'Introduction to Rajora.ai',
      description: 'Learn the basics of Rajora.ai platform and its core concepts.',
      difficulty: 'Beginner',
      duration: '15 min'
    },
    {
      id: 2,
      category: 'API Documentation',
      title: 'RESTful API Guide',
      description: 'Comprehensive guide to using Rajora.ai RESTful APIs in your applications.',
      difficulty: 'Intermediate',
      duration: '30 min'
    },
    {
      id: 3,
      category: 'Development',
      title: 'Building with SDKs',
      description: 'Learn how to build applications using Rajora.ai SDKs for various languages.',
      difficulty: 'Intermediate',
      duration: '45 min'
    },
    {
      id: 4,
      category: 'AI Models',
      title: 'Training Custom Models',
      description: 'Guide to training and deploying custom AI models on Rajora.ai platform.',
      difficulty: 'Advanced',
      duration: '60 min'
    },
    {
      id: 5,
      category: 'Best Practices',
      title: 'Deployment Strategies',
      description: 'Production deployment best practices for enterprise AI applications.',
      difficulty: 'Advanced',
      duration: '50 min'
    },
    {
      id: 6,
      category: 'Enterprise',
      title: 'Enterprise Integration',
      description: 'Integrating Rajora.ai with enterprise systems and databases.',
      difficulty: 'Advanced',
      duration: '90 min'
    }
  ];

  return (
    <>
      <Head>
        <title>Rajora.ai Learn - Documentation & Tutorials</title>
        <meta name="description" content="Comprehensive documentation, tutorials, and learning resources for building with Rajora.ai enterprise AI platform." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Learn & Documentation</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore comprehensive resources, tutorials, and documentation to master Rajora.ai platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-center">
                <p className="text-white font-semibold">API Reference</p>
              </a>
              <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-center">
                <p className="text-white font-semibold">Code Examples</p>
              </a>
              <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-center">
                <p className="text-white font-semibold">SDKs & Libraries</p>
              </a>
              <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-center">
                <p className="text-white font-semibold">Community Forum</p>
              </a>
            </div>
          </div>

          {/* Resources */}
          <h2 className="text-2xl font-bold text-white mb-8">Learning Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-green-400 bg-green-500 bg-opacity-10 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                  <span className="text-xs text-slate-400">{resource.duration}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    resource.difficulty === 'Beginner' ? 'bg-green-500 bg-opacity-10 text-green-400' :
                    resource.difficulty === 'Intermediate' ? 'bg-yellow-500 bg-opacity-10 text-yellow-400' :
                    'bg-red-500 bg-opacity-10 text-red-400'
                  }`}>
                    {resource.difficulty}
                  </span>
                  <a href="#" className="text-green-400 hover:text-green-300 transition-colors font-semibold text-sm">
                    Learn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Learn;
