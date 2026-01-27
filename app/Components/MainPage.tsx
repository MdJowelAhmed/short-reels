'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { PlayIcon } from '@/components/icons/PlayIcon';
// import { AndroidIcon } from '@/components/icons/AndroidIcon';
// import { AppleIcon } from '@/components/icons/AppleIcon';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Get video ID from URL path
    const pathParts = window.location.pathname.split('/');
    const videoId = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

    // Custom scheme URL for the app
    const appSchemeUrl = `creepyshorts://shorts/${videoId}`;

    // Store URLs
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.victorsaulmendozamena.creepyshorts';

    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    // Try to open app
    const tryOpenApp = () => {
      const startTime = Date.now();

      // Create hidden iframe to attempt app open (for older browsers)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appSchemeUrl;
      document.body.appendChild(iframe);

      // Also try direct location change (for newer browsers)
      setTimeout(() => {
        window.location.href = appSchemeUrl;
      }, 100);

      // Check if app opened
      setTimeout(() => {
        const elapsed = Date.now() - startTime;

        // If we're still here after 2.5 seconds, the app probably didn't open
        if (elapsed < 3000 && document.visibilityState === 'visible') {
          setIsLoading(false);
          setShowFallback(true);

          // Auto-redirect to store based on platform
          if (isAndroid) {
            // For Android, try intent URL
            window.location.href = `intent://shorts/${videoId}#Intent;scheme=creepyshorts;package=com.victorsaulmendozamena.creepyshorts;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;
          }
        }
      }, 2500);
    };

    // Start app open attempt
    tryOpenApp();

    // Show fallback after animation delay
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e94560]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container max-w-md mx-auto px-6 py-16 text-center relative z-10">
        {/* Logo */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-[28px] flex items-center justify-center shadow-2xl shadow-[#e94560]/30 animate-glow">
          {/* <PlayIcon className="w-16 h-16 text-white" /> */}
          <Image src="/logoText.png" alt="Creepy Shorts Logo" width={100} height={100} />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-display tracking-tight">
          Creepy Shorts
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white/70 mb-12 leading-relaxed">
          Opening the video in Creepy Shorts app...
        </p>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-center justify-center gap-3 mb-10 text-white/80 animate-fade-in">
            <div className="w-6 h-6 border-3 border-white/20 border-t-[#e94560] rounded-full animate-spin"></div>
            <span className="font-medium">Redirecting to app...</span>
          </div>
        )}

        {/* Fallback content */}
        <div 
          className={`transition-all duration-500 ${
            showFallback ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-4 my-8 text-white/40 text-sm">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="font-medium">App not installed?</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.victorsaulmendozamena.creepyshorts"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#34a853] to-[#1e7e34] rounded-2xl text-white font-semibold text-base shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-900/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* <AndroidIcon className="w-6 h-6" /> */}
              <Image src="/google.png" alt="Google Play Store" width={36} height={36} className='rounded-full'/>
              <span>Download from Play Store</span>
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/app/idYOUR_APP_STORE_ID"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#333] to-[#000] rounded-2xl text-white font-semibold text-base shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70 hover:-translate-y-1 transition-all duration-300"
            >
              {/* <AppleIcon className="w-6 h-6" /> */}
                <Image src="/apple.png" alt="Apple App Store" width={36} height={36} className='rounded-full'/>
              <span>Download from App Store</span>
            </a>
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-16 text-white/30 text-sm">
          <p>Experience thrilling short videos</p>
        </div>
      </div>
    </main>
  );
}