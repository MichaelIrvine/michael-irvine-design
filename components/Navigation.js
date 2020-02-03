import Link from "next/link";
import { useRouter } from 'next/router';

export default function Navigation() {

  const router = useRouter();
  
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className={`nav__list-item--circle ${router.pathname === '/work' ? 'active' : 'hidden'}`}>
          <span className="nav__circle"></span>
        </li>
        <li className="nav__list-item">
          <Link href="/work">
            <button>
              <h2 className="nav__link-item">Work</h2>
            </button>
          </Link>
        </li>
        <li className={`nav__list-item--circle ${router.pathname === '/info' ? 'active' : 'hidden'}`}>
          <span className="nav__circle"></span>
        </li>
        <li className="nav__list-item">
          <Link href="/info">
            <button>
              <h2 className="nav__link-item">Info</h2>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
