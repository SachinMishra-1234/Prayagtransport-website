import type { ReactNode } from 'react';
import { SignOutButton } from '@/components/SignOutButton';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Your Dashboard</h1>
        <SignOutButton />
      </div>
      {children}
    </div>
  );
}
