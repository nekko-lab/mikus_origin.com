'use client';

import { useEffect } from 'react';

export default function ConsoleArt() {
  useEffect(() => {
    const art = [
      '',
      '          ▓▓▓▓          ',
      '        ▒▒▒▒▒▒▒▒       ',
      '        ▒▒▒▒▒▒▒▒▒▒▒▒    ',
      '        ▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒ ',
      '        ▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒',
      '        ▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒',
      '        █▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒',
      '        ████▓▓▓▓▓▓▓▓▒▒▒▒',
      '        ██████▓▓▓▓▓▓▓▓ ',
      '',
      '  Nekko Cloud — ネットワークコンテンツ研究会',
      '',
    ].join('\n');

    console.log(
      `%c${art}`,
      'color: #8b5cf6; font-family: monospace; font-size: 14px; line-height: 1.2;',
    );
  }, []);

  return null;
}
