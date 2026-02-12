import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Samira Saad Ragheb',
    email: 'samirasaad577@gmail.com',
    phone: '01287023737',
    location: 'Alexandria, Egypt',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Samira, I am reaching out to you because...',

    linkedinProfile: 'https://www.linkedin.com/in/samira-saad-13241b167',
    githubProfile: 'https://github.com/samirasaad',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/samirasaad' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/samira-saad-13241b167',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'React.js',
            icon: '/logo/react.svg',
        },
        {
            name: 'Next.js (App Router)',
            icon: '/logo/next.svg',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.svg',
        },
        {
            name: 'JavaScript (ES6+)',
            icon: '/logo/js.svg',
        },
        {
            name: 'Server Components',
            icon: '/logo/server.svg',
        },
        {
            name: 'Server Actions',
            icon: '/logo/server.svg',
        },
        {
            name: 'SSR',
            icon: '/logo/server.svg',
        },
        {
            name: 'SSG',
            icon: '/logo/server.svg',
        },
        {
            name: 'ISR',
            icon: '/logo/server.svg',
        },
        {
            name: 'Rendering Optimization',
            icon: '/logo/performance.svg',
        },
        {
            name: 'Modular Architecture',
            icon: '/logo/architecture.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.svg',
        },
        {
            name: 'SCSS',
            icon: '/logo/scss.svg',
        },
        {
            name: 'Material UI',
            icon: '/logo/mui.svg',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Code Splitting',
            icon: '/logo/performance.svg',
        },
        {
            name: 'Memoization',
            icon: '/logo/performance.svg',
        },
        {
            name: 'Lazy Loading',
            icon: '/logo/performance.svg',
        },
        {
            name: 'API Caching',
            icon: '/logo/performance.svg',
        },
        {
            name: 'Optimized Rendering',
            icon: '/logo/performance.svg',
        },
        {
            name: 'REST APIs',
            icon: '/logo/rest-api.svg',
        },
       
    ],
   
    stateManagement: [
        {
            name: 'Redux Toolkit',
            icon: '/logo/redux.svg',
        },
        {
            name: 'Redux Saga',
            icon: '/logo/redux.svg',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand.svg',
        },
        {
            name: 'RTK',
            icon: '/logo/redux.svg',
        },
    ],
    tools: [
       
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
        {
            name: 'Firestore',
            icon: '/logo/firebase.svg',
        },
        {
            name: 'Web Push Notifications',
            icon: '/logo/notifications.svg',
        },
        {
            name: 'Zoom SDK',
            icon: '/logo/zoom.svg',
        },
        {
            name: 'Socket.io',
            icon: '/logo/socketio.svg',
        },
       
        {
            name: 'Git',
            icon: '/logo/git.svg',
        },
        {
            name: 'GitLab',
            icon: '/logo/gitlab.svg',
        },
        {
            name: 'Bitbucket',
            icon: '/logo/bitbucket.svg',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.svg',
        },
        {
            name: 'ClickUp',
            icon: '/logo/clickup.svg',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursor.svg',
        },
        {
            name: 'Copilot',
            icon: '/logo/copilot.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'PhotoStore',
        slug: 'photo-store',
        liveUrl: 'https://photo-store-qckf.vercel.app/',
        year: 2025,
        description:
            'PhotoStore is a modern photo gallery and showcase platform where users can explore curated images in a clean, minimal UI. The app focuses on smooth browsing, responsive layouts, and an elegant viewing experience.',
        role: `As the frontend engineer, I:<br/>
        - Designed a clean, photography-first layout with a dark, premium visual style.<br/>
        - Implemented responsive grid layouts for images with smooth transitions.<br/>
        - Focused on performance and accessibility to keep navigation fast and intuitive.`,
        techStack: [ 'React', 'Javascript', 'Bootstrap','CSS','HTML','Redux'],
        thumbnail: '/projects/thumbnail/photostore.png',
        longThumbnail: '/projects/long/photostore.png',
        images: [
            '/projects/images/photostore.png',
            '/projects/images/photostore2.png',
            '/projects/images/photostore3.png',
            '/projects/images/photostore4.png',
            '/projects/images/photostore5.png',
        ],
    },
    {
        title: 'ChatBoard',
        slug: 'chatboard',
        liveUrl: 'https://chatting-app-gamma.vercel.app/Login',
        year: 2025,
        description:
            'ChatBoard is a real-time chat application that supports modern messaging patterns, including instant updates, multi-room conversations, and a clean, focused UI for day-to-day communication.',
        role: `As the sole frontend developer, I:<br/>
        - Built the chat interface with real-time updates and smooth auto-scroll behavior.<br/>
        - Structured the UI for multiple conversation flows with a focus on clarity and usability.<br/>
        - Ensured responsiveness and a consistent experience across desktop and mobile.`,
        techStack: [ 'React', 'Javascript', 'Bootstrap','CSS','HTML','Redux ,Redux Saga','Firebase'],
        thumbnail: '/projects/thumbnail/chatboard3.png',
        longThumbnail: '/projects/long/chatboard2.png',
        images: [
            '/projects/images/chatboard1.png',
            '/projects/images/chatboard2.png',
            '/projects/images/chatboard3.png',
            '/projects/images/chatboard4.png',
            '/projects/images/chatboard5.png',
        ],
    },
    {
        title: 'Personal Tech Blog',
        slug: 'samira-saad-blog',
        liveUrl: 'https://blog-samirasaad.vercel.app/',
        year: 2025,
        description:
            'A personal blog where I share articles about frontend engineering, React, Next.js, and real-world lessons from enterprise projects and teaching experiences.',
        role: `As the designer and developer, I:<br/>
        - Implemented a content-focused blog layout with strong typography and spacing.<br/>
        - Built reusable components for article lists, headers, and highlighted quotes.<br/>
        - Optimized for readability and performance across devices.`,
        techStack: ['Next','React', 'Javascript', 'Boottsrap','CSS','HTML','Firebase'],
        thumbnail: '/projects/thumbnail/blog1.png',
        longThumbnail: '/projects/long/blog1.png',
        images: [
            '/projects/images/blog1.png',
            '/projects/images/blog2.png',
            '/projects/images/blog3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Front-End Developer',
        company: 'Viggo Software',
        duration: 'Apr 2024 – Present',
        description:
            'Designing and building scalable admin dashboards and healthcare scheduling systems for veterinary and home-nursing workflows, with a strong focus on performance and UX.',
    },
    {
        title: 'Frontend Instructor',
        company: 'Learn It Academy',
        duration: 'Feb 2024 – Present',
        description:
            'Teaching React, TypeScript, and modern UI fundamentals, mentoring students through real-world projects, and promoting clean, scalable frontend architecture.',
    },
    {
        title: 'Seasonal Instructor',
        company: 'ITI (Information Technology Institute)',
        duration: 'May 2023 – Present',
        description:
            'Delivering React, HTML, CSS, and Bootstrap courses for multiple intakes, guiding trainees to build production-like interfaces and understand frontend best practices.',
    },
    {
        title: 'Front-End Developer',
        company: 'Ibtikar Technologies [Squadio]',
        duration: 'Jan 2020 – May 2024',
        description:
            'Led frontend architecture decisions across enterprise projects, built reusable component libraries, and mentored junior developers to elevate code quality.',
    },
    {
        title: 'UI Developer',
        company: 'Andalusia Group',
        duration: 'Feb 2019 – Jan 2020',
        description:
            'Built complex healthcare UI modules, including dental treatment simulations and clinical workflows, collaborating closely with medical teams to match real-world needs.',
    },
    {
        title: 'UI Developer',
        company: 'IEREK',
        duration: 'Nov 2018 – Feb 2019',
        description:
            'Maintained and enhanced academic submission and review portals, improving visual consistency, usability, and the overall researcher experience.',
    },
];
