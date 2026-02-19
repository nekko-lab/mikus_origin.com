import Link from 'next/link';

const features = [
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

const highlights = [
  {
    date: '2025.11',
    title: '津田沼祭公演(Miku\'s Origin LIVE 2025 "Fire")',
    tag: '展示',
    url: 'https://numasai2025.nekko-lab.dev/',
  },
  {
    date: '2025.11',
    title: '津田沼祭公演(Cyber √ Music)',
    tag: '展示',
    url: 'https://numasai2025.nekko-lab.dev/dj-live/',
  },
  {
    date: '2024.11',
    title: '津田沼祭公演(Cyber √ Music)',
    tag: '展示',
    url: 'https://numasai2024.nekko-lab.dev/',
  },
];

export default function Home() {
  return (
    <main>
      {/* Development Notice */}
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(245,158,11,0.12), rgba(251,191,36,0.08))',
          borderBottom: '1px solid rgba(245,158,11,0.2)',
          padding: '0.625rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.825rem',
          color: '#b45309',
          fontWeight: 500,
          letterSpacing: '0.01em',
        }}
      >
        🚧 このサイトは現在開発中です。掲載内容は変更される場合があります。
      </div>

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(57, 197, 187, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 165, 0, 0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}
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
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <span
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}
            />
            部員募集中
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            想像力を
            <br />
            <span className="gradient-text">爆発させよう。</span>
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}
          >
            ネットワークコンテンツ研究会 Miku&apos;s Origin は、
            <br />
            ボーカロイドを中心に&apos;ライブ&apos;を作る千葉工業大学のサークルです。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/recruit" className="btn-primary">
              部員募集を見る →
            </Link>
            <Link href="/about" className="btn-secondary">
              サークルについて
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title gradient-text">活動分野について</h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="glass card-hover"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                animationDelay: `${i * 0.15}s`,
                animationFillMode: 'both',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(217,70,239,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {f.title}
              </h3>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.925rem',
                  lineHeight: 1.7,
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">活動ハイライト</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {highlights.map((h, i) => (
              <a
                key={i}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.5rem 2rem',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--color-text-muted)',
                    whiteSpace: 'nowrap',
                    minWidth: '80px',
                  }}
                >
                  {h.date}
                </span>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: 'rgba(99,102,241,0.15)',
                    color: '#818cf8',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h.tag}
                </span>
                <span style={{ fontWeight: 500 }}>{h.title}</span>
                <span
                  style={{
                    marginLeft: 'auto',
                    color: 'var(--color-text-muted)',
                    fontSize: '1.2rem',
                  }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/activities" className="btn-secondary">
              すべての活動を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '6rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            一緒に<span className="gradient-text">つくり</span>ませんか？
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '480px',
              margin: '0 auto 2rem',
            }}
          >
            ライブを作る楽しさを、あなたも一緒に。
          </p>
          <Link href="/recruit" className="btn-primary">
            募集要項を見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
