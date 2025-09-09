"use client";
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button
      className="rounded border px-3 py-1.5 text-sm"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign out
    </button>
  );
}
