import React from "react";
import { Link } from "react-router-dom";

const NewsItem =(props)=>{
    let { title, description, imgurl, newsurl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger ">{source}</span>
          </div>
          <img
            src={
              !imgurl
                ? "https://images.hindustantimes.com/img/2023/01/31/1600x900/Breaking-News-Live-Blog-pic_1627344775185_1675123654673_1675123654673.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              to={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
  export default NewsItem
