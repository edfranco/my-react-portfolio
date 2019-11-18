import React from 'react';

import './Resume.css';
import resume from '../../files/Eduardo-Franco-Resume.pdf';

const Resume = () => {
    return (
        <section className="resume container" id="resume">
            <div className="resume-top">
                <h1 className="div-headers">Resume</h1>
                <a href={resume} download>Download</a>
            </div>

            <h2 className="div-headers">Work History</h2>
            <h5>Techqueria</h5>
            <div className="work-container">
                <h6>Open-Source Contributor</h6>
                <h6>October 2019-</h6>
            </div>
            <p>Techqueria is a 501c3 nonprofit serving the largest community for Latinx in Tech.
                <br />
                <br />
                - Contributed to their open source website by adding events and new features.
            </p>
            <h5>Exploratorium</h5>
            <div className="work-container">
                <h6>Field Trip Explainer</h6>
                <h6>October 2018- May 2019</h6>
            </div>
            <ul>
                <li>Facilitated orientations for an average of 120 children a day.</li>
                <li>Routinely led scientific demonstrations for crowds of about 100 people.</li>
                <li>Trained peers on niche scientific topics in an engaging and informational manner.</li>
            </ul>


            <div className="work-container">
                <h6>Guest Services Associate</h6>
                <h6>May 2017- May 2019</h6>
            </div>
            <ul>
                <li>Provided customer service, sold products including museum memberships in a museum with a daily average customer flow of 2500+ visitors.</li>
                <li>Earned 2nd highest total dollar amount of donations received in the 2017-18 fiscal year</li>
                <li>Earned highest dollar amount of donation dollars to hours ratio</li>
                <li>Earned highest total sales to hours worked ratio</li>
                <li>Routinely earned the highest amount of donations on the Exploratorium’s Community Day (free day).</li>
            </ul>

            <h2 className="div-headers">Education</h2>
            <div className="ga">
                <h5>General Assembly</h5>
                <h5>Software Engineering</h5>
            </div>
            <p>Studied software engineering topics based both on front-end and back-end development. We got an education
                on development languages such as HTML, CSS, JacaScript, Python. Studied frameworks such as Bootstrap,
                JQuery, MondoDB, and React. We
                also learned how to use tools like APIs, Git, etc. We implemented this training on labs, homework and
                projects, some of which can be seen on this website</p>

            <div className="ccsf">
                <h5>City College of San Francisco</h5>
                <h5>Computer Science </h5>
            </div>
            <p>Completed 30 credits worth of classes based on general education while working towards a computer science AA</p>
        </section >
    );
};

export default Resume;
