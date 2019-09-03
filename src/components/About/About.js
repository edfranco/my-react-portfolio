import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <h2 className="div-headers">About Eduardo</h2>
                <p>I was born in Guadalajara, Jalisco, Mexico on February 27, 1997. At the age of five I moved to San
                    Francisco, Ca with my parents to start a new life. One day I was playing video games and I wondered how
                    the characters around environments in
                    the games were responsive and it led me to learning how to program. Since that day I've been teaching my
                    self HTML, CSS, PHP and JavaScript. Other hobbies of mine include reading about history, learning about
                    geography, writing in different
                genres, and doing stand up comedy in my spare time.</p>
            </section>

            <section className="fun-facts">
                <h5>Fun Facts</h5>
                <ul>
                    <li>I used to teach coworkers to dissect hearts</li>
                    <li>Amateur Magician</li>
                    <li>Poet</li>
                    <li>Musician</li>
                    <li>Amateur Chef</li>
                    <li>Devil Stick Juggler</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
