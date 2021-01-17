import React from "react";
import Layout from "../components/layout";
import Discover from '../components/Work/Discover';
import MyStreamL from "../components/Work/MyStreamLeft";
import MyStreamR from "../components/Work/MyStreamRight";
import DataPhotoL from '../assets/images/luli3.jpg';
import DataPhotoR from '../assets/images/luli4.jpg';


const IndexPage = (props) => (
  <Layout>
    <Discover />
    <MyStreamL 
        text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
        photo={DataPhotoL}
    />
    <MyStreamR 
        text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
        photo={DataPhotoR}
    />
  </Layout>
)

export default IndexPage;
