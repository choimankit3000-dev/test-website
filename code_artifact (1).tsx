import React, { useState } from 'react';

// 原生嵌入式高兼容性 SVG 圖標組件，完全免除外部庫依賴衝突
const IconGitFork = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

const IconTable = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
  </svg>
);

const IconSliders = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="2" y1="14" x2="6" y2="14" />
    <line x1="10" y1="8" x2="14" y2="8" />
    <line x1="18" y1="16" x2="22" y2="16" />
  </svg>
);

const IconChevronRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const IconAlertTriangle = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconTrendingDown = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const IconUsers = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconRefreshCcw = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

const IconLayers = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconHome = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconInfo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const IconSparkles = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('mindmap'); // 'mindmap' | 'table' | 'simulator'
  const [activeNode, setActiveNode] = useState(1);
  
  // 模擬器狀態 (Simulator States)
  const [totalGfa, setTotalGfa] = useState(22000000); // 假設規劃總樓面面積 (平方米)
  const [avgSize, setAvgSize] = useState(37.2); // 實際/目標平均單位面積 (平方米)
  const [plotRatio, setPlotRatio] = useState(6); // 平均地積比率

  // 心智圖分支數據 (Mind Map Node Data)
  const nodes = [
    {
      id: 1,
      title: "住宅面積數據與計量標準之根本矛盾",
      icon: <IconLayers className="w-5 h-5 text-amber-500" />,
      color: "amber",
      summary: "規劃假設與市場實態存在巨大的「計量鴻溝」。《香港2030+》規劃土地時，以理想化的寬敞面積為基準；而《愈建愈小》則指出三十年來實際落成面積已崩塌式下跌，產生「數量錯覺」。",
      quoteA: "「香港房委會在初步規劃階段時會把公營房屋單位的總樓面面積假設為 50 平方米... 私人住宅單位的假設平均面積為 75 平方米。」 —— 《香港2030+》附件第 6 頁",
      quoteB: "「平均單位面積已經縮小，由 1995 年的 50.4 平方米跌至 2024 年的 37.2 平方米，為三十年以來最小... 僅以單位數量計算會高估進展，稱之為『數量錯覺』。」 —— 《愈建愈小》摘要",
      contradiction: "規劃基準（公營50㎡/私營75㎡）嚴重脫離市場平均線（2024綜合平均僅37.2㎡）。政府若按《香港2030+》的大面積基準儲備土地，卻在現實中容許興建微型單位，將導致實際容納戶數與土地開發效率的極大錯配。",
      dataPoints: [
        { label: "2030+ 私營基準", value: "75 平方米" },
        { label: "2024 私營實際", value: "約 37-40 平方米" },
        { label: "2030+ 公營基準", value: "50 平方米" },
        { label: "1995-2024 縮減幅度", value: "整體縮減約 26.2%" }
      ]
    },
    {
      id: 2,
      title: "私人住宅戶型結構與市場走勢之預測失真",
      icon: <IconTrendingDown className="w-5 h-5 text-blue-500" />,
      color: "blue",
      summary: "政策預期市民居住空間會「自動改善」，但市場在「總價約束」下，開發商被動選擇「單位微型化（納米化）」以維持買家負擔能力，使大戶型規劃假設完全失真。",
      quoteA: "「在估算私營房屋用地供應時，加入 10% 及 20% 改善居住空間的考慮，私人住宅單位的假設平均面積，將由 75 平方米分別增加至 83 平方米及 90 平方米。」 —— 《香港2030+》附件第 6 頁",
      quoteB: "「2000 年僅約 4% 新落成單位面積小於 40 平方米，而 2024 年卻佔近... 2022年政府在新批土地條款中加入 26 平方米最低單位要求，間接承認市場已將單位面積低至不可接受水平。」 —— 《愈建愈小》摘要/註釋5",
      contradiction: "《2030+》設想私營面積「朝 83-90㎡ 邁進」，市場現實卻是朝「<40㎡ 甚至 <20㎡ 納米化」演變。規劃模型忽略了「地價高企 + 購買力封頂」的剛性總價約束，導致空間改善政策流於空中樓閣。",
      dataPoints: [
        { label: "規劃改善目標", value: "+10% 至 +20%" },
        { label: "2000年微型比例", value: "僅約 4% (<40㎡)" },
        { label: "近年市場常態", value: "極小單位成為供應主力" },
        { label: "政府底線介入", value: "2022年始設26㎡限呎" }
      ]
    },
    {
      id: 3,
      title: "人口統計學假設之因果謬誤與內生反饋",
      icon: <IconUsers className="w-5 h-5 text-emerald-500" />,
      color: "emerald",
      summary: "規劃將「戶均人數下降」視為外生給定的自然人口規律；然而，正是因為微型住宅的泛濫，迫使青年無法組建家庭或被迫推遲生育，形成空間限制對人口結構的「內生負反饋」。",
      quoteA: "「整體土地需求和供應是建基於一系列的假設而作出的概括性估算... 需考慮因人口增長、已承諾的設施供應標準...」 —— 《香港2030+》第 2 頁",
      quoteB: "「落成量從 2000 年後的低谷回升... 然而，這些進展是以單位落成數量計算的，而非單位面積。事實上，平均單位面積已經縮小...」 —— 《愈建愈小》摘要",
      contradiction: "規劃因「戶均人數下降」而合理化「興建更多小單位」的決策；但《愈建愈小》指出，越建越小的房屋結構（平均37.2㎡）才是消滅家庭人口增長、扼殺生育率的元兇。這構成了嚴重的因果倒置。",
      dataPoints: [
        { label: "規劃邏輯", value: "人口結構變化 ➔ 縮小住宅規劃" },
        { label: "現實反饋", value: "微型住宅逼擠 ➔ 生育率與家庭規模崩塌" },
        { label: "自我實現預言", value: "越小越難生育，越不生育戶型越小" }
      ]
    },
    {
      id: 4,
      title: "重建需求推算與市場流動性約束之脫節",
      icon: <IconRefreshCcw className="w-5 h-5 text-purple-500" />,
      color: "purple",
      summary: "規劃預期城市更新與重建能按部就班提供土地，但忽略了二級市場流動性窒息、置換階梯斷裂對重建鏈條的致命打擊。",
      quoteA: "「我們參考了一些新發展區... 繼續假設公營房屋的住用地積比率為 6 倍。而私營房屋方面，則繼續維持地積比率 1 至 6 倍。」 —— 《香港2030+》附件第 6 頁",
      quoteB: "「王柏林等（2025）：『居屋二手市場流通窒息，買賣限制須大幅放寬』。」 —— 《愈建愈小》註釋7",
      contradiction: "《香港2030+》依賴公式化的地積比率（6倍）和物理重建率推算需求，卻忽視了「二手市場流動性斷裂」的金融約束。當微型單位的業主因二手市場窒息、高息與嚴苛買賣限制而「無法以小換大」時，整個房屋置換階梯與老舊市區重建的微觀動力隨之瓦解。",
      dataPoints: [
        { label: "公營地積比假設", value: "固定為 6 倍" },
        { label: "二手流通實態", value: "極度窒息，買賣受限" },
        { label: "階梯阻滯效應", value: "小單位無法轉手 ➔ 無法向上置換" }
      ]
    },
    {
      id: 5,
      title: "政策介入與「空間改善」路徑之實質矛盾",
      icon: <IconHome className="w-5 h-5 text-rose-500" />,
      color: "rose",
      summary: "政府一方面宣傳改善港人居住空間，盤點各種政策和資源分配模式，卻實質上將極低標準「合法化」與「長期化」。",
      quoteA: "「加入 10% 及 20% 改善居住空間的考慮，公營/私營單位平均面積將分別增加...」 —— 《香港2030+》第 6 頁",
      quoteB: "「2022 年，政府在新批政府土地出售條款中加入 26 平方米最低單位面積要求... 這等於間接承認市場已將單位面積低至不可接受水平，因此需要透過最低標準作出限制。」 —— 《愈建愈小》註釋5",
      contradiction: "政策宣稱要實現「空間改善」（公營達55-60㎡），但行政干預設立的「26平方米最低限呎」標準，實質上僅為理想基準的 50% 左右。這表明政策底線並非為了驅動「改善」，而是對市場失控的無奈妥協，反而將極小居住空間予以標準化。",
      dataPoints: [
        { label: "2030+ 理想改善標準", value: "55 - 90 平方米" },
        { label: "政府法定最低標準", value: "26 平方米 (約 280 呎)" },
        { label: "歷史參考值 (1995)", value: "50.4 平方米 (遠高於現行低標)" }
      ]
    }
  ];

  // 獲取當前選中的節點
  const selectedNode = nodes.find(n => n.id === activeNode) || nodes[0];

  // 數據對比表格數據 (Comparison Table Data)
  const comparisonData = [
    {
      dimension: "私人住宅平均面積基準",
      hk2030: "基準假設：75 平方米\n空間改善(+10%)：83 平方米\n空間改善(+20%)：90 平方米",
      squeezed: "1995年平均：50.4 平方米\n2024年平均：37.2 平方米 (歷史新低)\n絕大多數新落成單位落入 <40 平方米組別",
      conflict: "規劃基準（75㎡）與市場現實（37.2㎡）相差近一倍。以虛高基準預估土地需求，卻默許市場建極小房，導致實際居住品質大幅倒退，出現「數量達標、面積縮水」的空間剝削。"
    },
    {
      dimension: "公營房屋平均面積基準",
      hk2030: "基準假設：50 平方米\n空間改善(+10%)：55 平方米\n空間改善(+20%)：60 平方米",
      squeezed: "過去30年公營房屋平均單位面積顯著縮減約 25% 至 50%。\n公屋平均面積與資助出售房屋（居屋）面積同步大幅下跌。",
      conflict: "政府面對公屋輪候時間（高位6.1年降至4.7年）的 KPI 壓力，採取「建多、建快、但建小」的策略，以犧牲人均居住面積來換取單位數量的爆發，產生嚴重的「數量錯覺」。"
    },
    {
      dimension: "政策底線與干預機制",
      hk2030: "理論上提倡通過增加 1,850 至 2,020 公頃房屋用地來主動改善「10% 至 20%」的個人居住空間。",
      squeezed: "2022 年被動出台 26 平方米 (約280平方呎) 最低面積限呎要求。這無疑是向市場妥協的「無奈托底」。",
      conflict: "26㎡ 的法定低標僅為《2030+》規劃理想改善標準的 40%-50%，此標準的製定實質上使「微型住宅合法化」，扼殺了長遠實現人均居住空間實質改善的可能性。"
    },
    {
      dimension: "家庭結構與人口學因果",
      hk2030: "將「戶均人數自然下降」作為外生環境參數，以此推算需要更多、更小單位的土地儲備。",
      squeezed: "指出「單位越建越小」才是迫使青年無法結婚、無法生育、被迫分家單獨居住的「內生性主因」。",
      conflict: "因果關係完全倒置。《2030+》將「空間壓迫下的被動家庭拆分」誤判為「市民自發的居住方式轉變」，進而規劃更多微型用地，陷入惡性循環的反饋圈。"
    },
    {
      dimension: "房屋置換與二級流動性",
      hk2030: "假設地積比率為 6 倍，房屋能通過土地供應和城市更新完成物理替換，預測市場運轉平穩。",
      squeezed: "指出居屋與二手市場面臨「流通窒息」與嚴重買賣限制，市場階梯徹底斷裂。",
      conflict: "若二手市場喪失流動性，購置了「微型/納米房」的年輕一代將被終身鎖定在極小空間內，無法通過資產增值「以小換大」，整個城市更新與階梯流動模型宣告失效。"
    }
  ];

  // 計算模擬器結果 (Calculator Logic)
  const impliedUnits = Math.round(totalGfa / avgSize);
  const landRequired = (totalGfa / plotRatio / 10000).toFixed(1); // 公頃
  
  const spaceRating = avgSize < 30 ? "納米微型（居住尊嚴受損）" : 
                      avgSize < 45 ? "嚴重擠迫（三十年低位水平）" : 
                      avgSize < 60 ? "基本適居（1990年代公營水平）" : "寬敞宜居（《香港2030+》理想標準）";
                      
  const spaceColor = avgSize < 30 ? "text-rose-500" : 
                     avgSize < 45 ? "text-amber-500" : 
                     avgSize < 60 ? "text-emerald-500" : "text-blue-500";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-3 sm:p-6 flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* 頂部標題列 (Header Section) */}
      <header className="max-w-7xl w-full mx-auto mb-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold mb-3">
              <IconSparkles className="w-3.5 h-3.5" /> 2026 學術對抗性可視化研究
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              「越建越小」與《香港2030+》之結構性矛盾
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-3xl">
              本系統深度剖析香港 1995-2024 年新落成住宅面積萎縮實態（《愈建愈小》）與港府長遠空間規劃綱領（《香港2030+》）在
              <span className="text-indigo-400 font-semibold"> 計量標準、市場預測、人口假定、重建流動性及空間改善 </span> 
              維度的核心衝突。
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 self-start md:self-center text-slate-200">
            <button 
              onClick={() => setActiveTab('mindmap')} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'mindmap' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              <IconGitFork className="w-4 h-4" /> 交互心智圖
            </button>
            <button 
              onClick={() => setActiveTab('table')} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'table' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              <IconTable className="w-4 h-4" /> 數據對比表
            </button>
            <button 
              onClick={() => setActiveTab('simulator')} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'simulator' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              <IconSliders className="w-4 h-4" /> 「數量錯覺」模擬器
            </button>
          </div>
        </div>
      </header>

      {/* 主要內容區域 (Main Sections) */}
      <main className="max-w-7xl w-full mx-auto flex-1 flex flex-col gap-6">
        
        {/* TAB 1: 交互心智圖 (Interactive Mind Map) */}
        {activeTab === 'mindmap' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* 左側：心智圖拓撲結構 */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-xl min-h-[500px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <IconGitFork className="w-5 h-5 text-indigo-400" />
                    深層矛盾學術心智圖
                  </h2>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                    點擊節點查看深度衝突剖析
                  </span>
                </div>

                {/* 拓撲網絡結構 */}
                <div className="relative py-4 px-2 sm:px-6 flex flex-col gap-4">
                  
                  {/* 中心核心節點 */}
                  <div className="w-full flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 rounded-2xl shadow-xl shadow-indigo-900/30 border border-indigo-400/30 text-center max-w-sm w-full relative z-10">
                      <div className="font-extrabold text-white text-base">香港房屋政策與市場實態</div>
                      <div className="text-xs text-indigo-200 font-medium mt-1">
                        核心範式衝突：數量增產 vs 空間萎縮
                      </div>
                    </div>
                  </div>

                  {/* 5個分支節點 */}
                  <div className="grid grid-cols-1 gap-3 relative z-10">
                    {nodes.map((node) => {
                      const isSelected = activeNode === node.id;
                      const borderColors = {
                        amber: "border-amber-500/40 hover:border-amber-500 bg-amber-950/20",
                        blue: "border-blue-500/40 hover:border-blue-500 bg-blue-950/20",
                        emerald: "border-emerald-500/40 hover:border-emerald-500 bg-emerald-950/20",
                        purple: "border-purple-500/40 hover:border-purple-500 bg-purple-950/20",
                        rose: "border-rose-500/40 hover:border-rose-500 bg-rose-950/20"
                      };
                      const activeBg = {
                        amber: "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20",
                        blue: "bg-blue-500 text-slate-950 font-bold border-blue-400 shadow-lg shadow-blue-500/20",
                        emerald: "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-lg shadow-emerald-500/20",
                        purple: "bg-purple-500 text-slate-950 font-bold border-purple-400 shadow-lg shadow-purple-500/20",
                        rose: "bg-rose-500 text-slate-950 font-bold border-rose-400 shadow-lg shadow-rose-500/20"
                      };
                      
                      return (
                        <div 
                          key={node.id}
                          onClick={() => setActiveNode(node.id)}
                          className={`cursor-pointer transition-all duration-300 p-3.5 rounded-xl border flex items-center justify-between ${
                            isSelected ? activeBg[node.color] : `${borderColors[node.color]} text-slate-300`
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-slate-950/30 text-white' : 'bg-slate-800'}`}>
                              {node.icon}
                            </div>
                            <div className="text-left">
                              <span className="text-xs opacity-60 font-mono block">BRANCH 0{node.id}</span>
                              <span className="text-xs sm:text-sm font-semibold tracking-wide">{node.title}</span>
                            </div>
                          </div>
                          <IconChevronRight className={`w-5 h-5 transition-transform duration-300 ${isSelected ? 'transform translate-x-1' : 'opacity-40'}`} />
                        </div>
                      );
                    })}
                  </div>

                  {/* 連接線裝飾 */}
                  <div className="absolute inset-0 -z-0 hidden md:block">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 280,50 L 150,110" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" fill="none" />
                      <path d="M 280,50 L 250,180" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" fill="none" />
                      <path d="M 280,50 L 350,180" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                </div>
              </div>

              {/* 底部數據速覽條 */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-950/40 p-2 rounded-xl">
                  <span className="text-xs text-slate-500 block">1995年均面積</span>
                  <span className="text-sm font-bold text-slate-200">50.4 ㎡</span>
                </div>
                <div className="bg-slate-950/40 p-2 rounded-xl">
                  <span className="text-xs text-slate-500 block">2024年均面積</span>
                  <span className="text-sm font-bold text-rose-400">37.2 ㎡</span>
                </div>
                <div className="bg-slate-950/40 p-2 rounded-xl">
                  <span className="text-xs text-slate-500 block">2022限呎底線</span>
                  <span className="text-sm font-bold text-amber-500">26 ㎡</span>
                </div>
              </div>
            </div>

            {/* 右側：選中節點的深層對抗分析 */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* 矛盾主題詳情卡片 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                      {selectedNode.icon}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-white text-base">
                        {selectedNode.title}
                      </h3>
                      <p className="text-xs text-indigo-400 font-semibold tracking-widest mt-0.5">矛盾細節剖析</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 mb-5">
                    {selectedNode.summary}
                  </p>

                  {/* 雙文文獻原句對撞 */}
                  <div className="space-y-4">
                    <div className="border-l-2 border-indigo-500 pl-3">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">《香港2030+》規劃假設</span>
                      <p className="text-xs text-slate-400 italic leading-relaxed">
                        {selectedNode.quoteA}
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-rose-500 pl-3">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">《愈建愈小》揭示現實</span>
                      <p className="text-xs text-slate-400 italic leading-relaxed">
                        {selectedNode.quoteB}
                      </p>
                    </div>
                  </div>

                  {/* 核心矛盾本質 */}
                  <div className="mt-5 p-4 bg-rose-950/15 border border-rose-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                      <IconAlertTriangle className="w-4 h-4" /> 結構性衝突本質
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedNode.contradiction}
                    </p>
                  </div>
                </div>

                {/* 右側底部的指標數據卡 */}
                <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                  {selectedNode.dataPoints.map((point, index) => (
                    <div key={index} className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{point.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-1 block">{point.value}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: 數據對比矩陣 (Data Comparison Grid) */}
        {activeTab === 'table' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <IconTable className="w-5 h-5 text-indigo-400" />
                  兩份文件指標與邏輯對比矩陣
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  一目了然看清「理想藍圖規劃」與「三十年市場實態」的深層斷裂。
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full font-semibold">
                  對比範本：香港2030+ vs 愈建愈小
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-300 text-xs uppercase tracking-wider border-b border-slate-800">
                    <th className="py-4 px-4 font-bold w-1/5 min-w-[150px]">比較維度</th>
                    <th className="py-4 px-4 font-bold w-1/4 min-w-[200px] text-indigo-400">《香港2030+》規劃假設</th>
                    <th className="py-4 px-4 font-bold w-1/4 min-w-[200px] text-rose-400">《愈建愈小》揭示現實</th>
                    <th className="py-4 px-4 font-bold w-3/10 min-w-[250px] bg-indigo-950/20">核心矛盾與實質衝突</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-850/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-200 align-top">
                        {row.dimension}
                      </td>
                      <td className="py-4 px-4 text-slate-400 leading-relaxed align-top whitespace-pre-line">
                        {row.hk2030}
                      </td>
                      <td className="py-4 px-4 text-slate-400 leading-relaxed align-top whitespace-pre-line">
                        {row.squeezed}
                      </td>
                      <td className="py-4 px-4 text-slate-300 leading-relaxed align-top bg-indigo-950/10">
                        <p className="font-medium text-slate-200">{row.conflict}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 表格底部備註 */}
            <div className="mt-5 p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-2">
              <IconInfo className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-500 leading-relaxed">
                備註：本對比矩陣數據完全摘錄並精確對應自《HK2030+ Housing land Requirement_Chi.pdf》附件關於「改善居住空間考慮」的公式推算，以及《愈建愈小：1995-2024年香港新落成住宅單位面積變化.pdf》中利用 30 年一手住宅落成數據整理所得出的平均面積變化統計。
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: 「數量錯覺」動態模擬器 (Simulator Panel) */}
        {activeTab === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
            
            {/* 左側：控制面板 */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                  <IconSliders className="w-5 h-5 text-indigo-400" />
                  「數量錯覺」動態模擬器
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  手動調節數據，透視為什麼「單位產量 KPI」會迫使「單位面積」大縮水，進而解構政策宣傳中的數量幻覺。
                </p>

                <div className="space-y-6">
                  
                  {/* 滑塊 1: 規劃總樓面面積 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-300">規劃住宅總樓面面積 (GFA)</span>
                      <span className="font-mono text-indigo-400 font-bold">{(totalGfa / 10000).toLocaleString()} 萬平方米</span>
                    </div>
                    <input 
                      type="range" 
                      min="10000000" 
                      max="40000000" 
                      step="500000"
                      value={totalGfa} 
                      onChange={(e) => setTotalGfa(Number(e.target.value))}
                      className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>1,000 萬㎡</span>
                      <span>4,000 萬㎡</span>
                    </div>
                  </div>

                  {/* 滑塊 2: 單位平均面積 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-300">設定目標/實際平均單位面積</span>
                      <span className="font-mono text-indigo-400 font-bold">{avgSize} 平方米 (約 {(avgSize * 10.76).toFixed(0)} 呎)</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="90" 
                      step="0.5"
                      value={avgSize} 
                      onChange={(e) => setAvgSize(Number(e.target.value))}
                      className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>20㎡ (極端納米房)</span>
                      <span>50㎡ (1995歷史平均)</span>
                      <span>75㎡ (2030+私營基準)</span>
                      <span>90㎡ (2030+改善極限)</span>
                    </div>
                  </div>

                  {/* 滑塊 3: 規劃平均地積比 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-300">平均住用地積比率 (Plot Ratio)</span>
                      <span className="font-mono text-indigo-400 font-bold">{plotRatio} 倍</span>
                    </div>
                    <input 
                      type="range" 
                      min="3" 
                      max="8" 
                      step="0.5"
                      value={plotRatio} 
                      onChange={(e) => setPlotRatio(Number(e.target.value))}
                      className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>3 倍 (中低密度)</span>
                      <span>6 倍 (公營標準地積比)</span>
                      <span>8 倍 (極高密度)</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 模擬器參數備忘 */}
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold mb-1">
                  <IconInfo className="w-3.5 h-3.5" /> 模擬原理說明
                </div>
                總住宅產量 = 總樓面面積(GFA) / 平均單位面積。在土地開發規模不變下，追求「高單位數量 KPI」必然以「犧牲個人居住面積」為代價。
              </div>
            </div>

            {/* 右側：動態結果面板 */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* 主要模擬產出指標 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">政策產出指標模擬</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-xs text-slate-500 block">模擬可落成住宅總單位數</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 block mt-1">
                      {impliedUnits.toLocaleString()} <span className="text-xs text-slate-400 font-medium">個</span>
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-2">
                      滿足單位數量 KPI 的效能指標
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-xs text-slate-500 block">估算所需最少房屋土地</span>
                    <span className="text-2xl sm:text-3xl font-black text-indigo-400 block mt-1">
                      {landRequired} <span className="text-xs text-slate-400 font-medium">公頃</span>
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-2 font-mono">
                      地積比為 {plotRatio} 倍時的淨土地需求
                    </span>
                  </div>
                </div>

                {/* 居住品質分級評估 */}
                <div className="mt-5 p-4 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">模擬居住空間品質評級</span>
                    <span className={`text-sm sm:text-base font-extrabold ${spaceColor} mt-1 block`}>
                      {spaceRating}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">人均面積參考</span>
                    <span className="text-xs text-slate-300 mt-1 block">
                      約為總面積的 1/3 ~ 1/2
                    </span>
                  </div>
                </div>
              </div>

              {/* 剖析數量錯覺的內在邏輯 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  為何政府傾向推進「數量錯覺」？
                </h3>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <p className="leading-relaxed">
                      若堅持《香港2030+》的私營住宅 <span className="font-bold text-white">75㎡</span> 基準，要興建上述 {impliedUnits.toLocaleString()} 個單位，總樓面面積需要大幅增加至 <span className="font-bold text-indigo-400">{(impliedUnits * 75 / 10000).toFixed(0)} 萬㎡</span>，這對土地開拓與財政預算將帶來極大負擔。
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <p className="leading-relaxed">
                      通過縱容市場將平均面積縮小至 <span className="font-bold text-rose-400">37.2㎡</span>（2024年現狀），政府在不增加土地撥備的前提下，讓新落成單位總數「翻倍」。這縮短了公屋輪候年期，但在數據上掩蓋了港人居住空間被實質剝奪的代價。
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <p className="leading-relaxed">
                      <span className="text-amber-400 font-bold">結論：</span>所謂公營及私營房屋政策的進展，純粹是利用「縮小面積」堆砌出的「數量泡沫」。這種規劃與市場的雙軌矛盾，使長遠空間改善目標淪為具誤導性的規劃修辭。
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* 頁尾與學術總結 (Footer Section) */}
      <footer className="max-w-7xl w-full mx-auto mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center shadow-xl">
        <p className="text-xs text-slate-500 leading-relaxed">
          設計依據：《愈建愈小：1995-2024年香港新落成住宅單位面積變化》及《香港2030+ 房屋土地需求附件（綜合土地需求及供應分析）》對比研究。
          <br className="hidden sm:block" />
          本心智圖及數據矩陣系統採用 React + Tailwind CSS 構建，為讀者呈現香港房屋規劃理想與市場流動性約束之間不可迴避的實質對立。
        </p>
      </footer>

    </div>
  );
}