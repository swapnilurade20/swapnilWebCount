import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Aboutus = () => {
    return (
        <div>
            <Header />
            <div className="imgsetter">
                <div className="col">
                    <h1 className="aboutpageheader">Overview</h1>
                    <p>Futurex Limited
                        is a leading global information technology, consulting
                        and business process services company. We harness the power
                        of cognitive computing, hyper-automation, robotics, cloud,
                        analytics and emerging technologies to help our clients adapt
                        to the digital world and make them successful. A company
                        recognized globally for its comprehensive portfolio of services,
                        strong commitment to sustainability and good corporate citizenship,
                        we have over 220,000 dedicated employees serving clients across six
                        continents. Together, we discover ideas and connect the dots to build a
                        better and a bold new future</p>

                </div>
                <div className="col">
                    <h1 className="aboutpageheader">Our Strategy</h1>
                    <p>
                        On November 18, 2020, FUTUREX's CEO and MD,
                        Swapnil urade and members of the Executive
                        Leadership team presented a strategic plan to
                        investors and analysts. Watch the presentations
                        to learn how Wipro's bold new vision will
                        strengthen our global leadership, drive innovative
                        solutions for our customers, and generate
                        sustainable value for shareholders.
                    </p>
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Aboutus;
