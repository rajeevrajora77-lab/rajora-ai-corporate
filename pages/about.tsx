import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Rajora.ai - Building Tomorrow's Intelligence</title>
        <meta name="description" content="Learn about Rajora.ai's mission to build long-term intelligence systems" />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Rajora.ai</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Founded on the belief that artificial intelligence should serve humanity's long-term interests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">To build world-class intelligence systems that empower enterprises to make better decisions, faster. We're committed to creating technology that is not just powerful, but responsible and aligned with human values.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">A future where advanced AI systems are accessible to every organization, enabling them to innovate fearlessly and compete globally. We envision intelligence as a fundamental utility, as essential as electricity.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-lg border border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Excellence', desc: 'Relentless pursuit of quality' },
                { title: 'Integrity', desc: 'Honest and ethical practices' },
                { title: 'Innovation', desc: 'Continuous improvement' },
                { title: 'Impact', desc: 'Meaningful results for clients' }
              ].map((val) => (
                <div key={val.title} className="text-center">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">{val.title}</h3>
                  <p className="text-slate-400">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Journey</h2>
            <div className="space-y-6">
              {[
                { year: '2020', title: 'Founded', desc: 'Started with a vision to revolutionize enterprise AI' },
                { year: '2021', title: 'Series A', desc: 'Secured funding to accelerate product development' },
                { year: '2023', title: 'Expansion', desc: 'Launched global operations and new product lines' },
                { year: '2024', title: 'Leadership', desc: 'Became industry leader in enterprise AI solutions' }
              ].map((milestone) => (
                <div key={milestone.year} className="border-l-2 border-cyan-500 pl-6 pb-6">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                  </div>
                  <p className="text-slate-400">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
