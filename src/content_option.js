import filmzone from "./assets/images/filmzone.jpg"
import call from "./assets/images/call.jpg"
import komparativistika from "./assets/images/komparativistika.jpg"
import ubtuit from "./assets/images/ubtuit.jpg"
import tahlil from "./assets/images/tahlil.jpg"



const logotext = "XayrulloWeb";
const meta = {
    title: "Xayrullo",
    description: "I’m Xayrullo data scientist _ Front-End devloper,currently working in Urgench",
};

const introdata = {
    title: "I’m Xayrullo ",
    animated: {
        first: "I am lazy",
        second: "I love coding",
        third: "I develop Websites",
    },
    description: "Raxmonberganov Xayrullo is a front-end developer who creates user-friendly and aesthetic interfaces. Attentive to details, responsible, purposeful and strives for an ideal result.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Briefly about my self",
    aboutme: "Raxmonberganov Xayrullo is a front-end developer who creates user-friendly and aesthetic interfaces. Attentive to details, responsible, purposeful and strives for an ideal result.",
};
const worktimeline = [{
    jobtitle: "Front-End developer",
    where: "Ubtuit",
    date: "2024",
},
{
    jobtitle: "Front-End developer",
    where: "Amusoft",
    date: "2025",
},
// {
//     jobtitle: "Designer of week",
//     where: "ALquds",
//     date: "2019",
// },
];

const skills = [{
    name: "Html",
    value: 90,
},
{
    name: "Css",
    value: 75,
},
{
    name: "Javascript",
    value: 40,
},
{
    name: "React",
    value: 70,
},
{
    name: "Jquery",
    value: 45,
},
{
    name: "Gsap",
    value: 35,
},
];

const services = [{
    title: "Web development ",
    description: "Creation of modern and user-friendly websites with thoughtful UX/UI   ",
},
{
    title: "Optimization and improvement",
    description: "Improved performance, redesign and introduction of new features.",
},
{
    title: "Mobile development(Test)",
    description: "Development of cross-platform applications at Expo.",
},
];

const dataportfolio = [{
    img: filmzone,
    title: "FilmZone",
    tag1: "React",
    tag2: "Javascript",
    description: "FilmZone is my own movie site where users can search for movies, view information about them, and add them to their watch list.",
    link: "https://filmzonee.netlify.app/",
},
{
    img: call,
    title: "Call Centre",
    tag1: "Html",
    tag2: "Laravel",
    description: "Welcome to the one-stop safe travel service center!.",
    link: "http://tourismservice.uz/",
},
{
    img: komparativistika,
    title: "Komparativistika Platform",
    tag1: "Html",
    tag2: "Laravel",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://komparativistika.uz/",
},
{
    img: ubtuit,
    title: "Ubtuit University",
    tag1: "Html",
    tag2: "Laravel",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.ubtuit.uz/",
},
{
    img: tahlil,
    title: "ANALYSIS AND INTERPRETATION",
    tag1: "Html",
    tag2: "Laravel",
    description: "Requirements for submitting an article.",
    link: "https://rahimbergan.netlify.app/",
},

];

const contactConfig = {
    YOUR_EMAIL: "xayrulloweb@gmail.com",
    YOUR_FONE: "+998(99)-564-02-01",
    description: "Ready for cooperation and new projects! Contact me in a convenient way:",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_wis39e1",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/XayrulloWeb",
    instagram: "https://www.instagram.com/xayrullo01_02/",
    linkedin: "https://www.linkedin.com/in/xayrullo-raxmonberganov-89bbab343/",
    telegram: "https://t.me/Xayrullo01_02",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};