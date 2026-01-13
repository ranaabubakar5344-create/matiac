import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold text-red-500 tracking-widest mb-4">
          ERROR 404
        </p>

        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
          Page Not Found
        </h1>

        <p className="text-white/70 text-lg mb-10">
          The page you are looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full
                     bg-gradient-to-r from-red-600 to-red-500
                     px-8 py-4 text-sm font-bold text-white
                     shadow-lg shadow-red-600/40
                     transition-all duration-300
                     hover:scale-105 hover:shadow-red-600/60"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
