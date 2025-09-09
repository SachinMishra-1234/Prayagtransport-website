export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Create stunning QR codes</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Build and customize QR codes with gradients, embedded logos, and tracking. Upgrade to Pro to unlock analytics and team collaboration.
      </p>
      <div className="flex gap-3">
        <a href="/builder" className="rounded bg-brand px-4 py-2 text-white">Open Builder</a>
        <a href="/pricing" className="rounded border px-4 py-2">See Pricing</a>
      </div>
    </section>
  );
}
