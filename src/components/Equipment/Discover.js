import React from "react";
import ProfilePic from '../../assets/images/luli5.jpg';

const Discover = () => {
    return(
        <section className="discover-my-story">
		<div className="container">
			<div className="streamer-info">
				<div className="streamer-description padding-right animate-left">
					<div className="global-headline">
						<h2 className="sub-headline">
							<span className="first-letter">T</span>his
						</h2>
						<h1 className="headline headline-dark">Is gaming gear</h1>
						<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
						<div className="line line-right"></div>	
					</div>
					<p align="justify">
						Aqui deberias poner un pequeño texto referente a lo que eres capaz de hacer, que es mucho :) ♥ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</p>
					<p>
						Ponte una foto re facherita
					</p>
					<br/>
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