import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Features: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rajora.ai Features - Enterprise AI Capabilities</title>
        <meta name="description" content="Explore the advanced features of Rajora.ai's enterprise AI platform including AI-powered search, voice assistants, autonomous agents, and more." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Platform Features</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade capabilities designed for scalability, security, and long-term intelligence systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Advanced AI Search</h2>
              <p className="text-slate-300 mb-4">
                Natural language understanding and semantic search capabilities that go beyond keyword matching to understand context and intent.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Multi-modal search across text, images, and structured data</li>
                <li>• Real-time indexing and search capabilities</li>
                <li>• Enterprise-grade security and access controls</li>
                <li>• Customizable ranking algorithms</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Voice AI Technology</h2>
              <p className="text-slate-300 mb-4">
                Real-time speech recognition and natural language processing with multi-language support for enterprise applications.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• 98%+ speech recognition accuracy</li>
                <li>• Multi-language and dialect support</li>
                <li>• Real-time voice processing with low latency</li>
                <li>• Voice authentication and security features</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature 3 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Autonomous AI Agents</h2>
              <p className="text-slate-300 mb-4">
                Build and deploy autonomous AI agents for enterprise automation, customer service, and data analysis with full control and security.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Multi-agent coordination and collaboration</li>
                <li>• Enterprise-grade monitoring and control</li>
                <li>• Real-time decision making capabilities</li>
                <li>• Compliance and audit logging</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">AI Development Environment</h2>
              <p className="text-slate-300 mb-4">
                Comprehensive AI development platform with collaborative features, version control, and seamless deployment.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Collaborative development with team features</li>
                <li>• Version control integration</li>
                <li>• Automated testing and deployment pipelines</li>
                <li>• Resource monitoring and optimization</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature 5 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Scalable Cloud Infrastructure</h2>
              <p className="text-slate-300 mb-4">
                Automatic scaling, enterprise-grade security, and seamless integration with existing systems for maximum flexibility.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Auto-scaling based on workload</li>
                <li>• Multi-region deployment capabilities</li>
                <li>• Enterprise-grade security and compliance</li>
                <li>• Cost optimization and resource management</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Learning and Analytics</h2>
              <p className="text-slate-300 mb-4">
                AI-powered learning platform with personalized education paths, interactive content, and real-time feedback for professional development.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Personalized learning paths</li>
                <li>• Real-time performance analytics</li>
                <li>• Knowledge retention tracking</li>
                <li>• Team and organizational insights</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Features;
