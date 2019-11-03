import React from 'react';

import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <section className="home-items">
                <h2 className="div-headers">About Eduardo</h2>
                <p>
                    Eduardo is a full-stack developer with experience
                    teaching in a museum setting. As a former educator,
                    Eduardo values openness in the workplace to help promote a
                    healthy work culture. He also understands the value of mistakes
                    and how they help people grow professionally and mentally. He tries
                    to find different ways to find solutions and he is quick to
                    share his knowledge with his peers.
                </p>

                <p>Since the age of 17 Eduardo taught himself to code using technologies such as
                    HTML, CSS, Python and JavaScript in both front-end and back-end disciplines.
                    Other hobbies include reading about history, learning about
                    geography, writing in different
                genres, and doing stand up comedy.</p>
            </section>
        </div>
    );
};

export default Home;
