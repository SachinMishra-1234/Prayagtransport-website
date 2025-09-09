export default function PricingPage() {
  const tiers = [
    { name: 'Free', price: '$0', features: ['Basic QR generation', 'PNG export', 'Limited styles'] },
    { name: 'Pro', price: '$9/mo', features: ['All Free', 'SVG/PDF export', 'Gradients & logos', '10 projects'], highlight: true },
    { name: 'Business', price: '$29/mo', features: ['All Pro', 'Analytics', 'Team members', 'Custom domain'] },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className={`rounded border p-6 ${t.highlight ? 'border-brand' : ''}`}>
          <h2 className="text-lg font-semibold">{t.name}</h2>
          <p className="mt-2 text-3xl font-bold">{t.price}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {t.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
          <form action="/api/checkout" method="POST" className="mt-6">
            <input type="hidden" name="plan" value={t.name.toLowerCase()} />
            <button className="w-full rounded bg-brand px-3 py-2 text-white">Choose {t.name}</button>
          </form>
        </div>
      ))}
    </div>
  );
}
