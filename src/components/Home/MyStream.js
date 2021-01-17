import React from 'react';

const MyStream = () => {
    return(
        <section className="discover-mystream">
            <div className="container">
                <div className="stream-info">
                    <div className="image-group paddin-right animate-left">
                        <img src="images" alt=""/>
                        <img src="images" alt=""/>
                        <img src="images" alt=""/>
                        <img src="images" alt=""/>
                    </div>
                    <div className="stream-description animate-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">
                                <span className="first-letter">D</span>iscover
                            </h2>
                                    <h1 className="headline headline-dark">My Stream</h1>
                            <div className="separator">
                                <div className="line line-left"></div>
                                <div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
                                <div className="line line-right"></div>
                            </div>	
                    </div>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                        </p>                        
                        </div>
                </div>	
            </div>
        </section>
    );
};

export default MyStream;