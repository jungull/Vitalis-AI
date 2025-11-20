import React, { useState, useEffect, useRef } from 'react';
import { Send, Camera, Mic, MessageCircle, Activity, Utensils, Moon, TrendingUp, ScanLine } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const performanceData = [
  { day: 'Mon', load: 40 },
  { day: 'Tue', load: 65 },
  { day: 'Wed', load: 45 },
  { day: 'Thu', load: 80 },
  { day: 'Fri', load: 55 },
  { day: 'Sat', load: 90 },
  { day: 'Sun', load: 60 },
];

const nutritionData = [
  { name: 'Consumed', value: 1850 },
  { name: 'Remaining', value: 650 },
];
const nutritionColors = ['#10b981', '#f1f5f9'];

const ChatDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'performance' | 'nutrition' | 'wellness'>('chat');
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Good morning, Alex! ☀️ Your recovery score is 85% today. Ready for that 5K training run, or should we focus on mobility?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI Response logic
    setTimeout(() => {
      let reply = "Got it. Let's update your plan.";
      if (input.toLowerCase().includes('tired') || input.toLowerCase().includes('sleep')) {
        reply = "I hear you. Rest is crucial. Let's switch today to a 15-minute gentle yoga flow to boost recovery without strain. Shall I load the video?";
      } else if (input.toLowerCase().includes('food') || input.toLowerCase().includes('ate')) {
         reply = "Logged. That looks like a solid 25g of protein. You're still about 40g short of your daily goal. Try a greek yogurt snack later?";
      } else {
         reply = "Noted! I've adjusted your weekly volume accordingly. Keep up the momentum! 🚀";
      }
      setMessages(curr => [...curr, { role: 'ai', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, isTyping]);

  const renderChat = () => (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm animate-fade-in ${
              m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-br-none' 
                : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-400 text-xs flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
          <Camera size={20} className="text-slate-400 cursor-pointer hover:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type or snap a meal..."
            className="flex-1 bg-transparent outline-none text-sm text-slate-700"
          />
          <Mic size={20} className="text-slate-400 cursor-pointer hover:text-emerald-500 transition-colors" />
          <button onClick={handleSend} className="bg-emerald-500 text-white p-1.5 rounded-full hover:bg-emerald-600 transition-all active:scale-95 shadow-md">
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );

  const renderPerformance = () => (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6 animate-fade-in">
      <h2 className="text-xl font-bold text-slate-800">Performance Dashboard</h2>
      
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
           <h3 className="font-semibold text-slate-700">Training Load</h3>
           <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100">+12% vs last week</span>
        </div>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
              />
              <Bar dataKey="load" fill="#10b981" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-semibold text-slate-700 mb-3">Personal Records</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-slate-50 pb-2 hover:bg-slate-50 p-2 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Activity size={16} /></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">5K Run</p>
                 <p className="text-xs text-slate-500">Nov 12, 2025</p>
               </div>
            </div>
            <span className="font-bold text-slate-800">24:15</span>
          </div>
           <div className="flex justify-between items-center border-b border-slate-50 pb-2 hover:bg-slate-50 p-2 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Activity size={16} /></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">Deadlift</p>
                 <p className="text-xs text-slate-500">Oct 30, 2025</p>
               </div>
            </div>
            <span className="font-bold text-slate-800">225 lbs</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNutrition = () => (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6 animate-fade-in">
       <h2 className="text-xl font-bold text-slate-800">Nutrition Dashboard</h2>
       
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center relative">
          <div className="h-48 w-full relative flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nutritionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={nutritionColors[index % nutritionColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-slate-800">1,850</span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">kcal eaten</span>
             </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 text-center mt-2">
             <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
               <p className="text-xs text-slate-500 mb-1">Protein</p>
               <p className="font-bold text-emerald-600 text-lg">85g</p>
             </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
               <p className="text-xs text-slate-500 mb-1">Carbs</p>
               <p className="font-bold text-blue-600 text-lg">210g</p>
             </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
               <p className="text-xs text-slate-500 mb-1">Fat</p>
               <p className="font-bold text-orange-600 text-lg">55g</p>
             </div>
          </div>
       </div>

       <div className="space-y-3">
         <div className="flex justify-between items-center">
            <h3 className="font-semibold text-slate-700">Today's Log</h3>
            <button className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full hover:bg-emerald-100 transition-colors">+ Add Meal</button>
         </div>
         <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden relative flex items-center justify-center">
               <Utensils size={18} className="text-slate-400" />
            </div>
            <div className="flex-1">
               <p className="text-sm font-bold text-slate-800">Oatmeal & Berries</p>
               <p className="text-xs text-slate-500">Breakfast • 8:00 AM</p>
            </div>
            <span className="text-sm font-bold text-slate-600">350 kcal</span>
         </div>
         
         <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden relative flex items-center justify-center">
               <Utensils size={18} className="text-slate-400" />
            </div>
            <div className="flex-1">
               <p className="text-sm font-bold text-slate-800">Grilled Chicken Salad</p>
               <p className="text-xs text-slate-500">Lunch • 12:30 PM</p>
            </div>
            <span className="text-sm font-bold text-slate-600">420 kcal</span>
         </div>
       </div>
    </div>
  );

  const renderWellness = () => (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6 animate-fade-in">
      <h2 className="text-xl font-bold text-slate-800">Wellness Overview</h2>
      
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-3xl shadow-lg text-white relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
         <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-indigo-200 text-sm font-medium">Recovery Score</p>
              <h3 className="text-5xl font-bold mt-1 tracking-tight">85%</h3>
            </div>
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <TrendingUp size={24} className="text-white" />
            </div>
         </div>
         <p className="text-sm text-indigo-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm relative z-10">
           "Great recovery! You are primed for high intensity training today."
         </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
           <div className="flex items-center gap-2 text-slate-500 mb-2">
             <Moon size={18} className="text-indigo-500" />
             <span className="text-xs font-bold uppercase text-slate-400">Sleep</span>
           </div>
           <p className="text-2xl font-bold text-slate-800">7h 45m</p>
           <p className="text-xs text-emerald-500 mt-1 font-medium">Within target</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
           <div className="flex items-center gap-2 text-slate-500 mb-2">
             <Activity size={18} className="text-rose-500" />
             <span className="text-xs font-bold uppercase text-slate-400">HRV</span>
           </div>
           <p className="text-2xl font-bold text-slate-800">52 ms</p>
           <p className="text-xs text-emerald-500 mt-1 font-medium">Trending up</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
         <h3 className="font-semibold text-slate-700 mb-3">Habit Streaks</h3>
         <div className="space-y-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">💧</div>
                 <div>
                    <span className="text-sm font-medium text-slate-700 block">Hydration</span>
                    <span className="text-xs text-slate-400">Goal: 3L</span>
                 </div>
               </div>
               <div className="flex gap-1">
                 {[1,1,1,1,0,1,1].map((d,i) => (
                    <div key={i} className={`w-3 h-8 rounded-sm ${d ? 'bg-blue-500' : 'bg-slate-200'}`}></div>
                 ))}
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">🧘</div>
                 <div>
                    <span className="text-sm font-medium text-slate-700 block">Meditation</span>
                    <span className="text-xs text-slate-400">Goal: 15m</span>
                 </div>
               </div>
               <div className="flex gap-1">
                 {[1,0,1,1,1,1,1].map((d,i) => (
                    <div key={i} className={`w-3 h-8 rounded-sm ${d ? 'bg-purple-500' : 'bg-slate-200'}`}></div>
                 ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden h-[700px] relative flex flex-col">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
      
      {/* Header */}
      <div className="bg-white p-4 pt-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-sm">V</div>
          <div>
            <h3 className="font-bold text-slate-800 leading-tight">Vitalis</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              {activeTab === 'chat' ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Online
                  </>
              ) : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </p>
          </div>
        </div>
        {/* Scan Button */}
        <div className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 cursor-pointer flex items-center justify-center text-slate-600 transition-colors">
           <ScanLine size={18} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {activeTab === 'chat' && renderChat()}
        {activeTab === 'performance' && renderPerformance()}
        {activeTab === 'nutrition' && renderNutrition()}
        {activeTab === 'wellness' && renderWellness()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-slate-100 p-2 px-6 flex justify-between items-center pb-6 pt-3">
         <button 
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${activeTab === 'chat' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 hover:text-slate-600'}`}
         >
            <MessageCircle size={24} strokeWidth={activeTab === 'chat' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">Chat</span>
         </button>
         <button 
            onClick={() => setActiveTab('performance')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${activeTab === 'performance' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 hover:text-slate-600'}`}
         >
            <Activity size={24} strokeWidth={activeTab === 'performance' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Stats</span>
         </button>
         <button 
            onClick={() => setActiveTab('nutrition')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${activeTab === 'nutrition' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 hover:text-slate-600'}`}
         >
            <Utensils size={24} strokeWidth={activeTab === 'nutrition' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Food</span>
         </button>
         <button 
            onClick={() => setActiveTab('wellness')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${activeTab === 'wellness' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 hover:text-slate-600'}`}
         >
            <Moon size={24} strokeWidth={activeTab === 'wellness' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">You</span>
         </button>
      </div>
    </div>
  );
};

export default ChatDemo;