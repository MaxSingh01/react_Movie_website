import React from "react";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../Config/Config";
import "./SingleCard.css";
import { StylesProvider } from "@material-ui/core/styles";
const SingleCard = ({ id, poster, date, title, media_type, vote_average }) => {
  return (
    <StylesProvider injectFirst>
      <div className="media">
        <Badge
          overlap="rectangular"
          badgeContent={vote_average.toFixed(1)}
          style={{ fontSize: "1rem" }}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="movieTitle">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </div>
    </StylesProvider>
  );
};

export default SingleCard;
