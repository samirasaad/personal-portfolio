declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module 'lenis/dist/lenis.css';
