import React from "react";
import Hero from '../components/Home/HeroIndex';
import Layout from "../components/layout";
import Discover from '../components/Home/Discover';
import Network from '../components/Home/Network';
import MyStream from "../components/Home/MyStream";

const IndexPage = (props) => (
  <Layout>
    <Hero />
    <Discover />
    <Network />
    <MyStream />
  </Layout>
)

export default IndexPage;
