import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Contact Rajora.ai - Get in Touch</title>
        <meta name="description" content="Contact Rajora.ai for enterprise AI solutions, partnerships, and business inquiries. Get in touch with our team today." />
      </Head>
      <Layout>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions about Rajora.ai? We'd love to hear from you. Contact us and let's discuss how we can help your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">contact@rajora.ai</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300">+91 (123) 456-7890</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">Bengaluru, Karnataka, India</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-lg border border-slate-800">
                <div className="mb-4">
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
