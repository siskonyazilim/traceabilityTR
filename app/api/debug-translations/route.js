import { NextResponse } from 'next/server';

export async function GET() {
  // Bu endpoint yalnizca development ortaminda erisileblir olmalidir.
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const { getDictionary } = await import('../../../../lib/i18n/dictionaries');

  const tr = getDictionary('tr');
  const en = getDictionary('en');
  const ro = getDictionary('ro');

  return NextResponse.json({ tr, en, ro });
}
