import {
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
css,
reactjs,
tailwind,
django,
mongodb,
git,
dsa,
next,
western,
galaxy,
great,
shortcast,
grip,
pictopia,
vidverse,
beatbox,
coderverse,
illusiogen,
python,
cpp,
sql,
postgresql,
machine,
insta,
twitter,
linkedin,
novelnest,
skyvoyage,
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},
{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Full-Stack Web Developer",
    icon: web,
},
{
    title: "Data Structures and Algorithms",
    icon: mobile,
},
{
    title: "Machine Learning Enthusiast",
    icon: creator,
},
{
    title: "Data Analysis",
    icon: backend,
},
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "Python",
    icon: python,
},
{
    name: "C++",
    icon: cpp,
},
{
    name: "TypeScript",
    icon: typescript,
},
{
    name: "git",
    icon: git,
},

{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Next JS",
    icon: next,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Django",
    icon: django,
},
{
    name: "SQL",
    icon: sql,
},
{
    name: "MongoDB",
    icon: mongodb,
},
// {
//     name: "Machine Learning",
//     icon: machine,
// },
// {
//     name: "Data Structures and Algorithms",
//     icon: dsa,
// },

];

const experiences = [
{
    title: "Teaching Assistant",
    company_name: "Western University",
    icon: western,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
    "Assisted 100+ students with lab experiments and provided TA hours for doubts.",
    "Achieved 30% higher performance outcomes among students completing lab experiments.",
    "Graded assignments, lab reports, and exams for the course.",
    "Facilitated classroom discussions and Q&A sessions to engage students actively."
    ],
},
{
    title: "Backend Developer",
    company_name: "ShortCast Inc.",
    icon: shortcast,
    iconBg: "#383E56",
    date: "Jul 2021 – Aug 2022",
    points: [
    "Created extensive and useful API’s with the help of Django Rest Framework and Python for frontend to consume, significantly increased the performance by 55%.",
    "Collaborated with a small team in a startup environment, thereby fostering rapid development and gained experience of working in agile workflows.",
    "Successfully integrated third-party APIs into the platform, enhancing functionality and saving approximately 20 development hours per week.",

    ],
},
{
    title: "Frontend Developer",
    company_name: "Great Future Technologies Pvt. Ltd.",
    icon: great,
    iconBg: "#E6DEDD",
    date: "Apr 2020 – Jun 2021",
    points: [
    "Collaborated within a team of developers to create cutting-edge websites, leveraging React and JavaScript, implemented complex functionality for six websites.",
    "Successfully met launch targets, delivering projects two weeks ahead of schedule.",
    "Assisted in optimizing website performance, resulting in a 20% reduction in page loading times for three websites.",
    "Developed front-end solutions as per superiors' directives, contributing to the successful delivery of multiple projects with strict adherence to timelines and other requirements."
    ],
},
{
    title: "Backend Development Intern",
    company_name: "galaxy",
    icon: galaxy,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Mar 2020",
    points: [
    "Single-handedly developed the APIs of a web application from scratch, meeting the client's demands, within a 2-month internship period.",
    "Leveraged backend technologies, including Django and Python and efficiently collaborated with the frontend team, to create a highly performant application capable of handling 10,00+ monthly requests.",
    "Received positive feedback from the client, achieving a satisfaction rating of 95% or higher in project evaluations.",
    "Successfully delivered the project ahead of the agreed-upon schedule, showcasing efficient time management and adherence to deadlines."
    ],
},
{
    title: "Data Science & Business Analytics Intern",
    company_name: "GRIP At The Sparks Foundation",
    icon: grip,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jan 2021",
    points: [
    "Led a 2-month-long machine learning internship project with remarkable results.",
    "Achieved a substantial 30% improvement in prediction accuracy compared to the previous model.",
    "Engineered a highly efficient machine learning pipeline, reducing processing time by 40%.",
    "Presented project findings at a company-wide seminar, earning recognition for innovation and potential business impact."
    ],
},
];

const testimonials = [
{
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
    name: "PicTopia",
    description:
    "web application inspired by Pinterest, providing users with a platform to discover, save, and comment on inspiring images. Built using React and JavaScript, Pictopia allows users to create collections, browse through a wide variety of images, and engage with the community through comments.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "javascript",
        color: "green-text-gradient",
    },
    {
        name: "sanity",
        color: "pink-text-gradient",
    },
    ],
    image: pictopia,
    source_code_link: "https://github.com/shubhjhawar/pictopia",
    live_demo_link: "https://pictopiaaa.netlify.app/"
},
{
    name: "NovelNest",
    description:
    "NovelNest is a sophisticated book e-commerce website built with React, offering a seamless and visually appealing experience for book enthusiasts. The design, meticulously crafted in Figma, lends a touch of class to the user interface, making browsing and shopping for books a delight.",
    tags: [
    {
        name: "React",
        color: "blue-text-gradient",
    },
    {
        name: "GoogleAPI",
        color: "green-text-gradient",
    },
    {
        name: "tailwind",
        color: "pink-text-gradient",
    },
    ],
    image: novelnest,
    source_code_link: "https://github.com/pallavee-2705/novelnest",
    live_demo_link: "https://novelnest-gamma.vercel.app/"

},
{
    name: "Illusiogen",
    description:
    "simple yet powerful full-stack web application that utilizes OpenAI's DALL-E image generation API to bring your imagination to life. It allows users to create and share images based on prompts they provide, which are then generated by the AI model.",
    tags: [
    {
        name: "react-vite",
        color: "blue-text-gradient",
    },
    {
        name: "NodeJS",
        color: "pink-text-gradient",
    },
    {
        name: "MongoDB",
        color: "green-text-gradient",
    },
    {
        name: "OpenAI",
        color: "orange-text-gradient",
    },
    ],
    image: illusiogen,
    source_code_link: "https://github.com/shubhjhawar/illusiogen",
    live_demo_link: "https://illusiogen.vercel.app/"

},
{
    name: "BeatBox",
    description:
    "an e-commerce website for sound accessories, offering a seamless shopping experience for users. With a fully responsive design, it allows users to browse, add items to their cart, and pay through a secure payment gateway",
    tags: [
    {
        name: "NextJS",
        color: "blue-text-gradient",
    },
    {
        name: "Sanity",
        color: "pink-text-gradient",
    },
    {
        name: "Stripe",
        color: "green-text-gradient",
    },
    ],
    image: beatbox,
    source_code_link: "https://github.com/shubhjhawar/beatbox",
    live_demo_link: "https://beatbox-ekrtmg8cy-shubhjhawar.vercel.app/"

},
{
    name: "CoderVerse",
    description:
    "a landing page project that showcases a slick and futuristic design inspired by the metaverse. It utilizes motion effects from the framer-motion library to create an engaging and dynamic user experience.",
    tags: [
    {
        name: "NextJS",
        color: "blue-text-gradient",
    },
    {
        name: "Tailwind",
        color: "pink-text-gradient",
    },
    {
        name: "Framer-Motion",
        color: "green-text-gradient",
    },
    ],
    image: coderverse,
    source_code_link: "https://github.com/shubhjhawar/coderverse",
    live_demo_link: "https://coderverse.vercel.app/"

},
{
    name: "SkyVoyage",
    description:
    "a lightweight and aesthetically pleasing flight booking system. This project allows users to seamlessly sign up or log in, search for flights, and book their desired flights. The frontend is developed using React with Tailwind CSS, while the backend is powered by Django Rest Framework in Python.",
    tags: [
    {
        name: "React",
        color: "blue-text-gradient",
    },
    {
        name: "Tailwind",
        color: "pink-text-gradient",
    },
    {
        name: "Django",
        color: "green-text-gradient",
    },
    ],
    image: skyvoyage,
    source_code_link: "https://github.com/shubhjhawar/skyvoyage",
    live_demo_link: "https://skyvoyage.vercel.app/"

},
];

const footerDetails = [
    {
        img:linkedin,
        link:"https://www.linkedin.com/in/shubh-jhawar-069587192/"
    },
    {
        img:insta,
        link:"https://www.instagram.com/shubhj_45/"
    },
    
    {
        img:twitter,
        link:"https://twitter.com/ShubhJhawar3"
    }
]

export { services, technologies, experiences, testimonials, projects, footerDetails };  