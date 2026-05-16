import { useState } from 'react';
import { 
  Bell, 
  Settings, 
  Search, 
  ChevronDown, 
  ArrowUpRight, 
  TrendingUp, 
  Star, 
  Zap, 
  BadgeDollarSign,
  Wallet,
  ArrowRightLeft,
  SendHorizontal,
  LayoutDashboard,
  Wallet2,
  PieChart,
  Coins,
  History,
  ShieldCheck,
  CircleDollarSign,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Header Component ---
function Navbar() {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const tabs = ['Earn', 'Portfolio', 'Rewards', 'Invest', 'Savings'];

  return (
    <header className="bg-[#0f1525]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#1e2a45]/30 glow-shadow">
      <div className="flex justify-between items-center h-[72px] px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold text-[#b4c5ff] tracking-tight">Maple</span>
          <nav className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                  activeTab === tab ? 'text-[#b4c5ff] font-bold' : 'text-[#c3c6d7] hover:text-[#b4c5ff]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="navbar-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b4c5ff]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#2d3448] rounded-full border border-[#434655]/20">
            <span className="w-2 h-2 rounded-full bg-[#4ae176]"></span>
            <span className="text-xs font-medium text-[#dbe2fc]">0x38...9b82</span>
          </div>
          <button className="p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f1525]" />
          </button>
          <button className="p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center border border-[#b4c5ff]/30 overflow-hidden">
             <img 
               src="https://api.dicebear.com/7.x/identicon/svg?seed=Maple" 
               alt="Avatar" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </header>
  );
}

// --- Hero Section ---
function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#1a47cc] to-[#2563eb] glow-shadow">
      <div className="relative z-10">
        <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1 text-label-sm">Total Balance</p>
        <h1 className="text-white text-4xl font-bold mb-4 font-monetary-lg">$0.92</h1>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg">
            <span className="text-[10px] font-medium text-white/80 uppercase">Total Earnings</span>
            <span className="text-sm font-bold text-white">$0</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-[#2563eb] font-bold rounded-xl hover:bg-white/90 transition-all active:scale-95 duration-150 shadow-lg">
            Deposit Funds
          </button>
          <button className="px-6 py-3 bg-black/20 text-white font-bold rounded-xl border border-white/20 hover:bg-black/30 transition-all active:scale-95 duration-150">
            View Rewards
          </button>
        </div>
      </div>
      {/* Decorative Glows */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#2563eb]/50 rounded-full blur-2xl"></div>
    </div>
  );
}

// --- Asset Activity ---
function AssetActivity() {
  const [activeFilter, setActiveFilter] = useState('syrupUSDC');
  const filters = ['syrupUSDC', 'syrupUSDT'];
  
  const activities = [
    { name: 'Bitcoin', tag: 'syrupUSDC', amount: '0.00000 BTC', date: 'Oct 24, 2024', icon: <Coins className="text-orange-500" />, iconBg: 'bg-orange-500/20' },
    { name: 'Ethereum', tag: 'syrupUSDC', amount: '0.00000 ETH', date: 'Oct 23, 2024', icon: <History className="text-slate-400" />, iconBg: 'bg-slate-500/20' },
    { name: 'Tether', tag: 'syrupUSDT', amount: '0.00 USDT', date: 'Oct 22, 2024', icon: <CircleDollarSign className="text-green-500" />, iconBg: 'bg-green-500/20' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeFilter === f ? 'bg-[#b4c5ff] text-[#002a78]' : 'bg-[#23293d] text-[#c3c6d7] hover:bg-[#2d3448]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#141b2e] border border-[#434655]/30 rounded-lg text-xs font-medium text-[#dbe2fc]">
          All Chains
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="bg-[#141b2e] rounded-2xl border border-[#434655]/20 overflow-hidden">
        <div className="p-4 border-b border-[#434655]/10 flex justify-between items-center bg-[#060d20]/50">
          <span className="text-xs font-medium text-[#c3c6d7] uppercase">Asset Activity</span>
          <button className="text-[#b4c5ff] text-xs font-medium hover:underline">View All</button>
        </div>
        <div className="divide-y divide-[#434655]/10">
          {activities.map((activity, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 flex items-center justify-between hover:bg-[#2d3448]/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center`}>
                  {activity.icon}
                </div>
                <div>
                  <p className="font-bold text-[#dbe2fc]">{activity.name}</p>
                  <span className="text-[10px] font-medium px-2 py-0.5 bg-[#2d3448] text-[#c3c6d7] rounded-md">
                    {activity.tag}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#dbe2fc]">{activity.amount}</p>
                <p className="text-[10px] text-[#c3c6d7]">{activity.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Protocol Grid ---
function ProtocolGrid() {
  const protocols = [
    { name: 'Aave V3', action: 'Borrowing', apy: '3.4% APY', icon: <BadgeDollarSign size={18} />, color: 'bg-[#2563eb]', trend: <TrendingUp className="text-[#4ae176]" size={18} /> },
    { name: 'Uniswap', action: 'Earning', apy: '12.8% APY', icon: <ArrowRightLeft size={18} />, color: 'bg-[#3761ea]', trend: <Star className="text-[#4ae176]" size={18} /> },
    { name: 'Curve', action: 'Earn', apy: '5.2% APY', icon: <ShieldCheck size={18} />, color: 'bg-[#00b954]', trend: <Zap className="text-[#4ae176]" size={18} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {protocols.map((protocol, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5, boxShadow: '0 0 40px #1d4ed840', borderColor: '#2563eb' }}
          className="glass-panel p-4 rounded-xl flex flex-col justify-between h-40 transition-all border-[#1e2a45] cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${protocol.color} flex items-center justify-center text-white`}>
                {protocol.icon}
              </div>
              <span className="font-bold text-[#dbe2fc]">{protocol.name}</span>
            </div>
            <ArrowUpRight className="text-[#c3c6d7]" size={18} />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-[#c3c6d7] uppercase font-medium">0{idx + 1} {protocol.action}</p>
              <p className="text-xl font-bold text-[#4ae176]">{protocol.apy}</p>
            </div>
            {protocol.trend}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// --- Swap Sidebar ---
function SwapSidebar() {
  const [tab, setTab] = useState('Swap');
  const [giveAmt, setGiveAmt] = useState('0.040');

  return (
    <div className="glass-panel p-6 rounded-2xl space-y-6 glow-shadow">
      <div className="flex bg-[#2d3448] rounded-xl p-1">
        {['Swap', 'Send'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              tab === t ? 'bg-[#181f32] text-[#b4c5ff]' : 'text-[#c3c6d7] hover:text-[#dbe2fc]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {/* Give Input */}
        <div className="bg-[#23293d] rounded-xl p-4 border border-[#434655]/10 group focus-within:border-[#2563eb] transition-all">
          <div className="flex justify-between text-[10px] text-[#c3c6d7] font-medium mb-2 uppercase">
            <span>You Give</span>
            <span>Balance: 0.045 BTC</span>
          </div>
          <div className="flex items-center gap-2">
            <input 
              className="bg-transparent border-none p-0 text-white font-bold text-3xl focus:ring-0 w-full"
              type="text" 
              value={giveAmt}
              onChange={(e) => setGiveAmt(e.target.value)}
            />
            <button className="flex items-center gap-2 bg-[#181f32] px-2 py-1.5 rounded-lg border border-[#434655]/20 hover:bg-[#23293d] transition-all">
              <Coins className="text-orange-500" size={18} />
              <span className="font-bold text-sm">BTC</span>
              <ChevronDown size={14} className="text-[#c3c6d7]" />
            </button>
          </div>
        </div>

        {/* Get Input */}
        <div className="bg-[#23293d] rounded-xl p-4 border border-[#434655]/10">
          <div className="flex justify-between text-[10px] text-[#c3c6d7] font-medium mb-2 uppercase">
            <span>You Get</span>
            <span className="flex items-center gap-1 text-[#4ae176]">
              <Zap size={12} />
              Fast
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input 
              className="bg-transparent border-none p-0 text-white font-bold text-3xl focus:ring-0 w-full" 
              readOnly 
              type="text" 
              value={(parseFloat(giveAmt || '0') * 133124.75).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(1)} 
            />
            <button className="flex items-center gap-2 bg-[#181f32] px-2 py-1.5 rounded-lg border border-[#434655]/20 hover:bg-[#23293d] transition-all">
              <BadgeDollarSign className="text-blue-500" size={18} />
              <span className="font-bold text-sm">USD</span>
              <ChevronDown size={14} className="text-[#c3c6d7]" />
            </button>
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-gradient-to-r from-[#2563eb] to-[#3761ea] text-white font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-150">
        Swap
      </button>
    </div>
  );
}

// --- Merkl Rewards ---
function MerklRewards() {
  return (
    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-[#3761ea]/50 transition-all cursor-pointer">
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#3761ea]/20 flex items-center justify-center text-[#b4c5ff] mb-4">
          <PieChart size={24} />
        </div>
        <h3 className="text-[#dbe2fc] font-bold text-xl mb-2">Merkl Rewards</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {['Multiple Partners', 'Competitive APYs', 'Onchain'].map(tag => (
            <span key={tag} className="px-2 py-1 bg-[#2d3448] text-[#c3c6d7] text-[10px] uppercase font-bold tracking-tight rounded">
              {tag}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-2 text-[#b4c5ff] font-bold text-sm hover:gap-3 transition-all">
          View your Rewards
          <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#3761ea]/10 rounded-full blur-3xl group-hover:bg-[#3761ea]/20 transition-all"></div>
    </div>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="mt-20 border-t border-[#434655]/10">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-10 max-w-7xl mx-auto w-full gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[#b4c5ff] font-bold text-lg">Maple</span>
          <p className="text-[#c3c6d7] text-[10px] font-medium uppercase tracking-tight">© 2024 Maple DeFi. Secure Institutional Credit.</p>
        </div>
        <div className="flex gap-8">
          {['Terms', 'Privacy', 'Docs', 'Status'].map(link => (
            <a key={link} href="#" className="text-[#c3c6d7] text-[10px] uppercase font-bold tracking-widest hover:text-[#4ae176] transition-colors opacity-80 hover:opacity-100">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <HeroCard />
          <AssetActivity />
          <ProtocolGrid />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <SwapSidebar />
          <MerklRewards />
        </div>
      </main>
      <Footer />
    </div>
  );
}
