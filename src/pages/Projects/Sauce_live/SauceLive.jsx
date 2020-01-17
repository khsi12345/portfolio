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
            <p>파트너 백 오피스</p>
            <p>프로젝트 진행</p>
          </div>
        </header>
        <LazyLoad>
          <video controls>
            <source src="https://stayfolio.s3.ap-northeast-2.amazonaws.com/sauce-live+recoding.mov"></source>
          </video>
        </LazyLoad>
        <p className="skills">
          사용 스킬: REACT, TYPESCRIPT, SASS, AXIOS, REACT-HELMET, GIT, JENKINS,
          ANT-DESIGN
        </p>
      </div>
    </Layout>
  );
};
export default SauceLive;
