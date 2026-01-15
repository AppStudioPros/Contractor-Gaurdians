import { revalidateTag, revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Verify webhook secret
    const secret = request.headers.get('x-sanity-webhook-secret');
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on document type
    switch (_type) {
      case 'page':
        if (slug?.current) {
          revalidatePath(`/${slug.current}`);
        }
        revalidateTag('pages');
        break;
      case 'siteSettings':
      case 'navigation':
        revalidatePath('/', 'layout');
        break;
      case 'testimonial':
        revalidateTag('testimonials');
        revalidatePath('/');
        break;
      case 'pricingPlan':
        revalidateTag('pricing');
        revalidatePath('/');
        break;
      case 'teamMember':
        revalidateTag('team');
        revalidatePath('/about');
        break;
      default:
        // Revalidate everything for unknown types
        revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}
