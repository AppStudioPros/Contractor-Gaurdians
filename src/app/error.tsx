'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-lg text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-danger/20 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-danger" />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline text-gold mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or return to the
          home page.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
