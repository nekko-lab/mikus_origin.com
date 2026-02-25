'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: 'サークル紹介' },
  { href: '/activities', label: '活動実績' },
  { href: '/members', label: 'メンバー' },
  { href: '/recruit', label: '部員募集' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(57, 197, 187, 0.15)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Image
            src="/mikus-origin_logo.png"
            alt="Miku's Origin"
            width={160}
            height={60}
            style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: 'flex',
            gap: '0.25rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1a1a2e',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#39C5BB';
                  e.currentTarget.style.background = 'rgba(57,197,187,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1a1a2e';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#1a1a2e',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            padding: '1rem 1.5rem 2rem',
            background: 'rgba(255, 255, 255, 0.98)',
            borderBottom: '1px solid rgba(57, 197, 187, 0.15)',
          }}
        >
          <ul
            style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1a1a2e',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#39C5BB';
                    e.currentTarget.style.background = 'rgba(57,197,187,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1a1a2e';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
