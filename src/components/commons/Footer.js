import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="back-to-top">
                <a href="#"><i className="fas fa-chevron-up"></i></a>
                </div>
            </div>
            <div className="footer-content-about animate-top">
                <h3>SOBRE LOLIROT</h3>
                <br/><br/>
                <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                <br/><br/>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,</p>
            </div>
            <div className="footer-content-divider animate-bottom">
				<div className="social-media">
					<h4>FOLLOW ME</h4>
                    <br/>
					<ul className="social-icons">
						<li>
							<a target='_blank' href="https://twitter.com/lolirotve"><i className="fab fa-twitter"></i></a>
						</li>
						<li>
							<a target='_blank' href="https://www.youtube.com/user/lolirotve"><i className="fab fa-youtube"></i></a>
						</li>
						<li>
							<a target='_blank' href="https://www.twitch.tv/lolirot"><i className="fab fa-twitch"></i></a>
						</li>
						<li>
							<a target='_blank' href="https://www.facebook.com/lolirotve"><i className="fab fa-facebook-square"></i></a>
						</li>
						<li>
							<a target='_blank' href="https://www.instagram.com/lolirotve/"><i className="fab fa-instagram"></i></a>
						</li>
					</ul>
				</div>
            </div>
        </footer>
    );
}

export default Footer;