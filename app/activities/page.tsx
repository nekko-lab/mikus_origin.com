import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '活動実績',
  description: "Miku's Origin の活動実績・プロジェクト一覧",
};

// const years = ['すべて', '2025', '2024', '2023'];

// const projects = [
//   {
//     title: 'プレースホルダー: オリジナルRPG「幻影の塔」',
//     description:
//       'プレースホルダー: チームで1年かけて制作した2D RPG。ストーリー・グラフィック・BGM すべてオリジナル。コミックマーケットで頒布し好評を得た。',
//     date: '2025.12',
//     tags: ['ゲーム', 'Unity', 'チーム制作'],
//     year: '2025',
//   },
//   {
//     title: 'プレースホルダー: 大学情報ポータルサイト',
//     description:
//       'プレースホルダー: Next.js + Supabase で構築した学内情報共有プラットフォーム。授業レビューや施設予約機能を実装。',
//     date: '2025.09',
//     tags: ['Web', 'Next.js', 'フルスタック'],
//     year: '2025',
//   },
//   {
//     title: 'プレースホルダー: AIアートジェネレーター',
//     description:
//       'プレースホルダー: Stable Diffusion を活用した Web ベースの AI イラスト生成ツール。学園祭でデモ展示を行った。',
//     date: '2025.11',
//     tags: ['AI', 'Python', 'Web'],
//     year: '2025',
//   },
//   {
//     title: 'プレースホルダー: VRキャンパスツアー',
//     description:
//       'プレースホルダー: Meta Quest 向けにキャンパスの VR ツアーアプリを制作。新入生オリエンテーションで利用。',
//     date: '2024.04',
//     tags: ['VR', 'Unity', '3Dモデリング'],
//     year: '2024',
//   },
//   {
//     title: 'プレースホルダー: 音楽ビジュアライザー',
//     description:
//       'プレースホルダー: WebGL を使ったリアルタイム音楽ビジュアライザー。音声スペクトル解析で動的なグラフィックを生成。',
//     date: '2024.07',
//     tags: ['Web', 'WebGL', '音楽'],
//     year: '2024',
//   },
//   {
//     title: 'プレースホルダー: ハッカソン出場作品「EcoTrack」',
//     description:
//       'プレースホルダー: 環境系ハッカソンで準優勝したエコアクショントラッキングアプリ。Flutter + Firebase で構築。',
//     date: '2023.10',
//     tags: ['モバイル', 'Flutter', 'ハッカソン'],
//     year: '2023',
//   },
// ];

// const awards = [
//   {
//     title: 'プレースホルダー: ○○ハッカソン 準優勝',
//     year: '2025',
//     org: '主催者名プレースホルダー',
//   },
//   {
//     title: 'プレースホルダー: 学園祭ベストブース賞',
//     year: '2024',
//     org: '大学名プレースホルダー',
//   },
//   {
//     title: 'プレースホルダー: Unity1Week ランキング入賞',
//     year: '2024',
//     org: 'unityroom',
//   },
//   {
//     title: 'プレースホルダー: 全国学生コンテスト 佳作',
//     year: '2023',
//     org: '主催者名プレースホルダー',
//   },
// ];

// const tagColors: Record<string, string> = {
//   ゲーム: '#39C5BB',
//   Web: '#06b6d4',
//   AI: '#10b981',
//   VR: '#0000ff',
//   モバイル: '#f59e0b',
//   Unity: '#818cf8',
//   'Next.js': '#38bdf8',
//   Python: '#fbbf24',
//   Flutter: '#60a5fa',
//   WebGL: '#c084fc',
//   音楽: '#fb7185',
//   チーム制作: '#a78bfa',
//   フルスタック: '#34d399',
//   '3Dモデリング': '#f472b6',
//   ハッカソン: '#fb923c',
// };

// export default function ActivitiesPage() {
//   return (
//     <main>
//       <section className="page-hero">
//         <div
//           style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}
//           className="animate-fade-in"
//         >
//           <h1
//             style={{
//               fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//               fontWeight: 900,
//               letterSpacing: '-0.03em',
//               marginBottom: '1.25rem',
//             }}
//           >
//             <span className="gradient-text">活動実績</span>
//           </h1>
//           <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
//             プレースホルダー: これまでに制作したプロジェクトや参加イベントの実績をご紹介します。
//           </p>
//         </div>
//       </section>

//       <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//         <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
//           {years.map((y, i) => (
//             <button
//               key={y}
//               style={{
//                 padding: '0.5rem 1.25rem',
//                 borderRadius: '999px',
//                 fontSize: '0.85rem',
//                 fontWeight: 600,
//                 border: '1px solid rgba(255,255,255,0.1)',
//                 background: i === 0 ? 'linear-gradient(135deg, #39C5BB, #2ab5ac)' : 'transparent',
//                 color: i === 0 ? 'white' : 'var(--color-text-secondary)',
//                 cursor: 'pointer',
//                 transition: 'all 0.2s',
//               }}
//             >
//               {y}
//             </button>
//           ))}
//         </div>
//       </section>

//       <section className="section">
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//             gap: '1.5rem',
//           }}
//         >
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className="glass card-hover"
//               style={{ borderRadius: '16px', overflow: 'hidden' }}
//             >
//               <div
//                 style={{
//                   height: '180px',
//                   background: `linear-gradient(135deg, ${tagColors[p.tags[0]] || '#39C5BB'}18, ${tagColors[p.tags[1]] || '#ffa500'}18)`,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '3rem',
//                   position: 'relative',
//                 }}
//               >
//                 <div
//                   style={{
//                     position: 'absolute',
//                     inset: 0,
//                     background: 'linear-gradient(to bottom, transparent 50%, var(--color-bg-card))',
//                   }}
//                 />
//                 <span style={{ position: 'relative', zIndex: 1, opacity: 0.5 }}>
//                   {p.tags[0] === 'ゲーム'
//                     ? '🎮'
//                     : p.tags[0] === 'Web'
//                       ? '🌐'
//                       : p.tags[0] === 'AI'
//                         ? '🤖'
//                         : p.tags[0] === 'VR'
//                           ? '🥽'
//                           : '📱'}
//                 </span>
//               </div>
//               <div style={{ padding: '1.5rem' }}>
//                 <div
//                   style={{
//                     fontSize: '0.75rem',
//                     color: 'var(--color-text-muted)',
//                     marginBottom: '0.5rem',
//                     fontWeight: 500,
//                   }}
//                 >
//                   {p.date}
//                 </div>
//                 <h3
//                   style={{
//                     fontWeight: 700,
//                     fontSize: '1.1rem',
//                     marginBottom: '0.75rem',
//                     lineHeight: 1.4,
//                   }}
//                 >
//                   {p.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: '0.85rem',
//                     color: 'var(--color-text-secondary)',
//                     lineHeight: 1.7,
//                     marginBottom: '1rem',
//                   }}
//                 >
//                   {p.description}
//                 </p>
//                 <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
//                   {p.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       style={{
//                         padding: '0.2rem 0.6rem',
//                         borderRadius: '6px',
//                         fontSize: '0.7rem',
//                         fontWeight: 600,
//                         background: `${tagColors[tag] || '#39C5BB'}18`,
//                         color: tagColors[tag] || '#39C5BB',
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h2 className="section-title" style={{ textAlign: 'center' }}>
//             🏆 受賞歴
//           </h2>
//           <p className="section-subtitle" style={{ textAlign: 'center', margin: '1rem auto 3rem' }}>
//             プレースホルダー: コンテストやイベントでの実績
//           </p>
//           <div
//             style={{
//               maxWidth: '700px',
//               margin: '0 auto',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '1rem',
//             }}
//           >
//             {awards.map((a, i) => (
//               <div
//                 key={i}
//                 className="glass card-hover"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '1.25rem',
//                   padding: '1.25rem 1.75rem',
//                   borderRadius: '14px',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: '44px',
//                     height: '44px',
//                     minWidth: '44px',
//                     borderRadius: '12px',
//                     background:
//                       'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(239,68,68,0.2))',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '1.2rem',
//                   }}
//                 >
//                   🏅
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
//                     {a.title}
//                   </div>
//                   <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
//                     {a.org}
//                   </div>
//                 </div>
//                 <span
//                   style={{
//                     fontSize: '0.8rem',
//                     fontWeight: 600,
//                     color: 'var(--color-text-muted)',
//                     whiteSpace: 'nowrap',
//                   }}
//                 >
//                   {a.year}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// Announce: 改修中にのみ表示　完了したら削除すること
export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div
          style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}
          className="animate-fade-in"
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            <span className="gradient-text">活動実績</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            これまでの活動実績やプロジェクトを紹介するページです。
          </p>
        </div>
      </section>

      {/* Under Construction */}
      <section className="section">
        <div
          className="glass"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '3rem 2rem',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '3.5rem',
              marginBottom: '1.5rem',
            }}
          >
            🚧
          </div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            ページ改修中
          </h2>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
            }}
          >
            このページは現在改修中です。
            <br />
            コンテンツの準備ができ次第、公開いたします。
          </p>
        </div>
      </section>
    </main>
  );
}
