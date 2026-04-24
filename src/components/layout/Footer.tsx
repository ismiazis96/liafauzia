import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
                            LIA FAUZIYYAH
                        </Link>
                        <p className="text-sm text-foreground/60 mt-2">
                            Akademisi | MC Profesional | Research Assistant
                        </p>
                    </div>

                    <div className="flex space-x-6 text-sm font-medium">
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40">
                    <p>© {new Date().getFullYear()} Lia Fauziyyah A., S.H., M.H. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed for Professionalism & Excellence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
