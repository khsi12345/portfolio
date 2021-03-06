import React from "react";
import LazyLoad from "react-lazyload";
import Layout from "components/Layout";
import img1 from "images/bnb메인.png";
import img2 from "images/매거진.png";
import img3 from "images/어바웃.png";
import img4 from "images/픽페이지.png";
import img5 from "images/픽디테일.png";
import img6 from "images/메인반응2.png";
import img7 from "images/매거진반응.png";
import img8 from "images/픽페이지반응.png";
import img9 from "images/디테일반응3.png";
import img10 from "images/부킹.png";
import img11 from "images/부킹반응.png";
import "styles/werbnb.scss";

const WeRBnb = () => {
  return (
    <Layout>
      <div className="we_r_bnb">
        <p className="skills">
          github: &nbsp;
          <a
            className="github"
            href="https://github.com/khsi12345/stayfolio-frontend"
            rel="noreferrer noopener"
            target="_blank"
            title="github"
          >
            https://github.com/khsi12345/stayfolio-frontend
          </a>
          <br />
          REACT, STYLED-COMPONENT, SASS, RESPONSIVE WEB, AXIOS, REACT-HELMET,
          GIT, AWS EC2, REACT-RESPONSIVE-CAROUSEL
        </p>
        <main className="img_container">
          <LazyLoad>
            <div className="img1">
              <img alt="스테이폴리오 메인 페이지" src={img1}></img>
              <p className="img-description">메인 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img2">
              <img alt="스테이폴리오 매거진 페이지" src={img2}></img>
              <p className="img-description">매거진 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img3">
              <img alt="스테이폴리오 어바웃 페이지" src={img3}></img>
              <p className="img-description">어바웃 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img4">
              <img alt="스테이폴리오 픽 페이지" src={img4}></img>
              <p className="img-description">숙소들을 보여주는 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img5">
              <img alt="스테이폴리오 픽 디테일 페이지" src={img5}></img>
              <p className="img-description">숙소의 상세 페이지 </p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img10">
              <img alt="스테이폴리오 부킹 페이지" src={img10}></img>
              <p className="img-description">숙소 예약 페이지</p>
            </div>
          </LazyLoad>
          {/* <div className="flex_box">
            <LazyLoad>
              <div className="img8">
                <img alt="스테이폴리오 픽 페이지 반응형" src={img8}></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img9">
                <img
                  alt="스테이폴리오 픽 디테일 페이지 반응형"
                  src={img9}
                ></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img11">
                <img alt="스테이폴리오 부킹 페이지 반응형" src={img11}></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img7">
                <img alt="스테이폴리오 매거진 페이지 반응형" src={img7}></img>
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="img6">
                <img alt="스테이폴리오 메인 페이지 반응형" src={img6}></img>
              </div>
            </LazyLoad>
          </div> */}
        </main>
        <LazyLoad>
          <video controls>
            <source
              src="https://stayfolio.s3.ap-northeast-2.amazonaws.com/werbnb-02.mp4"
              type="video/mp4"
            ></source>
          </video>
        </LazyLoad>
      </div>
    </Layout>
  );
};
export default WeRBnb;
