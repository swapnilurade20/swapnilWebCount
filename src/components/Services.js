import Header from './Header';
import Footer from './Footer';

function Services()
{
    return (
        <div>
            <Header />
            <div className="container">
                <div className="servicesCard container-fluid my-2 row align-items-center">
                    <div className="col-7">
                        <h2>Artificial Intelligence</h2>
                        AI which stands for Artificial intelligence is a technology that mimics human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.
                        <br />
                        <br />
                        Our company has been creating AI bots to help user experience.
                    </div>

                    <img src="https://www.extremetech.com/wp-content/uploads/2015/09/sat-ai-head.jpg" className="col-4 servicesCardImg" alt="ai" />
                </div>
                <div className="servicesCard container-fluid my-2 row align-items-center">
                    <div className="col-7">
                        <h2>Vertual Reality</h2>
                        Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment (e.g. video games), education (e.g. medical or military training) and business (e.g. virtual meetings).
                        <br />
                        <br />
                        Futurex has a lot of plans to help VR technology acceable for everyone of us
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Reality_check_ESA384313.jpg/375px-Reality_check_ESA384313.jpg" className="col-4 servicesCardImg" height="10vh" alt="ai" />
                </div>
                <div className="servicesCard container-fluid my-2 row align-items-center">
                    <div className="col-7">
                        <h2>Personal Finance App</h2>
                        Our company has been building a personal finance app to help people with their personal finance</div>

                    <img src="https://www.careerexperts.co.uk/wp-content/uploads/2017/02/Pursue-a-career-in-finance.jpg" className="col-4 servicesCardImg" alt="ai" />
                </div>
                <div className="servicesCard container-fluid my-2 row align-items-center">
                    <div className="col-7">
                        <h2>News Media</h2>
                        Our company has been developing a news websit for serving news to the world audiance</div>

                    <img src="https://devinepartners.com/wp-content/uploads/2016/04/interview-news-reporter-768x497.jpg" className="col-4 servicesCardImg" alt="ai" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Services
