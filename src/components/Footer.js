import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="con">
                        <h6>About</h6>
                        <p class="text-justify"> Future10 X Global Private Limited incorporated with MCA on 09 November 2020.
                        The Future10 X Global Private Limited is listed in the class of company and
                        classified as Non Govt Company. This company is registered at Registrar of Companies(ROC),
                        Maharashtra with an Authorized Share Capital of Rs. 1 LAC and its paid up capital is 1 LAC..</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a href="">C</a></li>
                            <li><a href="">UI Design</a></li>
                            <li><a href="">PHP</a></li>
                            <li><a href="">Java</a></li>
                            <li><a href="">Android</a></li>
                            <li><a href="">Templates</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <Link to="/AboutUs">About Us</Link>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Contribute</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="#"> FUTUREX</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default Footer;
