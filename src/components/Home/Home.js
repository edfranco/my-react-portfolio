import React from 'react';
import image from '../../images/headshot.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <section className="home-items">
                <h2 className="div-headers">Cover Letter</h2>
                <p>
                    I am interested in being a developer for your company.
                    <br /><br />
                    I have 4 years of
                    self-taught skills compounded with formal education from General Assembly's Software Development
                    program. On top of that I have experience
                    building websites for for self-found clientele. I have taught myself HTML, CSS, and JavaScript and
                    have learned how to use their frameworks such as Node, Jquery, React, whilst also creating RESTful
                    API.
                    <br /><br />
                    I have been working as an educator and in customer service for 4 years now.
                    I have worked with people of different age groups in different capacities, wether it be families
                    whilst a high school explainer, foreign tourists in the stores, school children on field trips,
                    businesspeople during rentals events,
                    and visitors trying to buy tickets so I bring a perspective not many other people have. I feel a
                    strength of mine lies in being flexible in my manner of presenting museum exhibits and
                    demonstrations.I always try to give new, relevant,
                    and unique information to teach new skills to people in fun and unusual ways.
                    <br /><br />
                    I want to be a developer for your team so I can help with the mission while finding a
                    great professional outlet for my creative work.
                </p>
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
