'use client';

import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: '説明を見る',
    description: 'まずは説明会やサイトをチェックして、活動内容をみましょう！',
    icon: '👀',
  },
  {
    num: '02',
    title: '応募',
    description: '公式SNSアカウント(フッター参照！)のDMで参加希望を伝えましょう',
    icon: '🎉',
  },
  {
    num: '03',
    title: '仮入部',
    description: '1ヶ月の仮入部で部内の雰囲気に触れましょう',
    icon: '📝',
  },
  {
    num: '04',
    title: '本入部！',
    description: '面談後、正式に入部です！',
    icon: '🚀',
  },
];

const requirements = [
  { label: '対象', value: '千葉工業大学 在学生' },
  { label: '学年', value: '学年不問' },
  { label: '経験', value: '不問（初心者歓迎！）' },
  { label: '活動日', value: '毎週水曜' },
  { label: '活動場所', value: 'オンライン(津田沼キャンパスも予定)' },
  { label: '会費', value: '都度徴収(昨年：15,000円)' },
];

// TODO: FAQを追加する
// const faqs = [
//   {
//     q: 'プレースホルダー: プログラミング未経験でも大丈夫ですか？',
//     a: 'プレースホルダー: もちろん大丈夫です！先輩メンバーが丁寧にサポートします。入部後に勉強会も定期開催しています。',
//   },
//   {
//     q: 'プレースホルダー: 他のサークルと掛け持ちできますか？',
//     a: 'プレースホルダー: はい、掛け持ちしているメンバーも多くいます。活動日を調整して柔軟に参加できます。',
//   },
//   {
//     q: 'プレースホルダー: 途中入部はできますか？',
//     a: 'プレースホルダー: 年間を通じて受け付けています。気軽にお問い合わせください。',
//   },
//   {
//     q: 'プレースホルダー: オンラインだけの参加も可能ですか？',
//     a: 'プレースホルダー: 基本的にはハイブリッドで活動しています。オンラインのみの参加も可能です。',
//   },
// ];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="glass"
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          background: 'none',
          border: 'none',
          color: 'var(--color-text-primary)',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '0.95rem',
          fontWeight: 600,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            fontSize: '1.25rem',
            transition: 'transform 0.3s',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            color: 'var(--color-text-muted)',
            minWidth: '24px',
            textAlign: 'center',
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: '0 1.5rem 1.25rem',
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function RecruitPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div
          style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}
          className="animate-fade-in"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#10b981',
              marginBottom: '1.5rem',
              border: '1px solid rgba(16,185,129,0.2)',
              background: 'rgba(16,185,129,0.08)',
            }}
          >
            <span
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}
            />
            現在募集中
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            <span className="gradient-text">部員募集</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            一緒にデジタルコンテンツを創作する仲間を大募集しています。
            <br />
            経験・スキル不問、興味があれば誰でも大歓迎です！
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          募集概要
        </h2>
        <div
          className="glass"
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {requirements.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                padding: '1rem 1.75rem',
                borderBottom: i < requirements.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  minWidth: '80px',
                }}
              >
                {r.label}
              </span>
              <span style={{ fontSize: '0.875rem' }}>{r.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            入部の流れ
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="glass card-hover"
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: 'var(--color-text-muted)',
                    opacity: 0.4,
                  }}
                >
                  STEP {s.num}
                </div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          よくある質問
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '1rem auto 3rem' }}>
          プレースホルダー: FAQ
        </p>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section> */}
    </main>
  );
}
