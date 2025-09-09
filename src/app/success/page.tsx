export default function SuccessPage({ searchParams }: { searchParams: { plan?: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Success</h1>
      <p>Your subscription to {searchParams.plan ?? 'free'} is confirmed.</p>
      <a href="/dashboard" className="rounded border px-3 py-2">Go to Dashboard</a>
    </div>
  );
}
