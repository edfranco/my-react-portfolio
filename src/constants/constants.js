import wayfarer from '../images/wayfarer.png';
import hikr from '../images/hikr.png';
import fieldr from '../images/fieldr.png';

export const PROJECTS = [
    {
        key: 1,
        name: 'Fieldr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Node, Express, and Mongoose for the backend.',
        image: fieldr,
        techUsed: 'HTML, CSS, JavaScript, Node, Express, Mongoose, Fetch'
    },
    {
        key: 2,
        name: 'Hikr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Python for the backend using Django.',
        image: hikr,
        techUsed: 'HTML, CSS, JavaScript, Python, Django, Bootstrap'
    },
    {
        key: 3,
        name: 'Wayfarer',
        content: 'A full stack app built with React and Node, Express and Mongoose for the back-end.',
        image: wayfarer,
        techUsed: 'React, Node, Express, Mongoose, Axios'
    }
];

export const MY_SERVER = 'http://localhost:4000';
