import Image from 'next/image';
import Profile from './Profile';

export default function Header() {
  return (
    <header className="h-14 border-b-[1px] border-secondary-bg flex items-center p-2 justify-between">
      <Profile />
      <button>
        <img src="icons/bell.svg" />
      </button>
    </header>
  )
}