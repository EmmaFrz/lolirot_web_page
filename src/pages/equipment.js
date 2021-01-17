import React from "react";
import Layout from "../components/layout";
import Discover from '../components/Equipment/Discover';
import MyStreamL from "../components/Equipment/MyStreamLeft";
import MyStreamR from "../components/Equipment/MyStreamRight";
import DataPhotoL from '../assets/images/keyboard.jpg';
import DataPhotoR from '../assets/images/mouse.jpg';

const IndexPage = (props) => (
    <Layout>
        <Discover />
        <MyStreamL 
            first="M"
            title="y"
            subtitle="Keyboard"
            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
            photo={DataPhotoL}
        />
        <MyStreamR 
            first="M"
            title="y"
            subtitle="Mouse"
            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
            photo={DataPhotoR}
        />
    </Layout>
)

export default IndexPage;
