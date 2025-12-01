import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatDemo from './components/ChatDemo';
import TimelineChart from './components/TimelineChart';
import { 
  SectionId, 
  Persona 
} from './types';
import { 
  APP_NAME, 
  PERSONAS, 
  SLOGAN, 
  PROBLEM_STATEMENT, 
  SOLUTION_STATEMENT, 
  FINANCIALS 
} from './constants';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { Globe, Target, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.TITLE);

  // --- Section Renderers ---

  const renderTitlePage = () => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in">
      <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl mb-8">
        <span className="text-6xl text-white font-bold -rotate-12">V</span>
      </div>
      <div>
        <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight mb-4">{APP_NAME}</h1>
        <p className="text-2xl text-slate-500 font-light">{SLOGAN}</p>
      </div>
      <div className="mt-12 p-8 bg-white rounded-xl shadow-lg border border-slate-100 max-w-lg w-full">
        <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">Submitted By</h3>
        <div className="space-y-2 text-slate-700">
          <p><strong>Student Name:</strong> John Gallagher</p>
          <p><strong>Class:</strong> Management</p>
          <p><strong>Professor:</strong> Pauline L. Stamp, PhD</p>
          <p><strong>Company Address:</strong> Walton, NY</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );

  const renderCompany = () => (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-8 border-emerald-500 pl-4">I. Company Description</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">The Problem</h3>
            <p className="text-slate-600 leading-relaxed">{PROBLEM_STATEMENT}</p>
          </div>
          <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-300 mb-4">Our Solution</h3>
            <p className="text-emerald-50 leading-relaxed">{SOLUTION_STATEMENT}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-8 border-emerald-500 pl-4">II. Target Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONAS.map((p: Persona, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h4 className="font-bold text-slate-800 text-lg">{p.segment}</h4>
              <p className="text-xs text-emerald-600 font-semibold mb-2">{p.personaName}</p>
              <p className="text-sm text-slate-600 mb-3">{p.profile}</p>
              <div className="pt-3 border-t border-slate-100">
                 <p className="text-xs text-slate-400 font-bold uppercase">Goal</p>
                 <p className="text-sm text-slate-700 italic">"{p.goals}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderMarket = () => (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mb-8">
        <p className="text-amber-800 text-sm">
          <strong>Location Context:</strong> While grounded in Walton, NY, our digital distribution model targets the global fitness app market, specifically capturing North American users seeking affordable alternatives to premium coaching.
        </p>
      </div>

      {/* Market Size & Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
          <Globe className="absolute top-4 right-4 text-slate-700 w-32 h-32 opacity-20" />
          <h3 className="text-2xl font-bold mb-2">Market Size & Opportunity</h3>
          <p className="text-slate-300 mb-6">The Global Fitness App Market Size was valued at USD 19.33 Billion in 2023 and is projected to reach USD 55.67 Billion by 2030.</p>
          <div className="grid grid-cols-2 gap-8">
             <div>
               <p className="text-4xl font-bold text-emerald-400">17.6%</p>
               <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">CAGR Growth</p>
             </div>
             <div>
               <p className="text-4xl font-bold text-emerald-400">$14.99</p>
               <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Our Price Point</p>
             </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <Target className="text-emerald-500 w-10 h-10 mb-4" />
          <h4 className="text-lg font-bold text-slate-800">Target Segment</h4>
          <p className="text-slate-600 text-sm mt-2">We are targeting the "Middle Market": users who find free apps (Nike Training Club) too generic, but personal trainers ($150+/mo) or high-end services (Noom, Whoop) too expensive.</p>
        </div>
      </section>

      {/* Competitor Analysis Matrix */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Competitive Landscape & Pricing</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4 rounded-tl-xl">Competitor</th>
                <th className="px-6 py-4">Est. Price</th>
                <th className="px-6 py-4">Primary Offering</th>
                <th className="px-6 py-4 rounded-tr-xl">Gap / Weakness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-800">MyFitnessPal Premium</td>
                <td className="px-6 py-4">$19.99/mo</td>
                <td className="px-6 py-4">Calorie Counting</td>
                <td className="px-6 py-4 text-slate-600">Manual entry is tedious; generic advice.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-800">Noom</td>
                <td className="px-6 py-4">~$59/mo</td>
                <td className="px-6 py-4">Psychology & Diet</td>
                <td className="px-6 py-4 text-slate-600">Extremely expensive; high churn rate.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-800">Whoop</td>
                <td className="px-6 py-4">~$30/mo</td>
                <td className="px-6 py-4">Recovery Hardware</td>
                <td className="px-6 py-4 text-slate-600">Requires expensive wearable purchase.</td>
              </tr>
              <tr className="bg-emerald-50/50">
                <td className="px-6 py-4 font-bold text-emerald-700">Vitalis AI (Us)</td>
                <td className="px-6 py-4 font-bold text-emerald-700">$14.99/mo</td>
                <td className="px-6 py-4">Holistic AI Coach</td>
                <td className="px-6 py-4 text-emerald-700">Combines Nutrition + Fitness + Recovery.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Strategy Rationale */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <DollarSign className="text-emerald-500" size={20} />
            Pricing Strategy
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <strong>Penetration Pricing Strategy:</strong> We have positioned Vitalis AI at <strong>$14.99/mo</strong>, which is 25-50% cheaper than direct premium competitors like MyFitnessPal Premium or Noom.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong>Why this price?</strong> This price point is the "sweet spot" for digital subscriptions (comparable to Netflix/Spotify). It is low enough to reduce friction for mass adoption by our "Beginner Fitness Seeker" persona, yet high enough to cover LLM (AI) API costs and ensure healthy gross margins as we scale.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
             <ShieldCheck className="text-emerald-500" size={20} />
             Value Proposition
          </h3>
          <ul className="space-y-3">
             <li className="flex items-start gap-2 text-sm text-slate-600">
               <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center font-bold text-xs mt-0.5">1</span>
               <span><strong>Cost Consolidation:</strong> Users can cancel their separate nutrition app ($20) and workout app ($15) and replace both with Vitalis ($15).</span>
             </li>
             <li className="flex items-start gap-2 text-sm text-slate-600">
               <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center font-bold text-xs mt-0.5">2</span>
               <span><strong>Zero Hardware Cost:</strong> Unlike Whoop or Oura, we leverage the phone sensors and camera the user already owns.</span>
             </li>
          </ul>
        </div>
      </section>
    </div>
  );

  const renderMarketing = () => (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-8 border-emerald-500 pl-4">III. Marketing Plan</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Brand Identity */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
           <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-8">Brand Identity</h3>
           <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-4">V</div>
           <h4 className="text-2xl font-bold text-slate-800">Vitalis AI</h4>
           <div className="flex gap-2 mt-4">
             <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
             <div className="w-8 h-8 rounded-full bg-teal-600"></div>
             <div className="w-8 h-8 rounded-full bg-slate-900"></div>
           </div>
           <p className="mt-6 text-sm text-slate-500 italic">"{SLOGAN}"</p>
        </div>

        {/* Channels */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm">
           <h3 className="text-xl font-bold text-slate-800 mb-6">Selected Channels</h3>
           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Social Media Campaign</h4>
                 <p className="text-sm text-slate-600 mt-1">Targeting "Wellness Enthusiasts" and "Recovery Rebuilders" on Instagram/TikTok with 30-second "Day in the life with Vitalis" reels showing ease of use vs traditional tracking.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Video Commercial (YouTube/Pre-roll)</h4>
                 <p className="text-sm text-slate-600 mt-1">High-quality 60-second spot demonstrating the AI's ability to understand complex queries like "I hurt my knee, change my workout" to showcase adaptability.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  const renderOperations = () => (
    <div className="space-y-8 animate-fade-in h-full flex flex-col">
      <h2 className="text-3xl font-bold text-slate-800 border-l-8 border-emerald-500 pl-4">IV. 3-Year Operational Plan</h2>
      <p className="text-slate-600 max-w-3xl">
        Detailed timeline from Concept Development (Nov 2025) through Public Launch and Expansion (July 2026+).
      </p>
      <div className="flex-1">
        <TimelineChart />
      </div>
    </div>
  );

  const renderFinancials = () => (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-8 border-emerald-500 pl-4">V. 3-Year Financial Projections</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
         {/* Chart 1: Revenue vs Profit */}
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-[400px]">
            <h3 className="text-lg font-bold text-slate-700 mb-4">Revenue vs Profit Growth</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={FINANCIALS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" fill="#0f172a" name="Net Profit" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
         </div>

         {/* Chart 2: User Growth */}
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-[400px]">
            <h3 className="text-lg font-bold text-slate-700 mb-4">Projected User Base</h3>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={FINANCIALS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={4} dot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
         </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-4">Financial Summary</h3>
        <div className="grid grid-cols-3 gap-8 text-center divide-x divide-slate-700">
          <div>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Year 3 Revenue</p>
            <p className="text-3xl font-bold text-emerald-400 mt-2">$2.5M</p>
          </div>
          <div>
             <p className="text-slate-400 text-sm uppercase tracking-wider">Year 3 Profit</p>
             <p className="text-3xl font-bold text-emerald-400 mt-2">$1.6M</p>
          </div>
          <div>
             <p className="text-slate-400 text-sm uppercase tracking-wider">Active Users</p>
             <p className="text-3xl font-bold text-white mt-2">85,000</p>
          </div>
        </div>
      </div>

      {/* Logic & Reasoning Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
           <TrendingUp className="text-emerald-600" />
           Growth Logic & Assumptions
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">1</div>
                 <h4 className="font-bold text-slate-800">Year 1: Validation</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                 We project modest profits ($30k) despite $150k revenue due to high initial Customer Acquisition Costs (CAC) via social ads. The focus is on product-market fit. 5,000 users is a conservative estimate based on 0.5% conversion of our initial marketing reach.
              </p>
           </div>
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">2</div>
                 <h4 className="font-bold text-slate-800">Year 2: Retention</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Profit jumps 10x as CAC decreases. The conversational nature of the app creates high "stickiness" (retention). As users feed more data, the AI becomes more personalized, making it harder to leave, thus increasing Lifetime Value (LTV).
              </p>
           </div>
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">3</div>
                 <h4 className="font-bold text-slate-800">Year 3: Scale</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Revenue scales non-linearly to $2.5M. By Year 3, we introduce "Vitalis for Teams" (Corporate Wellness), allowing us to acquire users in bulk contracts. Server costs per user drop due to optimization, yielding a robust 64% net profit margin.
              </p>
           </div>
        </div>
      </section>
    </div>
  );

  const renderDemo = () => (
    <div className="grid lg:grid-cols-2 gap-12 items-center h-full animate-fade-in max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Vitalis.</h2>
        <h3 className="text-2xl text-emerald-600 font-light mb-8">Your proactive wellness companion.</h3>
        <div className="space-y-6 text-slate-600">
          <p className="text-lg">
            Experience the future of wellness tracking. No more spreadsheets or complex forms. Just chat.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
              Natural Language Processing
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
              Photo Food Analysis
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
              Adaptive Recovery Logic
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <ChatDemo />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="ml-64 flex-1 p-8 lg:p-12 overflow-y-auto relative">
        {/* Content Area */}
        <div className="max-w-7xl mx-auto min-h-[80vh]">
          {activeSection === SectionId.TITLE && renderTitlePage()}
          {activeSection === SectionId.COMPANY && renderCompany()}
          {activeSection === SectionId.MARKET && renderMarket()}
          {activeSection === SectionId.MARKETING && renderMarketing()}
          {activeSection === SectionId.OPERATIONS && renderOperations()}
          {activeSection === SectionId.FINANCIALS && renderFinancials()}
          {activeSection === SectionId.DEMO && renderDemo()}
        </div>
      </main>
    </div>
  );
}