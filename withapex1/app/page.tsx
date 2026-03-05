'use client';

import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('shopify');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessType }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setBusinessType('shopify');
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Apex</span> Wholesale
          </div>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Wholesale Inventory,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zero Middleman
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Real-time access to 15,000+ wholesale products. Updated daily. No marketplace fees. Direct supplier pricing.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>3,500+ Sellers Using</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>0% Commission</span>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md mx-auto mb-8">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">See Inventory</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none"
                  />
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  >
                    <option value="shopify">Shopify Store</option>
                    <option value="amazon">Amazon FBA/FBM</option>
                    <option value="etsy">Etsy Shop</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="tiktok">TikTok Shop</option>
                    <option value="other">Other</option>
                  </select>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-bold transition-all disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Get Access Now'}
                  </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">
                  ✓ We respect your privacy. No spam ever.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Check Your Email!</h3>
                <p className="text-slate-300">Inventory link sent in 2 minutes</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-slate-700 bg-slate-800/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-slate-400 mb-8">Trusted by sellers on</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {['Shopify', 'Amazon', 'Etsy', 'WooCommerce', 'TikTok'].map((platform) => (
              <div key={platform} className="text-center opacity-50 hover:opacity-100 transition-opacity">
                <div className="text-lg font-semibold">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sellers Love Apex</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah M.', role: 'Shopify Store Owner', quote: 'Increased my margins by 35% in 6 weeks', metric: '35% margin increase' },
            { name: 'James K.', role: 'Amazon FBA Seller', quote: 'Found 50+ trending products weekly', metric: '50+ new products/week' },
            { name: 'Lisa C.', role: 'Etsy Seller', quote: 'Cut sourcing time from 5 hours to 30 min', metric: '90% time savings' },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
              <div className="mb-4 text-blue-400 font-bold">{testimonial.metric}</div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-slate-400">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-800/50 border-y border-slate-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Join in 30 seconds with your email', icon: Zap },
              { step: '2', title: 'Get Inventory Doc', desc: 'Instant access to daily-updated Google Doc', icon: TrendingUp },
              { step: '3', title: 'Buy Direct', desc: 'Contact suppliers, negotiate pricing, grow', icon: ArrowRight },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Apex */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Apex?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Zero Commission', desc: 'Unlike Faire (15%) or other marketplaces. We make money when you do.' },
            { title: 'Daily Updates', desc: '15,000+ products refreshed daily. Never source from stale inventory.' },
            { title: 'Direct Access', desc: 'Contact suppliers directly. No middleman markup. Better pricing.' },
            { title: 'Transparent Pricing', desc: 'See cost, margin, and ROI potential for every product.' },
            { title: 'Curated Selection', desc: 'Not everything. Only products proven to sell on your platform.' },
            { title: 'Fast Onboarding', desc: 'From signup to first order in under 2 hours.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-800/50 border-y border-slate-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Apex vs The Rest</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Apex</th>
                  <th className="text-center py-3 px-4">Faire</th>
                  <th className="text-center py-3 px-4">Alibaba</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Commission', apex: '0%', faire: '15%', alibaba: '0%' },
                  { feature: 'Update Frequency', apex: 'Daily', faire: 'Weekly', alibaba: 'Ad-hoc' },
                  { feature: 'Direct Contact', apex: '✓', faire: '✗', alibaba: '✓' },
                  { feature: 'Curated Selection', apex: '✓', faire: '✓', alibaba: '✗' },
                  { feature: 'US-Based Support', apex: '✓', faire: '✓', alibaba: '✗' },
                  { feature: 'Avg Onboarding Time', apex: '<2 hrs', faire: '24+ hrs', alibaba: '3+ days' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-700">
                    <td className="py-3 px-4">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-bold">{row.apex}</span>
                    </td>
                    <td className="text-center py-3 px-4 text-slate-400">{row.faire}</td>
                    <td className="text-center py-3 px-4 text-slate-400">{row.alibaba}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: 'How is Apex different from Faire?', a: 'Apex charges 0% commission vs Faire\'s 15%. We update inventory daily vs weekly. And we connect you directly to suppliers without middleman markup.' },
            { q: 'How quickly can I start sourcing?', a: 'From signup to first order typically takes 1-2 hours. You get instant access to the inventory doc and can start contacting suppliers immediately.' },
            { q: 'What about MOQs (Minimum Order Quantities)?', a: 'We include only suppliers with reasonable MOQs (usually 5-50 units). Much better than Alibaba where 100+ unit minimums are common.' },
            { q: 'Is my data private?', a: 'Yes. We don\'t share your contact info or order history with anyone. Suppliers only see you if you reach out first.' },
            { q: 'Can I sell on multiple platforms?', a: 'Yes! Many sellers are on Shopify, Amazon, and Etsy simultaneously. Our inventory works across all platforms.' },
            { q: 'What if a product doesn\'t work out?', a: 'The connection is between you and the supplier. You negotiate your own terms, returns, etc. We\'re just the connector.' },
          ].map((faq, idx) => (
            <details key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold flex items-center justify-between">
                {faq.q}
                <ArrowRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-slate-300 mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-700 bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Join 3,500+ sellers already using Apex to scale faster and smarter.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
            Get Started Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2026 Apex Wholesale. All rights reserved.</p>
          <p className="text-sm mt-2">Connecting ecommerce sellers with quality suppliers worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
