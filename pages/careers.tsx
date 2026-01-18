import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Careers: React.FC = () => {
  const positions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Bengaluru, India',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Machine Learning Researcher',
      department: 'Research',
      location: 'Bengaluru, India',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Bengaluru, India',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Bengaluru, India',
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <>
      <Head>
        <title>Careers at Rajora.ai - Join Our Team</title>
        <meta name="description" content="Explore exciting career opportunities at Rajora.ai. Join our team of talented engineers, researchers, and innovators building the future of AI." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Join Our Team</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're building the future of AI. Join our talented team of engineers, researchers, and innovators.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Why Work at Rajora.ai?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Cutting-edge Technology</h3>
                <p className="text-slate-300">Work on the latest AI and machine learning technologies at the forefront of innovation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Collaborative Culture</h3>
                <p className="text-slate-300">Join a diverse, talented team passionate about building intelligent systems that make an impact.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Growth Opportunities</h3>
                <p className="text-slate-300">Continuous learning, professional development, and opportunities to grow your career.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position) => (
                <div key={position.id} className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-slate-400 mb-2">{position.department}</p>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-all">
                      Apply Now
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span>📏 {position.type}</span>
                    <span>🌐 {position.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
