import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Agreement | Drema",
    description:
        "Read Drema's Terms of Service and User Agreement. Understand your rights, subscription terms, content usage policies, and more.",
};

async function getUserAgreement(): Promise<string> {
    try {
        const res = await fetch(
            "https://api.creepy-shorts.com/api/v1/settings?key=userAgreement",
            { cache: "no-store" }
        );
        const json = await res.json();
        return json?.data ?? "";
    } catch {
        return "";
    }
}

export default async function UserAgreements() {
    const htmlContent = await getUserAgreement();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
            {/* Ambient background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e94560]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
                <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
                <div className="absolute top-[45%] -left-16 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.2s" }} />
            </div>

            {/* Hero Header */}
            <header className="relative pt-20 pb-16 px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white/[0.06]  rounded-full px-4 py-1.5 text-xs text-purple-300 font-medium mb-6 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
                    Legal Document
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
                    User Agreement
                </h1>
            </header>

            {/* Main content — raw HTML from API */}
            <main className="max-w-4xl mx-auto px-6 pb-16">
                <div
                    className="prose-policy rounded-2xl  bg-white/[0.03] backdrop-blur-sm p-8"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </main>

            {/* Footer strip */}
            <footer className="border-t border-white/[0.06] py-8 text-center text-white/30 text-xs">
                © {new Date().getFullYear()} Drema. All rights reserved. &nbsp;·&nbsp;
                <a href="/privacy-policy" className="hover:text-white/60 transition-colors underline underline-offset-2">
                    Privacy Policy
                </a>
                &nbsp;·&nbsp;
                <a href="/delete-account" className="hover:text-white/60 transition-colors underline underline-offset-2">
                    Delete Account
                </a>
            </footer>
        </div>
    );
}