import React from "react";
import { Link } from "react-router-dom";
import Layout from "components/Layout";
import "styles/index.scss";

const Home = props => {
  return (
    <Layout>
      <div className="home">
        <div className="content_wrap">
          <div className="title wrap">
            <header>양성호 닷컴</header>
          </div>
          <div className="subtitle wrap">
            <main>PRO Front End Web Developer</main>
          </div>
          <div className="project wrap">
            <Link to="/portfolio/projects">Projects</Link>
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
              href="https://khsi12345.github.io/"
              rel="noreferrer noopener"
              target="_blank"
              title="blog"
            >
              <i className="fas fa-blog"></i>
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
