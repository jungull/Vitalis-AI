import React from 'react';
import { GANTT_DATA } from '../constants';

const TimelineChart: React.FC = () => {
  // Helper to convert date to percentage position
  const startDate = new Date("2025-11-15").getTime();
  const endDate = new Date("2026-07-07").getTime();
  const totalDuration = endDate - startDate;

  const getPosition = (dateStr: string) => {
    const current = new Date(dateStr).getTime();
    return ((current - startDate) / totalDuration) * 100;
  };

  const getWidth = (startStr: string, endStr: string) => {
    const s = new Date(startStr).getTime();
    const e = new Date(endStr).getTime();
    return ((e - s) / totalDuration) * 100;
  };

  const phases = Array.from(new Set(GANTT_DATA.map(d => d.phase)));
  const colors: Record<string, string> = {
    "Concept": "bg-blue-400",
    "Research": "bg-purple-400",
    "Design": "bg-pink-400",
    "Development": "bg-emerald-500",
    "Launch Prep": "bg-orange-400",
    "Growth": "bg-indigo-400"
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header Dates */}
        <div className="flex justify-between text-xs text-slate-400 mb-4 border-b border-slate-100 pb-2 font-mono">
          <span>Nov '25</span>
          <span>Jan '26</span>
          <span>Mar '26</span>
          <span>May '26</span>
          <span>Jul '26</span>
        </div>

        <div className="space-y-6">
          {phases.map(phase => (
            <div key={phase} className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 sticky left-0">{phase}</h4>
              {GANTT_DATA.filter(d => d.phase === phase).map((task, idx) => (
                <div key={idx} className="relative h-8 w-full bg-slate-50 rounded flex items-center group">
                  <div className="absolute left-2 text-xs font-medium text-slate-700 z-10 w-40 truncate group-hover:overflow-visible group-hover:w-auto group-hover:bg-white group-hover:shadow-md group-hover:px-2 group-hover:z-20 rounded transition-all">
                    {task.task}
                  </div>
                  <div 
                    className={`absolute h-5 rounded-full ${colors[phase]} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                    style={{
                      left: `${getPosition(task.start)}%`,
                      width: `${getWidth(task.start, task.end)}%`
                    }}
                    title={`${task.task}: ${task.start} - ${task.end}`}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineChart;
