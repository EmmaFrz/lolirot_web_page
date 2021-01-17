import React from "react";

const Discover = () => {
    return(
        <section className="discover-my-story">
		<div className="container">
			<div className="streamer-info">
				<div className="streamer-description padding-right animate-left">
					<div className="global-headline">
						<h2 className="sub-headline">
							<span className="first-letter">W</span>atch
						</h2>
						<h1 className="headline headline-dark">My Stream</h1>
                        <div id="twitch-embed"></div>
				</div>
			</div>
		</div>
		</div>
		
	</section>
	
    );
};

export default Discover;