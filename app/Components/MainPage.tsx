'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const videoId = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

    const appSchemeUrl = `creepyshorts://shorts/${videoId}`;

    const playStoreUrl =
      'https://play.google.com/store/apps/details?id=com.victorsaulmendozamena.creepyshorts';

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent);
    // const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    const tryOpenApp = () => {
      const startTime = Date.now();

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appSchemeUrl;
      document.body.appendChild(iframe);

      setTimeout(() => {
        window.location.href = appSchemeUrl;
      }, 100);

      setTimeout(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed < 3000 && document.visibilityState === 'visible') {
          setIsLoading(false);
          setShowFallback(true);

          if (isAndroid) {
            window.location.href = `intent://shorts/${videoId}#Intent;scheme=creepyshorts;package=com.victorsaulmendozamena.creepyshorts;S.browser_fallback_url=${encodeURIComponent(
              playStoreUrl
            )};end`;
          }
        }
      }, 2500);
    };

    tryOpenApp();

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
      setShowFallback(true);
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#070709] font-sans text-white antialiased">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1a24] opacity-40 blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#11111a] opacity-60 blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
        {/* Card */}
        <div className="w-full max-w-[420px] h-[520px] rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-[#15151c] to-[#0d0d12] p-8 shadow-2xl sm:p-9">
          {/* Logo Icon */}
          <div className="mx-auto mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-white/[0.08] bg-gradient-to-br from-[#1c1c25] to-[#101015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.5)]">
            {/* <GhostIcon className="h-9 w-9 text-white/95" /> */}
            <Image src="/logo1.png" alt="Logo" width={72} height={72} />
          </div>

          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
              <BoltIcon className="h-3 w-3" />
              HorrorStories App
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center text-[34px] font-bold leading-tight tracking-tight text-white">
            Creepy Shorts
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-3 max-w-[280px] text-center text-[14px] leading-relaxed text-white/55">
            {isLoading
              ? 'Opening the video in Creepy Shorts app...'
              : 'Experience immersive short horror stories anytime, anywhere.'}
          </p>

          {/* Loading indicator */}
          {isLoading && (
            <div className="mt-5 flex items-center justify-center gap-2 text-[12px] text-white/50">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/15 border-t-white/70" />
              <span>Redirecting to app...</span>
            </div>
          )}

          {/* Download Buttons */}
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              showFallback ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-1'
            }`}
          >
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.rubengalindo.creepyshorts&hl=en"
              caption="Get it on"
              label="Download for Android"
              icon={<PlayIcon className="h-[18px] w-[18px] text-white" />}
            />

            <StoreButton
              href="https://apps.apple.com/us/app/creepy-shorts/id6758427319"
              caption="Download on the"
              label="Download for iPhone"
              icon={<AppleIcon className="h-[18px] w-[18px] text-white" />}
            />
          </div>

         

          
        </div>

        {/* Footer */}
        <p className="mt-7 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white mt-40">
          <span className="mr-2">·</span>© 2026 Creepy Shorts
        </p>
      </div>
    </main>
  );
}

/* ----------------------------- Sub Components ----------------------------- */

function StoreButton({
  href,
  caption,
  label,
  icon,
}: {
  href: string;
  caption: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#1a1a22] to-[#101016] px-4 py-3 transition-all duration-300 hover:border-white/15 hover:from-[#20202a] hover:to-[#15151c]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0a0a10] shadow-inner">
        {icon}
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/45">
          {caption}
        </span>
        <span className="text-[15px] font-semibold text-white">{label}</span>
      </span>

      <ArrowUpRightIcon className="ml-auto h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
    </a>
  );
}

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-[11px] font-medium text-white/70">
      <span className="text-white/55">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* --------------------------------- Icons --------------------------------- */

function GhostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c-4.4 0-8 3.6-8 8v9.2c0 .9 1 1.5 1.8 1l1.6-1c.3-.2.6-.2.9 0l1.6 1c.3.2.6.2.9 0l1.6-1c.3-.2.6-.2.9 0l1.6 1c.3.2.6.2.9 0l1.6-1c.8-.5 1.8.1 1.8 1V10.5c0-4.4-3.6-8-8-8Z"
        fill="currentColor"
      />
      <circle cx="9.5" cy="11" r="1.3" fill="#0a0a10" />
      <circle cx="14.5" cy="11" r="1.3" fill="#0a0a10" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13c0 .8.9 1.3 1.6.9l10.4-6.5c.7-.4.7-1.4 0-1.8L9.6 4.6c-.7-.4-1.6.1-1.6.9Z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.7 1.2 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3 0 1.8-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.8-4Zm-2.5-7.4c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 1 4 17.5v-13Z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <path d="M12 19v3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
