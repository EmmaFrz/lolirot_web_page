import React from 'react';

const IndexHero = () => {
    return(
        <div>
            <section className="hero" id="hero">
                <div className="container">
                    <h2 className="sub-headline">
                        <span className="first-letter">W</span>elcome
                    </h2>
                    <h1 className="headline">LOLIROT</h1>
                    <div className="headline-description">
                        <div className="separator">
                            <div className="line line-left"></div>
                            <div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
                            <div className="line line-right"></div>
                        </div>
                        <div className="single-animation">
                            <h5>Ready to Rage</h5>
                            <a href="https://www.twitch.tv/products/lolirot?ref=below_video_subscribe_button" className="btn cta-btn" target='_blank' rel="noreferrer">Subscribe</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndexHero;