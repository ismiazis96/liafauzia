"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Professional Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
                        Lia Fauziyyah A., <br />
                        <span className="text-primary">S.H., M.H.</span>
                    </h1>
                    <p className="text-lg text-foreground/70 dark:text-foreground/60 mb-8 max-w-lg leading-relaxed">
                        Seorang akademisi hukum, MC profesional, dan research assistant yang berdedikasi untuk memberikan kontribusi nyata melalui pendidikan dan riset yang berkualitas.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#services"
                            className="px-8 py-4 bg-primary text-white hover:text-white rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2 group shadow-lg shadow-primary/20"
                        >
                            Lihat Layanan
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-border rounded-full font-semibold hover:bg-foreground/5 transition-all text-foreground"
                        >
                            Hubungi Saya
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-sm mx-auto">
                        <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl transform rotate-6 scale-105" />
                        <div className="absolute inset-0 bg-card rounded-2xl shadow-2xl overflow-hidden border border-border flex items-center justify-center">
                            {/* 
                                CARA MENAMBAHKAN FOTO:
                                1. Simpan foto Anda di folder /public/images/profile.jpg
                                2. Ganti src di bawah menjadi "/images/profile.jpg"
                            */}
                            <div className="relative w-full h-full">
                                <Image
                                    // src="https://via.placeholder.com/600x600?text=Lia+Fauziyyah" // Ganti dengan path foto asli Anda
                                    src="/images/profile.jpg" // Ganti dengan path foto asli Anda
                                    alt="Lia Fauziyyah"
                                    fill
                                    className="object-cover opacity-50 contrast-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/20 text-white/40 text-[10px] text-center p-4 uppercase tracking-widest font-bold">

                                </div>
                            </div>
                        </div>

                        {/* Achievement badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border"
                        >
                            <div className="text-2xl font-bold text-primary leading-none">S2 Hukum</div>
                            <div className="text-[10px] text-foreground/60 uppercase tracking-widest font-bold mt-1">Lulusan Terbaik</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border border-border"
                        >
                            <div className="text-2xl font-bold text-accent leading-none">MC</div>
                            <div className="text-[10px] text-foreground/60 uppercase tracking-widest font-bold mt-1">100+ Events</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
