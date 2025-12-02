import React from 'react';
import {
  APP_NAME,
  SLOGAN,
  PROBLEM_STATEMENT,
  SOLUTION_STATEMENT,
  PERSONAS,
  GANTT_DATA,
  FINANCIALS,
  FUNDING_BREAKDOWN
} from '../constants';
import { ArrowLeft, Printer } from 'lucide-react';
import TimelineChart from './TimelineChart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  LabelList
} from 'recharts';

interface PrintablePlanProps {
  onBack: () => void;
}

const PrintablePlan: React.FC<PrintablePlanProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-black font-serif">
      {/* Toolbar - Not printed */}
      <div className="fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg print:hidden z-50">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
          <ArrowLeft size={20} />
          Back to App
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">Pro Tip: Select "Save as PDF" in print settings</span>
          <button
            onClick={() => window.print()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-sans font-medium"
          >
            <Printer size={18} />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Printable Content */}
      <div className="max-w-[8.5in] mx-auto bg-white p-[1in] shadow-2xl mt-20 print:mt-0 print:shadow-none print:w-full">

        {/* Title Page */}
        <div className="h-[9in] flex flex-col justify-center text-center page-break-after">
          <h1 className="text-5xl font-bold mb-4">{APP_NAME}</h1>
          <p className="text-xl text-gray-600 italic mb-12">"{SLOGAN}"</p>

          <div className="space-y-4 text-lg border-t border-b border-gray-200 py-12">
            <p><strong>Student Name:</strong> John Gallagher</p>
            <p><strong>Class:</strong> Management</p>
            <p><strong>Professor:</strong> Pauline L. Stamp, PhD</p>
            <p><strong>Company Address:</strong> Walton, NY</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          <div className="mt-24 text-sm text-gray-500">
            <p>Final Business Plan Proposal</p>
          </div>
        </div>

        {/* I. Company Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">I. Company Description</h2>
          <div className="space-y-6 text-justify leading-relaxed">
            <div>
              <h3 className="font-bold text-lg mb-2">Identified Need</h3>
              <p>{PROBLEM_STATEMENT}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Our Solution</h3>
              <p>{SOLUTION_STATEMENT}</p>
            </div>
          </div>
        </section>

        {/* II. Market Research */}
        <section className="mb-12 page-break-before">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">II. Market Research</h2>

          <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50">
            <h3 className="font-bold text-xl mb-4 text-center">Market Snapshot</h3>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-emerald-700">17.6%</p>
                <p className="text-xs uppercase tracking-widest mt-1 text-gray-600">CAGR Growth</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-700">$14.99</p>
                <p className="text-xs uppercase tracking-widest mt-1 text-gray-600">Our Price Point</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">
              Global Fitness App Market to reach <strong>$55.67 Billion</strong> by 2030.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">a. Identified Need</h3>
            <p className="text-justify">
              The Global Fitness App Market Size was valued at USD 19.33 Billion in 2023. Users in the "Middle Market" are currently underserved; they find free apps too generic but premium coaching ($150+/mo) too expensive.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">b. Identified Competition</h3>
            <table className="w-full text-sm border-collapse border border-gray-300 mt-2 text-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Competitor</th>
                  <th className="border border-gray-300 p-2 text-left">Price</th>
                  <th className="border border-gray-300 p-2 text-left">Primary Offering</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">MyFitnessPal</td>
                  <td className="border border-gray-300 p-2">$19.99/mo</td>
                  <td className="border border-gray-300 p-2">Calorie Tracking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Noom</td>
                  <td className="border border-gray-300 p-2">~$59.00/mo</td>
                  <td className="border border-gray-300 p-2">Weight Loss Psych</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Whoop</td>
                  <td className="border border-gray-300 p-2">~$30.00/mo</td>
                  <td className="border border-gray-300 p-2">Hardware Recovery</td>
                </tr>
                <tr className="bg-emerald-50 font-bold">
                  <td className="border border-emerald-300 p-2 text-emerald-900">Vitalis AI</td>
                  <td className="border border-emerald-300 p-2 text-emerald-900">$14.99/mo</td>
                  <td className="border border-emerald-300 p-2 text-emerald-900">Holistic AI Coach</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">c. Identified Customer</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {PERSONAS.slice(0, 4).map((p, i) => (
                <li key={i}>
                  <strong>{p.segment}:</strong> {p.profile}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* III. Marketing Plan */}
        <section className="mb-12 page-break-before">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">III. Marketing Plan</h2>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-2">a. Logo</h3>
              <div className="border border-gray-200 p-4 inline-block rounded text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-bold rounded mb-2 mx-auto">V</div>
                <span className="text-sm">Minimalist 'V' Icon</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">b. Colors</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 mb-1 border border-gray-200"></div>
                  <span className="text-xs">Emerald</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-900 mb-1 border border-gray-200"></div>
                  <span className="text-xs">Slate</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">c. Slogan</h3>
            <p className="italic text-lg">"{SLOGAN}"</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">d. Marketing Channels</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Social Media (TikTok/IG):</strong> Short-form reels targeting "Wellness Enthusiasts".</li>
              <li><strong>Video Commercial:</strong> 60s YouTube spot demonstrating AI adaptability.</li>
            </ul>
          </div>
        </section>

        {/* IV. Operational Plan */}
        <section className="mb-12 page-break-before">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">IV. 3-Year Operational Plan</h2>
          <div className="mt-4 print:block">
            <TimelineChart compact={true} />
          </div>
        </section>

        {/* V. Financial Projections */}
        <section className="mb-12 page-break-before">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">V. 3-Year Financial Projections</h2>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="h-64 border border-gray-200 p-4 rounded bg-white">
              <h4 className="text-center font-bold mb-2 text-sm">Revenue vs Profit</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={FINANCIALS} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" />
                  <XAxis
                    dataKey="year"
                    stroke="#000000"
                    tick={{ fill: '#000000', fontSize: 11 }}
                    tickLine={{ stroke: '#000000' }}
                  />
                  <YAxis
                    stroke="#000000"
                    tick={{ fill: '#000000', fontSize: 11 }}
                    tickLine={{ stroke: '#000000' }}
                    tickFormatter={(val) => `$${val / 1000}k`}
                  />
                  <Legend wrapperStyle={{ color: '#000000', paddingTop: '10px' }} />
                  <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
                  <Bar dataKey="profit" fill="#0f172a" name="Profit" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-64 border border-gray-200 p-4 rounded bg-white">
              <h4 className="text-center font-bold mb-2 text-sm">User Growth</h4>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={FINANCIALS} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" />
                  <XAxis
                    dataKey="year"
                    stroke="#000000"
                    tick={{ fill: '#000000', fontSize: 11 }}
                    tickLine={{ stroke: '#000000' }}
                  />
                  <YAxis
                    stroke="#000000"
                    tick={{ fill: '#000000', fontSize: 11 }}
                    tickLine={{ stroke: '#000000' }}
                  />
                  <Legend wrapperStyle={{ color: '#000000', paddingTop: '10px' }} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#10b981", stroke: "#000000" }}
                    name="Users"
                  >
                    <LabelList
                      dataKey="users"
                      position="top"
                      fill="#000000"
                      fontSize={11}
                      formatter={(val: number) => val.toLocaleString()}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <table className="w-full text-sm border-collapse border border-gray-300 mb-6 text-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Metric</th>
                <th className="border border-gray-300 p-2 text-right">Year 1</th>
                <th className="border border-gray-300 p-2 text-right">Year 2</th>
                <th className="border border-gray-300 p-2 text-right">Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">Revenue</td>
                {FINANCIALS.map((f, i) => (
                  <td key={i} className="border border-gray-300 p-2 text-right">${f.revenue.toLocaleString()}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-bold">Net Profit</td>
                {FINANCIALS.map((f, i) => (
                  <td key={i} className="border border-gray-300 p-2 text-right font-bold">${f.profit.toLocaleString()}</td>
                ))}
              </tr>
            </tbody>
          </table>

          <div className="mb-8">
            <h3 className="font-bold text-lg mb-2">Funding Requirements</h3>
            <table className="w-full text-sm border-collapse border border-gray-300 text-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Year</th>
                  <th className="border border-gray-300 p-2 text-right">Amount Needed</th>
                  <th className="border border-gray-300 p-2 text-left">Primary Allocation</th>
                </tr>
              </thead>
              <tbody>
                {FUNDING_BREAKDOWN.map((item, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 p-2 font-bold">{item.year}</td>
                    <td className="border border-gray-300 p-2 text-right text-emerald-700 font-bold">${item.amount.toLocaleString()}</td>
                    <td className="border border-gray-300 p-2">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200 rounded">
            <h3 className="font-bold mb-2">Growth Logic</h3>
            <p className="text-sm text-justify">
              <strong>Year 1:</strong> Validation phase with high marketing spend ($30k profit).
              <br />
              <strong>Year 2:</strong> Retention lowers acquisition costs, driving 10x profit growth.
              <br />
              <strong>Year 3:</strong> Expansion to B2B wellness allows scaling to $2.5M revenue.
            </p>
          </div>
        </section>

        {/* VII. Works Cited */}
        <section className="mb-12 page-break-before">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black mb-6">VII. Works Cited</h2>
          <div className="space-y-4 text-sm pl-8 -indent-8">
            <p>Grand View Research. (2023). <em>Global Fitness App Market Size...</em>. Grand View Research.</p>
            <p>MyFitnessPal. (2025). <em>Premium Pricing</em>. myfitnesspal.com</p>
            <p>Noom. (2025). <em>How it Works</em>. noom.com</p>
            <p>Statista. (2024). <em>Digital Fitness - Worldwide</em>.</p>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0.5in; size: portrait; }
          body { background: white; color: black; }
          .page-break-after { page-break-after: always; }
          .page-break-before { page-break-before: always; }
          .page-break-inside-avoid { page-break-inside: avoid; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
};

export default PrintablePlan;