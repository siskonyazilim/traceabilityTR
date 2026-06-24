import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function GET() {
  const token = crypto.randomUUID();
  const response = NextResponse.json({ csrfToken: token });
  response.cookies.set('csrf_token', token, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
}
