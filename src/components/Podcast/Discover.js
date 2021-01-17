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
							<span className="first-letter">H</span>ear
						</h2>
						<h1 className="headline headline-dark">My Podcast</h1>
						<div className="separator">
						<div className="line line-left"></div>
						<div className="asterisk"><i className="fab fa-galactic-senate"></i></div>
						<div className="line line-right"></div>	
					</div>
					<p align="justify">
						Aqui agrega una descipcion toda flashera del mejor podcast del wow en español ♥  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pulvinar elit consectetur bibendum. Cras sit amet lacinia odio. Etiam vestibulum, urna at rhoncus pulvinar, tellus nisl tincidunt felis, non imperdiet elit purus eget sem. Integer gravida, turpis non cursus dictum, dui magna volutpat mi, quis accumsan risus enim vel felis. Nunc in dui ultrices ante elementum vulputate eget in ex. Aliquam erat volutpat. Proin ut elit vehicula, convallis dolor ut, mollis metus. Nulla pulvinar ante at erat euismod venenatis. Phasellus euismod ex a suscipit sagittis.
					</p>
					<br/>
				</div>
			</div>
			<iframe src="https://open.spotify.com/embed-podcast/show/4Vco7OrniErHJlOsXhuFoj" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
		</div>
		</div>
		
	</section>
	
    );
};

export default Discover;