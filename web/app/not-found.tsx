// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#16241C]">404</h1>
        <h2 className="text-2xl font-semibold text-[#16241C] mt-4">Page Not Found</h2>
        <p className="text-[#16241C]/60 mt-2">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/" 
          className="inline-block mt-6 px-6 py-3 bg-[#1F4B3F] text-white rounded-lg hover:bg-[#1F4B3F]/90"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}