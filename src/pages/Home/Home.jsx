import React from "react";
import { Link } from "react-router-dom";
// import Sketch from "../../../public/sketch.js/index.js";
import Layout from "components/Layout";
import "styles/index.scss";

const Home = props => {
  return (
    <Layout>
      <div className="home" id="home">
        <div className="content_wrap">
          <div className="title wrap">
            <header>양성호 닷컴</header>
          </div>
          <div className="subtitle wrap">
            <main>Front End Web Developer</main>
          </div>
          <div className="project wrap">
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <p className="mail wrap">khsi6237@gmail.com</p>
          </div>
          <p className="wrap">
            <a
              href="https://github.com/khsi12345"
              rel="noreferrer noopener"
              target="_blank"
              title="github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="icon"
              href="https://www.youtube.com/channel/UCWIl2A5TALRTP_SoaI6dMiQ/featured?view_as=subscriber"
              rel="noreferrer noopener"
              target="_blank"
              title="youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="blog"
              href="https://khsi12345.github.io/"
              rel="noreferrer noopener"
              target="_blank"
              title="blog"
            >
              Blog
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
