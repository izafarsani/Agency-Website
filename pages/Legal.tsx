
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-black mb-8">Privacy Policy & Terms</h1>
        <p className="text-lg text-slate-600 mb-8">Last updated: January 2024</p>
        
        <div className="space-y-12 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
            <p>At Pixion Studio, we collect minimal data required to provide our services. This includes contact information provided via forms and standard web analytics to improve user experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
            <p>Information is used solely for project communication, billing, and providing the growth audits requested. We never sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Project Terms</h2>
            <p>Standard project engagements require a 50% deposit unless otherwise agreed. Timelines provided are estimates based on client feedback speed and project scope complexity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p>Once final payment is received, the client retains full ownership of design assets and code developed for their project, unless third-party licenses apply (e.g., stock photography or specific fonts).</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
