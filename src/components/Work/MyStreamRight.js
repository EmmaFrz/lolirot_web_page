import React from 'react';
import DataPhoto from '../../assets/images/luli3.jpg';


const MyStream = (props) => {
    return(
        <section className="discover-mystream">
            <div className="container">
                <div className="stream-info">
                <div className="stream-description animate-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">
                                <span className="first-letter">C</span>ine
                            </h2>
                                    <h1 className="headline headline-dark">Cinecolor</h1>
                            <div className="separator">
                                <div className="line line-left"></div>
                                <div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
                                <div className="line line-right"></div>
                            </div>	
                        </div>
                        <p>
                            {props.text}
                        </p>                        
                    </div>
                    <div className="image-group paddin-right animate-left">
                        <img src={props.photo} alt="luli_en_un_banquito"/>
                        <img src="images" alt=""/>
                        <img src="images" alt=""/>
                        <img src="images" alt=""/>
                    </div>
                </div>	
            </div>
        </section>
    );
};

export default MyStream;