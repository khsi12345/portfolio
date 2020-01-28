import React from "react";
import LazyLoad from "react-lazyload";
import Layout from "components/Layout";
import img1 from "images/team_dash.png";
import img2 from "images/team_profile.png";
import img3 from "images/team_paypal.png";
import img4 from "images/wom_admin.png";
import img5 from "images/wom_login.png";
import img6 from "images/wom_discover.png";
import img8 from "images/wom_campaign.png";
import "styles/teamevery.scss";

const TeamEvery = () => {
  return (
    <Layout>
      <div className="team_every">
        <p className="skills">
          REACT, NEXT.JS, SASS, RESPONSIVE WEB, HIGHCHARTS, IAMPORT
        </p>
        <main className="img_container">
          <LazyLoad>
            <div className="img5">
              <img alt="웜 로그인 페이지" src={img5}></img>
              <p className="img-description">로그인 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img8">
              <img alt="웜 캠페인 페이지" src={img8}></img>
              <p className="img-description">캠페인 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img4">
              <img alt="웜 어드민 페이지" src={img4}></img>
              <p className="img-description">어드민 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img6">
              <img alt="웜 디스커버 페이지" src={img6}></img>
              <p className="img-description">디스커버 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img1">
              <img alt="팀 에브리웨어 대시보드 페이지" src={img1}></img>
              <p className="img-description">유저 대시보드 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img2">
              <img alt="팀 에브리웨어 프로필 페이지" src={img2}></img>
              <p className="img-description">유저 프로필 페이지</p>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="img3">
              <img alt="팀 에브리웨어 결제 페이지" src={img3}></img>
              <p className="img-description">상품 결제 화면</p>
            </div>
          </LazyLoad>
        </main>
      </div>
    </Layout>
  );
};
export default TeamEvery;
