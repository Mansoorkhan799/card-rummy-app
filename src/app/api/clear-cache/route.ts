import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  try {
    // Get the secret token from the request
    const secret = request.nextUrl.searchParams.get('secret');

    // Simple security check
    // In production, use a proper secure token
    if (secret !== process.env.REVALIDATE_SECRET && secret !== 'card-rummy-cache-token') {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    // Get path to revalidate (optional)
    const path = request.nextUrl.searchParams.get('path') || '/';
    
    // Get tag to revalidate (optional)
    const tag = request.nextUrl.searchParams.get('tag');

    if (tag) {
      revalidateTag(tag);
    } else {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path,
      tag: tag || 'none'
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json(
      { message: 'Error revalidating', error: (err as Error).message },
      { status: 500 }
    );
  }
} 