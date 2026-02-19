import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サークル紹介',
  description: "ネットワークコンテンツ研究会 Miku's Origin のサークル紹介ページ",
};

const activities = [
  {
    icon: '🎵',
    title: '音楽 / DTM',
    description: 'ライブで使用する音源や、ボーカロイドたちの歌、会話を作成します。',
    color: 'rgba(57, 197, 187, 0.1)',
  },
  {
    icon: '💡',
    title: '照明・音響',
    description: 'ライブを彩る照明や音響の作成、操作をします。\n 会場を盛り上げましょう。',
    color: 'rgba(255, 165, 0, 0.1)',
  },
  {
    icon: '🏗️',
    title: '運営 / 会場設計',
    description: 'ライブを作成するために、CADなどを用いて会場の設計、運営を行います。',
    color: 'rgba(0, 0, 255, 0.08)',
  },
];

const schedule = [
  { month: '4月', event: 'ニコニコ超会議・春公演', type: 'event' },
  { month: '5月', event: '新入生歓迎会', type: 'recruit' },
  { month: '9月', event: 'モーションキャプチャ', type: 'dev' },
  { month: '11月', event: '津田沼祭 出展', type: 'event' },
  { month: '2月', event: 'モーションキャプチャ', type: 'dev' },
];

const typeColors: Record<string, string> = {
  recruit: '#10b981',
  planning: '#f59e0b',
  dev: '#39C5BB',
  event: '#0000ff',
};

export default function AboutPage() {
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
            <span className="gradient-text">Miku&apos;s Origin</span> とは
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            ネットワークコンテンツ研究会 Miku&apos;s Origin は、
            <br />
            ボーカロイドを中心に&apos;ライブ&apos;を作る千葉工業大学のサークルです。
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div
          className="glass"
          style={{
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>ビジョン</h2>
          <p
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              lineHeight: 1.4,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="gradient-text">&ldquo;つくる楽しさ&rdquo;</span>を
            <br />
            みんなで共有する
          </p>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              marginTop: '1.5rem',
              maxWidth: '550px',
              margin: '1.5rem auto 0',
            }}
          >
            技術力だけでなく、チームで何かを生み出す喜びを大切にしています。
            <br />
            初心者でも安心して参加できる環境づくりを心がけています。
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">活動分野</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              多様なジャンルの制作活動を行っています
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {activities.map((a, i) => (
              <div
                key={i}
                className="glass card-hover"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    borderRadius: '12px',
                    background: a.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}
                >
                  {a.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    {a.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Schedule */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">年間スケジュール</h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            1年を通じた主なイベント・活動
          </p>
        </div>
        <div style={{ maxWidth: '650px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '23px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background:
                'linear-gradient(to bottom, var(--color-accent-start), var(--color-accent-end))',
              opacity: 0.3,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {schedule.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  paddingLeft: '0',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    borderRadius: '50%',
                    background: `${typeColors[item.type]}22`,
                    border: `2px solid ${typeColors[item.type]}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: typeColors[item.type],
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {item.month.slice(0, 2)}
                </div>
                <div
                  className="glass"
                  style={{
                    flex: 1,
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.month}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.925rem' }}>{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
