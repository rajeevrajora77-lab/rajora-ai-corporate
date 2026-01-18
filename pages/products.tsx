import React from 'react';

import Layout from '@/components/Layout';
import Head from 'next/head';

const Products: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rajora.ai Products - Enterprise AI Solutions</title>
        <meta name="description" content="Discover Rajora.ai's suite of enterprise AI products designed for scalable, responsible, and future-proof intelligence systems." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade AI solutions built for scale, security, and long-term intelligence systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">AION Enterprise Search</h2>
              <p className="text-slate-300 mb-6">
                An AI-powered enterprise search engine with natural language understanding, semantic search capabilities, and multi-modal support.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Enterprise Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-green-400">AI-Powered</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">VIRA Voice Assistant</h2>
              <p className="text-slate-300 mb-6">
                Voice-enabled AI assistant for enterprise applications with real-time speech recognition, natural language processing, and multi-language support.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Professional Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-blue-400">Voice AI</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">Agentik AI Platform</h2>
              <p className="text-slate-300 mb-6">
                Build and deploy autonomous AI agents for enterprise automation, customer service, and data analysis with full control and security.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Platform Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-purple-400">Autonomous AI</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">Rajora Learn</h2>
              <p className="text-slate-300 mb-6">
                AI-powered learning platform with personalized education paths, interactive content, and real-time feedback for professional development.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Education Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-yellow-400">Learning AI</span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">AION Cloud</h2>
              <p className="text-slate-300 mb-6">
                Scalable AI infrastructure platform with automatic scaling, enterprise-grade security, and seamless integration with existing systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Cloud Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-indigo-400">Cloud AI</span>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">Rajora Studio</h2>
              <p className="text-slate-300 mb-6">
                Comprehensive AI development environment for building, testing, and deploying custom AI solutions with collaborative features and version control.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Developer Edition</span>
                <div className="h-px flex-1 mx-4 bg-slate-700"></div>
                <span className="text-sm text-pink-400">Development AI</span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
