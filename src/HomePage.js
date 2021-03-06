import react from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';



export default function HomePage() {
    function home() {

    }


    return (
        <>
            <Header />
            <div className="img_">
                <div>
                    <img className="img1" src="https://www.irislink.com/Partners/test/Menu2018/img/Image-company01.jpg" />
                </div>
                <div>
                    <img className="img1" src="https://images.livemint.com/img/2021/09/27/600x338/AFP_9DD4KZ_1629870213363_1632742003316.jpg" />
                </div>
                <div>
                    <img className="img1" src="https://www.businesssetup.com/sites/default/files/blog_images/10-reasons-to-set-up-a-holding-company-in-singapore.jpg" />
                </div>
            </div>
            <div className="info">
                <div className="centerDiv">
                    <div >
                        <h1 className="intro_title">ABOUT US</h1>
                        <div className="set_width_info">
                            <h3 className="intro_sub_title">WE PROVIDE ROBUST & SECURE IT SOLUTIONS</h3>

                        </div >
                        <div className="content">
                            <h4 >
                                Future global is IT and software , media company
                            </h4>
                        </div>
                        <div className="aline_icon">

                            <div className="content">
                                <h4 >
                                    We make own products and distribution it platform like Google Play , windows app and web application
                                </h4>
                            </div>
                        </div>
                        <div className="aline_icon">

                            <div className="content">
                                <h4 >
                                    We like digital revolution in India by making an app and distribute to all over the India and make India self Reliance in digital technology
                                </h4>
                            </div>
                        </div>
                        <div className="aline_icon">
                            <div className="content">
                                <h4 >
                                    We want to make world largest creator platform where greater can share their views and thought to alert the world in their local language like French Germany in European language and American languages and also asian languages.
                                </h4>
                            </div>

                        </div>
                        <div className="aline_icon">
                            <div className="content">
                                <h4 >
                                    Creator and investor can contact us for more info in our product so that they can know about us more and they can invest their time and money in or platform

                                </h4>
                            </div>

                        </div>

                    </div>
                    <div className="right">
                        <div className="set_width_info">
                            <h4 className="intro_sub_title1">OUR VALUES</h4>

                        </div >
                        <div className="aline_icon">
                            <div className="content">
                                <h4 >
                                    Future10 X Global Private Limited's last Annual General Meeting(AGM)
                                    was held on NA, and date of latest balance sheet available from Ministry of
                                    Corporate Affairs(MCA) is NA.
                                </h4>
                            </div>
                        </div>
                        <div className="aline_icon">
                            <div className="content">
                                <h4 >
                                   <p> INTEGRITY. Know and do what is right. Learn more.</p>
                                    <p>RESPECT. Treating others the way you want to be treated. Learn more.</p>
                                    <p>RESPONSIBILITY. Embrace opportunities to contribute. Learn more.</p>
                                    <p>SPORTSMANSHIP. Bring your best to all competition. Learn more.</p>
                                    <p>SERVANT LEADERSHIP. Serve the common good. Learn more.</p>
                                </h4>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />


        </>

    );
}