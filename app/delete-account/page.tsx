import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "How to Delete Your Account | Creepy Shorts",
    description:
        "Step-by-step guide to permanently delete your Creepy Shorts account. Learn what happens when you delete and how to complete the process safely.",
};

const steps = [
    {
        number: 1,
        image: "/deletepage.jpg",
        title: "Open the App & Sign In",
        description:
            "Launch the Creepy Shorts app on your device. Enter your registered email address and password, then tap Sign In to access your account.",
        tip: "Make sure you remember your password — you'll need it in the final step to confirm deletion.",
        direction: "→",
    },
    {
        number: 2,
        image: "/deletepage1.jpg",
        title: "You're on the Home Screen",
        description:
            "Once signed in, you'll land on the Home screen showing your personalized content feed. Look at the bottom navigation bar.",
        tip: "Tap the Profile icon (person icon) at the bottom-right corner of the screen to go to your profile.",
        direction: "↓",
    },
    {
        number: 3,
        image: "/deletepage2.jpg",
        title: "Go to Your Profile",
        description:
            "Your Profile page shows your name, UID, and account options. Scroll down to find the Settings Account section.",
        tip: "Tap Settings from the list under the \"More Setting\" section to access account management options.",
        direction: "→",
    },
    {
        number: 4,
        image: "/deletepage3.jpg",
        title: "Open Settings",
        description:
            "The Settings screen shows three important options: Privacy Policy, User Agreement, and Delete Account.",
        tip: "Tap Delete Account to proceed. This will take you to the account deletion warning screen.",
        direction: "→",
    },
    {
        number: 5,
        image: "/deletepage4.jpg",
        title: "Read the Warning Carefully",
        description:
            "A warning screen will appear: \"Pay Close Attention — if you delete your account, you'll miss out on some awesome shows and will not be able to get your data back (including downloaded episodes or subscriptions).\"",
        tip: "If you're sure you want to proceed, tap the red Delete Account button. Otherwise, tap Later to go back.",
        direction: "→",
    },
    {
        number: 6,
        image: "/deletepage5.jpg",
        title: "Confirm with Your Password",
        description:
            "A confirmation dialog will pop up asking you to enter your password. This is a security measure to ensure only you can delete your account.",
        tip: "Enter your password and tap the red Delete button to permanently delete your account. This action cannot be undone.",
        direction: null,
    },
];

const warnings = [
    {
        icon: "🎬",
        title: "All content access lost",
        text: "You will immediately lose access to all movies, shows, and content in the library.",
    },
    {
        icon: "💾",
        title: "Downloads deleted",
        text: "All offline downloads and saved episodes will be permanently removed from your device.",
    },
    {
        icon: "💳",
        title: "Subscriptions non-refundable",
        text: "Active subscriptions are non-refundable. You will not receive a refund for unused subscription time.",
    },
    {
        icon: "🔒",
        title: "Data cannot be recovered",
        text: "Your watch history, preferences, and account data cannot be recovered once deleted.",
    },
];

export default function DeleteAccount() {
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
            <header className="relative pt-20 pb-16 px-6 text-center border-b border-white/[0.06]">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 text-xs text-red-300 font-medium mb-6 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />
                    Irreversible Action
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-red-200 to-orange-300 bg-clip-text text-transparent">
                    Delete Account
                </h1>
                <p className="text-white/55 text-sm max-w-xl mx-auto leading-relaxed">
                    Follow this step-by-step guide to permanently delete your{" "}
                    <span className="text-white/80 font-semibold">Creepy Shorts</span> account from the app.
                    Please read each step carefully before proceeding.
                </p>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">

                {/* Warning banner */}
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm p-6 flex gap-4 items-start">
                    <span className="text-3xl shrink-0">⚠️</span>
                    <div>
                        <h2 className="text-lg font-bold text-red-300 mb-1">Account deletion is permanent</h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Once you delete your Creepy Shorts account, all your data — including your watch history,
                            offline downloads, and active subscriptions — will be permanently erased and cannot be recovered.
                            Please be absolutely sure before proceeding.
                        </p>
                    </div>
                </div>

                {/* What you lose */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                        <span>📋</span> What you will lose
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {warnings.map((w) => (
                            <div
                                key={w.title}
                                className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 hover:border-red-500/30 transition-colors"
                            >
                                <span className="text-2xl shrink-0">{w.icon}</span>
                                <div>
                                    <p className="font-semibold text-white/90 text-sm mb-1">{w.title}</p>
                                    <p className="text-white/50 text-xs leading-relaxed">{w.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step-by-step guide */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                        <span>📱</span> Step-by-Step Guide
                    </h2>

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <div key={step.number}>
                                    <div
                                        className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
                                    >
                                        {/* Phone mockup */}
                                        <div className="relative shrink-0 group">
                                            {/* Step number badge */}
                                            <div className="absolute -top-4 -left-4 z-10 w-9 h-9 rounded-full bg-gradient-to-br from-[#e94560] to-[#ff6b6b] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-900/40">
                                                {step.number}
                                            </div>
                                            {/* Phone frame */}
                                            <div className="relative w-[180px] md:w-[200px] rounded-[28px] border-4 border-white/10 overflow-hidden shadow-2xl shadow-black/50 group-hover:border-red-500/40 transition-colors duration-300">
                                                <Image
                                                    src={step.image}
                                                    alt={`Step ${step.number}: ${step.title}`}
                                                    width={400}
                                                    height={800}
                                                    className="w-full h-auto object-cover"
                                                />
                                                {/* Glass overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            {/* Arrow/direction indicator */}
                                            {step.direction && (
                                                <div className={`absolute -right-7 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-2xl text-red-400/60 ${isEven ? "left-auto -right-7" : "-right-7"}`}>
                                                    {step.direction}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                                                    Step {step.number} of {steps.length}
                                                </span>
                                                <div className="flex-1 h-px bg-white/[0.07]" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                                {step.title}
                                            </h3>

                                            <p className="text-white/60 text-sm leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Tip box */}
                                            <div className="flex gap-3 rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-3">
                                                <span className="text-orange-400 text-base shrink-0">💡</span>
                                                <p className="text-orange-200/80 text-xs leading-relaxed">
                                                    {step.tip}
                                                </p>
                                            </div>

                                            {/* Progress dots */}
                                            <div className="flex gap-2 pt-2">
                                                {steps.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-1.5 rounded-full transition-all ${i === index
                                                                ? "w-6 bg-[#e94560]"
                                                                : i < index
                                                                    ? "w-3 bg-[#e94560]/40"
                                                                    : "w-3 bg-white/20"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connector line between steps */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center mt-8">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-px h-6 bg-gradient-to-b from-red-500/40 to-transparent" />
                                                <div className="w-6 h-6 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 text-xs font-bold">
                                                    ↓
                                                </div>
                                                <div className="w-px h-6 bg-gradient-to-t from-red-500/40 to-transparent" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Final warning + contact */}
                {/* <section className="rounded-2xl border border-red-500/25 bg-gradient-to-br from-red-900/20 to-[#0f3460]/40 backdrop-blur-sm p-8 text-center">
                    <div className="text-4xl mb-4">🗑️</div>
                    <h2 className="text-xl font-bold text-white mb-3">
                        Still having trouble?
                    </h2>
                    <p className="text-white/55 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                        If you're unable to delete your account through the app or if you'd prefer us to handle it
                        for you, reach out to our support team and we'll process it within 7 business days.
                    </p>
                    <a
                        href="mailto:support@drema.com"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] hover:from-[#c73652] hover:to-[#e05555] text-white font-semibold text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-red-900/40"
                    >
                        ✉️ Contact Support
                    </a>
                </section> */}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/[0.06] py-8 text-center text-white/30 text-xs">
                © {new Date().getFullYear()} Drema · Creepy Shorts. All rights reserved. &nbsp;·&nbsp;
                <a href="/privacy-policy" className="hover:text-white/60 transition-colors underline underline-offset-2">
                    Privacy Policy
                </a>
                &nbsp;·&nbsp;
                <a href="/user-agreements" className="hover:text-white/60 transition-colors underline underline-offset-2">
                    User Agreement
                </a>
            </footer>
        </div>
    );
}