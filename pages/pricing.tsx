import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Pricing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rajora.ai Pricing - Transparent Enterprise Plans</title>
        <meta name="description" content="Explore Rajora.ai pricing plans designed for startups, growing businesses, and enterprise organizations. Flexible pricing with unlimited scalability." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Scale as you grow with flexible, transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-2">Starter</h2>
              <p className="text-slate-400 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> 10K API calls/month</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Community support</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Single user</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Basic analytics</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded transition-all">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-slate-900 p-8 rounded-lg border border-green-500 hover:border-green-400 transition-all shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Professional</h2>
                  <p className="text-slate-400">Best for growing teams</p>
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">Popular</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> 1M API calls/month</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Priority support</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Up to 10 users</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Advanced analytics</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all font-semibold">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <h2 className="text-2xl font-bold text-white mb-2">Enterprise</h2>
              <p className="text-slate-400 mb-6">For large-scale operations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-slate-400 ml-2">pricing</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Unlimited API calls</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> 24/7 dedicated support</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Unlimited users</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Custom integrations</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
