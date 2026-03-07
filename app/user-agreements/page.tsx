import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Agreement | Drema",
    description:
        "Read Drema's Terms of Service and User Agreement. Understand your rights, subscription terms, content usage policies, and more.",
};

const sections = [
    {
        id: "eligibility",
        title: "1. Eligibility & Account",
        icon: "👤",
        items: [
            {
                label: "Age",
                text: "You must be at least 18 years old to subscribe. Users under 18 may only use the service under the supervision of a parent or guardian.",
            },
            {
                label: "Accuracy",
                text: "You agree to provide accurate information and keep your account credentials confidential. You are responsible for all activity under your account.",
            },
        ],
    },
    {
        id: "subscription",
        title: "2. Subscription & Payments",
        icon: "💳",
        items: [
            {
                label: "Billing",
                text: "By starting a subscription, you authorize us to charge a recurring fee (weekly, monthly, or annually) to your chosen payment method.",
            },
            {
                label: "Auto-Renewal",
                text: "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing cycle.",
            },
            {
                label: "Refunds",
                text: "Payments are non-refundable except where required by local law. Access continues until the end of the paid billing period.",
            },
            {
                label: "Price Changes",
                text: "We reserve the right to change pricing. You will be notified via email at least 30 days in advance of any price adjustments.",
            },
        ],
    },
    {
        id: "license",
        title: "3. License & Content Usage",
        icon: "🎬",
        items: [
            {
                label: "Limited License",
                text: "Drema grants you a personal, non-exclusive, non-transferable license to stream content for private, non-commercial use only.",
            },
            {
                label: "Prohibited Acts",
                text: "You may not record, download (except via official offline features), redistribute, or perform our content in public settings.",
            },
            {
                label: "Digital Rights Management (DRM)",
                text: "Our content is protected by encryption. Any attempt to bypass our security measures will result in immediate account termination.",
            },
        ],
    },
    {
        id: "ai",
        title: "4. AI and Recommendation Features",
        icon: "🤖",
        items: [
            {
                label: "AI-Powered Curation",
                text: "Our platform utilizes Artificial Intelligence to curate your viewing experience and generate recommendations. By using the service, you acknowledge that content presentation may be automated.",
            },
        ],
    },
    {
        id: "conduct",
        title: "5. User Conduct",
        icon: "🛡️",
        items: [
            {
                label: "Prohibited Behavior",
                text: "You agree not to use the service to transmit malware or automated bots, engage in data mining or scraping of our video library, or share your account password with individuals outside your immediate household.",
            },
        ],
    },
    {
        id: "termination",
        title: "6. Termination",
        icon: "⚠️",
        items: [
            {
                label: "Account Suspension",
                text: "We reserve the right to suspend or terminate your account without notice if you violate this Agreement or engage in fraudulent activity. Upon termination, your right to access the content library ceases immediately.",
            },
        ],
    },
    {
        id: "liability",
        title: "7. Limitation of Liability",
        icon: "⚖️",
        items: [
            {
                label: "As-Is Service",
                text: 'Drema is provided "as is." We do not guarantee that the service will be uninterrupted or error-free. To the maximum extent permitted by law, we are not liable for any indirect or incidental damages arising from your use of the platform.',
            },
        ],
    },
    {
        id: "law",
        title: "8. Governing Law",
        icon: "🌐",
        items: [
            {
                label: "Jurisdiction",
                text: "This Agreement is governed by applicable laws. Any disputes shall be resolved through binding arbitration in the relevant jurisdiction.",
            },
        ],
    },
];

export default function UserAgreements() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
            {/* Ambient background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e94560]/5 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Hero Header */}
            <header className="relative pt-20 pb-16 px-6 text-center border-b border-white/[0.06]">
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.10] rounded-full px-4 py-1.5 text-xs text-purple-300 font-medium mb-6 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
                    Legal Document
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
                    User Agreement
                </h1>
                <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
                    Last Updated: <span className="text-white/70">January 12, 2026</span>
                    &nbsp;·&nbsp; Effective for all Drema subscribers
                </p>
            </header>

            {/* Main content */}
            <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
                {/* Intro card */}
                <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-blue-900/10 backdrop-blur-sm p-6">
                    <p className="text-white/70 leading-relaxed text-sm">
                        Welcome to <span className="text-purple-300 font-semibold">Drema</span>. By creating an account or accessing our services, you agree to be bound by the following terms. Please read them carefully before using the platform.
                    </p>
                </div>

                {/* Sections */}
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300"
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
                            {section.items.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
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
                    </section>
                ))}

                {/* Contact card */}
                <section
                    id="contact"
                    className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-purple-900/10 backdrop-blur-sm p-8 text-center"
                >
                    <div className="text-3xl mb-3">✉️</div>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        9. Contact Information
                    </h2>
                    <p className="text-white/55 text-sm mb-5 max-w-sm mx-auto">
                        If you have questions regarding these terms, our support team is happy to help.
                    </p>
                    <a
                        href="mailto:support@drema.com"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-purple-900/30"
                    >
                        support@drema.com
                    </a>
                </section>
            </main>

            {/* Footer strip */}
            <footer className="border-t border-white/[0.06] py-8 text-center text-white/30 text-xs">
                © {new Date().getFullYear()} Drema. All rights reserved. &nbsp;·&nbsp;
                <a href="/privacy-policy" className="hover:text-white/60 transition-colors underline underline-offset-2">
                    Privacy Policy
                </a>
            </footer>
        </div>
    );
}