import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '/';

  // Validate secret
  if (secret !== process.env.DRAFT_MODE_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  // Enable draft mode
  draftMode().enable();

  // Redirect to the page
  redirect(slug);
}
