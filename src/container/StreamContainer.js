import React, {Component} from "react";
import Stream from '../components/Stream/Stream';
import Videos from '../components/Stream/Videos';

class StreamContainer extends Component {
    componentDidMount = async () => {
        var embed = new window.Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: "lolirot",
            layout: "video",
            autoplay: false,
            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
            parent: ["embed.example.com", "othersite.example.com"]
        })
/*        var chat = new window.Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: "lolirot",
            layout: "video",
            autoplay: false,
            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
            parent: ["embed.example.com", "othersite.example.com"]
        })*/
        var vod = new window.Twitch.Embed("vod-embed", {
            width: 854,
            height: 480,
            layout: "video",
            autoplay: false,
            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
            parent: ["embed.example.com", "othersite.example.com"],
            video: '797793872'
        })
        embed.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
            var player = embed.getPlayer();
            player.play();
        })
        vod.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
            var player = vod.getPlayer();
            player.play();
        })
    };

    render = () => {
        return(
            <>
                <Stream />
                <Videos />
            </>
        );
    }
};

export default StreamContainer;