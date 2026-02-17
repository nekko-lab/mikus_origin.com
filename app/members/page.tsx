import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メンバー紹介',
  description: "Miku's Origin のメンバー紹介ページ",
};

const members = [
  {
    name: 'flight',
    role: ['代表', 'プロデューサー'],
    bio: 'いろんな種類の能力が欲しい！',
    skills: ['Unity', '作曲', '編曲'],
    color: '#39C5BB',
    image: '/members/flight.png',
  },
  {
    name: 'かいがら',
    role: ['広報'],
    bio: 'ミクオリ公式Xの中の人。\n企画の0から1を持ってくることがある。\nライブ・ボカクラなどの現場に一番行っている。',
    skills: ['企画', 'mocap', 'ライブ・ボカクラ', 'ニコニコ'],
    color: '#ffa500',
    image: '/members/namekomiso.jpg',
  },
  {
    name: 'らだー',
    role: ['一般'],
    bio: 'BlenderとUnityを用いたライブ演出を担当。\nUnityのことならお任せを！',
    skills: ['Unity', 'Blender', 'C#'],
    color: '#06b6d4',
    image: '/members/radar.png',
  },
  {
    name: 'ピエール',
    role: ['一般'],
    bio: '合成音声キャラは全般的に好きです。\nまだまだ未熟ながらも気持ちと気合いでライブを作っています！',
    skills: ['MotionBuilder'],
    color: '#10b981',
    image: '/members/pierre.jpeg',
  },
  {
    name: 'おふ',
    role: ['一般'],
    bio: '未熟者ですが頑張ります',
    skills: [],
    color: '#f59e0b',
    image: '/members/of.jpg',
  },
  {
    name: 'くしもち',
    role: ['一般'],
    bio: '面白いものを作りたいです',
    skills: ['照明', '演出'],
    color: '#ef4444',
    image: '/members/ksmochi.png',
  },
];

// function getInitials(name: string) {
//   return name.replace('プレースホルダー', '').slice(0, 1);
// }

export default function MembersPage() {
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
            <span className="gradient-text">メンバー紹介</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            個性豊かなメンバーたちがそれぞれの得意分野を分担して活動しています。
          </p>
        </div>
      </section>

      {/* Member cards */}
      <section className="section">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="glass card-hover"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              {/* Avatar */}
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.25rem',
                    border: `2px solid ${m.color}33`,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${m.color}44, ${m.color}88)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: m.color,
                    margin: '0 auto 1.25rem',
                    border: `2px solid ${m.color}33`,
                  }}
                >
                  {/* {getInitials(m.name)} */}
                </div>
              )}
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                {m.name}
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: '0.35rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '0.5rem',
                }}
              >
                {m.role.map((r) => (
                  <span
                    key={r}
                    style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      background: `${m.color}22`,
                      color: m.color,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                  marginBottom: '1rem',
                }}
              >
                {m.bio}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '0.4rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {m.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      background: 'rgba(255,255,255,0.06)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center',
          }}
        >
          {[
            { value: '6名', label: '現在の部員数' },
            { value: '4', label: '完成プロジェクト' },
          ].map((s, i) => (
            <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div
                className="gradient-text"
                style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
