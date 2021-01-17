import React from "react";
import ProfilePic from '../../assets/images/under.png';

const Discover = () => {
    return(
        <section className="discover-my-story">
		<div className="container">
			<div className="streamer-info">
				<div className="streamer-description padding-right animate-left">
					<div className="global-headline">
						<h2 className="sub-headline">
							<span className="first-letter">C</span>ontact
						</h2>
						<h1 className="headline headline-dark">With me</h1>
						<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
						<div className="line line-right"></div>	
					</div>
					<p align="justify">
						Estamos en construccion, esto vale plata y ando viendo que coño es barato
					</p>
				</div>
				<div className="streamer-info-img animate-right">
					<img src={ProfilePic} />
				</div>
			</div>
		</div>
		</div>
		
	</section>
	
    );
};

export default Discover;