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
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
western,
galaxy,
great,
shortcast,
grip,
carrent,
jobit,
tripguide,
threejs,
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
    name: "TypeScript",
    icon: typescript,
},
{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Redux Toolkit",
    icon: redux,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "MongoDB",
    icon: mongodb,
},
{
    name: "Three JS",
    icon: threejs,
},
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
},
{
    name: "docker",
    icon: docker,
},
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
    title: "Backend Development Intern",
    company_name: "ShortCast Inc.",
    icon: shortcast,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2022",
    points: [
    "Created extensive and useful API’s with the help of of Django Rest Framework and Python for frontend to consume, significantly increased the performance by 55%.",
    "Collaborated with a small team in a startup environment, thereby fostering rapid development and gained experience of working in agile workflows.",
    "Successfully integrated third-party APIs into the platform, enhancing functionality and saving approximately 20 development hours per week.",

    ],
},
{
    title: "Frontend Development Intern",
    company_name: "Great Future Technologies Pvt. Ltd.",
    icon: great,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
    "Collaborated within a team of developers to create cutting-edge websites, leveraging React and JavaScript, and implemented complex functionality for six websites.",
    "Successfully met launch targets, delivering projects two weeks ahead of schedule.",
    "Assisted in optimizing website performance, resulting in a 20% reduction in page loading times for three websites.",
    "Developed front-end solutions as per superiors' directives, contributing to the successful delivery of multiple projects with strict adherence to timelines and requirements."
    ],
},
{
    title: "Backend Development Intern",
    company_name: "galaxy",
    icon: galaxy,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
    "Single-handedly developed a the APIs of a web application from scratch, meeting the client's demands within a 2-month internship period.",
    "Leveraged backend technologies, including Django and Python and efficiently collaborated with the frontend team, to create a highly performant application capable of handling 10,00+ monthly requests.",
    "Received positive feedback from the client, achieving a satisfaction rating of 95% or higher in project evaluations.",
    "Successfully delivered the project ahead of the agreed-upon schedule, showcasing efficient time management and adherence to deadlines."
    ],
},
// {
//     title: "Data Science & Business Analytics Intern",
//     company_name: "GRIP At The Sparks Foundation",
//     icon: grip,
//     iconBg: "#E6DEDD",
//     date: "May 2021 - July 2021",
//     points: [
//     "Single-handedly developed a the APIs of a web application from scratch, meeting the client's demands within a 2-month internship period.",
//     "Leveraged backend technologies, including Django and Python and efficiently collaborated with the frontend team, to create a highly performant application capable of handling 10,00+ monthly requests.",
//     "Received positive feedback from the client, achieving a satisfaction rating of 95% or higher in project evaluations.",
//     "Successfully delivered the project ahead of the agreed-upon schedule, showcasing efficient time management and adherence to deadlines."
//     ],
// },
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
    name: "Car Rent",
    description:
    "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "mongodb",
        color: "green-text-gradient",
    },
    {
        name: "tailwind",
        color: "pink-text-gradient",
    },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
},
{
    name: "Job IT",
    description:
    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "restapi",
        color: "green-text-gradient",
    },
    {
        name: "scss",
        color: "pink-text-gradient",
    },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
},
{
    name: "Trip Guide",
    description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
    {
        name: "nextjs",
        color: "blue-text-gradient",
    },
    {
        name: "supabase",
        color: "green-text-gradient",
    },
    {
        name: "css",
        color: "pink-text-gradient",
    },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
},
];

export { services, technologies, experiences, testimonials, projects };  