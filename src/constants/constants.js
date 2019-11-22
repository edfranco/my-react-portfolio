import mySite from '../images/my-site.png';
import hikr from '../images/hikr.png';
import fieldr from '../images/fieldr.png';
import foodenvy from '../images/foodenvy.png';
import rpg from '../images/rpg.png';

export const PROJECTS = [
    {
        key: 0,
        name: 'My Portfolio',
        content: "In case you wanted extra information on my portfolio, here you can find the code used to create this website. I used React for the front-end and it was built using Custom CSS including uses of Flexbox and CSS Grid. Additionally I created a server with Node.js to create a working contact form",
        images: [mySite],
        techUsed: 'React, Node, Nodemailer, Heroku',
        github: 'https://github.com/edfranco/my-react-portfolio',
        deployed: 'http://eduardofranco.me'
    },
    {
        key: 1,
        name: 'Fieldr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Node, Express, and Mongoose for the backend.',
        images: [fieldr],
        techUsed: 'HTML, CSS, JavaScript, Node, Express, Mongoose, Fetch',
        github: 'https://github.com/edfranco/fieldr',
        deployed: 'https://gofieldr.herokuapp.com/'
    },
    {
        key: 2,
        name: 'Hikr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Python for the backend using Django.',
        images: [hikr],
        techUsed: 'HTML, CSS, JavaScript, Python, Django, Bootstrap',
        github: 'https://github.com/edfranco/hikr',
        deployed: 'https://go-hikr.herokuapp.com/'
    },
    {
        key: 3,
        name: 'FoodEnvy',
        content: 'A social media site built over 7 days. This site was built using the MERN stack. This site is built upon users posting photos of food they ate and what restaurant they ate it at. These restauarants have a profile as well that show all their posts',
        images: [foodenvy],
        techUsed: 'React, Node, Express, Mongoose, Axios, Google Maps API',
        github: 'https://github.com/edfranco/foodenvy-frontend',
        deployed: 'https://edfranco.github.io/foodenvy-frontend/'
    },
    {
        key: 4,
        name: 'RPG Remastered',
        content: `Are you a fan of table 
        top games like Dungeons and Dragons? 
        Did you you enjoy games like the Elder Scrolls 
        Games, Fallout, and The Witcher? Awesome! 
        This is not the game for you. This is not a 
        very good RPG but it's a cool concept I wanted 
        to play with. This game's ambition is to have 
        the basic RPG elements such as, branching 
        storylines, quests, and inventory management. 
        So far this game currently has a dice rolling 
        mechanic to "roll" a character. The next step is 
        to create a race mechanic and use that to 
        calculate hit and damage points`,
        images: [rpg],
        techUsed: 'React',
        github: 'https://github.com/edfranco/rpg-remastered',
        deployed: 'https://edfranco.github.io/rpg-remastered/'
    },
];

export const MY_SERVER = 'https://server-eduardofranco.herokuapp.com';
