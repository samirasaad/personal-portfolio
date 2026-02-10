'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="relative mt-10">
                    {/* Vertical timeline line */}
                    <div
                        className="absolute left-4 top-0 bottom-0 w-px bg-border/50 md:left-1/2"
                        aria-hidden="true"
                    />

                    <div className="space-y-10 md:space-y-16">
                        {MY_EXPERIENCE.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={`${item.company}-${index}`}
                                    className="experience-item relative md:grid md:grid-cols-2 md:gap-10"
                                >
                                    {/* Connector dot */}
                                    <div className="absolute left-4 -translate-x-1/2 top-3 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                                        <div className="size-3 rounded-full border-2 border-background bg-foreground shadow-md" />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={cn(
                                            'pl-10 md:pl-0 md:pr-10 flex',
                                            isLeft
                                                ? 'md:justify-end'
                                                : 'md:col-start-2',
                                        )}
                                    >
                                        <div className="relative w-full max-w-xl rounded-2xl border bg-background/70 backdrop-blur-sm p-5 md:p-6 shadow-sm">
                                            <p className="text-primary text-xs tracking-[0.25em] uppercase text-muted-foreground">
                                                {item.duration}
                                            </p>
                                            <p className="text-2xl md:text-3xl font-anton leading-tight mt-2">
                                                {item.title}
                                            </p>
                                            <p className="text-base md:text-lg text-muted-foreground mt-1.5">
                                                {item.company}
                                            </p>
                                            {item.description && (
                                                <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
