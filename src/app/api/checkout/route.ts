import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const plan = String(formData.get('plan') ?? 'free');
  // Placeholder: integrate Stripe here
  const redirectUrl = `/success?plan=${encodeURIComponent(plan)}`;
  return NextResponse.redirect(new URL(redirectUrl, request.url));
}
