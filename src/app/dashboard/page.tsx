import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">Welcome back, {session.user?.name ?? session.user?.email}.</p>
      <div className="flex items-center gap-3">
        <Link href="/builder" className="rounded border px-3 py-2">Open QR Builder</Link>
        <Link href="/pricing" className="rounded border px-3 py-2">Upgrade Plan</Link>
      </div>
    </div>
  );
}
