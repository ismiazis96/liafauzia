"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "Public Speaking & MC", level: 95 },
    { name: "Legal Analysis & Research", level: 90 },
    { name: "Academic Writing", level: 85 },
    { name: "Communication Skills", level: 95 },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-sm tracking-wide">{skill.name}</span>
                                        <span className="text-primary font-bold text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Tentang <span className="text-primary italic">Lia Fauziyyah</span>
                        </h2>
                        <div className="space-y-6 text-foreground/70 dark:text-foreground/60 leading-relaxed">
                            <p>
                                Saya adalah lulusan Megister Hukum (M.H.) dengan fokus pada riset dan pengembangan akademik. Memiliki latar belakang pendidikan yang kuat dan pengalaman praktis dalam dunia hukum dan event management.
                            </p>
                            <p>
                                Sebagai seorang akademisi, saya percaya bahwa ilmu pengetahuan harus dibagikan dan dikembangkan. Peran saya sebagai Research Assistant memungkinkan saya untuk menyelami isu-isu hukum kontemporer secara mendalam.
                            </p>
                            <p>
                                Di luar dunia akademik, saya mendedikasikan diri sebagai MC Profesional, menghubungkan momen berharga dengan narasi yang indah dan berkesan.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                            <div>
                                <dt className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-1">Education</dt>
                                <dd className="font-bold">S1 & S2 Hukum</dd>
                            </div>
                            <div>
                                <dt className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-1">Based In</dt>
                                <dd className="font-bold">Indonesia</dd>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
