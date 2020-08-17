import React from 'react';
import Link from 'next/link';

export default function Branding() {
  return (
    <div className="branding">
      <Link href="/">
        <button>
          <h1>Michael Irvine</h1>
        </button>
      </Link>
    </div>
  )
}
