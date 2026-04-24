"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase } from "lucide-react";

const experiences = [
    {
        category: "Akademik & Riset",
        icon: <GraduationCap size={24} className="text-primary" />,
        items: [
            { title: "Dosen Hukum", detail: "Pengalaman mengajar di berbagai institusi tinggi." },
            { title: "Research Assistant", detail: "Membantu proyek riset hukum berskala nasional." },
            { title: "Penulis Artikel Hukum", detail: "Publikasi di jurnal hukum terakreditasi." },
        ],
    },
    {
        category: "Professional MC",
        icon: <Trophy size={24} className="text-accent" />,
        items: [
            { title: "Wedding MC", detail: "Ratusan acara pernikahan dengan berbagai adat." },
            { title: "Engagement MC", detail: "Momen tunangan yang hangat dan berkesan." },
            { title: "Formal Events", detail: "Seminar, Workshop, dan Acara Kenegaraan." },
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Jejak <br /><span className="text-primary">Profesional</span></h2>
                        <p className="text-foreground/60 dark:text-foreground/50 mb-8">
                            Perjalanan karir yang menggabungkan kedalaman intelektual dan kepiawaian dalam komunikasi publik.
                        </p>
                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <div className="text-3xl font-bold text-primary mb-1">5+</div>
                            <div className="text-xs uppercase tracking-widest font-bold text-foreground/40">Tahun Pengalaman</div>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                        {experiences.map((category, catIndex) => (
                            <div key={category.category} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-card shadow-md rounded-lg border border-border">{category.icon}</div>
                                    <h3 className="font-bold text-lg">{category.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: catIndex * 0.2 + itemIndex * 0.1 }}
                                            className="p-5 bg-card/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5 transition-all border border-border hover:border-primary/10 rounded-xl group"
                                        >
                                            <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-sm text-foreground/50 dark:text-foreground/40">{item.detail}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
