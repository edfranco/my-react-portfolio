import wayfarer from '../images/wayfarer.png';
import hikr from '../images/hikr.png';
import fieldr from '../images/fieldr.png';
import foodenvy from '../images/foodenvy.png';

export const PROJECTS = [
    {
        key: 1,
        name: 'Fieldr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Node, Express, and Mongoose for the backend.',
        image: fieldr,
        techUsed: 'HTML, CSS, JavaScript, Node, Express, Mongoose, Fetch',
        github: 'https://github.com/edfranco/fieldr',
        deployed: 'https://edfranco.github.io/login'
    },
    {
        key: 2,
        name: 'Hikr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Python for the backend using Django.',
        image: hikr,
        techUsed: 'HTML, CSS, JavaScript, Python, Django, Bootstrap',
        github: 'https://github.com/edfranco/hikr',
        deployed: 'https://go-hikr.herokuapp.com/'
    },
    {
        key: 3,
        name: 'Wayfarer',
        content: 'A full stack app built with React and Node, Express and Mongoose for the back-end.',
        image: wayfarer,
        techUsed: 'React, Node, Express, Mongoose, Axios',
        github: 'https://github.com/edfranco/wayfarer',
        deployed: 'https://edfranco.github.io/login'
    },
    {
        key: 4,
        name: 'FoodEnvy',
        content: 'A social media site built over 7 days. This site was built using the MERN stack. This site is built upon users posting photos of food they ate and what restaurant they ate it at. These restauarants have a profile as well that show all their posts',
        image: foodenvy,
        techUsed: 'React, Node, Express, Mongoose, Axios, Google Maps API',
        github: 'https://github.com/edfranco/foodenvy-frontend',
        deployed: 'https://edfranco.github.io/foodenvy-frontend/'
    },
];

export const MY_SERVER = 'https://server-eduardofranco.herokuapp.com';
