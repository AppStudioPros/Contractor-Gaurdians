import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-lg text-center">
        <div className="w-24 h-24 mx-auto mb-8 opacity-20">
          <Shield className="w-full h-full text-gold" />
        </div>
        <h1 className="text-6xl md:text-8xl font-headline text-gold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-headline text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved or doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
