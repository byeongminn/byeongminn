import { Profile, Links } from '@/components';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 tablet:gap-x-6 gap-y-12 tablet:gap-y-0">
        <Profile />
        <Links />
      </div>
      <div className="relative w-full aspect-[16/9] max-h-96">
        <Image
          src="/assets/pictures/image.webp"
          alt="image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
