import { ProfileType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useQuery } from 'react-query';

const TITLE = "i'm jeon";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: profile } = useQuery<ProfileType>('profile', () =>
    fetchData('profile'),
  );

  return (
    <>
      <div className="px-4 py-6 laptop:py-14 flex laptop:flex-col justify-between laptop:justify-center items-center gap-y-0 laptop:gap-y-4 bg-white dark:bg-[#1f1f1f] border-b-[1px] border-gray-700 dark:border-gray-100 laptop:border-none fixed laptop:static top-0 inset-x-0 z-[1000]">
        <Link
          href="/"
          className="font-champagne italic text-[18px] laptop:text-[32px] leading-[22px] laptop:leading-[30px] tracking-[3px] text-gray-900 dark:text-gray-100 uppercase"
        >
          {TITLE}
        </Link>
        <div className="pl-4 hidden laptop:flex justify-center items-center gap-x-5">
          <Link
            href="/about"
            className={`text-eng-16 ${pathname.includes('/about') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
          >
            about
          </Link>
          <Link
            href="/projects"
            className={`text-eng-16 ${pathname.includes('/projects') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
          >
            projects
          </Link>
          <Link
            href="/contact"
            className={`text-eng-16 ${pathname.includes('/contact') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
          >
            contact
          </Link>
        </div>
        <div className="flex gap-x-2">
          <button type="button">
            <Image
              src="/assets/icons/dark.svg"
              alt="dark"
              width={24}
              height={24}
              priority
            />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="laptop:hidden"
          >
            <Image
              src="/assets/icons/nav-light.svg"
              alt="nav"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 z-[800]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[73px] right-0 bottom-0 bg-white dark:bg-[#1f1f1f] opacity-95 shadow-xl backdrop-blur-[2px] w-8/12 flex flex-col z-[1000]">
            <div className="flex-1">
              <div className="h-full flex flex-col justify-center items-center gap-y-9">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-eng-16 ${pathname.includes('/about') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
                >
                  about
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className={`text-eng-16 ${pathname.includes('/projects') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
                >
                  projects
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-eng-16 ${pathname.includes('/contact') ? 'text-gray-900' : 'text-gray-600'} uppercase`}
                >
                  contact
                </Link>
              </div>
            </div>
            <div className="p-8">
              <ul className="flex flex-col items-center gap-y-1">
                <li className="h-5 text-kor-14M text-gray-900 dark:text-gray-400">
                  {profile?.name} {profile?.englishName}
                </li>
                <li className="h-[18px] text-eng-14 text-gray-900 dark:text-gray-400">
                  {profile?.number}
                </li>
                <li className="h-[18px] text-eng-14 text-gray-900 dark:text-gray-400">
                  {profile?.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
