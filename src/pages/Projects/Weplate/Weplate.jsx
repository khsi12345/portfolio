import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
// import Sketch from "../../../../public/sketch.js/index.js";
import Layout from "components/Layout";
import img1 from "images/망플메인.png";
import img2 from "images/메인반응.png";
import img3 from "images/디테일2.png";
import img4 from "images/디테일반응.png";
import img5 from "images/디테일1.png";
import img6 from "images/디테일반응2.png";
import "styles/weplate.scss";

const Weplate = () => {
  // useEffect(() => {
  //   // Sketch.create({});
  // }, []);
  return (
    <Layout>
      <div className="weplate">
        <p className="skills">
          github: &nbsp;
          <a
            className="github"
            href="https://github.com/khsi12345/weplate-frontend"
            rel="noreferrer noopener"
            target="_blank"
            title="github"
          >
            https://github.com/khsi12345/weplate-frontend
          </a>
          <br />
          REACT, SASS, RESPONSIVE WEB, GIT, AWS EC2
        </p>
        <main className="img_container">
          <LazyLoad>
            <div className="img1">
              <img alt="망고플레이트 메인 페이지" src={img1}></img>
              <p className="img-description">메인 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img3">
              <img alt="망고플레이트 디테일 페이지 상단 화면" src={img3}></img>
              <p className="img-description">상세 페이지 화면 상단 부분</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img5">
              <img alt="망고플레이트 디테일 페이지 하단 화면" src={img5}></img>
              <p className="img-description">상세 페이지 화면 하단 부분</p>
            </div>
          </LazyLoad>
          {/* <div className="flex_box">
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
          </div> */}
        </main>
        <LazyLoad>
          <video controls>
            <source src="https://stayfolio.s3.ap-northeast-2.amazonaws.com/weplate.mov"></source>
          </video>
        </LazyLoad>
      </div>
    </Layout>
  );
};
export default Weplate;
