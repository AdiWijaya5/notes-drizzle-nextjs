'use client';
import { SignOutButton, UserButton, useClerk, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { poppins } from '../app/fonts';

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  return (
    <nav className="border-b h-[8vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">Notes Account</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-5 ">
        {isSignedIn ? (
          <>
            <button className="w-[100px] bg-[#2F3037] font-bold hover:bg-[#3B3C45] p-2 rounded-md text-white text-center">
              <SignOutButton />
            </button>
            <UserButton />
          </>
        ) : (
          <div className={poppins.className}>
            <div className="flex items-center gap-x-5">
              <Link href="/sign-in">
                <button className="w-[100px] bg-[#2F3037] font-bold hover:bg-[#3B3C45] p-2 rounded-md text-white text-center">Sign in</button>
              </Link>
              <Link href="/sign-up">
                <button className="w-[100px] bg-[#2F3037] font-bold hover:bg-[#3B3C45] p-2 rounded-md text-white text-center">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
