import React from 'react';

const Resume = () => {
    return (
        <section className="resume" id="resume">
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
            <p>Went to school to learn computer science software and hardware fundamentals</p>
            <h2 className="div-headers">Work History</h2>
            <h5>Exploratorium</h5>
            <div className="work-container">
                <h6>Field Trip Explainer</h6>
                <h6>October 2018- May 2019</h6>
            </div>
            <p>The role includes facilitating orientations for field trip groups, performing demonstrations on
                scientific topics related to the museum and general museum customer service.
            </p>
            <div className="work-container">
                <h6>Guest Services Associate</h6>
                <h6>May 2017- May 2019</h6>
            </div>
            <p>My role includes giving excellent customer service, management of store product, communication among
                coworkers to perform group tasks, and special projects.</p>
            <div className="work-container">
                <h6>Administrative Intern: Explainer Program</h6>
                <h6>April 2016-May 2017</h6>
            </div>
            <p>Helping the supervisors run the explainer program by validating timecards, creating schedules for the
                explainers, answering phone calls, and maintaining spreadsheets that hold important information for the
                supervisors and training personnel
                on special skills such as heart dissections, magic tricks, and other niche scientific topics.</p>
            <div className="work-container">
                <h6>High School Explainer</h6>
                <h6>May 2015-April 2016</h6>
            </div>
            <p>Help guide guests around the museum, and give demonstrations on exhibits and scientific concepts. In
                addition train new hires and additional refresher training.
            </p>
        </section >
    );
};

export default Resume;
