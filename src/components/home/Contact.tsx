"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-foreground/[0.02] dark:bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-xl overflow-hidden border border-border flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-primary p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
                        <p className="text-white/70 mb-12">
                            Ada pertanyaan tentang mentoring atau ingin kolaborasi? Hubungi saya kapan saja.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Email</div>
                                    <div className="font-medium">liafauziyyah@example.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">WhatsApp</div>
                                    <div className="font-medium">+62 812 XXXX XXXX</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <div className="text-xs text-white/40 mb-4 uppercase tracking-[0.2em] font-bold">Social Media</div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-white/20 rounded-lg hover:bg-white/40 transition-colors cursor-pointer" />
                                <div className="w-8 h-8 bg-white/20 rounded-lg hover:bg-white/40 transition-colors cursor-pointer" />
                                <div className="w-8 h-8 bg-white/20 rounded-lg hover:bg-white/40 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 p-12">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get("name");
                                const email = formData.get("email");
                                const subject = formData.get("subject");
                                const message = formData.get("message");
                                const waMessage = `Halo Lia, saya ${name} (${email}).%0A%0ASubjek: ${subject}%0A%0APesan: ${message}`;
                                window.open(`https://wa.me/6281234567890?text=${waMessage}`, "_blank");
                            }}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-foreground/60">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-foreground/[0.03] border border-border focus:border-primary focus:bg-card outline-none rounded-xl transition-all"
                                        placeholder="Contoh: John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-foreground/60">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-foreground/[0.03] border border-border focus:border-primary focus:bg-card outline-none rounded-xl transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-foreground/60">Subjek</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-foreground/[0.03] border border-border focus:border-primary focus:bg-card outline-none rounded-xl transition-all"
                                >
                                    <option value="mentoring">Mentoring Akademik</option>
                                    <option value="mc">Layanan MC</option>
                                    <option value="research">Research Assistance</option>
                                    <option value="other">Lainnya</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-foreground/60">Pesan</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-foreground/[0.03] border border-border focus:border-primary focus:bg-card outline-none rounded-xl transition-all"
                                    placeholder="Tuliskan pesan Anda di sini..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white hover:text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-all flex items-center justify-center gap-2 group"
                            >
                                Kirim Pesan (WA)
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
