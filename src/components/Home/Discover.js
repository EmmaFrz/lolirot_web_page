import React from "react";
import ProfilePic from '../../assets/images/luli.jpg';

const Discover = () => {
    return(
        <section className="discover-my-story">
		<div className="container">
			<div className="streamer-info">
				<div className="streamer-description padding-right animate-left">
					<div className="global-headline">
						<h2 className="sub-headline">
							<span className="first-letter">D</span>iscover
						</h2>
						<h1 className="headline headline-dark">My History</h1>
						<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
						<div className="line line-right"></div>	
					</div>
					<p align="justify">
						I'm Michelina 'Lolirot' Graziano, i'm a <b>FULL TIME STREAMER</b> at Twitch.tv and content creator, i became streamer at 2013 and partner at Twitch on 2015. i'm in love with video games since i have 7 years old, that's why i love stream and play with my comunity they are like my second family ♥, started at twitch because a friend tell me i need to try it, isn't a secret i'm from Venezuela and at the times i start streaming we don't have a cool internet conection so yey! that's me starting with 500 kbs and trying to stream!, yep a lot of people came to my stream and tell me WTHUEK with the quality, or if my stream has a minecraft skin (HAHA..), i keep working hard... that aren't going to stop me so i speak with Gandalf Comunications an  private isp from Venezuela and they accept to sponsor me a internet quality, that let me offer more quality on streaming for my viewers, at 2019 i move to Brasil so new doors are open for me and my full time job ♥, i worked with companys like Blizzard Entertaiment has a Host on streams for LATAM, Gandalf Comunications, NXZT, ROCCAT, Cine Color VE with a movie AD, StreamLoots, Square Enix, and a lot of other companys streaming their indie games.
					</p>
					<a href="#" className="btn body-btn">About Me</a>
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