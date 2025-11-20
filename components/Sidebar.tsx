import React from 'react';
import { SectionId } from '../types';
import { LayoutDashboard, Users, LineChart, Calendar, Megaphone, FileText, PlayCircle } from 'lucide-react';

interface SidebarProps {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: SectionId.TITLE, label: 'Cover Page', icon: FileText },
    { id: SectionId.COMPANY, label: 'Concept & Users', icon: Users },
    { id: SectionId.MARKET, label: 'Market Research', icon: LayoutDashboard },
    { id: SectionId.MARKETING, label: 'Marketing Plan', icon: Megaphone },
    { id: SectionId.OPERATIONS, label: 'Timeline (Ops)', icon: Calendar },
    { id: SectionId.FINANCIALS, label: 'Financials', icon: LineChart },
    { id: SectionId.DEMO, label: 'Live App Demo', icon: PlayCircle },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-xl z-50">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Vitalis AI
        </h1>
        <p className="text-xs text-slate-400 mt-1">Business Proposal</p>
      </div>
      
      <nav className="flex-1 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200
                  ${activeSection === item.id 
                    ? 'bg-emerald-500/10 text-emerald-400 border-r-4 border-emerald-400' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-3 text-xs text-slate-400">
          <p className="font-semibold text-slate-200">Student Project</p>
          <p className="mt-1">Management Class Final</p>
          <p>Fall 2025</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
