import React from "react";
import { Link } from "react-router-dom";
import Layout from "components/Layout";
import "styles/projects.scss";

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <header>
          <Link to="/portfolio">
            <a rel="noreferrer noopener" title="양성호 닷컴">
              양성호 닷컴
            </a>
          </Link>
        </header>
        <main className="main_contents">
          Project List
          <article>
            <Link to="/portfolio/projects/weplate">
              <a className="pulse" rel="noreferrer noopener" title="WEPLATE">
                WEPLATE
              </a>
            </Link>
          </article>
          <article>
            <Link to="/portfolio/projects/we-r-bnb">
              <a className="pulse" rel="noreferrer noopener" title="WE_R_BNB">
                WE_R_BNB
              </a>
            </Link>
          </article>
          <article>
            <Link to="/portfolio/projects/team-every">
              <a
                className="pulse"
                rel="noreferrer noopener"
                title="TEAM EVERYWHERE"
              >
                TEAM EVERYWHERE
              </a>
            </Link>
          </article>
          <article>
            <Link to="/portfolio/projects/sauce-live">
              <a className="pulse" rel="noreferrer noopener" title="SAUCE LIVE">
                SAUCE LIVE
              </a>
            </Link>
          </article>
        </main>
      </div>
    </Layout>
  );
};
export default Projects;
