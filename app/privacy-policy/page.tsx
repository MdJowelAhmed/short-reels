import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Drema",
    description:
        "Learn how Drema collects, uses, and safeguards your personal data. Read our full Privacy Policy including GDPR and CCPA disclosures.",
};

const sections = [
    {
        id: "introduction",
        title: "1. Introduction",
        icon: "👋",
        content:
            "Welcome to Drema. We respect your privacy and are committed to protecting the personal data of our subscribers. This policy explains how we collect, use, and safeguard your information when you use our video subscription services.",
    },
    {
        id: "data-we-collect",
        title: "2. Information We Collect",
        icon: "📊",
        content:
            "We collect information to provide a personalized streaming experience.",
        items: [
            {
                label: "Account Data",
                text: "Name, email address, and date of birth.",
            },
            {
                label: "Payment Information",
                text: "Processed securely through third-party providers (e.g., Apple Pay, Google Play, Stripe). We do not store full credit card numbers on our servers.",
            },
            {
                label: "Usage Data",
                text: "Viewing history, watch time, and interaction with AI-driven recommendation engines.",
            },
            {
                label: "Technical Data",
                text: "IP address, device type, browser information, and operating system.",
            },
        ],
    },
    {
        id: "how-we-use",
        title: "3. How We Use Your Data",
        icon: "🔍",
        content:
            "We process your data based on legal grounds such as contract performance and legitimate interest.",
        items: [
            {
                label: "Subscription Management",
                text: "To manage your subscription and process payments.",
            },
            {
                label: "Personalization",
                text: "To provide personalized video recommendations using Artificial Intelligence.",
            },
            {
                label: "Performance",
                text: "To improve site performance and security.",
            },
            {
                label: "Communication",
                text: "To communicate updates, marketing, and promotional offers (with your consent).",
            },
        ],
    },
    {
        id: "ai",
        title: "4. AI and Automated Decision-Making",
        icon: "🤖",
        content:
            "In compliance with 2026 regulations (e.g., EU AI Act), we disclose that our platform uses AI to personalize your content feed. You have the right to opt-out of such profiling in your Account Settings.",
    },
    {
        id: "data-sharing",
        title: "5. Data Sharing and Third Parties",
        icon: "🤝",
        content: "We do not sell your personal information. We share data only with:",
        items: [
            {
                label: "Service Providers",
                text: "Cloud hosting (e.g., AWS) and analytics tools.",
            },
            {
                label: "Legal Requirements",
                text: "To comply with law enforcement or court orders.",
            },
        ],
    },
    {
        id: "your-rights",
        title: "6. Your Rights and Choices",
        icon: "⚖️",
        content:
            "Depending on your location (GDPR, CCPA, etc.), you have the following rights:",
        items: [
            {
                label: "Access",
                text: "Request a copy of your personal data.",
            },
            {
                label: "Deletion",
                text: 'Request that we erase your data ("Right to be Forgotten").',
            },
            {
                label: "Correction",
                text: "Update inaccurate information in your profile.",
            },
            {
                label: "Opt-Out",
                text: "Withdraw consent for marketing or non-essential cookies.",
            },
        ],
    },
    {
        id: "children",
        title: "7. Children's Privacy",
        icon: "🧒",
        content:
            "Our service is not intended for children under 13. We do not knowingly collect data from minors. If we discover such data, it will be deleted immediately.",
    },
];

const highlights = [
    { label: "No data sold", icon: "🔒" },
    { label: "GDPR & CCPA compliant", icon: "✅" },
    { label: "AI opt-out available", icon: "🤖" },
    { label: "Encrypted payments", icon: "💳" },
];

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
            {/* Ambient background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                {/* top-left */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-float" />
                {/* bottom-right */}
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
                {/* center glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e94560]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                {/* top — a bit below the top edge */}
                <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />
                {/* left side — mid height */}
                <div className="absolute top-[45%] -left-16 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.2s' }} />
            </div>

            {/* Hero Header */}
            <header className="relative pt-20 pb-16 px-6 text-center border-white/[0.06]">
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.10] rounded-full px-4 py-1.5 text-xs text-cyan-300 font-medium mb-6 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                    Legal Document
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    Privacy Policy
                </h1>
                <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
                    Effective Date:{" "}
                    <span className="text-white/70">January 12, 2026</span>
                    &nbsp;·&nbsp; Last Updated:{" "}
                    <span className="text-white/70">January 12, 2026</span>
                </p>

                {/* Highlight pills */}
                {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {highlights.map((h) => (
                        <div
                            key={h.label}
                            className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.09] rounded-full px-4 py-2 text-xs text-white/70 font-medium"
                        >
                            <span>{h.icon}</span>
                            {h.label}
                        </div>
                    ))}
                </div> */}
            </header>

            {/* Main content */}
            <main className="max-w-4xl mx-auto px-6 pb-16 space-y-8">
                {/* Sections */}
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300"
                    >
                        {/* Section header */}
                        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/[0.06] bg-white/[0.02]">
                            <span className="text-2xl">{section.icon}</span>
                            <h2 className="text-lg font-semibold text-white tracking-tight">
                                {section.title}
                            </h2>
                        </div>

                        {/* Section body */}
                        <div className="px-6 py-5 space-y-4">
                            {section.content && (
                                <p className="text-white/55 text-sm leading-relaxed">
                                    {section.content}
                                </p>
                            )}

                            {section.items && (
                                <div className="space-y-3 mt-2">
                                    {section.items.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                                            <div>
                                                <span className="font-semibold text-white/90 text-sm">
                                                    {item.label}:{" "}
                                                </span>
                                                <span className="text-white/55 text-sm leading-relaxed">
                                                    {item.text}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Contact card */}
                {/* <section
                    id="contact"
                    className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm p-8 text-center"
                >
                    <div className="text-3xl mb-3">📬</div>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        8. Contact Us
                    </h2>
                    <p className="text-white/55 text-sm mb-2 max-w-md mx-auto">
                        For any privacy-related inquiries or to exercise your rights, please
                        contact our Data Protection Officer.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
                        <a
                            href="mailto:support@drema.com"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-cyan-900/30"
                        >
                            ✉️ support@drema.com
                        </a>
                    </div>
                </section> */}
            </main>

            {/* Footer strip */}
            <footer className="border-t border-white/[0.06] py-8 text-center text-white/30 text-xs">
                © {new Date().getFullYear()} Drema. All rights reserved. &nbsp;·&nbsp;
                <a
                    href="/user-agreements"
                    className="hover:text-white/60 transition-colors underline underline-offset-2"
                >
                    User Agreement
                </a>

                <a
                    href="/delete-account"
                    className="hover:text-white/60 transition-colors underline underline-offset-2"
                >
                    Delete Account
                </a>
            </footer>
        </div>
    );
}