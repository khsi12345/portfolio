import React from "react";
import LazyLoad from "react-lazyload";
import Layout from "components/Layout";
import "styles/sauce-live.scss";

const SauceLive = () => {
  return (
    <Layout>
      <div className="sauce-live">
        <header className="head">
          SAUCE LIVE
          <div className="subtitle">
            <p>파트너 백 오피스 프로젝트</p>
          </div>
        </header>
        <p className="skills">
          REACT, TYPESCRIPT, SASS, AXIOS, REACT-HELMET, GIT, JENKINS, ANT-DESIGN
        </p>
        <LazyLoad>
          <video controls>
            <source src="https://stayfolio.s3.ap-northeast-2.amazonaws.com/sauce-live+recoding.mov"></source>
          </video>
        </LazyLoad>
      </div>
    </Layout>
  );
};
export default SauceLive;
