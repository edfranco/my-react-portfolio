import React from 'react';
import image from '../../images/headshot.jpg'
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
                    HTML, CSS, Python and JavaScript in noth front-end and back-end disciplines.
                    Other hobbies include reading about history, learning about
                    geography, writing in different
                genres, and doing stand up comedy.</p>
            </section>


            <aside className="home-items" id="contact">
                <h2 className="div-headers">Contact Information</h2>

                <img src={image} alt="eduardo-franco-cutie-headshot" />

                <h5>Phone: </h5>
                <p>415-606-0887</p>
                <h5>email: </h5>
                <p>ed@eduardofranco.me</p>
            </aside>
        </div>
    );
};

export default Home;
