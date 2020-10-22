import React from "react";
//import { Link } from "gatsby";
import Hero from '../components/HeroIndex';
import Layout from "../components/layout";
import Discover from '../components/Discover';
import Network from '../components/Network';
import MyStream from "../components/MyStream";

const IndexPage = (props) => (
  <Layout>
    <Hero />
    <Discover />
    <Network />
    <MyStream />
  </Layout>
)

export default IndexPage;
