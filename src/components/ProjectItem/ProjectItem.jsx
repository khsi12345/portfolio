import React from "react";
import "styles/project-item.scss";

const ProjectItem = ({
  imgUrl,
  title,
  itemName,
  description1,
  description2
}) => {
  return (
    <div className="project-item">
      <div className="img-box">
        <img src={imgUrl}></img>
      </div>
      <a className="pulse" rel="noreferrer noopener" title={title}>
        {itemName}
      </a>
      <div className="subtitle">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
    </div>
  );
};
export default ProjectItem;
