/* eslint-disable @next/next/no-img-element */
'use client';
import { GENERAL_INFO } from '@/lib/data';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyPhone = () => {
        const phone = GENERAL_INFO.phone?.trim();
        if (!phone) return;

        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard
                .writeText(phone)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(() => {
                    // fail silently if clipboard is not available
                });
        }
    };

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>

                <div className="mt-3 flex flex-col items-center gap-1 text-sm text-muted-foreground">
                    {GENERAL_INFO.email && (
                        <p
                            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            <span>{GENERAL_INFO.email}</span>
                        </p>
                    )}
                    {GENERAL_INFO.phone && GENERAL_INFO.phone.trim() !== '' && (
                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                onClick={handleCopyPhone}
                                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>{GENERAL_INFO.phone}</span>
                            </button>
                            {copied && (
                                <span className="text-xs text-primary">
                                    Copied to clipboard
                                </span>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-5 flex justify-center gap-4">
                    {GENERAL_INFO.githubProfile && (
                        <a
                            href={GENERAL_INFO.githubProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/80 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {GENERAL_INFO.linkedinProfile && (
                        <a
                            href={GENERAL_INFO.linkedinProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/80 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
