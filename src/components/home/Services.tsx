"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Mic, PenTool, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Mentoring Akademik",
        description: "Bimbingan 1-on-1 via Zoom untuk penulisan Skripsi dan Tesis hukum.",
        icon: <BookOpen className="text-primary" size={32} />,
        price: "Mulai Rp 150.000",
        features: ["Review Draft Skripsi/Tesis", "Tips Metodologi Penelitian", "Sesi Konsultasi 60 Menit", "Feedback via Email"],
        cta: "Daftar Mentoring (WA)",
        href: "https://wa.me/6283891799266?text=Halo%20Lia,%20saya%20ingin%20daftar%20mentoring", // Updated to WA
        isHighlight: true,
    },
    {
        title: "MC Profesional",
        description: "Layanan MC profesional untuk acara Wedding, Engagement, dan Formal Event.",
        icon: <Mic className="text-accent" size={32} />,
        price: "Custom Price",
        features: ["Wedding MC", "Engagement MC", "Formal/Corporate Events", "Script Consulting"],
        cta: "Tanya Jadwal (WA)",
        href: "https://wa.me/6283891799266?text=Halo%20Lia,%20saya%20ingin%20tanya%20jadwal%20MC", // Placeholder
        isHighlight: false,
    },
    {
        title: "Research Assistant",
        description: "Dukungan riset mendalam untuk proyek akademis dan penulisan hukum.",
        icon: <PenTool className="text-secondary" size={32} />,
        price: "Custom Price",
        features: ["Literature Review", "Analisis Putusan Hukum", "Drafting Artikel Jurnal", "Pengumpulan Data"],
        cta: "Konsultasi Proyek",
        href: "https://wa.me/6283891799266?text=Halo%20Lia,%20saya%20ingin%20konsultasi%20riset", // Placeholder
        isHighlight: false,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-foreground/[0.02] dark:bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan & Mentoring</h2>
                    <p className="text-foreground/60 dark:text-foreground/50">
                        Dukung perjalanan akademis dan acara spesial Anda dengan bimbingan dan layanan profesional.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${service.isHighlight
                                ? "bg-card border-primary shadow-xl shadow-primary/5 scale-105 z-10"
                                : "bg-card/50 border-border hover:border-primary/20 hover:bg-card hover:shadow-lg"
                                }`}
                        >
                            {service.isHighlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                                    Paling Populer
                                </div>
                            )}

                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-sm text-foreground/60 dark:text-foreground/50 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mb-8">
                                <span className="text-2xl font-bold">{service.price}</span>
                                {service.price.includes("Mulai") && <span className="text-xs text-foreground/40 font-normal"> / sesi</span>}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={service.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${service.isHighlight
                                    ? "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/10"
                                    : "bg-white dark:bg-card text-foreground border border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {service.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
