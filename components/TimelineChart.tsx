import React from 'react';
import { GANTT_DATA } from '../constants';

interface TimelineChartProps {
    compact?: boolean;
}

const TimelineChart: React.FC<TimelineChartProps> = ({ compact = false }) => {
    // Helper to convert date to percentage position
    const startDate = new Date("2025-11-01").getTime();
    const endDate = new Date("2028-12-31").getTime();
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

    // Group data by Year
    const groupedData = GANTT_DATA.reduce((acc, task) => {
        const year = task.phase.split(':')[0]; // "Year 1", "Year 2", etc.
        if (!acc[year]) acc[year] = [];
        acc[year].push(task);
        return acc;
    }, {} as Record<string, typeof GANTT_DATA>);

    const yearColors: Record<string, string> = {
        "Year 1": "bg-blue-500",
        "Year 2": "bg-emerald-500",
        "Year 3": "bg-purple-500"
    };

    const yearLabels: Record<string, string> = {
        "Year 1": "YEAR 1 (2026)",
        "Year 2": "YEAR 2 (2027)",
        "Year 3": "YEAR 3 (2028)"
    };

    return (
        <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 ${compact ? '' : 'overflow-x-auto'}`}>
            <div className={compact ? 'w-full' : 'min-w-[800px]'}>
                {/* Header Dates */}
                <div className="flex justify-between text-xs text-slate-400 mb-4 border-b border-slate-100 pb-2 font-mono relative h-6">
                    {/* Simple Year Markers based on approximate position */}
                    <span className="absolute left-[5%]" >2026</span>
                    <span className="absolute left-[37%]">2027</span>
                    <span className="absolute left-[69%]">2028</span>
                </div>

                <div className="space-y-8">
                    {Object.entries(groupedData).map(([year, tasks]) => (
                        <div key={year} className="space-y-3 bg-slate-50/50 p-4 rounded-lg border border-slate-100">
                            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                                {yearLabels[year] || year}
                            </h4>
                            <div className="relative space-y-6"> {/* Increased spacing for readability */}
                                {tasks.map((task, idx) => {
                                    const leftPos = getPosition(task.start);
                                    const width = getWidth(task.start, task.end);
                                    const isLate = leftPos > 55; // Heuristic to decide text side

                                    return (
                                        <div key={idx} className="relative h-8 w-full flex items-center">
                                            {/* Bar */}
                                            <div
                                                className={`absolute h-6 rounded-md ${yearColors[year]} shadow-sm hover:opacity-90 transition-opacity cursor-pointer`}
                                                style={{
                                                    left: `${leftPos}%`,
                                                    width: `${width}%`
                                                }}
                                                title={`${task.task}: ${task.start} - ${task.end}`}
                                            >
                                            </div>

                                            {/* Label - Positioned relative to the bar */}
                                            <div
                                                className="absolute text-xs font-medium text-slate-700 whitespace-nowrap"
                                                style={{
                                                    left: isLate ? 'auto' : `${leftPos + width + 1}%`,
                                                    right: isLate ? `${100 - leftPos + 1}%` : 'auto',
                                                    textAlign: isLate ? 'right' : 'left'
                                                }}
                                            >
                                                {task.task}, <span className="text-slate-500 font-normal">{task.duration} days</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Data Table for Print View */}
            {compact && (
                <div className="mt-8 border-t border-slate-200 pt-8">
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Detailed Timeline Data</h4>
                    <table className="w-full text-xs text-left border-collapse border border-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="border border-slate-200 p-2">Phase</th>
                                <th className="border border-slate-200 p-2">Task</th>
                                <th className="border border-slate-200 p-2">Start</th>
                                <th className="border border-slate-200 p-2">End</th>
                                <th className="border border-slate-200 p-2">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GANTT_DATA.map((task, idx) => (
                                <tr key={idx}>
                                    <td className="border border-slate-200 p-2 font-medium">{task.phase}</td>
                                    <td className="border border-slate-200 p-2">{task.task}</td>
                                    <td className="border border-slate-200 p-2">{task.start}</td>
                                    <td className="border border-slate-200 p-2">{task.end}</td>
                                    <td className="border border-slate-200 p-2">{task.duration} days</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TimelineChart;
