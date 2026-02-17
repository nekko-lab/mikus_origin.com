import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'ページ',
    links: [
      { href: '/', label: 'ホーム' },
      { href: '/about', label: 'サークル紹介' },
      { href: '/activities', label: '活動実績' },
    ],
  },
  {
    title: 'メンバー',
    links: [
      { href: '/members', label: 'メンバー紹介' },
      { href: '/recruit', label: '部員募集' },
    ],
  },
  {
    title: '外部リンク',
    links: [
      { href: 'https://x.com/nekko_lab', label: `Twitter / X (Nekko-Lab)` },
      { href: 'https://x.com/mikus_origin', label: `Twitter / X (Miku's Origin)` },
      {
        href: 'https://www.instagram.com/mikus.origin.39?igsh=bHBoMng5aHk5MGNm',
        label: 'Instagram',
      },
      // 必要に応じて追加すること
      // { href: '#', label: 'GitHub' },
      // { href: '#', label: 'Discord' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(57, 197, 187, 0.15)',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem 2rem',
        }}
      >
        {/* Footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Image
                src="/mikus-origin_logo.png"
                alt="Miku's Origin"
                width={140}
                height={64}
                style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Miku&apos;s Origin
              <br />
              略して MO の公式サイト
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1rem',
                }}
              >
                {group.title}
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-secondary)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-secondary)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(57, 197, 187, 0.15)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            © 2019 Miku&apos;s Origin. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="https://twitter.com/mikus_origin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              Twitter / X
            </a>
            <a
              href="https://www.instagram.com/mikus.origin.39?igsh=bHBoMng5aHk5MGNm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              Instagram
            </a>
            {/* <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--color-text-muted)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                        >
                            GitHub
                        </a> */}
            {/* <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--color-text-muted)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                        >
                            Discord
                        </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
