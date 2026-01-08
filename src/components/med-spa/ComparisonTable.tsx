export function ComparisonTable() {
  return (
    <div className="overflow-x-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-2">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-6 px-4 text-gray-400 font-medium uppercase text-sm tracking-wider w-1/3 pl-6">Option</th>
            <th className="py-6 px-4 text-gray-400 font-medium uppercase text-sm tracking-wider">Annual Cost</th>
            <th className="py-6 px-4 text-gray-400 font-medium uppercase text-sm tracking-wider">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
             <td className="py-6 px-4 text-gray-300 pl-6">Front Desk Coordinator</td>
             <td className="py-6 px-4 text-gray-300">$45,000 - $65,000</td>
             <td className="py-6 px-4 text-gray-400 text-sm">Human error, 9-5 only, no auto-followup.</td>
          </tr>
          <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
             <td className="py-6 px-4 text-gray-300 pl-6">Standard Answering Service</td>
             <td className="py-6 px-4 text-gray-300">$6,000 - $12,000</td>
             <td className="py-6 px-4 text-gray-400 text-sm">Generic scripts, can&apos;t book directly, no rebooking.</td>
          </tr>
          {/* WINNING ROW - ROSE GOLD GRADIENT */}
          <tr className="bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20 rounded-xl relative">
             <td className="py-6 px-4 text-white font-bold flex items-center gap-3 pl-6 relative">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 rounded-l-xl"></div>
                <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse"></span> 
                FoxTrove System
            </td>
             <td className="py-6 px-4 text-rose-300 font-bold text-lg">$6,064 <span className="text-xs font-normal text-rose-300/60 block sm:inline">(All Inclusive)</span></td>
             <td className="py-6 px-4 text-white text-sm font-medium leading-relaxed">24/7 AI coverage, automated rebooking, <span className="text-rose-300 font-bold border-b border-rose-500/30">$10k Guarantee.</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
