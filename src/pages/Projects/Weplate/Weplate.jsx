import React from "react";
import LazyLoad from "react-lazyload";
import Layout from "components/Layout";
import img1 from "images/망플메인.png";
import img2 from "images/메인반응.png";
import img3 from "images/디테일2.png";
import img4 from "images/디테일반응.png";
import img5 from "images/디테일1.png";
import img6 from "images/디테일반응2.png";
import "styles/weplate.scss";

const Weplate = () => {
  return (
    <Layout>
      <div className="weplate">
        <header className="head">
          WEPLATE
          <div className="subtitle">
            <p>맛집을 찾아야 하는 시간을 줄이고</p>
            <p>믿을만한 맛집을 소개해주는 프로젝트</p>
          </div>
        </header>
        <main className="img_container">
          <LazyLoad placeholder="loading..." height={200}>
            <div className="img1">
              <img alt="망고플레이트 메인 페이지" src={img1}></img>
            </div>
          </LazyLoad>
          <LazyLoad placeholder="loading..." height={200}>
            <div className="img3">
              <img alt="망고플레이트 디테일 페이지 상단 화면" src={img3}></img>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img5">
              <img alt="망고플레이트 디테일 페이지 하단 화면" src={img5}></img>
            </div>
          </LazyLoad>
          <div className="flex_box">
            <LazyLoad>
              <div className="img2">
                <img alt="망고플레이트 메인 페이지 반응형" src={img2}></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img4">
                <img
                  alt="망고플레이트 디테일 페이지 반응형 상단 화면"
                  src={img4}
                ></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img6">
                <img
                  alt="망고플레이트 디테일 페이지 반응형 하단 화면"
                  src={img6}
                ></img>
              </div>
            </LazyLoad>
          </div>
        </main>
        <LazyLoad>
          <video controls>
            <source src="https://stayfolio.s3.ap-northeast-2.amazonaws.com/weplate.mov"></source>
          </video>
        </LazyLoad>
        <p className="skills">
          사용 스킬: REACT, SASS, RESPONSIVE WEB, GIT, AWS EC2
        </p>
      </div>
    </Layout>
  );
};
export default Weplate;
