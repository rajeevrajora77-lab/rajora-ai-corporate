import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rajora.ai - Enterprise AI Platform for Intelligent Systems</title>
        <meta name="description" content="Rajora.ai is an enterprise AI platform building scalable, responsible, and transparent intelligence systems for businesses." />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Building the Future of Intelligence</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Enterprise-grade AI platform for building scalable, responsible, and future-proof intelligence systems.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/products">
                <a className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all">
                  Explore Products
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all border border-slate-600">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* What Rajora.ai Is */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What is Rajora.ai?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Rajora.ai is an AI-first technology company developing scalable, responsible, and transparent intelligence platforms and tools for enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-green-400">AI-Powered</h3>
              <p className="text-slate-400">
                Built on cutting-edge AI and machine learning technologies to provide intelligent solutions for enterprise challenges.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-green-400">Enterprise-Grade</h3>
              <p className="text-slate-400">
                Designed for scale, security, and reliability. Built to meet the strictest enterprise requirements and compliance standards.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-green-400">Responsible & Transparent</h3>
              <p className="text-slate-400">
                Committed to building ethical, fair, and transparent AI systems that respect privacy and accountability.
              </p>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 px-4 bg-slate-800 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Build</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A comprehensive suite of AI-powered products and platforms for enterprise intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/products">
                <a className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-green-500 transition-all cursor-pointer group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Enterprise Products</h3>
                  <p className="text-slate-400 mb-4">
                    AION Enterprise Search, VIRA Voice Assistant, Agentik AI Platform, Rajora Learn, AION Cloud, and Rajora Studio.
                  </p>
                  <span className="text-green-400 font-semibold">Explore Products →</span>
                </a>
              </Link>

              <Link href="/features">
                <a className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-green-500 transition-all cursor-pointer group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Platform Features</h3>
                  <p className="text-slate-400 mb-4">
                    Advanced AI search, voice technology, autonomous agents, development tools, cloud infrastructure, and learning platforms.
                  </p>
                  <span className="text-green-400 font-semibold">View Features →</span>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get Started</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/learn">
              <a className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-green-500 transition-all text-center group">
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors mb-2">Documentation</p>
                <p className="text-slate-400 text-sm">Learn how to use Rajora.ai platform</p>
              </a>
            </Link>

            <Link href="/pricing">
              <a className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-green-500 transition-all text-center group">
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors mb-2">Pricing</p>
                <p className="text-slate-400 text-sm">Transparent pricing for all plans</p>
              </a>
            </Link>

            <Link href="/blog">
              <a className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-green-500 transition-all text-center group">
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors mb-2">Blog</p>
                <p className="text-slate-400 text-sm">Latest insights and industry news</p>
              </a>
            </Link>

            <Link href="/contact">
              <a className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-green-500 transition-all text-center group">
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors mb-2">Contact</p>
                <p className="text-slate-400 text-sm">Get in touch with our team</p>
              </a>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-900 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-slate-200 mb-8">Join enterprises worldwide building next-generation intelligent systems with Rajora.ai.</p>
            <Link href="/contact">
              <a className="inline-block px-10 py-4 bg-white hover:bg-gray-100 text-green-600 font-semibold rounded-lg transition-all">
                Start Your Journey
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
