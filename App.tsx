import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatDemo from './components/ChatDemo';
import TimelineChart from './components/TimelineChart';
import { askCEO } from './services/geminiService';
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
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { Send, Bot } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.TITLE);
  const [ceoQuestion, setCeoQuestion] = useState('');
  const [ceoResponse, setCeoResponse] = useState('');
  const [isLoadingCEO, setIsLoadingCEO] = useState(false);

  const handleAskCEO = async () => {
    if(!ceoQuestion.trim()) return;
    setIsLoadingCEO(true);
    setCeoResponse('');
    const answer = await askCEO(ceoQuestion);
    setCeoResponse(answer);
    setIsLoadingCEO(false);
  };

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
          <strong>Note:</strong> Specific Address-based Competition and Pricing data requires local context. 
          Below is a strategic overview based on general market analysis.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Competition Analysis</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold mt-1">Generic</span>
              <div>
                <strong className="text-slate-800 block">Standard Tracking Apps (e.g., MFP)</strong>
                <p className="text-sm text-slate-600">High manual entry effort, no coaching.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold mt-1">Wearable</span>
              <div>
                <strong className="text-slate-800 block">Hardware Ecosystems (e.g., Whoop)</strong>
                <p className="text-sm text-slate-600">Data rich, but lacks actionable daily behavioral coaching.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs font-bold mt-1">Advantage</span>
              <div>
                <strong className="text-emerald-800 block">Vitalis AI (Us)</strong>
                <p className="text-sm text-slate-600">Combines data with conversation. We don't just show charts; we tell you what to do.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Pricing Model</h3>
          <div className="space-y-6">
            <div className="border rounded-xl p-4 hover:border-emerald-400 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-slate-700">Freemium</h4>
                <span className="text-2xl font-bold text-slate-900">$0</span>
              </div>
              <p className="text-sm text-slate-500">Basic logging, Limited AI interactions per day.</p>
            </div>
            <div className="border rounded-xl p-4 border-emerald-500 bg-emerald-50/30 relative">
              <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-xs px-2 py-1 rounded">Popular</div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-slate-700">Pro Coach</h4>
                <span className="text-2xl font-bold text-slate-900">$14.99<span className="text-sm font-normal text-slate-500">/mo</span></span>
              </div>
              <p className="text-sm text-slate-500">Unlimited AI Coaching, Photo Food Logging, Recovery Analytics.</p>
            </div>
          </div>
        </section>
      </div>
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
        {/* AI CEO Helper */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end pointer-events-none">
          {ceoResponse && (
             <div className="bg-slate-800 text-white p-4 rounded-2xl rounded-br-none shadow-2xl max-w-xs mb-4 animate-fade-in border border-slate-700 pointer-events-auto">
               <div className="flex justify-between items-start mb-2">
                 <span className="text-emerald-400 text-xs font-bold uppercase">CEO Bot</span>
                 <button onClick={() => setCeoResponse('')} className="text-slate-400 hover:text-white text-xs">✕</button>
               </div>
               <p className="text-sm leading-relaxed">{ceoResponse}</p>
             </div>
          )}
          
          <div className="pointer-events-auto bg-white p-2 rounded-full shadow-xl border border-slate-200 flex items-center gap-2 transition-all hover:w-96 w-12 hover:rounded-xl overflow-hidden group h-12">
             <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
               <Bot size={18} className="text-emerald-400" />
             </div>
             <div className="flex-1 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <input 
                className="bg-transparent text-sm outline-none w-full" 
                placeholder="Ask the CEO about the plan..." 
                value={ceoQuestion}
                onChange={(e) => setCeoQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskCEO()}
               />
               <button disabled={isLoadingCEO} onClick={handleAskCEO} className="text-emerald-600 hover:bg-emerald-50 p-1 rounded">
                 {isLoadingCEO ? '...' : <Send size={16} />}
               </button>
             </div>
          </div>
        </div>

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