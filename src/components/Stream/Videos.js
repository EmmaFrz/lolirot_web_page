import React from 'react';

const Videos = () => {
    return(
        <section className="redes between">
            <div className="container">
                <div className="global-headline">
                    <div className="animate-top">
                        <h2 className="sub-headline">
                            <span className="first-letter">M</span>y
                        </h2>
                    </div>
                    <div className="animate-bottom">
                        <h1 className="headline headline-dark">VODS</h1>
                    </div>	
                    <div className="separator">
                        <div className="line line-left"></div>
                        <div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
                        <div className="line line-right"></div>
                    </div>
                    <div id="vod-embed"></div>
                </div>
            </div>
	    </section>        
    );
};

export default Videos;