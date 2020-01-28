import React from "react";
import { Link } from "react-router-dom";
import Layout from "components/Layout";
import ProjectItem from "components/ProjectItem";
import mango from "images/망플메인.png";
import bnb from "images/bnb2.png";
import team from "images/discover2.png";
import live from "images/live.png";
import "styles/projects.scss";

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <header>
          <Link to="/">
            <a rel="noreferrer noopener" title="양성호 닷컴">
              양성호 닷컴
            </a>
          </Link>
        </header>
        <main className="main_contents">
          <p className="project-list">Project List</p>
          <div>
            <article>
              <Link to="/projects/weplate">
                <ProjectItem
                  imgUrl={mango}
                  title="weplate"
                  itemName="WEPLATE"
                  description1="맛집을 찾아야 하는 시간을 줄이고"
                  description2="믿을만한 맛집을 소개해주는 프로젝트"
                />
              </Link>
            </article>
            <article>
              <Link to="/projects/we-r-bnb">
                <ProjectItem
                  imgUrl={bnb}
                  title="we r bnb"
                  itemName="WE R BNB"
                  description1="여행지에서 머무를"
                  description2="좋은 숙소를 소개해주는 프로젝트"
                />
              </Link>
            </article>
            <article>
              <Link to="/projects/team-every">
                <ProjectItem
                  imgUrl={team}
                  title="team everywhere"
                  itemName="TEAM EVERYWHERE"
                  description1="팀 에브리웨어 인턴쉽"
                  description2="퍼블리싱 및 외주 프로젝트"
                />
              </Link>
            </article>
            <article>
              <Link to="/projects/sauce-live">
                <ProjectItem
                  imgUrl={live}
                  title="sauce live"
                  itemName="SAUCE LIVE"
                  description1="파트너 백 오피스 프로젝트"
                />
              </Link>
            </article>
          </div>
        </main>
      </div>
    </Layout>
  );
};
export default Projects;
