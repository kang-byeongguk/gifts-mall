// components/Header.tsx

// 수정해야할 사항
// form 대신 fetch로 검색기능 구현하기
'use client';

import styles from '@/styles/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Gifts:Mall" width={120} height={40} />
        </Link>
      </div>

      <form className={styles.search} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="상품을 검색하세요"
        />
        <button type="submit">🔍</button>
      </form>

      <nav className={styles.nav}>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/cart">장바구니</Link>
      </nav>
    </header>
  );
}
