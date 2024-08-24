import Image from 'next/image';

export default function Profile() {
  return (
      <div className="flex items-center gap-2">
        <Image src="/images/profile.jpg" width="40" height="40"  alt="profile image" className="rounded-full" />
        <div>
          <p>Welcome</p>
          <p className="text-xs font-extralight">User</p>
        </div>
      </div>
  )
}